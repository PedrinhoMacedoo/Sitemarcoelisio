const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const filesToOptimize = [
    { src: 'Foto-3.webp', dest: 'public/palestras.webp' },
    { src: '2.jpg.webp', dest: 'public/profile-opt.webp' },
    { src: 'public/Foto-34.webp', dest: 'public/foto-34-opt.webp' },
    { src: 'public/Foto-54.webp', dest: 'public/foto-54-opt.webp' },
    { src: 'public/hero-bg.webp', dest: 'public/hero-bg-opt.webp' },
    { src: 'public/assoreval-bg.webp', dest: 'public/assoreval-bg-opt.webp' },
    { src: 'public/profile.webp', dest: 'public/profile-opt.webp' }
];

async function run() {
    for (const file of filesToOptimize) {
        const srcPath = path.resolve(process.cwd(), file.src);
        const destPath = path.resolve(process.cwd(), file.dest);

        if (fs.existsSync(srcPath)) {
            console.log(`Optimizing ${file.src}...`);
            try {
                await sharp(srcPath)
                    .resize(1920, null, { withoutEnlargement: true })
                    .webp({ quality: 80 })
                    .toFile(destPath);

                console.log(`   -> Saved to ${file.dest}`);
            } catch (err) {
                console.error(`Error optimizing ${file.src}:`, err);
            }
        } else {
            console.log(`File not found: ${file.src}, skipping.`);
        }
    }
}

run();
