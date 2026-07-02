const categoryMeta = {
  hotpot: { label: "火锅串串", icon: "hotpot", order: 1, color: "#f05a4f" },
  sichuan: { label: "川菜江湖菜", icon: "pepper", order: 2, color: "#d9482e" },
  noodles: { label: "面饭小吃", icon: "bowl", order: 3, color: "#e3a92f" },
  bbq: { label: "烧烤烤肉", icon: "grill", order: 4, color: "#9a5b2f" },
  light: { label: "轻食简餐", icon: "leaf", order: 5, color: "#3a9f6b" },
  asian: { label: "亚洲风味", icon: "fish", order: 6, color: "#3476c7" },
  dessert: { label: "咖啡甜品", icon: "coffee", order: 7, color: "#c06aa0" },
};

const iconPaths = {
  archive: '<path d="M4 8h16"/><path d="M6 8v10h12V8"/><path d="M8 4h8l2 4H6l2-4z"/><path d="M10 12h4"/>',
  ban: '<circle cx="12" cy="12" r="8"/><path d="M7 7l10 10"/>',
  bolt: '<path d="M13 2 5 13h6l-1 9 9-13h-6l0-7z"/>',
  bowl: '<path d="M4 11h16"/><path d="M6 11a6 6 0 0 0 12 0"/><path d="M8 5c1 1 1 2 0 3"/><path d="M12 4c1 1 1 2 0 3"/><path d="M16 5c1 1 1 2 0 3"/>',
  branch: '<path d="M6 4v7a4 4 0 0 0 4 4h8"/><path d="M6 11h5a4 4 0 0 0 4-4V4"/><circle cx="6" cy="4" r="2"/><circle cx="15" cy="4" r="2"/><circle cx="18" cy="15" r="2"/>',
  check: '<path d="m5 12 4 4 10-10"/>',
  coffee: '<path d="M5 8h11v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V8z"/><path d="M16 10h2a2 2 0 0 1 0 4h-2"/><path d="M7 3v2"/><path d="M11 3v2"/><path d="M15 3v2"/>',
  compass: '<circle cx="12" cy="12" r="9"/><path d="m15 9-2 5-5 2 2-5 5-2z"/>',
  dice: '<rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="8" cy="8" r="1"/><circle cx="16" cy="8" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="8" cy="16" r="1"/><circle cx="16" cy="16" r="1"/>',
  filter: '<path d="M4 5h16l-6 7v5l-4 2v-7L4 5z"/>',
  fish: '<path d="M4 12s4-6 10-3c3 1 5 3 6 3-1 0-3 2-6 3-6 3-10-3-10-3z"/><path d="m4 12-2 3v-6l2 3z"/><circle cx="14" cy="11" r="1"/>',
  grill: '<path d="M5 10h14"/><path d="M7 10a5 5 0 0 0 10 0"/><path d="M9 16l-2 4"/><path d="M15 16l2 4"/><path d="M8 5v2"/><path d="M12 4v3"/><path d="M16 5v2"/>',
  hotpot: '<path d="M5 10h14v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4v-5z"/><path d="M3 10h18"/><path d="M8 5c1 1 1 2 0 3"/><path d="M12 4c1 1 1 2 0 3"/><path d="M16 5c1 1 1 2 0 3"/>',
  leaf: '<path d="M20 4c-8 0-13 4-13 10a6 6 0 0 0 10 4c3-3 3-8 3-14z"/><path d="M4 20c3-5 7-8 13-10"/>',
  map: '<path d="M9 18 4 20V6l5-2 6 2 5-2v14l-5 2-6-2z"/><path d="M9 4v14"/><path d="M15 6v14"/>',
  pepper: '<path d="M14 4c3 1 5 4 4 8-1 5-5 8-10 8-2 0-4-1-4-3 0-1 1-2 3-2 4 0 6-3 6-6 0-2-1-4-3-5 1-1 3-1 4 0z"/><path d="M14 4c0-1 1-2 2-2"/>',
  pointer: '<path d="m12 17-7-9h14l-7 9z"/>',
  ranking: '<path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 15.6 7.1 18.2l.9-5.5-4-3.9 5.5-.8L12 3z"/>',
  reset: '<path d="M20 12a8 8 0 1 1-2.3-5.7"/><path d="M20 4v6h-6"/>',
  route: '<path d="M5 6h5a4 4 0 0 1 0 8H8a3 3 0 0 0 0 6h11"/><circle cx="5" cy="6" r="2"/><circle cx="19" cy="20" r="2"/>',
  target: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="M2 12h4"/><path d="M18 12h4"/>',
  trash: '<path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M7 7l1 13h8l1-13"/><path d="M10 11v5"/><path d="M14 11v5"/>',
  trophy: '<path d="M8 4h8v5a4 4 0 0 1-8 0V4z"/><path d="M8 6H5a3 3 0 0 0 3 4"/><path d="M16 6h3a3 3 0 0 1-3 4"/><path d="M12 13v4"/><path d="M9 21h6"/><path d="M10 17h4"/>',
  utensils: '<path d="M7 3v8"/><path d="M4 3v5a3 3 0 0 0 6 0V3"/><path d="M7 11v10"/><path d="M17 3v18"/><path d="M14 3c3 1 5 4 3 8"/>',
  wallet: '<path d="M4 7h14a2 2 0 0 1 2 2v9H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h12"/><path d="M16 12h4"/><circle cx="16" cy="12" r="1"/>',
  wheel: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2"/><path d="M12 3v7"/><path d="M12 14v7"/><path d="M3 12h7"/><path d="M14 12h7"/><path d="m6 6 5 5"/><path d="m13 13 5 5"/><path d="m18 6-5 5"/><path d="m11 13-5 5"/>',
};

function iconSvg(name, label = "") {
  const paths = iconPaths[name] || iconPaths.utensils;
  const aria = label ? `role="img" aria-label="${label}"` : 'aria-hidden="true"';
  return `<span class="local-icon" ${aria}><svg viewBox="0 0 24 24" focusable="false">${paths}</svg></span>`;
}

function hydrateStaticIcons(scope = document) {
  scope.querySelectorAll("[data-icon]").forEach((node) => {
    node.outerHTML = iconSvg(node.dataset.icon);
  });
}

const restaurants = [
  {
    id: "shu-da-xia-century",
    name: "蜀大侠火锅(世纪城店)",
    category: "hotpot",
    type: "火锅",
    area: "世纪城/新会展",
    price: 118,
    score: 4.7,
    rank: 1,
    tags: ["红油锅", "聚餐", "排队热度高"],
    mood: "想吃点有仪式感的辣",
    pitch: "今天的锅底负责把选择困难症煮到投降。",
  },
  {
    id: "xiaolongkan-huayang",
    name: "小龙坎老火锅(华阳店)",
    category: "hotpot",
    type: "火锅",
    area: "华阳/广都",
    price: 112,
    score: 4.6,
    rank: 2,
    tags: ["牛油锅", "经典成都味", "朋友局"],
    mood: "要一个稳妥不踩雷的热闹局",
    pitch: "把胃交给牛油，把纠结留在门口。",
  },
  {
    id: "dalongyi-tianfu3",
    name: "大龙燚火锅(天府三街店)",
    category: "hotpot",
    type: "火锅",
    area: "天府三街/软件园",
    price: 126,
    score: 4.5,
    rank: 3,
    tags: ["香辣", "下班聚餐", "毛肚"],
    mood: "想把今天过成一顿正经火锅",
    pitch: "适合发起一场临时但隆重的火锅会议。",
  },
  {
    id: "malubianbian-century",
    name: "马路边边串串香(世纪城店)",
    category: "hotpot",
    type: "串串",
    area: "世纪城/上闲里",
    price: 82,
    score: 4.6,
    rank: 4,
    tags: ["串串", "复古", "性价比"],
    mood: "想边吃边聊天，不想太正式",
    pitch: "签签越堆越高，烦恼越涮越少。",
  },
  {
    id: "xiaojungan-huayang",
    name: "钢管厂五区小郡肝串串香(华阳店)",
    category: "hotpot",
    type: "串串",
    area: "华阳/南湖",
    price: 76,
    score: 4.4,
    rank: 5,
    tags: ["小郡肝", "夜宵", "重口"],
    mood: "今天需要一点烟火气",
    pitch: "串串界的快速决策按钮，拿签就完事。",
  },
  {
    id: "maocai-huafu",
    name: "三顾冒菜(华府大道店)",
    category: "hotpot",
    type: "冒菜",
    area: "华府大道/骑龙",
    price: 35,
    score: 4.2,
    rank: 6,
    tags: ["一个人", "快吃", "自选菜"],
    mood: "想吃火锅味，但不想组局",
    pitch: "一个人的火锅，也可以很像一场胜利。",
  },
  {
    id: "taode-century",
    name: "陶德砂锅(世纪城店)",
    category: "sichuan",
    type: "川菜",
    area: "世纪城/天府二街",
    price: 88,
    score: 4.7,
    rank: 1,
    tags: ["砂锅", "川菜", "适合多人"],
    mood: "想吃热乎、下饭、选择多",
    pitch: "菜单像装备库，总能找到今天的本命菜。",
  },
  {
    id: "chenmapo-tianfu5",
    name: "陈麻婆豆腐(天府五街店)",
    category: "sichuan",
    type: "川菜",
    area: "天府五街/银泰城",
    price: 72,
    score: 4.5,
    rank: 2,
    tags: ["麻婆豆腐", "下饭", "老字号风味"],
    mood: "只想认真干饭",
    pitch: "米饭已经准备好接受麻婆豆腐的调度。",
  },
  {
    id: "jianghu-huayang",
    name: "柴门饭儿(华阳店)",
    category: "sichuan",
    type: "家常菜",
    area: "华阳/南湖",
    price: 79,
    score: 4.4,
    rank: 3,
    tags: ["家常川菜", "不太辣", "家庭友好"],
    mood: "想吃像样的一顿正餐",
    pitch: "它不是最炸裂的，但很会照顾今天的胃。",
  },
  {
    id: "ziwei-kaoji",
    name: "滋味烤鸡(华阳店)",
    category: "sichuan",
    type: "江湖菜",
    area: "华阳/广都",
    price: 68,
    score: 4.3,
    rank: 4,
    tags: ["烤鸡", "江湖菜", "重口"],
    mood: "想要一桌有冲击力的菜",
    pitch: "适合给平淡的一天补一记重拳。",
  },
  {
    id: "liangshan-century",
    name: "凉山好汉西昌火盆烧烤(世纪城店)",
    category: "sichuan",
    type: "江湖菜",
    area: "世纪城/新会展",
    price: 96,
    score: 4.4,
    rank: 5,
    tags: ["西昌风味", "聚餐", "肉食"],
    mood: "想吃豪放一点",
    pitch: "今天不精致，今天要痛快。",
  },
  {
    id: "chicken-soup-rice",
    name: "乡村基(天府五街店)",
    category: "light",
    type: "简餐",
    area: "天府五街/软件园",
    price: 32,
    score: 4.1,
    rank: 6,
    tags: ["快餐", "工作日", "稳定"],
    mood: "只想迅速补能量",
    pitch: "不给人生加戏，只给胃按时发工资。",
  },
  {
    id: "mianyang-rice-noodle",
    name: "绵阳米粉(华阳正北中街店)",
    category: "noodles",
    type: "米粉",
    area: "华阳/正北中街",
    price: 18,
    score: 4.4,
    rank: 1,
    tags: ["米粉", "早餐午餐", "快吃"],
    mood: "想用一碗粉解决问题",
    pitch: "嗦粉速度够快，今天就不会输。",
  },
  {
    id: "chongqing-xiaomian-century",
    name: "重庆小面(世纪城上闲里店)",
    category: "noodles",
    type: "面馆",
    area: "世纪城/上闲里",
    price: 22,
    score: 4.2,
    rank: 2,
    tags: ["小面", "麻辣", "一个人"],
    mood: "想要一碗直接有效的辣",
    pitch: "无需铺垫，第一口就进入主题。",
  },
  {
    id: "lanzhou-noodle-tianfu3",
    name: "马记兰州牛肉面(天府三街店)",
    category: "noodles",
    type: "面馆",
    area: "天府三街/软件园",
    price: 26,
    score: 4.1,
    rank: 3,
    tags: ["牛肉面", "清真", "快吃"],
    mood: "想清爽一点但要吃饱",
    pitch: "一碗面给今天画一条清晰的行动线。",
  },
  {
    id: "zhong-shuijiao-huayang",
    name: "钟水饺(华阳店)",
    category: "noodles",
    type: "小吃",
    area: "华阳/广都",
    price: 28,
    score: 4.0,
    rank: 4,
    tags: ["成都小吃", "抄手", "甜水面"],
    mood: "不想吃大餐，只想拼点小吃",
    pitch: "把选择拆成小份，快乐也更容易凑齐。",
  },
  {
    id: "kaojiang-century",
    name: "烤匠麻辣烤鱼(世纪城店)",
    category: "bbq",
    type: "烤鱼",
    area: "世纪城/天府二街",
    price: 104,
    score: 4.8,
    rank: 1,
    tags: ["烤鱼", "麻辣", "人气高"],
    mood: "想吃鱼，但必须有存在感",
    pitch: "鱼负责焦香，配菜负责让你停不下来。",
  },
  {
    id: "jiutian-korean-bbq",
    name: "九田家黑牛烤肉料理(天府五街店)",
    category: "bbq",
    type: "烤肉",
    area: "天府五街/银泰城",
    price: 116,
    score: 4.5,
    rank: 2,
    tags: ["烤肉", "牛肉", "约会"],
    mood: "想把晚饭吃得有互动感",
    pitch: "夹起第一片肉，今晚的剧情就开始了。",
  },
  {
    id: "yanshe-bbq-huayang",
    name: "眼镜烧烤(华阳店)",
    category: "bbq",
    type: "烧烤",
    area: "华阳/南湖",
    price: 74,
    score: 4.3,
    rank: 3,
    tags: ["夜宵", "烧烤", "啤酒"],
    mood: "今天适合晚点吃、慢慢聊",
    pitch: "夜宵局的标准答案：碳火、孜然和一点放松。",
  },
  {
    id: "han-style-bbq-century",
    name: "姜虎东白丁烤肉(世纪城店)",
    category: "bbq",
    type: "烤肉",
    area: "世纪城/环球中心方向",
    price: 138,
    score: 4.4,
    rank: 4,
    tags: ["韩式烤肉", "服务", "肉食"],
    mood: "想吃点带气氛的肉",
    pitch: "负责把普通晚餐烤成一场小型庆祝。",
  },
  {
    id: "wagas-tianfu5",
    name: "Wagas沃歌斯(天府五街店)",
    category: "light",
    type: "轻食",
    area: "天府五街/银泰城",
    price: 68,
    score: 4.4,
    rank: 1,
    tags: ["沙拉", "三明治", "低负担"],
    mood: "想吃清爽，但不能像惩罚自己",
    pitch: "清爽路线，也可以吃得像个成熟玩家。",
  },
  {
    id: "taier-century",
    name: "太二酸菜鱼(世纪城店)",
    category: "light",
    type: "简餐",
    area: "世纪城/天府二街",
    price: 92,
    score: 4.6,
    rank: 2,
    tags: ["酸菜鱼", "稳定", "多人"],
    mood: "想吃酸辣开胃的正餐",
    pitch: "当你不知道吃什么，酸菜鱼通常知道。",
  },
  {
    id: "congee-huayang",
    name: "嘉州叶婆婆钵钵鸡(华阳店)",
    category: "light",
    type: "冷锅小食",
    area: "华阳/南湖",
    price: 48,
    score: 4.3,
    rank: 3,
    tags: ["钵钵鸡", "小吃", "轻聚餐"],
    mood: "想吃很多种，但不想太撑",
    pitch: "把想吃的都串起来，选择困难自然断线。",
  },
  {
    id: "sushi-century",
    name: "上井精致料理(世纪城店)",
    category: "asian",
    type: "日料",
    area: "世纪城/新会展",
    price: 168,
    score: 4.5,
    rank: 1,
    tags: ["日料", "刺身", "约会"],
    mood: "想吃得精致一点",
    pitch: "适合给今天加一个稍微讲究的转场。",
  },
  {
    id: "sukiya-tianfu3",
    name: "食其家Sukiya(天府三街店)",
    category: "asian",
    type: "日料",
    area: "天府三街/软件园",
    price: 39,
    score: 4.2,
    rank: 2,
    tags: ["牛丼", "快吃", "一个人"],
    mood: "想快速吃点不辣的",
    pitch: "不争气氛，专注把饥饿处理干净。",
  },
  {
    id: "korean-pot-huayang",
    name: "韩宫宴炭火烤肉(华阳店)",
    category: "asian",
    type: "韩餐",
    area: "华阳/广都",
    price: 95,
    score: 4.3,
    rank: 3,
    tags: ["韩餐", "部队锅", "烤肉"],
    mood: "想吃韩式热闹感",
    pitch: "泡菜、烤肉和锅气，负责把晚饭变轻松。",
  },
  {
    id: "thai-jiyu-century",
    name: "集渔泰式海鲜火锅(世纪城店)",
    category: "asian",
    type: "泰式",
    area: "世纪城/天府二街",
    price: 142,
    score: 4.6,
    rank: 4,
    tags: ["泰式", "冬阴功", "海鲜"],
    mood: "想吃酸辣但换个频道",
    pitch: "给今天开一扇东南亚口味的小窗。",
  },
  {
    id: "manner-tianfu5",
    name: "Manner Coffee(天府五街店)",
    category: "dessert",
    type: "咖啡",
    area: "天府五街/软件园",
    price: 24,
    score: 4.5,
    rank: 1,
    tags: ["咖啡", "续命", "外带"],
    mood: "饭可以等，咖啡不行",
    pitch: "先把电量拉起来，再谈人生大事。",
  },
  {
    id: "holiland-century",
    name: "好利来(世纪城店)",
    category: "dessert",
    type: "甜品",
    area: "世纪城/上闲里",
    price: 38,
    score: 4.4,
    rank: 2,
    tags: ["蛋糕", "甜品", "下午茶"],
    mood: "今天需要一点甜的台阶下",
    pitch: "不是正餐，但很擅长修复情绪。",
  },
  {
    id: "heytea-tianfu5",
    name: "喜茶(天府五街店)",
    category: "dessert",
    type: "茶饮",
    area: "天府五街/银泰城",
    price: 29,
    score: 4.3,
    rank: 3,
    tags: ["茶饮", "奶茶", "饭后"],
    mood: "吃什么还没定，先来杯快乐水",
    pitch: "有时候今天想吃什么，答案是先喝一口。",
  },
  {
    id: "awfully-century",
    name: "Awfully Chocolate(世纪城店)",
    category: "dessert",
    type: "甜品",
    area: "世纪城/新会展",
    price: 52,
    score: 4.2,
    rank: 4,
    tags: ["巧克力", "蛋糕", "约会"],
    mood: "想用甜品给今天收尾",
    pitch: "巧克力不解决问题，但会让问题看起来小一点。",
  },
  {
    id: "manjiao-congee-hotpot-shihao",
    name: "慢搅粥底火锅(世豪广场店)",
    category: "hotpot",
    type: "火锅",
    area: "世豪广场/天府二街",
    price: 108,
    score: 4.7,
    rank: 1,
    tags: ["粥底火锅", "清润锅底", "必进转盘"],
    mood: "想吃火锅，但今天想温柔一点",
    pitch: "粥底负责兜底，肉和海鲜负责把今天哄好。",
  },
  {
    id: "banu-hongtang",
    name: "巴奴毛肚火锅(红唐购物中心店)",
    category: "hotpot",
    type: "火锅",
    area: "红唐购物中心/天府五街",
    price: 142,
    score: 4.6,
    rank: 2,
    tags: ["毛肚", "服务稳", "聚餐"],
    mood: "想把火锅吃得稳准狠",
    pitch: "毛肚下锅的那几秒，选择困难会自动闭麦。",
  },
  {
    id: "xiaocaiyuan-yuanda",
    name: "小菜园新徽菜(远大购物中心店)",
    category: "sichuan",
    type: "家常菜",
    area: "远大购物中心/华府大道",
    price: 68,
    score: 4.4,
    rank: 2,
    tags: ["家常菜", "不太辣", "商场友好"],
    mood: "想吃舒服的一桌菜",
    pitch: "不是每顿饭都要刺激，今天可以走稳妥路线。",
  },
  {
    id: "kaojiang-shihao",
    name: "烤匠麻辣烤鱼(世豪广场店)",
    category: "bbq",
    type: "烤鱼",
    area: "世豪广场/天府二街",
    price: 106,
    score: 4.7,
    rank: 2,
    tags: ["烤鱼", "麻辣", "商场排队王"],
    mood: "想吃一顿有战斗力的鱼",
    pitch: "鱼和配菜一起上桌，今天的犹豫就到此为止。",
  },
  {
    id: "xibei-hongtang",
    name: "西贝莜面村(红唐购物中心店)",
    category: "noodles",
    type: "面馆",
    area: "红唐购物中心/天府五街",
    price: 82,
    score: 4.3,
    rank: 3,
    tags: ["西北菜", "面食", "家庭友好"],
    mood: "想吃面食，但要比快餐认真",
    pitch: "莜面一上桌，晚饭立刻变得有交代。",
  },
  {
    id: "luckin-yuanda",
    name: "瑞幸咖啡(远大购物中心店)",
    category: "dessert",
    type: "咖啡",
    area: "远大购物中心/华府大道",
    price: 22,
    score: 4.2,
    rank: 4,
    tags: ["咖啡", "外带", "饭后续航"],
    mood: "吃完还想续一条命",
    pitch: "不是饭点答案，但很适合给饭后加一格电。",
  },
  {
    id: "dami-light-ganghui",
    name: "大米先生(港汇中心店)",
    category: "light",
    type: "简餐",
    area: "港汇中心/天府三街",
    price: 34,
    score: 4.2,
    rank: 4,
    tags: ["工作餐", "快吃", "米饭党"],
    mood: "想快速吃饱，但不想随便糊弄",
    pitch: "米饭热、出餐快，适合把午饭从待办里划掉。",
  },
  {
    id: "mijia-bbq-ganghui",
    name: "米家烤肉(港汇中心店)",
    category: "bbq",
    type: "烤肉",
    area: "港汇中心/天府三街",
    price: 98,
    score: 4.4,
    rank: 5,
    tags: ["烤肉", "朋友局", "商场"],
    mood: "想在商场里找一顿带香气的饭",
    pitch: "烤盘一热，今天就不再是普通工作日。",
  },
  {
    id: "mama-trotters-yintai",
    name: "妈妈蹄花(银泰城店)",
    category: "sichuan",
    type: "家常菜",
    area: "银泰城/天府五街",
    price: 62,
    score: 4.3,
    rank: 6,
    tags: ["蹄花", "汤饭", "不太辣"],
    mood: "想吃点热汤热饭",
    pitch: "一碗汤把节奏慢下来，饭也能吃得很踏实。",
  },
  {
    id: "frog-jinjiangli",
    name: "蛙来哒(保利锦江里店)",
    category: "sichuan",
    type: "江湖菜",
    area: "保利锦江里/华府大道",
    price: 86,
    score: 4.4,
    rank: 5,
    tags: ["牛蛙", "重口", "下饭"],
    mood: "想来一锅有存在感的重口菜",
    pitch: "牛蛙负责把胃叫醒，配菜负责让米饭消失。",
  },
  {
    id: "heytea-jinjiangli",
    name: "喜茶(保利锦江里店)",
    category: "dessert",
    type: "茶饮",
    area: "保利锦江里/华府大道",
    price: 29,
    score: 4.2,
    rank: 5,
    tags: ["茶饮", "饭后", "逛街"],
    mood: "主食还没决定，但快乐可以先安排",
    pitch: "当正餐意见打架，先用一杯茶饮暂停战局。",
  },
  {
    id: "laoxiangji-rongchuang",
    name: "老乡鸡(融创香璟台店)",
    category: "light",
    type: "简餐",
    area: "融创香璟台/华府大道",
    price: 38,
    score: 4.1,
    rank: 5,
    tags: ["快餐", "鸡汤", "稳定"],
    mood: "想吃正常饭，越稳越好",
    pitch: "鸡汤和米饭上桌，今天的能量条就续上了。",
  },
  {
    id: "coffee-rongchuang",
    name: "M Stand(融创香璟台店)",
    category: "dessert",
    type: "咖啡",
    area: "融创香璟台/华府大道",
    price: 36,
    score: 4.3,
    rank: 6,
    tags: ["咖啡", "下午茶", "外带"],
    mood: "饭后想找个能缓一缓的地方",
    pitch: "咖啡不是正餐，但很会给下一段时间开机。",
  },
  {
    id: "hou-hotpot-yintai",
    name: "吼堂老火锅(银泰城店)",
    category: "hotpot",
    type: "火锅",
    area: "银泰城/天府五街",
    price: 124,
    score: 4.5,
    rank: 7,
    tags: ["老火锅", "毛肚", "商场聚餐"],
    mood: "想吃辣，但不想跑太远",
    pitch: "下楼就能开锅，适合把临时饭局变正式。",
  },
  {
    id: "qiansi-hotpot-ganghui",
    name: "牵丝牛肉火锅(港汇中心店)",
    category: "hotpot",
    type: "火锅",
    area: "港汇中心/天府三街",
    price: 96,
    score: 4.3,
    rank: 8,
    tags: ["牛肉火锅", "清爽", "工作日"],
    mood: "想吃热锅，但今天不想太重口",
    pitch: "牛肉和清汤负责把晚饭稳稳接住。",
  },
  {
    id: "liuyishou-jinjiangli",
    name: "刘一手火锅(保利锦江里店)",
    category: "hotpot",
    type: "火锅",
    area: "保利锦江里/华府大道",
    price: 108,
    score: 4.4,
    rank: 9,
    tags: ["重庆火锅", "重口", "朋友局"],
    mood: "今天要一点直接的重庆劲儿",
    pitch: "锅底一开，纠结就自动进入休眠模式。",
  },
  {
    id: "yuxiaoji-rongchuang",
    name: "渝小记江湖菜(融创香璟台店)",
    category: "sichuan",
    type: "江湖菜",
    area: "融创香璟台/华府大道",
    price: 72,
    score: 4.2,
    rank: 7,
    tags: ["江湖菜", "下饭", "重口"],
    mood: "想吃一桌有锅气的家常辣",
    pitch: "不装精致，专心把米饭安排得明明白白。",
  },
  {
    id: "yuxiang-shihao",
    name: "鱼香厨房(世豪广场店)",
    category: "sichuan",
    type: "川菜",
    area: "世豪广场/天府二街",
    price: 64,
    score: 4.2,
    rank: 8,
    tags: ["川菜", "工作餐", "下饭"],
    mood: "想吃正常川菜，别太复杂",
    pitch: "菜单熟、上菜快，适合解决真实饥饿。",
  },
  {
    id: "dingtaifeng-yintai",
    name: "鼎泰丰(银泰城店)",
    category: "noodles",
    type: "小吃",
    area: "银泰城/天府五街",
    price: 118,
    score: 4.5,
    rank: 5,
    tags: ["小笼包", "精致", "约会"],
    mood: "想吃不辣且有点讲究",
    pitch: "小笼包和面点会把今天变得温和一点。",
  },
  {
    id: "wuyue-noodle-hongtang",
    name: "武岳庙肥肠粉(红唐购物中心店)",
    category: "noodles",
    type: "米粉",
    area: "红唐购物中心/天府五街",
    price: 24,
    score: 4.1,
    rank: 6,
    tags: ["肥肠粉", "小吃", "快吃"],
    mood: "想用一碗粉迅速结束纠结",
    pitch: "粉一嗦，今天的方向感就回来了。",
  },
  {
    id: "hefu-noodle-ganghui",
    name: "和府捞面(港汇中心店)",
    category: "noodles",
    type: "面馆",
    area: "港汇中心/天府三街",
    price: 46,
    score: 4.2,
    rank: 7,
    tags: ["捞面", "不太辣", "商务午餐"],
    mood: "想吃面，也想坐得舒服点",
    pitch: "汤面稳、环境稳，适合工作日中场休息。",
  },
  {
    id: "rice-roll-yuanda",
    name: "银记肠粉(远大购物中心店)",
    category: "noodles",
    type: "小吃",
    area: "远大购物中心/华府大道",
    price: 32,
    score: 4.1,
    rank: 8,
    tags: ["肠粉", "广式", "轻快"],
    mood: "想吃点软乎、不辣、快落地的",
    pitch: "肠粉负责轻巧落胃，今天不用硬扛重口。",
  },
  {
    id: "jiangbian-bbq-hongtang",
    name: "江边城外烤全鱼(红唐购物中心店)",
    category: "bbq",
    type: "烤鱼",
    area: "红唐购物中心/天府五街",
    price: 98,
    score: 4.3,
    rank: 6,
    tags: ["烤鱼", "多人", "配菜丰富"],
    mood: "想吃鱼，也想顺便把配菜吃爽",
    pitch: "鱼是主角，配菜负责让这顿饭很像团建。",
  },
  {
    id: "charcoal-yuanda",
    name: "炭火局烤肉(远大购物中心店)",
    category: "bbq",
    type: "烤肉",
    area: "远大购物中心/华府大道",
    price: 112,
    score: 4.4,
    rank: 7,
    tags: ["炭火烤肉", "肉食", "约会"],
    mood: "想吃肉，并且需要一点仪式感",
    pitch: "烤肉香一出来，今天就有了明确答案。",
  },
  {
    id: "skewer-rongchuang",
    name: "签王之王烧烤(融创香璟台店)",
    category: "bbq",
    type: "烧烤",
    area: "融创香璟台/华府大道",
    price: 76,
    score: 4.2,
    rank: 8,
    tags: ["烧烤", "夜宵", "孜然"],
    mood: "想晚点吃，想吃得松弛一点",
    pitch: "签子一排开，选择困难就会显得很不重要。",
  },
  {
    id: "bluefrog-yintai",
    name: "蓝蛙(银泰城店)",
    category: "light",
    type: "简餐",
    area: "银泰城/天府五街",
    price: 128,
    score: 4.4,
    rank: 6,
    tags: ["汉堡", "西餐", "小酌"],
    mood: "想吃汉堡薯条，也想坐久一点",
    pitch: "今天不用太中式，换个频道也能吃饱。",
  },
  {
    id: "subway-ganghui",
    name: "赛百味(港汇中心店)",
    category: "light",
    type: "轻食",
    area: "港汇中心/天府三街",
    price: 32,
    score: 4.0,
    rank: 7,
    tags: ["三明治", "快吃", "低负担"],
    mood: "想快一点、轻一点、别太油",
    pitch: "把午饭压缩成一条三明治，效率很高。",
  },
  {
    id: "salad-yuanda",
    name: "gaga鲜语(远大购物中心店)",
    category: "light",
    type: "轻食",
    area: "远大购物中心/华府大道",
    price: 74,
    score: 4.2,
    rank: 8,
    tags: ["沙拉", "茶饮", "下午茶"],
    mood: "想清爽，但还想有点店内体验",
    pitch: "适合给胃放半天假，但不牺牲好吃。",
  },
  {
    id: "pho-ganghui",
    name: "越小品越南粉(港汇中心店)",
    category: "asian",
    type: "越南菜",
    area: "港汇中心/天府三街",
    price: 58,
    score: 4.2,
    rank: 5,
    tags: ["越南粉", "清爽", "不太辣"],
    mood: "想吃汤粉，但不想走川味路线",
    pitch: "一碗河粉让今天从清爽那边重新开始。",
  },
  {
    id: "thai-yuanda",
    name: "泰香米泰国餐厅(远大购物中心店)",
    category: "asian",
    type: "泰式",
    area: "远大购物中心/华府大道",
    price: 92,
    score: 4.3,
    rank: 6,
    tags: ["泰式", "咖喱", "酸辣"],
    mood: "想换个国家的酸辣频道",
    pitch: "咖喱和柠檬香负责把平淡晚饭拉起来。",
  },
  {
    id: "sushi-hongtang",
    name: "池田寿司(红唐购物中心店)",
    category: "asian",
    type: "日料",
    area: "红唐购物中心/天府五街",
    price: 76,
    score: 4.2,
    rank: 7,
    tags: ["寿司", "日料", "不辣"],
    mood: "今天想吃清爽精简一点",
    pitch: "寿司的好处是不用解释，夹起来就懂。",
  },
  {
    id: "korean-jinjiangli",
    name: "首尔食堂(保利锦江里店)",
    category: "asian",
    type: "韩餐",
    area: "保利锦江里/华府大道",
    price: 68,
    score: 4.1,
    rank: 8,
    tags: ["韩餐", "拌饭", "部队锅"],
    mood: "想要韩式一锅热闹",
    pitch: "泡菜和热锅一上桌，晚饭立刻有气氛。",
  },
  {
    id: "nespresso-yintai",
    name: "Peet's Coffee(银泰城店)",
    category: "dessert",
    type: "咖啡",
    area: "银泰城/天府五街",
    price: 36,
    score: 4.3,
    rank: 7,
    tags: ["咖啡", "饭后", "办公"],
    mood: "吃完不想立刻回去，想再坐一会儿",
    pitch: "咖啡负责给这顿饭加一个缓冲区。",
  },
  {
    id: "peijie-hotpot-xijie",
    name: "佩姐老火锅(大学城熙街店)",
    category: "hotpot",
    type: "火锅",
    area: "大学城熙街/重大虎溪东门",
    price: 118,
    score: 4.6,
    rank: 10,
    tags: ["重庆老火锅", "毛肚", "朋友局"],
    mood: "想用一顿正经重庆火锅收尾",
    pitch: "辣度一上来，论文和选择题都先靠边站。",
  },
  {
    id: "zhuguangyu-hotpot-xijie",
    name: "朱光玉火锅馆(大学城熙街店)",
    category: "hotpot",
    type: "火锅",
    area: "大学城熙街/重大虎溪东门",
    price: 122,
    score: 4.5,
    rank: 11,
    tags: ["重庆味", "甜品", "拍照"],
    mood: "想吃火锅，也想让饭局有点记忆点",
    pitch: "火锅负责上头，甜品负责把战局拉回来。",
  },
  {
    id: "nan-hotpot-u-city",
    name: "楠火锅(龙湖U城天街店)",
    category: "hotpot",
    type: "火锅",
    area: "龙湖U城天街/尖顶坡",
    price: 112,
    score: 4.5,
    rank: 12,
    tags: ["牛油锅", "重庆火锅", "商场聚餐"],
    mood: "想吃辣，但希望环境稳一点",
    pitch: "适合把临时组局升级成认真开锅。",
  },
  {
    id: "zhou-shixiong-u-city",
    name: "周师兄重庆火锅(大学城店)",
    category: "hotpot",
    type: "火锅",
    area: "龙湖U城/大学城北路",
    price: 128,
    score: 4.5,
    rank: 13,
    tags: ["大刀腰片", "重口", "聚餐"],
    mood: "今天想要一锅有代表性的重庆味",
    pitch: "这顿不负责温柔，负责把胃口叫醒。",
  },
  {
    id: "xiaolongkan-xijie",
    name: "小龙坎老火锅(大学城熙街店)",
    category: "hotpot",
    type: "火锅",
    area: "大学城熙街/重大虎溪东门",
    price: 108,
    score: 4.4,
    rank: 14,
    tags: ["牛油锅", "经典", "多人"],
    mood: "要一个不会太出错的火锅答案",
    pitch: "经典选手上桌，争论基本就可以停了。",
  },
  {
    id: "yuanlaosi-hotpot-xijie",
    name: "袁老四老火锅(大学城熙街店)",
    category: "hotpot",
    type: "火锅",
    area: "大学城熙街/重大虎溪东门",
    price: 105,
    score: 4.4,
    rank: 15,
    tags: ["红油锅", "夜饭", "毛肚"],
    mood: "想吃得热烈一点，不想太讲究",
    pitch: "适合把今天的疲惫丢进红油里涮掉。",
  },
  {
    id: "xiaojungan-huxi-east",
    name: "钢管厂五区小郡肝串串香(虎溪东门店)",
    category: "hotpot",
    type: "串串",
    area: "重大虎溪东门/大学城熙街",
    price: 72,
    score: 4.3,
    rank: 16,
    tags: ["串串", "小郡肝", "学生局"],
    mood: "想轻装上阵，多拿几签",
    pitch: "不用郑重其事，拿签本身就是答案。",
  },
  {
    id: "maocai-juyuan",
    name: "冒菜江湖(重大虎溪菊园店)",
    category: "hotpot",
    type: "冒菜",
    area: "重大虎溪菊园/虎溪校区",
    price: 32,
    score: 4.2,
    rank: 17,
    tags: ["一个人", "自选", "快吃"],
    mood: "想吃火锅味，但不想发起群聊",
    pitch: "一个人的红油仪式，也能很有战斗力。",
  },
  {
    id: "taode-xijie",
    name: "陶德砂锅(大学城熙街店)",
    category: "sichuan",
    type: "川菜",
    area: "大学城熙街/重大虎溪东门",
    price: 82,
    score: 4.6,
    rank: 9,
    tags: ["砂锅", "下饭", "多人"],
    mood: "想吃一桌热乎下饭菜",
    pitch: "砂锅咕嘟起来，今天的晚饭就有了主心骨。",
  },
  {
    id: "yangjilongfu-u-city",
    name: "杨记隆府(龙湖U城天街店)",
    category: "sichuan",
    type: "江湖菜",
    area: "龙湖U城天街/尖顶坡",
    price: 96,
    score: 4.5,
    rank: 10,
    tags: ["江湖菜", "辣子鸡", "聚餐"],
    mood: "想吃重庆菜，不想只吃火锅",
    pitch: "江湖菜负责把饭桌气氛炒起来。",
  },
  {
    id: "liziba-chicken-xijie",
    name: "李子坝梁山鸡(大学城店)",
    category: "sichuan",
    type: "江湖菜",
    area: "大学城熙街/大学城南路",
    price: 88,
    score: 4.4,
    rank: 11,
    tags: ["梁山鸡", "芋儿", "重口"],
    mood: "想吃一锅能配两碗饭的菜",
    pitch: "鸡和芋儿都很懂事，米饭压力会很大。",
  },
  {
    id: "qianjiang-jiza-jianpo",
    name: "黔江鸡杂(尖顶坡店)",
    category: "sichuan",
    type: "江湖菜",
    area: "尖顶坡/龙湖U城",
    price: 58,
    score: 4.2,
    rank: 12,
    tags: ["鸡杂", "泡椒", "下饭"],
    mood: "想吃酸辣冲一点",
    pitch: "泡椒一出手，今天的困意就会撤退。",
  },
  {
    id: "home-cuisine-juyuan",
    name: "菊园家常菜馆",
    category: "sichuan",
    type: "家常菜",
    area: "重大虎溪菊园/虎溪校区",
    price: 42,
    score: 4.1,
    rank: 13,
    tags: ["家常", "近", "快吃"],
    mood: "只想在宿舍附近踏实吃一顿",
    pitch: "不整花活，主打一个离得近、能下饭。",
  },
  {
    id: "fish-flavor-eastgate",
    name: "东门江湖鱼",
    category: "sichuan",
    type: "江湖菜",
    area: "重大虎溪东门/大学城南路",
    price: 68,
    score: 4.2,
    rank: 14,
    tags: ["鱼", "泡椒", "多人"],
    mood: "想吃鱼，也想吃点有锅气的辣",
    pitch: "鱼负责鲜，泡椒负责把情绪打开。",
  },
  {
    id: "qin-yun-noodle-xijie",
    name: "秦云老太婆摊摊面(大学城店)",
    category: "noodles",
    type: "面馆",
    area: "大学城熙街/重大虎溪东门",
    price: 24,
    score: 4.4,
    rank: 9,
    tags: ["小面", "豌杂", "快吃"],
    mood: "想用一碗小面快速解决战斗",
    pitch: "不用复杂决策，二两小面就能进入正题。",
  },
  {
    id: "wanza-noodle-juyuan",
    name: "菊园豌杂面",
    category: "noodles",
    type: "面馆",
    area: "重大虎溪菊园/虎溪校区",
    price: 18,
    score: 4.2,
    rank: 10,
    tags: ["豌杂", "近", "早餐午餐"],
    mood: "想吃得近一点、快一点",
    pitch: "从宿舍到面碗的距离，最好不要超过饥饿值。",
  },
  {
    id: "dandan-noodle-eastgate",
    name: "东门担担面",
    category: "noodles",
    type: "面馆",
    area: "重大虎溪东门/大学城南路",
    price: 20,
    score: 4.1,
    rank: 11,
    tags: ["担担面", "麻辣", "单人"],
    mood: "想吃点简单但不寡淡的",
    pitch: "一碗面把问题缩小到能解决的尺寸。",
  },
  {
    id: "rice-noodle-jianpo",
    name: "花溪牛肉米粉(尖顶坡店)",
    category: "noodles",
    type: "米粉",
    area: "尖顶坡/龙湖U城",
    price: 26,
    score: 4.1,
    rank: 12,
    tags: ["牛肉粉", "汤粉", "不太辣"],
    mood: "想喝点汤，也想吃饱",
    pitch: "米粉负责顺滑，牛肉负责让这顿饭站住。",
  },
  {
    id: "dumpling-u-city",
    name: "喜家德水饺(龙湖U城天街店)",
    category: "noodles",
    type: "小吃",
    area: "龙湖U城天街/尖顶坡",
    price: 38,
    score: 4.2,
    rank: 13,
    tags: ["水饺", "清爽", "稳定"],
    mood: "今天不想辣，想吃点稳的",
    pitch: "水饺是低风险答案，适合不想再纠结。",
  },
  {
    id: "kaojiang-u-city",
    name: "烤匠麻辣烤鱼(龙湖U城天街店)",
    category: "bbq",
    type: "烤鱼",
    area: "龙湖U城天街/尖顶坡",
    price: 96,
    score: 4.5,
    rank: 9,
    tags: ["烤鱼", "麻辣", "多人"],
    mood: "想吃鱼，但要够热闹",
    pitch: "鱼和配菜一起上桌，饭局自然就有方向。",
  },
  {
    id: "jiucun-naohua-xijie",
    name: "九村烤脑花(大学城熙街店)",
    category: "bbq",
    type: "烧烤",
    area: "大学城熙街/重大虎溪东门",
    price: 62,
    score: 4.3,
    rank: 10,
    tags: ["烤脑花", "夜宵", "重庆味"],
    mood: "想吃点夜宵感强的",
    pitch: "适合给晚上的饥饿加一点重庆注脚。",
  },
  {
    id: "muwu-bbq-xijie",
    name: "木屋烧烤(大学城店)",
    category: "bbq",
    type: "烧烤",
    area: "大学城熙街/大学城南路",
    price: 82,
    score: 4.2,
    rank: 11,
    tags: ["烧烤", "啤酒", "多人"],
    mood: "想慢慢吃，顺便聊到很晚",
    pitch: "烤串上桌后，话题会自己续杯。",
  },
  {
    id: "eastgate-grill",
    name: "东门把把烧",
    category: "bbq",
    type: "烧烤",
    area: "重大虎溪东门/大学城南路",
    price: 54,
    score: 4.1,
    rank: 12,
    tags: ["把把烧", "夜宵", "孜然"],
    mood: "想吃得松弛一点，不要正式饭局",
    pitch: "把把烧的好处是，越临时越合理。",
  },
  {
    id: "paper-fish-juyuan",
    name: "菊园纸包鱼",
    category: "bbq",
    type: "烤鱼",
    area: "重大虎溪菊园/虎溪校区",
    price: 58,
    score: 4.1,
    rank: 13,
    tags: ["纸包鱼", "宿舍近", "下饭"],
    mood: "想吃鱼，但不想走太远",
    pitch: "距离够近，鱼够入味，就已经赢了一半。",
  },
  {
    id: "country-style-eastgate",
    name: "乡村基(重大虎溪东门店)",
    category: "light",
    type: "简餐",
    area: "重大虎溪东门/大学城南路",
    price: 32,
    score: 4.1,
    rank: 9,
    tags: ["快餐", "米饭", "稳定"],
    mood: "今天只想按时吃饭",
    pitch: "不负责惊艳，负责把能量条补满。",
  },
  {
    id: "mr-rice-xijie",
    name: "大米先生(大学城熙街店)",
    category: "light",
    type: "简餐",
    area: "大学城熙街/重大虎溪东门",
    price: 36,
    score: 4.2,
    rank: 10,
    tags: ["盖饭", "工作餐", "快吃"],
    mood: "想吃米饭，不想做复杂选择",
    pitch: "米饭和热菜到位，今天就能继续推进。",
  },
  {
    id: "mcd-u-city",
    name: "麦当劳(龙湖U城天街店)",
    category: "light",
    type: "简餐",
    area: "龙湖U城天街/尖顶坡",
    price: 38,
    score: 4.1,
    rank: 11,
    tags: ["汉堡", "夜间", "稳定"],
    mood: "想要一个不需要解释的答案",
    pitch: "汉堡薯条这套组合，胜在不用开会。",
  },
  {
    id: "kfc-xijie",
    name: "肯德基(大学城店)",
    category: "light",
    type: "简餐",
    area: "大学城熙街/大学城南路",
    price: 42,
    score: 4.0,
    rank: 12,
    tags: ["炸鸡", "快餐", "多人"],
    mood: "想吃点简单快乐的",
    pitch: "当大家都没主意，炸鸡会主动站出来。",
  },
  {
    id: "shaxian-juyuan",
    name: "沙县小吃(重大虎溪菊园店)",
    category: "light",
    type: "简餐",
    area: "重大虎溪菊园/虎溪校区",
    price: 22,
    score: 4.0,
    rank: 13,
    tags: ["蒸饺", "拌面", "省心"],
    mood: "想省钱、省路、省脑子",
    pitch: "朴素但有效，像一份能吃的备选方案。",
  },
  {
    id: "subway-u-city",
    name: "赛百味(龙湖U城天街店)",
    category: "light",
    type: "轻食",
    area: "龙湖U城天街/尖顶坡",
    price: 34,
    score: 4.0,
    rank: 14,
    tags: ["三明治", "轻食", "快吃"],
    mood: "想吃轻一点，但不能饿着",
    pitch: "把午饭折叠进三明治，效率很高。",
  },
  {
    id: "taixijia-u-city",
    name: "泰熙家(龙湖U城天街店)",
    category: "asian",
    type: "韩餐",
    area: "龙湖U城天街/尖顶坡",
    price: 48,
    score: 4.2,
    rank: 9,
    tags: ["韩式简餐", "拌饭", "年糕"],
    mood: "想吃点韩式但别太隆重",
    pitch: "拌饭和年糕负责把晚饭变得轻快。",
  },
  {
    id: "hangongyan-xijie",
    name: "韩宫宴炭火烤肉(大学城熙街店)",
    category: "asian",
    type: "韩餐",
    area: "大学城熙街/重大虎溪东门",
    price: 88,
    score: 4.3,
    rank: 10,
    tags: ["韩式烤肉", "多人", "芝士"],
    mood: "想烤肉，但想换个韩式频道",
    pitch: "烤盘滋滋响的时候，选择困难会自动静音。",
  },
  {
    id: "ndo-sushi-eastgate",
    name: "N多寿司(重大虎溪东门店)",
    category: "asian",
    type: "日料",
    area: "重大虎溪东门/大学城南路",
    price: 28,
    score: 4.1,
    rank: 11,
    tags: ["寿司", "外带", "轻快"],
    mood: "想吃点不辣的，最好能带走",
    pitch: "卷起来的饭，适合卷走今天的纠结。",
  },
  {
    id: "ding-shang-sushi-xijie",
    name: "町上寿司(大学城熙街店)",
    category: "asian",
    type: "日料",
    area: "大学城熙街/大学城南路",
    price: 36,
    score: 4.1,
    rank: 12,
    tags: ["寿司", "小食", "不辣"],
    mood: "今天想吃清爽一点",
    pitch: "不用重口也能吃得有点小开心。",
  },
  {
    id: "curry-u-city",
    name: "咖喱工房(龙湖U城天街店)",
    category: "asian",
    type: "咖喱",
    area: "龙湖U城天街/尖顶坡",
    price: 52,
    score: 4.1,
    rank: 13,
    tags: ["咖喱饭", "不辣", "单人"],
    mood: "想换口味，但不想冒险",
    pitch: "咖喱饭是温和派，适合让胃休会儿假。",
  },
  {
    id: "luckin-eastgate",
    name: "瑞幸咖啡(重大虎溪东门店)",
    category: "dessert",
    type: "咖啡",
    area: "重大虎溪东门/大学城南路",
    price: 22,
    score: 4.2,
    rank: 8,
    tags: ["咖啡", "外带", "续命"],
    mood: "正餐可以等等，咖啡先救场",
    pitch: "如果今天还要继续写，先把电量补上。",
  },
  {
    id: "starbucks-u-city",
    name: "星巴克(龙湖U城天街店)",
    category: "dessert",
    type: "咖啡",
    area: "龙湖U城天街/尖顶坡",
    price: 38,
    score: 4.2,
    rank: 9,
    tags: ["咖啡", "坐一会儿", "商场"],
    mood: "饭前饭后都想找地方缓一缓",
    pitch: "咖啡负责暂停键，让晚饭决策不那么急。",
  },
  {
    id: "chagee-xijie",
    name: "霸王茶姬(大学城熙街店)",
    category: "dessert",
    type: "茶饮",
    area: "大学城熙街/重大虎溪东门",
    price: 22,
    score: 4.2,
    rank: 10,
    tags: ["茶饮", "饭后", "排队"],
    mood: "饭还没定，奶茶先定",
    pitch: "先来一杯，至少今天已经解决了一个选择。",
  },
  {
    id: "chabaidao-xijie",
    name: "茶百道(大学城熙街店)",
    category: "dessert",
    type: "茶饮",
    area: "大学城熙街/大学城南路",
    price: 18,
    score: 4.1,
    rank: 11,
    tags: ["茶饮", "外带", "甜口"],
    mood: "想给这顿饭配一个甜尾巴",
    pitch: "正餐可能有分歧，甜的通常没有。",
  },
  {
    id: "shuyi-juyuan",
    name: "书亦烧仙草(重大虎溪菊园店)",
    category: "dessert",
    type: "茶饮",
    area: "重大虎溪菊园/虎溪校区",
    price: 16,
    score: 4.0,
    rank: 12,
    tags: ["烧仙草", "近", "饭后"],
    mood: "想在宿舍附近补一点甜",
    pitch: "走几步就能拿到的甜，适合奖励今天。",
  },
  {
    id: "mixue-eastgate",
    name: "蜜雪冰城(重大虎溪东门店)",
    category: "dessert",
    type: "茶饮",
    area: "重大虎溪东门/大学城南路",
    price: 8,
    score: 4.0,
    rank: 13,
    tags: ["茶饮", "便宜", "外带"],
    mood: "预算要克制，但快乐不能少",
    pitch: "性价比选手登场，晚饭气氛先热起来。",
  },
  {
    id: "order-spizza-daxuecheng",
    name: "S-pizza披萨速递(大学城店)",
    category: "light",
    type: "披萨",
    area: "大学城熙街/重大虎溪东门",
    price: 26,
    score: 4.7,
    rank: 1,
    tags: ["常点9单", "外卖高频", "最近2026-06-04"],
    mood: "想吃披萨，最好不用坐很久",
    pitch: "这是订单记录里的高频选手，适合直接复刻一次。",
    orderCount: 9,
    totalSpend: 232.45,
    lastOrdered: "2026-06-04 22:18",
  },
  {
    id: "order-jincheng-dongbei-box",
    name: "金成东北特色盒饭",
    category: "light",
    type: "简餐",
    area: "重大虎溪菊园/虎溪校区",
    price: 22,
    score: 4.9,
    rank: 1,
    tags: ["常点31单", "盒饭", "最近2026-06-29"],
    mood: "想吃饱，想要朴素但有效",
    pitch: "三十一次订单投票过的盒饭，比灵感更可靠。",
    orderCount: 31,
    totalSpend: 696.97,
    lastOrdered: "2026-06-29 14:08",
  },
  {
    id: "order-fried-chicken-daxuecheng",
    name: "叫了只炸鸡(大学城总店)",
    category: "light",
    type: "炸鸡",
    area: "大学城熙街/重大虎溪东门",
    price: 32,
    score: 4.5,
    rank: 3,
    tags: ["常点5单", "炸鸡", "最近2026-06-23"],
    mood: "想吃点快乐但不想开大会",
    pitch: "炸鸡负责把晚饭从犹豫拉到快乐区。",
    orderCount: 5,
    totalSpend: 160.74,
    lastOrdered: "2026-06-23 18:40",
  },
  {
    id: "order-piaozhengxi-korean-chicken",
    name: "朴正喜韩式炸鸡·火鸡面(大学城店)",
    category: "asian",
    type: "韩餐",
    area: "大学城熙街/重大虎溪东门",
    price: 21,
    score: 4.5,
    rank: 2,
    tags: ["常点5单", "韩式炸鸡", "火鸡面"],
    mood: "想吃炸鸡，但想换成韩式辣味",
    pitch: "炸鸡和火鸡面一起上，快乐值会很快拉满。",
    orderCount: 5,
    totalSpend: 104.5,
    lastOrdered: "2026-01-22 01:18",
  },
  {
    id: "order-duowei-fried-noodle",
    name: "多味炒粉王·炒饭·炒粉(大学城店)",
    category: "noodles",
    type: "炒粉",
    area: "重大虎溪东门/大学城熙街",
    price: 19,
    score: 4.5,
    rank: 1,
    tags: ["常点6单", "炒粉炒饭", "最近2026-07-01"],
    mood: "想吃快手碳水，越直接越好",
    pitch: "最近一次就在昨天，说明它还在你的胃口雷达里。",
    orderCount: 6,
    totalSpend: 111.87,
    lastOrdered: "2026-07-01 12:32",
    aliases: ["多味炒粉王(大学城店)"],
  },
  {
    id: "order-lefty-fried-rice",
    name: "左撇子十年炒饭·炒面·炒河粉(重庆大学城店)",
    category: "noodles",
    type: "炒饭",
    area: "大学城熙街/重大虎溪东门",
    price: 21,
    score: 4.3,
    rank: 2,
    tags: ["常点2单", "炒饭炒面", "大学城"],
    mood: "想吃一份锅气碳水，别太复杂",
    pitch: "炒饭炒面这类答案，适合把纠结快速炒散。",
    orderCount: 2,
    totalSpend: 41.24,
    lastOrdered: "2025-07-21 07:05",
  },
  {
    id: "order-mr-rice-u-city",
    name: "大米先生新鲜现炒(龙湖U城步行街店)",
    category: "light",
    type: "简餐",
    area: "龙湖U城天街/尖顶坡",
    price: 23,
    score: 4.3,
    rank: 4,
    tags: ["常点2单", "现炒", "最近2026-06-16"],
    mood: "想吃米饭和热菜，不想冒险",
    pitch: "现炒简餐是稳定派，适合赶时间又想吃热乎。",
    orderCount: 2,
    totalSpend: 45.7,
    lastOrdered: "2026-06-16 12:44",
  },
  {
    id: "order-mr-rice-xijie",
    name: "大米先生新鲜现炒(沙坪坝熙街店)",
    category: "light",
    type: "简餐",
    area: "大学城熙街/重大虎溪东门",
    price: 20,
    score: 4.2,
    rank: 6,
    tags: ["现炒", "米饭", "熙街"],
    mood: "想吃米饭热菜，也想离东门近一点",
    pitch: "现炒简餐不花哨，但很适合解决真实饥饿。",
    orderCount: 1,
    totalSpend: 19.9,
    lastOrdered: "2025-10-13 12:47",
  },
  {
    id: "order-caoshi-duck-neck",
    name: "曹氏鸭脖刘若兰(大学城店)",
    category: "bbq",
    type: "卤味",
    area: "大学城熙街/重大虎溪东门",
    price: 27,
    score: 4.5,
    rank: 1,
    tags: ["常点6单", "卤味", "最近2026-06-22"],
    mood: "想吃点辣卤小食，正餐可大可小",
    pitch: "鸭脖适合当饭局前奏，也适合直接变成夜宵。",
    orderCount: 6,
    totalSpend: 161.88,
    lastOrdered: "2026-06-22 13:24",
    aliases: ["曹氏鸭脖·刘若兰(大学城店)"],
  },
  {
    id: "order-youzhi-shrimp",
    name: "有只大虾小龙虾108元7斤",
    category: "sichuan",
    type: "小龙虾",
    area: "重大虎溪东门/大学城熙街",
    price: 62,
    score: 4.3,
    rank: 1,
    tags: ["常点3单", "小龙虾", "最近2026-06-11"],
    mood: "想吃得热闹一点，手也别闲着",
    pitch: "小龙虾适合把普通晚饭升级成战役。",
    orderCount: 3,
    totalSpend: 187,
    lastOrdered: "2026-06-11 18:39",
  },
  {
    id: "order-xiadinghong-shrimp",
    name: "虾鼎红小龙虾•O元购10只小龙虾",
    category: "sichuan",
    type: "小龙虾",
    area: "大学城熙街/重大虎溪东门",
    price: 89,
    score: 4.3,
    rank: 2,
    tags: ["常点2单", "小龙虾", "最近2026-06-28"],
    mood: "今天想吃虾，且不想假装清淡",
    pitch: "凌晨也下过单的选手，夜宵属性很明确。",
    orderCount: 2,
    totalSpend: 178.6,
    lastOrdered: "2026-06-28 00:37",
  },
  {
    id: "order-lessugar-cake",
    name: "LESSUGAR轻蜜(低糖生日蛋糕·甜品)",
    category: "dessert",
    type: "甜品",
    area: "重大虎溪菊园/大学城熙街",
    price: 96,
    score: 4.2,
    rank: 1,
    tags: ["低糖甜品", "生日蛋糕", "最近2026-05-19"],
    mood: "正餐先不说，今天需要一点甜的仪式感",
    pitch: "低糖甜品适合奖励自己，又不把负担拉满。",
    orderCount: 1,
    totalSpend: 96,
    lastOrdered: "2026-05-19 23:59",
  },
  {
    id: "order-shouchailu-roast-duck",
    name: "守柴炉烤鸭(康居西城店)",
    category: "sichuan",
    type: "烤鸭",
    area: "康居西城/大学城",
    price: 17,
    score: 4.2,
    rank: 3,
    tags: ["烤鸭", "外卖", "最近2026-06-18"],
    mood: "想吃点香的，但预算不想太重",
    pitch: "烤鸭负责给平价晚饭加一点香气。",
    orderCount: 1,
    totalSpend: 17.4,
    lastOrdered: "2026-06-18 13:57",
  },
  {
    id: "order-dongbei-dumpling",
    name: "东北劲水饺馆(重庆大学城店)",
    category: "noodles",
    type: "小吃",
    area: "大学城熙街/重大虎溪东门",
    price: 20,
    score: 4.2,
    rank: 2,
    tags: ["水饺", "夜间", "最近2026-06-24"],
    mood: "想吃点扎实但不重口的",
    pitch: "水饺是低摩擦答案，尤其适合深夜不想折腾。",
    orderCount: 1,
    totalSpend: 20,
    lastOrdered: "2026-06-24 23:33",
  },
  {
    id: "order-jiupin-rib-casserole",
    name: "九品酱·排骨砂锅煲(大学城店)",
    category: "sichuan",
    type: "砂锅",
    area: "重大虎溪东门/大学城熙街",
    price: 18,
    score: 4.2,
    rank: 4,
    tags: ["排骨砂锅", "下饭", "最近2026-06-19"],
    mood: "想吃热乎的砂锅饭",
    pitch: "排骨砂锅是把米饭认真对待的一种方式。",
    orderCount: 1,
    totalSpend: 18.4,
    lastOrdered: "2026-06-19 18:11",
  },
  {
    id: "order-caidapang-potato",
    name: "蔡大胖炸洋芋(熙街店)",
    category: "noodles",
    type: "小吃",
    area: "大学城熙街/重大虎溪东门",
    price: 18,
    score: 4.1,
    rank: 3,
    tags: ["炸洋芋", "小吃", "熙街"],
    mood: "想吃点小吃垫一下，不想正经开饭",
    pitch: "炸洋芋是轻量答案，但香气不会轻。",
    orderCount: 1,
    totalSpend: 18.4,
    lastOrdered: "2025-11-22 22:37",
  },
  {
    id: "order-tastien-fulicheng",
    name: "塔斯汀·中国汉堡(富力城店)",
    category: "light",
    type: "汉堡",
    area: "富力城/大学城",
    price: 27,
    score: 4.7,
    rank: 2,
    tags: ["常点9单", "汉堡", "最近2026-05-19"],
    mood: "想吃汉堡，但想换个中式口味",
    pitch: "塔斯汀适合在炸鸡汉堡区里换一点新鲜感。",
    orderCount: 9,
    totalSpend: 238.64,
    lastOrdered: "2026-05-19 22:16",
  },
  {
    id: "order-tastien-xijie",
    name: "塔斯汀·中国汉堡(熙街店)",
    category: "light",
    type: "汉堡",
    area: "大学城熙街/重大虎溪东门",
    price: 24,
    score: 4.2,
    rank: 7,
    tags: ["汉堡", "熙街", "外卖"],
    mood: "想吃汉堡，但希望离熙街更近",
    pitch: "同样是塔斯汀，这家更像东门附近的顺手选择。",
    orderCount: 1,
    totalSpend: 23.88,
    lastOrdered: "2025-10-26 20:38",
  },
  {
    id: "order-dachuan-chicken-pot",
    name: "大川叔叔鸡公煲(炒菜)",
    category: "sichuan",
    type: "鸡公煲",
    area: "重大虎溪菊园/大学城",
    price: 22,
    score: 4.1,
    rank: 5,
    tags: ["鸡公煲", "炒菜", "最近2026-04-29"],
    mood: "想吃一锅带菜带肉的下饭选手",
    pitch: "鸡公煲的好处是，点一份就像点了一桌小型正餐。",
    orderCount: 1,
    totalSpend: 21.72,
    lastOrdered: "2026-04-29 00:00",
  },
  {
    id: "order-yangguofu-u-city",
    name: "杨国福麻辣烫·麻辣拌(龙湖U城天街店)",
    category: "hotpot",
    type: "冒菜",
    area: "龙湖U城天街/尖顶坡",
    price: 25,
    score: 4.4,
    rank: 17,
    tags: ["常点3单", "麻辣烫", "最近2026-06-16"],
    mood: "想自己掌控每一口吃什么",
    pitch: "麻辣烫是选择困难的反面：想吃什么就夹什么。",
    orderCount: 3,
    totalSpend: 74.48,
    lastOrdered: "2026-06-16 18:37",
  },
  {
    id: "order-ziwei-luwei-hengda",
    name: "滋味现捞(恒大未来城店)",
    category: "bbq",
    type: "卤味",
    area: "恒大未来城/大学城",
    price: 34,
    score: 4.3,
    rank: 2,
    tags: ["常点4单", "现捞", "最近2026-06-17"],
    mood: "想吃点卤味配主食，别太正式",
    pitch: "现捞适合把晚饭变成一组随手但过瘾的小菜。",
    orderCount: 4,
    totalSpend: 134.7,
    lastOrdered: "2026-06-17 18:35",
  },
  {
    id: "order-mixue-fulicheng",
    name: "蜜雪冰城(富力城店)",
    category: "dessert",
    type: "茶饮",
    area: "富力城/大学城",
    price: 13,
    score: 4.1,
    rank: 2,
    tags: ["茶饮", "外卖", "最近2026-06-24"],
    mood: "想便宜快乐一下",
    pitch: "甜度和预算都能控制住，快乐不用太贵。",
    orderCount: 1,
    totalSpend: 13,
    lastOrdered: "2026-06-24 16:18",
  },
  {
    id: "order-sukiya-u-city",
    name: "食其家(重庆龙湖U城店)",
    category: "asian",
    type: "日式简餐",
    area: "龙湖U城天街/尖顶坡",
    price: 21,
    score: 4.2,
    rank: 1,
    tags: ["牛丼", "快吃", "最近2026-06-17"],
    mood: "想吃一碗不复杂的日式简餐",
    pitch: "牛丼负责快速落胃，适合不想和晚饭拉扯。",
    orderCount: 1,
    totalSpend: 21.3,
    lastOrdered: "2026-06-17 14:01",
  },
  {
    id: "order-niuxiangge-chuanchuan",
    name: "牛香阁串串王直营",
    category: "hotpot",
    type: "串串",
    area: "大学城熙街/重大虎溪东门",
    price: 72,
    score: 4.2,
    rank: 19,
    tags: ["到餐团购", "串串", "大学城"],
    mood: "想吃串串，想线下坐下来涮",
    pitch: "团购选手适合把随机晚饭变成现场开涮。",
    orderCount: 1,
    totalSpend: 71.9,
    lastOrdered: "2026-01-26 17:52",
  },
  {
    id: "order-greentea-u-city",
    name: "绿茶餐厅(重庆U城天街店)",
    category: "light",
    type: "简餐",
    area: "龙湖U城天街/尖顶坡",
    price: 25,
    score: 4.2,
    rank: 8,
    tags: ["商场正餐", "不太辣", "U城"],
    mood: "想吃坐得舒服一点的正餐",
    pitch: "绿茶餐厅适合把晚饭从外卖切回堂食模式。",
    orderCount: 1,
    totalSpend: 25.3,
    lastOrdered: "2025-10-23 17:56",
  },
  {
    id: "order-liuxuewang-stir-fry",
    name: "刘血旺-直播鲜炒川湘菜(大学城店)",
    category: "sichuan",
    type: "川湘菜",
    area: "大学城熙街/重大虎溪东门",
    price: 20,
    score: 4.1,
    rank: 6,
    tags: ["鲜炒", "川湘菜", "下饭"],
    mood: "想吃一份有锅气的下饭菜",
    pitch: "川湘鲜炒适合把平淡晚饭调到更有劲。",
    orderCount: 1,
    totalSpend: 19.71,
    lastOrdered: "2025-10-28 22:11",
  },
  {
    id: "order-yipin-dry-pot",
    name: "一品干锅(大学城店)",
    category: "sichuan",
    type: "干锅",
    area: "大学城熙街/重大虎溪东门",
    price: 15,
    score: 4.0,
    rank: 7,
    tags: ["干锅", "外卖", "大学城"],
    mood: "想吃点重口下饭，但预算别太高",
    pitch: "干锅是米饭的强力搭档，适合快速解决饥饿。",
    orderCount: 1,
    totalSpend: 14.9,
    lastOrdered: "2025-10-12 21:46",
  },
  {
    id: "order-yuwai-hotpot",
    name: "渝歪嘴火锅",
    category: "hotpot",
    type: "火锅",
    area: "大学城熙街/重大虎溪东门",
    price: 11,
    score: 4.0,
    rank: 20,
    tags: ["到餐团购", "火锅", "低价尝试"],
    mood: "想用很低成本试试火锅答案",
    pitch: "团购价很轻，适合把火锅冲动先试起来。",
    orderCount: 1,
    totalSpend: 10.8,
    lastOrdered: "2025-09-16 18:02",
  },
];


const initialCandidateIds = [
  "manjiao-congee-hotpot-shihao",
  "shu-da-xia-century",
  "xiaolongkan-huayang",
  "malubianbian-century",
  "banu-hongtang",
  "taode-century",
  "chenmapo-tianfu5",
  "kaojiang-century",
  "kaojiang-shihao",
  "wagas-tianfu5",
  "taier-century",
  "sushi-century",
  "thai-jiyu-century",
  "xibei-hongtang",
  "xiaocaiyuan-yuanda",
  "dami-light-ganghui",
  "mama-trotters-yintai",
  "frog-jinjiangli",
  "laoxiangji-rongchuang",
  "mianyang-rice-noodle",
];

const areaProfiles = [
  { label: "重大虎溪菊园", latitude: 29.6019, longitude: 106.3006, keywords: ["重大虎溪菊园", "虎溪校区", "大学城熙街", "重大虎溪东门", "富力城", "康居西城", "恒大未来城"] },
  { label: "重大虎溪东门", latitude: 29.5968, longitude: 106.3072, keywords: ["重大虎溪东门", "大学城熙街", "大学城南路", "龙湖U城", "富力城", "康居西城"] },
  { label: "大学城熙街", latitude: 29.5975, longitude: 106.3048, keywords: ["大学城熙街", "重大虎溪东门", "大学城南路", "重大虎溪菊园"] },
  { label: "龙湖U城", latitude: 29.6048, longitude: 106.3094, keywords: ["龙湖U城", "龙湖U城天街", "尖顶坡", "大学城北路"] },
  { label: "尖顶坡", latitude: 29.6093, longitude: 106.3056, keywords: ["尖顶坡", "龙湖U城", "龙湖U城天街", "大学城北路"] },
  { label: "世纪城", latitude: 30.5552, longitude: 104.0681, keywords: ["世纪城", "新会展", "上闲里"] },
  { label: "天府三街", latitude: 30.5532, longitude: 104.0734, keywords: ["天府三街", "软件园", "港汇中心"] },
  { label: "港汇中心", latitude: 30.5528, longitude: 104.0757, keywords: ["港汇中心", "天府三街"] },
  { label: "天府五街", latitude: 30.5456, longitude: 104.0669, keywords: ["天府五街", "银泰城", "红唐"] },
  { label: "银泰城", latitude: 30.5486, longitude: 104.0676, keywords: ["银泰城", "天府五街"] },
  { label: "红唐", latitude: 30.5428, longitude: 104.0642, keywords: ["红唐", "天府五街"] },
  { label: "世豪", latitude: 30.5578, longitude: 104.0622, keywords: ["世豪", "天府二街"] },
  { label: "远大", latitude: 30.5058, longitude: 104.0666, keywords: ["远大", "华府大道"] },
  { label: "保利锦江里", latitude: 30.5108, longitude: 104.0722, keywords: ["保利锦江里", "华府大道"] },
  { label: "融创", latitude: 30.4995, longitude: 104.071, keywords: ["融创", "华府大道"] },
  { label: "华阳", latitude: 30.5062, longitude: 104.0553, keywords: ["华阳", "南湖", "广都"] },
];

const LOCATION_IDEAL_RADIUS_KM = 1;
const LOCATION_MAX_RADIUS_KM = 3;

function getCategoryMeta(categoryId) {
  return categoryMeta[categoryId] || {
    label: categoryId,
    icon: "utensils",
    order: 99,
    color: "#777",
  };
}

function getCategories(data = restaurants) {
  const ids = [...new Set(data.map((restaurant) => restaurant.category))];
  return ids
    .map((id) => ({ id, ...getCategoryMeta(id) }))
    .sort((a, b) => a.order - b.order || a.label.localeCompare(b.label, "zh-Hans-CN"));
}

function getTypesForCategory(data = restaurants, category) {
  return [...new Set(data.filter((restaurant) => restaurant.category === category).map((restaurant) => restaurant.type))]
    .sort((a, b) => a.localeCompare(b, "zh-Hans-CN"));
}

function filterRestaurants(data = restaurants, filters = {}) {
  const { category, type, maxPrice, area } = filters;
  return data
    .filter((restaurant) => !category || restaurant.category === category)
    .filter((restaurant) => !type || restaurant.type === type)
    .filter((restaurant) => !maxPrice || restaurant.price <= maxPrice)
    .filter((restaurant) => !area || restaurant.area.includes(area))
    .slice()
    .sort((a, b) => a.rank - b.rank || b.score - a.score || a.price - b.price);
}

function normalizeText(value) {
  return String(value || "").trim();
}

function mergeRestaurantData(seedData = restaurants, customData = []) {
  const seen = new Set();
  return [...seedData, ...customData].filter((restaurant) => {
    if (!restaurant || !restaurant.id || seen.has(restaurant.id)) return false;
    seen.add(restaurant.id);
    return true;
  });
}

function getAreaCandidates(data = restaurants, areaQuery = "", limit = 20) {
  const query = normalizeText(areaQuery);
  const matches = query ? filterRestaurants(data, { area: query }) : getInitialCandidates(data);
  return matches.slice(0, limit);
}

function rankRestaurants(data = []) {
  return data.slice().sort((a, b) => a.rank - b.rank || b.score - a.score || a.price - b.price);
}

function uniqueRestaurants(data = []) {
  return data.filter((restaurant, index, list) => {
    return list.findIndex((item) => item.id === restaurant.id) === index;
  });
}

function distanceKm(a, b) {
  const earthRadiusKm = 6371;
  const lat1 = (a.latitude * Math.PI) / 180;
  const lat2 = (b.latitude * Math.PI) / 180;
  const deltaLat = ((b.latitude - a.latitude) * Math.PI) / 180;
  const deltaLng = ((b.longitude - a.longitude) * Math.PI) / 180;
  const sinLat = Math.sin(deltaLat / 2);
  const sinLng = Math.sin(deltaLng / 2);
  const h = sinLat * sinLat + Math.cos(lat1) * Math.cos(lat2) * sinLng * sinLng;
  return 2 * earthRadiusKm * Math.atan2(Math.sqrt(h), Math.sqrt(1 - h));
}

function findNearestArea(coords, profiles = areaProfiles) {
  if (!coords || !Number.isFinite(coords.latitude) || !Number.isFinite(coords.longitude)) {
    throw new Error("Valid latitude and longitude are required");
  }
  return profiles
    .map((profile) => ({ ...profile, distanceKm: distanceKm(coords, profile) }))
    .sort((a, b) => a.distanceKm - b.distanceKm)[0];
}

function getScopedRestaurants(data = restaurants, scope = { type: "all" }) {
  if (!scope || scope.type === "all") {
    return rankRestaurants(data);
  }

  if (scope.type === "area") {
    const query = normalizeText(scope.query);
    if (!query) return rankRestaurants(data);
    const profile = areaProfiles.find((area) => area.label === query || area.keywords.includes(query));
    const keywords = profile ? profile.keywords : [query];
    return rankRestaurants(uniqueRestaurants(keywords.flatMap((keyword) => filterRestaurants(data, { area: keyword }))));
  }

  if (scope.type === "location") {
    const nearest = findNearestArea(scope.coords);
    if (nearest.distanceKm > LOCATION_MAX_RADIUS_KM) {
      return [];
    }
    return rankRestaurants(uniqueRestaurants(nearest.keywords.flatMap((keyword) => filterRestaurants(data, { area: keyword }))));
  }

  return rankRestaurants(data);
}

function getLocationCandidates(data = restaurants, coords, limit = 20) {
  const nearest = findNearestArea(coords);
  if (nearest.distanceKm > LOCATION_MAX_RADIUS_KM) {
    return [];
  }

  const matches = getScopedRestaurants(data, { type: "location", coords });
  return matches.slice(0, limit);
}

function formatLocationDistance(km) {
  if (km < 0.1) return "100m内";
  if (km < 1) return `${Math.round(km * 1000)}m`;
  return `${km.toFixed(1)}km`;
}

function hashText(value) {
  let hash = 0;
  for (let index = 0; index < value.length; index += 1) {
    hash = (hash * 31 + value.charCodeAt(index)) >>> 0;
  }
  return hash.toString(36);
}

function createCustomRestaurant(input = {}) {
  const name = normalizeText(input.name);
  const area = normalizeText(input.area);
  if (!name || !area) {
    throw new Error("Custom restaurant requires name and area");
  }

  const category = categoryMeta[input.category] ? input.category : "light";
  const type = normalizeText(input.type) || "自定义";
  const price = Number.parseInt(input.price, 10);
  const tags = Array.isArray(input.tags) ? input.tags : normalizeText(input.tags).split(/[，,]/);
  const cleanTags = tags.map((tag) => normalizeText(tag)).filter(Boolean);

  return {
    id: `custom-${hashText(`${name}-${area}-${category}-${type}`)}`,
    name,
    category,
    type,
    area,
    price: Number.isFinite(price) && price > 0 ? price : 50,
    score: 4.2,
    rank: 50,
    tags: cleanTags.length ? cleanTags.slice(0, 4) : ["自己添加", "候选席"],
    mood: "这是你亲自塞进候选席的选手",
    pitch: "既然已经想到它，就给它一次上桌机会。",
    custom: true,
  };
}

function loadCustomRestaurants() {
  try {
    const raw = window.localStorage.getItem("food-decider-custom-restaurants");
    const parsed = raw ? JSON.parse(raw) : [];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCustomRestaurants(customRestaurants) {
  window.localStorage.setItem("food-decider-custom-restaurants", JSON.stringify(customRestaurants));
}

function getInitialCandidates(data = restaurants) {
  const byId = new Map(data.map((restaurant) => [restaurant.id, restaurant]));
  const selected = initialCandidateIds.map((id) => byId.get(id)).filter(Boolean);
  const selectedIds = new Set(selected.map((restaurant) => restaurant.id));
  const custom = data.filter((restaurant) => restaurant.custom && !selectedIds.has(restaurant.id));
  return [...custom, ...selected].slice(0, 24);
}

function removeCandidate(candidates, restaurantId) {
  return candidates.filter((restaurant) => restaurant.id !== restaurantId);
}

function pickRandomRestaurant(candidates, random = Math.random) {
  if (!Array.isArray(candidates) || candidates.length === 0) {
    throw new Error("No candidates available for the wheel");
  }
  const index = Math.min(Math.floor(random() * candidates.length), candidates.length - 1);
  return candidates[index];
}

function buildWheelSegments(candidates) {
  const slice = (Math.PI * 2) / candidates.length;
  return candidates.map((restaurant, index) => ({
    restaurant,
    displayLabel: String(index + 1).padStart(2, "0"),
    startAngle: index * slice,
    endAngle: index === candidates.length - 1 ? Math.PI * 2 : (index + 1) * slice,
  }));
}

function formatPrice(price) {
  return `¥${price}/人`;
}

function createRestaurantCard(restaurant, options = {}) {
  const meta = getCategoryMeta(restaurant.category);
  const action = options.actionLabel
    ? `<button class="ghost small" data-action="${options.action}" data-id="${restaurant.id}">${iconSvg(options.actionIcon || "ban")}${options.actionLabel}</button>`
    : "";

  return `<article class="restaurant-card" style="--accent:${meta.color}">
    <div class="rank-badge">#${restaurant.rank}</div>
    <div>
      <p class="eyebrow">${iconSvg(meta.icon)}${meta.label} · ${restaurant.type}</p>
      <h3>${restaurant.name}</h3>
      <p class="pitch">${restaurant.pitch}</p>
      <div class="meta-row">
        <span>${iconSvg("map")}${restaurant.area}</span>
        <span>${iconSvg("ranking")}${restaurant.score.toFixed(1)}</span>
        <span>${iconSvg("wallet")}${formatPrice(restaurant.price)}</span>
      </div>
      <div class="tag-row">${restaurant.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
    </div>
    ${action}
  </article>`;
}

function createCandidateRow(restaurant, index = 0) {
  const meta = getCategoryMeta(restaurant.category);
  return `<article class="candidate-row" style="--accent:${meta.color}">
    <div class="candidate-icon">${iconSvg(meta.icon)}</div>
    <div class="candidate-main">
      <div class="candidate-title">
        <strong>${restaurant.name}</strong>
        <span>${String(index + 1).padStart(2, "0")}</span>
      </div>
      <div class="candidate-meta">
        <span>${restaurant.type}</span>
        <span>${restaurant.area}</span>
        <span>${restaurant.score.toFixed(1)}</span>
        <span>${formatPrice(restaurant.price)}</span>
      </div>
    </div>
    <button class="pass-button" data-action="pass" data-id="${restaurant.id}">${iconSvg("ban")}pass</button>
  </article>`;
}

function initApp() {
  hydrateStaticIcons();
  const root = document.querySelector("[data-app]");
  if (!root) return;

  const modeButtons = [...document.querySelectorAll("[data-mode]")];
  const treePanel = document.querySelector("[data-panel='tree']");
  const wheelPanel = document.querySelector("[data-panel='wheel']");
  const categoryGrid = document.querySelector("[data-category-grid]");
  const typeGrid = document.querySelector("[data-type-grid]");
  const resultList = document.querySelector("[data-tree-results]");
  const breadcrumb = document.querySelector("[data-breadcrumb]");
  const candidateList = document.querySelector("[data-candidates]");
  const passedList = document.querySelector("[data-passed]");
  const wheelCanvas = document.querySelector("[data-wheel]");
  const wheelResult = document.querySelector("[data-wheel-result]");
  const spinButton = document.querySelector("[data-spin]");
  const resetButton = document.querySelector("[data-reset]");
  const areaQueryInput = document.querySelector("[data-area-query]");
  const refreshAreaButton = document.querySelector("[data-refresh-area]");
  const useLocationButton = document.querySelector("[data-use-location]");
  const locationStatus = document.querySelector("[data-location-status]");
  const customForm = document.querySelector("[data-add-restaurant]");
  const customStatus = document.querySelector("[data-custom-status]");
  const canvasContext = wheelCanvas.getContext("2d");
  const customRestaurants = loadCustomRestaurants();
  const allRestaurants = mergeRestaurantData(restaurants, customRestaurants);

  const state = {
    mode: "tree",
    category: null,
    type: null,
    allRestaurants,
    customRestaurants,
    scope: { type: "all", label: "全地图" },
    scopedRestaurants: allRestaurants,
    candidates: getInitialCandidates(allRestaurants),
    passed: [],
    spinning: false,
    rotation: 0,
    winner: null,
  };

  function setMode(mode) {
    state.mode = mode;
    modeButtons.forEach((button) => button.classList.toggle("active", button.dataset.mode === mode));
    treePanel.hidden = mode !== "tree";
    wheelPanel.hidden = mode !== "wheel";
    if (mode === "wheel") drawWheel();
  }

  function getDefaultCandidatesForCurrentScope() {
    const initial = getInitialCandidates(state.scopedRestaurants);
    return (initial.length ? initial : state.scopedRestaurants).slice(0, 24);
  }

  function syncScopedRestaurants() {
    state.scopedRestaurants = getScopedRestaurants(state.allRestaurants, state.scope);
    if (state.category && !state.scopedRestaurants.some((restaurant) => restaurant.category === state.category)) {
      state.category = null;
      state.type = null;
    }
    if (state.type && !state.scopedRestaurants.some((restaurant) => restaurant.category === state.category && restaurant.type === state.type)) {
      state.type = null;
    }
  }

  function resetWheelForScope(candidates = getDefaultCandidatesForCurrentScope()) {
    state.candidates = candidates.slice(0, 24);
    state.passed = [];
    state.winner = null;
    state.rotation = 0;
  }

  function renderCategories() {
    const categories = getCategories(state.scopedRestaurants);
    categoryGrid.innerHTML = categories.length ? categories.map((category) => `
      <button class="choice-card ${state.category === category.id ? "selected" : ""}" data-category="${category.id}" style="--accent:${category.color}">
        ${iconSvg(category.icon)}
        <span>${category.label}</span>
        <small>${filterRestaurants(state.scopedRestaurants, { category: category.id }).length} 个据点</small>
      </button>`).join("")
      : `<div class="empty-state">${iconSvg("map")}<span>这个位置还没有候选，换个商圈或自己加一家。</span></div>`;
  }

  function renderTypes() {
    if (!state.category) {
      typeGrid.innerHTML = `<div class="empty-state">${iconSvg("pointer")}<span>先选一个大方向，食物雷达才会开始锁定。</span></div>`;
      return;
    }
    typeGrid.innerHTML = getTypesForCategory(state.scopedRestaurants, state.category).map((type) => `
      <button class="type-pill ${state.type === type ? "selected" : ""}" data-type="${type}">${type}</button>`).join("");
  }

  function renderTreeResults() {
    const matches = filterRestaurants(state.scopedRestaurants, { category: state.category, type: state.type });
    const hint = state.category
      ? `${getCategoryMeta(state.category).label}${state.type ? ` / ${state.type}` : ""}`
      : "全地图扫描";
    breadcrumb.textContent = `${state.scope.label || "全地图"} · ${hint} · 找到 ${matches.length} 个候选`;
    resultList.innerHTML = matches.length
      ? matches.map((restaurant) => createRestaurantCard(restaurant)).join("")
      : `<div class="empty-state">${iconSvg("dice")}<span>这个组合太刁钻了，换个口味继续抓。</span></div>`;
  }

  function renderTree() {
    renderCategories();
    renderTypes();
    renderTreeResults();
  }

  function renderCandidates() {
    candidateList.innerHTML = state.candidates.length
      ? state.candidates.map((restaurant, index) => createCandidateRow(restaurant, index)).join("")
      : `<div class="empty-state candidate-empty">${iconSvg("map")}<span>候选席暂时空着。换个商圈、用当前位置，或者自己加一家。</span></div>`;

    passedList.innerHTML = state.passed.length
      ? state.passed.map((restaurant) => `<button class="restore-chip" data-restore="${restaurant.id}">${iconSvg("reset")}${restaurant.name}</button>`).join("")
      : `<span class="muted">还没有 pass，看来今天你很宽容。</span>`;

    spinButton.disabled = state.candidates.length === 0 || state.spinning;
    drawWheel();
  }

  function drawWheel(rotation = state.rotation) {
    const size = wheelCanvas.width;
    const center = size / 2;
    canvasContext.clearRect(0, 0, size, size);

    if (!state.candidates.length) {
      canvasContext.fillStyle = "#f4f0e8";
      canvasContext.beginPath();
      canvasContext.arc(center, center, center - 10, 0, Math.PI * 2);
      canvasContext.fill();
      canvasContext.fillStyle = "#4b4742";
      canvasContext.font = "600 22px sans-serif";
      canvasContext.textAlign = "center";
      canvasContext.fillText("候选清空", center, center);
      return;
    }

    const segments = buildWheelSegments(state.candidates);
    segments.forEach((segment, index) => {
      const meta = getCategoryMeta(segment.restaurant.category);
      canvasContext.beginPath();
      canvasContext.moveTo(center, center);
      canvasContext.arc(center, center, center - 10, segment.startAngle + rotation, segment.endAngle + rotation);
      canvasContext.closePath();
      canvasContext.fillStyle = index % 2 ? meta.color : lightenColor(meta.color, 16);
      canvasContext.fill();

      const angle = (segment.startAngle + segment.endAngle) / 2 + rotation;
      canvasContext.save();
      canvasContext.translate(center, center);
      canvasContext.rotate(angle);
      canvasContext.textAlign = "center";
      canvasContext.textBaseline = "middle";
      canvasContext.fillStyle = "#fff";
      canvasContext.font = "900 22px system-ui, sans-serif";
      canvasContext.strokeStyle = "rgba(41, 35, 29, 0.34)";
      canvasContext.lineWidth = 4;
      canvasContext.strokeText(segment.displayLabel, center - 68, 0);
      canvasContext.fillText(segment.displayLabel, center - 68, 0);
      canvasContext.restore();
    });

    canvasContext.beginPath();
    canvasContext.arc(center, center, 48, 0, Math.PI * 2);
    canvasContext.fillStyle = "#fff8ea";
    canvasContext.fill();
    canvasContext.strokeStyle = "#29231d";
    canvasContext.lineWidth = 3;
    canvasContext.stroke();
    canvasContext.fillStyle = "#29231d";
    canvasContext.font = "800 20px sans-serif";
    canvasContext.textAlign = "center";
    canvasContext.fillText("开饭", center, center + 7);
  }

  function lightenColor(hex, amount) {
    const value = Number.parseInt(hex.slice(1), 16);
    const r = Math.min(255, (value >> 16) + amount);
    const g = Math.min(255, ((value >> 8) & 0xff) + amount);
    const b = Math.min(255, (value & 0xff) + amount);
    return `rgb(${r}, ${g}, ${b})`;
  }

  function renderWheelResult(restaurant) {
    state.winner = restaurant;
    wheelResult.innerHTML = `<div class="result-pop">
      <p class="eyebrow">${iconSvg("trophy")}转盘宣判</p>
      <h3>${restaurant.name}</h3>
      <p>${restaurant.pitch}</p>
      <div class="meta-row">
        <span>${iconSvg("map")}${restaurant.area}</span>
        <span>${iconSvg("ranking")}${restaurant.score.toFixed(1)}</span>
        <span>${iconSvg("wallet")}${formatPrice(restaurant.price)}</span>
      </div>
      <div class="result-actions">
        <button class="primary" data-accept>${iconSvg("check")}就它了</button>
        <button class="ghost" data-remove-winner="${restaurant.id}">${iconSvg("trash")}突然不想吃，删掉重转</button>
      </div>
    </div>`;
  }

  function spinWheel() {
    if (state.spinning || !state.candidates.length) return;
    state.spinning = true;
    spinButton.disabled = true;
    wheelResult.innerHTML = `<div class="empty-state energetic">${iconSvg("wheel")}<span>命运正在翻菜单，稍等。</span></div>`;

    const winner = pickRandomRestaurant(state.candidates);
    const winnerIndex = state.candidates.findIndex((restaurant) => restaurant.id === winner.id);
    const slice = (Math.PI * 2) / state.candidates.length;
    const pointerAngle = -Math.PI / 2;
    const winnerMiddle = winnerIndex * slice + slice / 2;
    const targetRotation = pointerAngle - winnerMiddle + Math.PI * 2 * (4 + Math.random() * 2);
    const startRotation = state.rotation;
    const duration = 2200;
    const start = performance.now();

    function frame(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      state.rotation = startRotation + (targetRotation - startRotation) * eased;
      drawWheel(state.rotation);
      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        state.spinning = false;
        spinButton.disabled = false;
        state.rotation %= Math.PI * 2;
        renderWheelResult(winner);
      }
    }

    requestAnimationFrame(frame);
  }

  document.addEventListener("click", (event) => {
    const modeButton = event.target.closest("[data-mode]");
    if (modeButton) setMode(modeButton.dataset.mode);

    const categoryButton = event.target.closest("[data-category]");
    if (categoryButton) {
      state.category = categoryButton.dataset.category;
      state.type = null;
      renderTree();
    }

    const typeButton = event.target.closest("[data-type]");
    if (typeButton) {
      state.type = typeButton.dataset.type;
      renderTree();
    }

    const passButton = event.target.closest("[data-action='pass']");
    if (passButton) {
      const restaurant = state.candidates.find((item) => item.id === passButton.dataset.id);
      state.candidates = removeCandidate(state.candidates, passButton.dataset.id);
      if (restaurant) state.passed = [...state.passed, restaurant];
      renderCandidates();
    }

    const restoreButton = event.target.closest("[data-restore]");
    if (restoreButton) {
      const restaurant = state.passed.find((item) => item.id === restoreButton.dataset.restore);
      state.passed = removeCandidate(state.passed, restoreButton.dataset.restore);
      if (restaurant) state.candidates = [...state.candidates, restaurant].sort((a, b) => a.rank - b.rank);
      renderCandidates();
    }

    const removeWinnerButton = event.target.closest("[data-remove-winner]");
    if (removeWinnerButton) {
      const restaurant = state.candidates.find((item) => item.id === removeWinnerButton.dataset.removeWinner);
      state.candidates = removeCandidate(state.candidates, removeWinnerButton.dataset.removeWinner);
      if (restaurant) state.passed = [...state.passed, restaurant];
      wheelResult.innerHTML = `<div class="empty-state">${iconSvg("dice")}<span>已踢出候选席，转盘请求复赛。</span></div>`;
      renderCandidates();
    }

    if (event.target.closest("[data-accept]")) {
      wheelResult.querySelector(".result-pop").classList.add("accepted");
    }

    const areaChip = event.target.closest("[data-area-chip]");
    if (areaChip) {
      areaQueryInput.value = areaChip.dataset.areaChip;
      refreshCandidatesForArea(areaChip.dataset.areaChip);
    }
  });

  spinButton.addEventListener("click", spinWheel);
  refreshAreaButton.addEventListener("click", () => {
    refreshCandidatesForArea(areaQueryInput.value);
  });
  useLocationButton.addEventListener("click", () => {
    refreshCandidatesForCurrentLocation();
  });
  areaQueryInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      refreshCandidatesForArea(areaQueryInput.value);
    }
  });
  customForm.addEventListener("submit", (event) => {
    event.preventDefault();
    try {
      const custom = createCustomRestaurant({
        name: customForm.querySelector("[data-custom-name]").value,
        area: customForm.querySelector("[data-custom-area]").value,
        category: customForm.querySelector("[data-custom-category]").value,
        type: customForm.querySelector("[data-custom-type]").value,
        price: customForm.querySelector("[data-custom-price]").value,
        tags: customForm.querySelector("[data-custom-tags]").value,
      });
      state.customRestaurants = mergeRestaurantData([], [custom, ...state.customRestaurants]);
      saveCustomRestaurants(state.customRestaurants);
      state.allRestaurants = mergeRestaurantData(restaurants, state.customRestaurants);
      syncScopedRestaurants();
      if (state.scopedRestaurants.some((restaurant) => restaurant.id === custom.id)) {
        state.candidates = [custom, ...removeCandidate(state.candidates, custom.id)].slice(0, 24);
      }
      state.passed = removeCandidate(state.passed, custom.id);
      customStatus.textContent = "已加入";
      customForm.reset();
      renderTree();
      renderCandidates();
    } catch {
      customStatus.textContent = "店名和位置必填";
    }
  });
  resetButton.addEventListener("click", () => {
    resetWheelForScope();
    wheelResult.innerHTML = `<div class="empty-state">${iconSvg("dice")}<span>先 pass 掉不想吃的，再交给命运。</span></div>`;
    renderCandidates();
  });

  function refreshCandidatesForArea(areaQuery) {
    const query = normalizeText(areaQuery);
    state.scope = query ? { type: "area", query, label: query } : { type: "all", label: "全地图" };
    syncScopedRestaurants();
    resetWheelForScope(query ? state.scopedRestaurants : getDefaultCandidatesForCurrentScope());
    wheelResult.innerHTML = `<div class="empty-state">${iconSvg("target")}<span>${state.scopedRestaurants.length ? `已按「${query || "全地图"}」刷新两个模式。` : "没搜到，不再塞入其他地区候选。"}</span></div>`;
    renderTree();
    renderCandidates();
  }

  function refreshCandidatesForCurrentLocation() {
    if (!navigator.geolocation) {
      locationStatus.textContent = "当前浏览器不支持定位，可以手动输入商圈。";
      return;
    }

    locationStatus.textContent = "正在定位附近商圈...";
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        const nearest = findNearestArea(coords);
        const distanceText = formatLocationDistance(nearest.distanceKm);
        areaQueryInput.value = nearest.distanceKm <= LOCATION_MAX_RADIUS_KM ? nearest.label : "";
        state.scope = { type: "location", coords, label: nearest.distanceKm <= LOCATION_MAX_RADIUS_KM ? nearest.label : "未覆盖位置" };
        syncScopedRestaurants();
        resetWheelForScope(state.scopedRestaurants);

        if (nearest.distanceKm > LOCATION_MAX_RADIUS_KM) {
          locationStatus.textContent = `最近覆盖点是「${nearest.label}」，约 ${distanceText}，超过 3km，先不硬塞成都候选。`;
          wheelResult.innerHTML = `<div class="empty-state">${iconSvg("map")}<span>当前位置暂未覆盖，可以手动输入商圈或自己加一家。</span></div>`;
          renderTree();
          renderCandidates();
          return;
        }

        const radiusHint = nearest.distanceKm <= LOCATION_IDEAL_RADIUS_KM ? "1km 内命中" : "3km 覆盖圈内";
        locationStatus.textContent = `定位到「${nearest.label}」${distanceText}，${radiusHint}，两个模式已限制在附近 ${state.scopedRestaurants.length} 个候选。`;
        wheelResult.innerHTML = `<div class="empty-state">${iconSvg("map")}<span>已按当前位置匹配「${nearest.label}」，两个模式只看附近餐厅。</span></div>`;
        renderTree();
        renderCandidates();
      },
      () => {
        locationStatus.textContent = "定位未授权或超时，可以手动输入商圈。";
      },
      {
        enableHighAccuracy: false,
        timeout: 8000,
        maximumAge: 600000,
      },
    );
  }

  renderTree();
  renderCandidates();
  setMode("tree");
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", initApp);
}

if (typeof module !== "undefined") {
  module.exports = {
    restaurants,
    categoryMeta,
    LOCATION_IDEAL_RADIUS_KM,
    LOCATION_MAX_RADIUS_KM,
    getCategories,
    getTypesForCategory,
    getInitialCandidates,
    getAreaCandidates,
    getLocationCandidates,
    getScopedRestaurants,
    findNearestArea,
    createCustomRestaurant,
    mergeRestaurantData,
    filterRestaurants,
    removeCandidate,
    pickRandomRestaurant,
    buildWheelSegments,
    iconSvg,
  };
}
