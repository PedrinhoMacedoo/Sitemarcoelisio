const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const filesToOptimize = [
    { src: 'Foto-33.webp', dest: 'public/foto-33.webp' },
    { src: 'DSC02581.JPG.webp', dest: 'public/agrovia.webp' },
    { src: 'DSC02866 1.webp', dest: 'public/horta-social.webp' },
    { src: 'Foto-3.webp', dest: 'public/palestras.webp' },
    { src: '2.jpg.webp', dest: 'public/profile.webp' },
    { src: 'IMG_4739.webp', dest: 'public/assoreval-bg.webp' },
    { src: 'public/Foto-34.webp', dest: 'public/foto-34.webp' },
    { src: 'public/Foto-54.webp', dest: 'public/foto-54.webp' },
    { src: 'public/hero-bg.webp', dest: 'public/hero-bg-opt.webp', replaceOrigin: 'public/hero-bg.webp' },
    { src: 'public/assoreval-bg.webp', dest: 'public/assoreval-bg-opt.webp', replaceOrigin: 'public/assoreval-bg.webp' },
    { src: 'public/profile.webp', dest: 'public/profile-opt.webp', replaceOrigin: 'public/profile.webp' }
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

                if (file.replaceOrigin) {
                    fs.unlinkSync(srcPath);
                    fs.renameSync(destPath, path.resolve(process.cwd(), file.replaceOrigin));
                    console.log(`   -> Replaced original ${file.replaceOrigin}`);
                } else if (srcPath !== destPath && file.src.startsWith('public/') === false) {
                    fs.unlinkSync(srcPath);
                    console.log(`   -> Deleted original ${file.src}`);
                } else if (srcPath !== destPath && file.src.startsWith('public/')) {
                    fs.unlinkSync(srcPath);
                    console.log(`   -> Deleted original ${file.src}`);
                }
            } catch (err) {
                console.error(`Error optimizing ${file.src}:`, err);
            }
        } else {
            console.log(`File not found: ${file.src}, skipping.`);
        }
    }
}

run();
