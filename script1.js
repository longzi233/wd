document.addEventListener('DOMContentLoaded', () => {
    const clickableElements = document.querySelectorAll('.clickable');
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const closeButton = document.querySelector('.close-btn');

    clickableElements.forEach(element => {
        element.addEventListener('click', () => {
            const imagePath = element.getAttribute('data-image'); 
            modalImage.src = imagePath; 
            modal.classList.add('active'); 
        });
    });

    closeButton.addEventListener('click', () => {
        modal.classList.remove('active'); 
    });

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.classList.remove('active'); 
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const imageElement = document.getElementById('toggle-image');
    const textBoxElement = document.getElementById('text-box');

    if (!imageElement || !textBoxElement) {
        console.error('图片或文本框元素未找到，请检查HTML中的id是否正确。');
        return;
    }

    let isOriginalContent = true;

    imageElement.addEventListener('click', () => {
        if (isOriginalContent) {
            // 更新图片
            imageElement.src = 'tupian/c10125e075cd20de596deb3d3eacbe14.png';
            imageElement.classList.add('image-flip-in');
            setTimeout(() => imageElement.classList.remove('image-flip-in'), 1500);

            // 更新文本
            textBoxElement.innerHTML = `
                <p>击败拉达冈后，自其倒下躯体渗出的黑色浓雾中现身的超常存在。为隶属无上意志的兽物，过去坠落于交界地的流星，化成了如今的艾尔登法环。</p>
                <p>在剧情中的定位是艾尔登法环的具象化，法环的守护者，无上意志的下属。</p>
            `;
            textBoxElement.classList.add('text-flip-in');
            setTimeout(() => textBoxElement.classList.remove('text-flip-in'), 1500);
        } else {
            // 恢复原始内容
            imageElement.src = 'tupian/1931249439fcda425e4ea6a74ff3181f.png';
            imageElement.classList.add('image-flip-in');
            setTimeout(() => imageElement.classList.remove('image-flip-in'), 1500);

            textBoxElement.innerHTML = `
   <p>拉达冈。是黄金律法体系下继初王葛孚雷之后的第二任艾尔登之王。在永恒女王玛莉卡敲碎法环后他的身体也随之崩毁，最终之战中由黑色的雾气凝结出残缺部分的肢体，蕴藏其体内的璀璨金光，正是黄金律法体系下的艾尔登法环。</p>
   <p>游戏内初次登场于第一次利耶尼亚战争，拉达冈身为黄金树势力的一员带领军队赢得对卡利亚和魔法学院的战争，成为“红发英雄”；第二次利耶尼亚战争中与满月女王蕾娜菈在战场上邂逅，双方势力无人胜出，最终以联姻的方式结束战争。</p>
   <p>成为卡利亚女王的王夫后，蕾娜菈共诞下三名子嗣：长子拉塔恩、次子拉卡德、女儿菈妮。在半身玛莉卡放逐葛孚雷及其追随者之际，拉达冈迅速回到王城成为其名义上的王夫和第二任艾尔登之王，并在统治期间进一步完善黄金律法，开创基本主义。与玛莉卡育有具备单一神祇血脉的孪生子：同样一体双面的米凯拉/托莉娜以及被外神污染（猩红腐败）的玛莲妮亚。</p>
   <p>黑刀之夜后玛莉卡砸碎法环，拉达冈也随之“销声匿迹”，与玛莉卡一起被封印在黄金树内受罚。</p>
            `;
            textBoxElement.classList.add('text-flip-in');
            setTimeout(() => textBoxElement.classList.remove('text-flip-in'), 1500);
        }

        isOriginalContent = !isOriginalContent;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // 图片路径数组
    const images = [
        "tupian/164897b3651eb82dc7091110f92d04de.png",
        "tupian/6b8b8c95e4343d1e5719ba617c25d470.png",
        "tupian/3d11664491618278c0175bd7acb51f02.png"
    ];
    
    // 获取图片元素
    const imageElement = document.getElementById("image");
    if (!imageElement) {
        console.error("图片元素未找到！");
        return;
    }
    
    // 当前图片索引
    let currentImageIndex = 0;

    // 点击事件监听器
    imageElement.addEventListener("click", function() {
        // 切换到下一张图片
        currentImageIndex = (currentImageIndex + 1) % images.length;
        imageElement.src = `${images[currentImageIndex]}?t=${new Date().getTime()}`;
    });
});




