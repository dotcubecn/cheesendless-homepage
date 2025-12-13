// 优化预加载体验
async function initPage() {
    // 立即显示页面内容，但保持透明
    document.body.style.opacity = '1';
    
    // 预加载关键资源
    const preloadImages = [
        'assets/cheesendless-logo-zh.png',
        'assets/cheesendless-logo-en.png',
        'assets/geometry-survivor-zh.png',
        'assets/geometry-survivor-en.png',
        'assets/crops-vs-farmers-zh.png',
        'assets/crops-vs-farmers-en.png'
    ];
    
    // 并行预加载图片
    await Promise.all(preloadImages.map(src => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = resolve;
        });
    }));
    
    // 等待页面完全加载或超时
    await new Promise(resolve => {
        if (document.readyState === 'complete') {
            resolve();
        } else {
            window.addEventListener('load', resolve);
            setTimeout(resolve, 1000);
        }
    });
    
    // 隐藏预加载动画
    document.querySelector('.preloader').classList.add('hidden');
}

// 启动页面初始化
initPage();

// 多语言支持
const translations = {
    zh: {
        "projects": "项目",
        "games": "游戏",
        "videos": "视频",
        "about": "关于",
        "featured-projects": "精选项目",
        "project1-title": "",
        "project1-desc": "",
        "project2-title": "",
        "project2-desc": "",
        "project3-title": "",
        "project3-desc": "",
        "game-development": "游戏开发",
        "game1-title": "几何幸存者",
        "game1-desc": "在几何世界中生存的创意游戏，使用Scratch开发。",
        "game2-title": "庄稼大战农民",
        "game2-desc": "一款益智策略类塔防御战游戏，使用Scratch开发。",
        "video-works": "视频作品",
        "video1-title": "后朋克/Blue Archive",
        "video1-desc": "游戏是假的，她们是假的，但何妨呢？爱是真的.",
        "video2-title": "强风大背头/強風オールバック，但是scratch？！",
        "video2-desc": "耗时4天！scratch版强风大背头如何？",
        "video3-title": "独立游戏《几何幸存者》宣传片！",
        "video3-desc": "歪比巴卜",
        "about-me": "关于我",
        "about-text1": "嘿！我是酪无止境，",
        "about-text2": "一位年轻的独立游戏开发者，希望能获得一些关注者！",
        "about-text3": "我希望能得到对我项目的一些支持和反馈，",
        "about-text4": "所以非常欢迎你游玩我的项目！:D",
        "footer-text": "© 2025 酪无止境 | 保留所有权利",
        "view-details": "查看详情",
        "watch-video": "观看视频",
        "themeText": "暗色模式",
        "light-mode": "亮色模式",
        "dark-mode": "暗色模式",
        "close": "关闭"
    },
    en: {
        "projects": "Projects",
        "games": "Games",
        "videos": "Videos",
        "about": "About",
        "featured-projects": "Featured Projects",
        "project1-title": "",
        "project1-desc": "",
        "project2-title": "",
        "project2-desc": "",
        "project3-title": "",
        "project3-desc": "",
        "game-development": "Game Development",
        "game1-title": "Geometry Survivor",
        "game1-desc": "A creative survival game in a geometric world, developed with Scratch.",
        "game2-title": "Crops vs Farmers",
        "game2-desc": "A puzzle strategy tower defense game, developed with Scratch.",
        "video-works": "Video Works",
        "video1-title": "Video 1",
        "video1-desc": "Description 1",
        "video2-title": "Video 2",
        "video2-desc": "Description 2",
        "video3-title": "Video 3",
        "video3-desc": "Description 3",
        "about-me": "About Me",
        "about-text1": "Hey! I'm CHEESENDLESS,",
        "about-text2": "a young indie game developer hoping to gain some followers!",
        "about-text3": "I'd love to get some support and feedback on my projects,",
        "about-text4": "so you're very welcome to play my projects! :D",
        "footer-text": "© 2025 CHEESENDLESS | All rights reserved",
        "view-details": "View Details",
        "watch-video": "Watch Video",
        "themeText": "Dark Mode",
        "light-mode": "Light Mode",
        "dark-mode": "Dark Mode",
        "close": "Close"
    }
};

// 游戏详情数据
const gameDetails = {
    "geometry-survivor": {
        title: {
            zh: "几何幸存者",
            en: "Geometry Survivor"
        },
        content: {
            zh: `
                <img src="assets/geometry-survivor-zh.png" alt="几何幸存者" style="width:100%;border-radius:8px;margin-bottom:20px;">
                <h3>游戏简介</h3>
                <p>在这个充满未知与危险的几何世界中，你是一名叫Geo(杰奥)的三角形，面对无尽的危机和挑战。这是一个充满多边形、线条和色彩的奇幻空间，其中隐藏着无数秘密和危机...</p>
                <h3>游戏特点</h3>
                <ul>
                    <li>独特的几何艺术风格</li>
                    <li>随机生成的关卡和敌人</li>
                    <li>简单的操作，深度的玩法</li>
                    <li>不断升级的能力系统</li>
                </ul>
                <h3>开发技术</h3>
                <p>Scratch，Adobe Illustrator(绘图/设计)</p>
                <div style="margin-top: 20px;">
                    <a href="https://ccw.site/s/rpmje" class="card-button" target="_blank" style="display: inline-block;">立即体验</a>
                </div>
            `,
            en: `
                <img src="assets/geometry-survivor-en.png" alt="Geometry Survivor" style="width:100%;border-radius:8px;margin-bottom:20px;">
                <h3>Game Description</h3>
                <p>In this world full of unknown and dangerous geometries, you play as a triangle named Geo, facing endless crises and challenges. This fantasy space filled with polygons, lines and colors hides countless secrets and dangers...</p>
                <h3>Features</h3>
                <ul>
                    <li>Unique geometric art style</li>
                    <li>Randomly generated levels and enemies</li>
                    <li>Simple controls with deep gameplay</li>
                    <li>Progressive ability system</li>
                </ul>
                <h3>Technologies</h3>
                <p>Scratch，Adobe Illustrator(Drawing/Design)</p>
                <div style="margin-top: 20px;">
                    <a href="https://www.cocrea.world/@CHEESENDLESS/Geometry-Survivor" class="card-button" target="_blank" style="display: inline-block;">Play Now</a>
                </div>
            `
        }
    },
    "crops-vs-farmers": {
        title: {
            zh: "庄稼大战农民",
            en: "Crops vs. Farmers"
        },
        content: {
            zh: `
                <img src="assets/crops-vs-farmers-zh.png" alt="庄稼大战农民" style="width:100%;border-radius:8px;margin-bottom:20px;">
                <h3>游戏简介</h3>
                <p>玩家通过武装多种庄稼切换不同的功能，快速有效地把农民阻挡在入侵的道路上。核心玩法包含阳光资源收集、防御阵型布局及庄稼组合策略。</p>
                <h3>游戏特点</h3>
                <ul>
                    <li>卡通化的艺术风格</li>
                    <li>融合经典《植物大战僵尸》游戏与农场要素</li>
                    <li>简单的操作，深度的玩法</li>
                    <li>不断更新的新庄稼/农民</li>
                </ul>
                <h3>开发技术</h3>
                <p>Scratch，Adobe Illustrator(绘图/设计)</p>
                <div style="margin-top: 20px;">
                    <a href="https://ccw.site/s/b7AKL" class="card-button" target="_blank" style="display: inline-block;">立即体验</a>
                </div>
            `,
            en: `
                <img src="assets/crops-vs-farmers-en.png" alt="Geometry Survivor" style="width:100%;border-radius:8px;margin-bottom:20px;">
                <h3>Game Description</h3>
                <p>Players arm various crops to switch between different functions, quickly and effectively blocking the farmers' invading path. The core gameplay includes sunlight resource collection, defensive formation layout, and crop combination strategies.</p>
                <h3>Features</h3>
                <ul>
                    <li>Cartoonish art style</li>
                    <li>Blends the classic Plants vs. Zombies gameplay with farming elements</li>
                    <li>Simple controls with deep gameplay</li>
                    <li>Continuously updated new crops/farmers</li>
                </ul>
                <h3>Technologies</h3>
                <p>Scratch，Adobe Illustrator(Drawing/Design)</p>
                <div style="margin-top: 20px;">
                    <a href="https://www.cocrea.world/@CHEESENDLESS/Crops-vs-Farmers" class="card-button" target="_blank" style="display: inline-block;">Play Now</a>
                </div>
            `
        }
    },
};

// 游戏封面图片路径
const gameImages = {
    "logo": {
        zh: "assets/cheesendless-logo-zh.png",
        en: "assets/cheesendless-logo-en.png"
    },
    "geometry-survivor": {
        zh: "assets/geometry-survivor-zh.png",
        en: "assets/geometry-survivor-en.png"
    },
    "crops-vs-farmers": {
        zh: "assets/crops-vs-farmers-zh.png",
        en: "assets/crops-vs-farmers-en.png"
    }
};

// 主题管理类
class ThemeManager {
    constructor() {
        this.themeSwitcher = document.getElementById('themeSwitcher');
        this.themeIcon = document.querySelector('.theme-icon');
        this.themeText = document.getElementById('themeText');
        this.isDark = false;
        
        // 从本地存储加载主题偏好
        this.loadThemePreference();
        
        // 绑定事件
        this.themeSwitcher.addEventListener('click', () => this.toggleTheme());
    }
    
    loadThemePreference() {
        const savedTheme = localStorage.getItem('theme');
        // 默认设为暗色模式
        if (savedTheme === 'light') {
            this.setLightTheme();
        } else {
            this.setDarkTheme(); // 默认暗色模式
        }
    }
    
    toggleTheme() {
        if (this.isDark) {
            this.setLightTheme();
            localStorage.setItem('theme', 'light');
        } else {
            this.setDarkTheme();
            localStorage.setItem('theme', 'dark');
        }
    }
    
    setLightTheme() {
        document.body.classList.remove('dark-theme');
        this.isDark = false;
        this.updateThemeUI();
    }
    
    setDarkTheme() {
        document.body.classList.add('dark-theme');
        this.isDark = true;
        this.updateThemeUI();
    }
    
    updateThemeUI() {
        if (this.isDark) {
            this.themeIcon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            `;
            this.themeText.textContent = translations[document.getElementById('language-select').value]['light-mode'];
        } else {
            this.themeIcon.innerHTML = `
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            `;
            this.themeText.textContent = translations[document.getElementById('language-select').value]['dark-mode'];
        }
    }
}

// 获取滚动条宽度的工具函数
function getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
}

// 打开游戏详情
function openGameDetail(gameId) {
    const lang = document.getElementById('language-select').value;
    const overlay = document.getElementById('gameDetail');
    
    // 设置游戏详情内容
    document.getElementById('gameDetailTitle').textContent = gameDetails[gameId].title[lang];
    document.getElementById('gameDetailContent').innerHTML = gameDetails[gameId].content[lang];
    
    // 计算当前滚动位置
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    
    // 设置弹窗位置为当前滚动位置
    overlay.style.top = `${scrollPosition}px`;
    
     // 显示游戏详情弹窗
    overlay.classList.add('active');
    
    // 防止背景滚动
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = `${getScrollbarWidth()}px`;
    
    // 确保弹窗内容滚动到顶部
    document.getElementById('gameDetailContent').scrollTop = 0;
}

function closeGameDetail() {
    const overlay = document.getElementById('gameDetail');
    
    // 先移除active类触发消失动画
    overlay.classList.remove('active');
    
    // 恢复背景滚动
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
    
    // 在动画结束后重置位置
    setTimeout(() => {
        overlay.style.top = '';
    }, 300); // 300ms是动画持续时间
}

// 语言切换功能
document.getElementById('language-select').addEventListener('change', function() {
    const lang = this.value;
    changeLanguage(lang);
    // 更新主题切换按钮文本
    themeManager.updateThemeUI();
});

// 视频链接映射
const videoLinks = {
    video1: {
        zh: "https://www.bilibili.com/video/BV1wW421N7bJ",
        en: "https://youtu.be/" // 英文版链接
    },
    video2: {
        zh: "https://www.bilibili.com/video/BV1Um4y1E7nk",
        en: "https://youtu.be/" // 英文版链接
    },
    video3: {
        zh: "https://www.bilibili.com/video/BV1ufyaYfEVn",
        en: "https://youtu.be/" // 英文版链接
    }
};

// 在顶部添加视频封面映射对象
const videoImages = {
    video1: {
        zh: "assets/Sunaookami-Shiroko.png",
        en: "assets/Sunaookami-Shiroko-en.png" // 英文版封面
    },
    video2: {
        zh: "assets/wind.png",
        en: "assets/wind-en.png" // 英文版封面
    },
    video3: {
        zh: "assets/old-promotional-video.png",
        en: "assets/old-promotional-video-en.png" // 英文版封面
    }
};

function changeLanguage(lang) {
    // 更新所有带有data-i18n属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    // 更新视频链接
    document.querySelectorAll('.video-link').forEach(link => {
        const videoId = link.getAttribute('data-video-id');
        if (videoLinks[videoId] && videoLinks[videoId][lang]) {
            link.href = videoLinks[videoId][lang];
        }
    });

    // 更新视频封面
    document.querySelectorAll('.video-image').forEach(img => {
        const videoId = img.getAttribute('data-video-id');
        if (videoImages[videoId] && videoImages[videoId][lang]) {
            img.src = videoImages[videoId][lang];
        }
    });
    
    // 更新特殊元素（如标题）
    document.querySelector('.main-logo').src = gameImages['logo'][lang];
    
    // 更新游戏封面图片
    document.getElementById('geometry-survivor-img').src = gameImages['geometry-survivor'][lang];
    document.getElementById('crops-vs-farmers-img').src = gameImages['crops-vs-farmers'][lang];
    
    // 添加/移除语言类
    document.body.classList.toggle('lang-en', lang === 'en');

    // 更新页面标题
    document.title = lang === 'zh' ? '酪无止境' : 'CHEESENDLESS';
    
    // 更新主题切换按钮文本
    themeManager.updateThemeUI();

    // 保存语言偏好到本地存储
    localStorage.setItem('language', lang);
}

// 初始化主题管理器
const themeManager = new ThemeManager();

// 初始化语言设置
const languageSelect = document.getElementById('language-select');
const savedLanguage = localStorage.getItem('language');
const systemLanguage = navigator.language.startsWith('zh') ? 'zh' : 'en';

// 优先使用本地存储的语言设置，其次使用系统语言
const initialLanguage = savedLanguage || systemLanguage;
languageSelect.value = initialLanguage;
changeLanguage(initialLanguage);
document.body.classList.toggle('lang-en', initialLanguage === 'en');

// 标签切换功能
document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // 移除所有标签和内容的active类
        document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        
        // 为当前点击的标签和对应内容添加active类
        tab.classList.add('active');
        const tabId = tab.getAttribute('data-tab');
        document.getElementById(tabId).classList.add('active');
    });
});

// 游戏详情功能
document.querySelectorAll('[data-game]').forEach(button => {
    button.addEventListener('click', function() {
        const gameId = this.getAttribute('data-game');
        openGameDetail(gameId);
    });
});

// 关闭游戏详情
document.getElementById('closeGameDetail').addEventListener('click', closeGameDetail);

// 点击弹窗外部关闭
document.getElementById('gameDetail').addEventListener('click', function(e) {
    if (e.target === this) {
        closeGameDetail();
    }
});

// ESC键关闭详情
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const detail = document.getElementById('gameDetail');
        if (detail.classList.contains('active')) {
            closeGameDetail();
        }
    }
});

// 禁用右键菜单
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// 可选：禁用某些键盘快捷键（如F12、Ctrl+Shift+I等）
document.addEventListener('keydown', function(e) {
    // 禁用F12
    if (e.key === 'F12') {
        e.preventDefault();
    }
    // 禁用Ctrl+Shift+I (Windows/Linux) 或 Cmd+Opt+I (Mac)
    if ((e.ctrlKey && e.shiftKey && e.key === 'I') || 
        (e.metaKey && e.altKey && e.key === 'I')) {
        e.preventDefault();
    }
    // 禁用Ctrl+U
    if ((e.ctrlKey && e.key === 'u')) {
        e.preventDefault();
    }
});