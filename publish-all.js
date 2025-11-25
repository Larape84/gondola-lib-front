const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// ==========================================
// CONFIGURACIÓN
// ==========================================
const LIBS = [
  { name: 'shared-ui-components-v16', dir: 'libs/ui/v16' },
  { name: 'shared-ui-components-v17', dir: 'libs/ui/v17' },
  { name: 'shared-ui-components-v18', dir: 'libs/ui/v18' },
  { name: 'shared-ui-components-v19', dir: 'libs/ui/v19' },
  { name: 'shared-ui-components-v20', dir: 'libs/ui/v20' },
];

const currentVersion = '1.0.6';

// CONTROL DEL TIPO DE INCREMENTO
// ------------------------------------------
// Opciones: "patch", "minor", "major"
const VERSION_BUMP_TYPE = 'patch';

// ==========================================
console.log(`
=========================================
  AUTO VERSION BUMP + PUBLISH ALL
=========================================
`);

function bumpVersion(version, type) {
  let [major, minor, patch] = version.split('.').map(Number);

  switch (type) {
    case 'major':
      major++;
      minor = 0;
      patch = 0;
      break;
    case 'minor':
      minor++;
      patch = 0;
      break;
    case 'patch':
    default:
      patch++;
  }

  return `${major}.${minor}.${patch}`;
}

function updateLibVersion(lib) {
  const pkgPath = path.join(lib.dir, 'package.json');
  const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));

  const newVersion = bumpVersion(currentVersion, VERSION_BUMP_TYPE);

  pkg.version = newVersion;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));

  console.log(`✔ ${pkg.name} → ${currentVersion} → ${newVersion}`);

  return newVersion;
}

function buildLib(lib) {
  console.log(`\n🔨 Construyendo ${lib.name}...`);
  execSync(`npx nx run ${lib.name}:build:production`, { stdio: 'inherit' });
}

function publishLib(lib) {
  const distPath = path.join(lib.dir, 'dist');
  console.log(`\n🚀 Publicando: ${distPath}`);

  execSync(`npm publish "${distPath}" --access public --tag latest`, {
    stdio: 'inherit',
  });
}

function main() {
  console.log('🧹 Borrando cache Nx…');

  const cachePath = path.join(process.cwd(), '.nx', 'cache');

  if (fs.existsSync(cachePath)) {
    fs.rmSync(cachePath, { recursive: true, force: true });
    console.log('✔ Cache Nx borrado');
  } else {
    console.log('ℹ No había cache para borrar');
  }

  LIBS.forEach((lib) => {
    console.log(`\n📦 Procesando librería: ${lib.name}`);

    updateLibVersion(lib);
    buildLib(lib);
    publishLib(lib);
  });

  console.log(`\n🎉 Todas las librerías publicadas correctamente.`);
}

main();
