export type Crop = "玉米" | "小麦";

export interface Variety {
  slug: string;
  name: string;
  crop: Crop;
  badge?: string;
  tagline: string;
  image: string;
  /** 生育期 */
  growthPeriod: string;
  /** 审定编号 / 报审状态 */
  approvalNo: string;
  /** 适宜区域 */
  region: string;
  /** 突出特点，列表页展示三条 */
  highlights: string[];
  /** 特征特性 */
  features: string[];
  /** 产量表现 */
  yield: string;
  /** 抗性 */
  resistance: string;
  /** 栽培要点 */
  cultivation: string[];
  /** 包装规格 */
  packing: string;
  /** 是否首页推荐 */
  featured?: boolean;
}

export const crops: Crop[] = ["玉米", "小麦"];

export const varieties: Variety[] = [
  {
    slug: "liangchun-789",
    name: "良纯七八九",
    crop: "玉米",
    badge: "主推大单品",
    tagline: "五紫不倒翁，抗倒免化控的夏播粮用玉米",
    image: "/images/varieties/liangchun-789.webp",
    growthPeriod: "冀中南夏播 102–105 天",
    approvalNo: "自有五紫品系 · 自主试验报审",
    region: "石家庄、邢台、邯郸等冀中南夏播区域",
    highlights: ["五紫特征：根紫、秆紫、叶鞘紫、花丝紫、苞叶后期转紫", "三层霸王根系，抗倒伏能力强，多数地块无需化控", "活秆成熟，青枝绿叶到收获，不空秆、少花粒"],
    features: [
      "五紫特征齐全：根系、茎秆、叶鞘、花丝均为紫色，后期苞叶转紫，田间辨识度高。",
      "株高约 2.6 米，穗位约 90 厘米，三层霸王根系，抓地牢固。",
      "活秆成熟，青枝绿叶持续到收获期，站秆性好，适合机械化收获。",
    ],
    yield: "冀中南多点示范表现稳定，具体产量以当地实测为准；建议按 4500 株/亩密度种植。",
    resistance: "抗锈病、大小斑病、穗腐病；耐高温、不空秆、少花粒。",
    cultivation: [
      "冀中南夏播，6 月上中旬适期早播，亩保苗 4500 株。",
      "重施基肥，大喇叭口期追施氮肥，配合磷钾肥。",
      "抗倒能力强，多数地块无需化控；注意防治玉米螟与草地贪夜蛾。",
    ],
    packing: "按单粒播种规格包装，具体规格以到货批次为准",
    featured: true,
  },
  {
    slug: "zi-zhugan",
    name: "紫竹竿",
    crop: "玉米",
    badge: "青贮专用",
    tagline: "粮饲兼用，秸秆粗壮多汁、持绿期长的青贮玉米",
    image: "/images/varieties/zi-zhugan.webp",
    growthPeriod: "冀中南夏播 104–107 天",
    approvalNo: "自有五紫品系 · 自主试验报审",
    region: "冀中南养殖配套种植基地、规模化青贮订单地块",
    highlights: ["五紫品系，秸秆粗壮多汁，持绿周期长", "生物产量高，青贮品质指标优异", "籽粒成熟后也可收粮，一份地块两份收益"],
    features: [
      "五紫品系，茎秆粗壮多汁，持绿周期长，适合全株青贮。",
      "中性洗涤纤维、酸性洗涤纤维、粗蛋白、淀粉等指标符合青贮奶牛饲料标准，可用于品种报审检测。",
      "籽粒成熟后仍可收粮，粮饲两用，降低单一用途的市场风险。",
    ],
    yield: "以全株青贮生物产量为主，具体数据以当年实测为准。",
    resistance: "五紫品系抗倒伏能力强，田间持绿性好，抗主要叶部病害。",
    cultivation: [
      "冀中南夏播，6 月上中旬播种，密度按青贮用途可适当上调。",
      "全株青贮在乳线 1/2 至 3/4 时收获，保证干物质与淀粉积累。",
      "青贮地块注意施足氮肥，保证秸秆产量与品质。",
    ],
    packing: "按青贮专用规格包装，具体以订单约定为准",
    featured: true,
  },
  {
    slug: "wuzi-zhanshen",
    name: "五紫战神",
    crop: "玉米",
    badge: "五紫升级款",
    tagline: "抗病谱更广、耐旱耐高温的粮用玉米升级款",
    image: "/images/varieties/wuzi-zhanshen.webp",
    growthPeriod: "冀中南夏播约 103 天",
    approvalNo: "自有五紫品系 · 自主试验报审",
    region: "冀中南夏播大田",
    highlights: ["延续全套五紫特征，根系更发达", "抗病谱更广，耐高温、耐干旱能力更强", "灾害年份稳产性突出，容错率高"],
    features: [
      "延续五紫系列全套特征，根系更发达，株高与穗位和良纯七八九接近。",
      "在高温、干旱年份结实性稳定，空秆率低，稳产性好。",
      "适合种植大户连片规模化种植，管理容错率高。",
    ],
    yield: "冀中南多点示范表现稳定，灾害年份稳产性突出，具体产量以当地实测为准。",
    resistance: "抗病谱较五紫系列更广，耐高温、耐干旱能力强。",
    cultivation: [
      "冀中南夏播，亩保苗 4500 株。",
      "适期早播，避开花期高温；旱情发生时及时灌溉。",
      "连片规模化种植注意统一播期与密度，便于机械作业。",
    ],
    packing: "按单粒播种规格包装，具体规格以到货批次为准",
    featured: true,
  },
  {
    slug: "mintai-1t",
    name: "民泰 1T",
    crop: "玉米",
    badge: "引种备案",
    tagline: "高淀粉粮用玉米，粮库收购认可度高",
    image: "/images/varieties/mintai-1t.webp",
    growthPeriod: "河北北部春播；冀中南可做夏播示范",
    approvalNo: "冀审玉 20248007",
    region: "河北北部春播，冀中南夏播示范种植",
    highlights: ["籽粒容重 772g/L，粗淀粉 70.29%", "中抗茎腐病、穗腐病、灰斑病", "春播区域试验亩产约 780 公斤"],
    features: [
      "株型半紧凑，株高 280 厘米，群体通风透光好。",
      "籽粒容重 772g/L，粗淀粉含量 70.29%，商品品相好，适合淀粉加工订单。",
      "适应性广，河北北部春播为主，冀中南可做夏播示范。",
    ],
    yield: "春播区域试验亩产约 780 公斤，适应性广。",
    resistance: "中抗茎腐病、穗腐病、灰斑病。",
    cultivation: [
      "河北北部春播，地温稳定通过 10℃ 后播种；冀中南夏播需先做小面积示范。",
      "合理密植，注意种肥隔离，避免烧种。",
      "适期晚收，籽粒乳线消失后机械收获。",
    ],
    packing: "按单粒播种规格包装，具体规格以到货批次为准",
  },
  {
    slug: "ludan-221",
    name: "鲁单 221",
    crop: "玉米",
    badge: "青贮专用",
    tagline: "专业青贮玉米，持绿性好、品质指标适配奶牛饲喂",
    image: "/images/varieties/ludan-221.webp",
    growthPeriod: "夏播 104 天",
    approvalNo: "鲁审玉 20246053",
    region: "冀中南引种备案夏播，养殖基地",
    highlights: ["株高 281.9cm，穗位 109.3cm，持绿性优秀", "干物质 37.7%，粗蛋白 7.14%", "高抗南方锈病、茎腐病、瘤黑粉病"],
    features: [
      "株高 281.9 厘米，穗位 109.3 厘米，持绿性优秀，适合全株青贮。",
      "干物质含量 37.7%，青贮品质稳定。",
      "青贮品质：粗蛋白 7.14%、中性洗涤纤维 39.2%、酸性洗涤纤维 22.7%，适配奶牛饲喂标准。",
    ],
    yield: "以全株青贮生物产量为主，具体数据以当年实测为准。",
    resistance: "高抗南方锈病、茎腐病、瘤黑粉病，倒伏率低。",
    cultivation: [
      "冀中南引种备案夏播，按当地引种备案要求种植。",
      "乳线 1/2 至 3/4 时全株收获，保证干物质与淀粉含量。",
      "青贮订单地块建议连片种植，便于统一机械收获。",
    ],
    packing: "按青贮专用规格包装，具体以订单约定为准",
  },
  {
    slug: "ludan-226",
    name: "鲁单 226",
    crop: "玉米",
    badge: "粮饲两用",
    tagline: "弹性强的粮饲兼用玉米，看行情决定收籽粒还是青贮",
    image: "/images/varieties/ludan-226.webp",
    growthPeriod: "夏播 103–106 天",
    approvalNo: "山东省农科院选育 · 引种备案",
    region: "冀中南夏播大田、家庭农场",
    highlights: ["株型紧凑，结实稳定", "综合抗病能力强，耐高温", "可收籽粒或全株青贮，一地两用"],
    features: [
      "株型紧凑，结实稳定，适合中等密度种植。",
      "综合抗病能力强，耐高温，灌浆期结实性好。",
      "弹性强，可根据当年行情选择收籽粒或全株青贮收割，降低种植风险。",
    ],
    yield: "粮饲两用，产量随收获方式不同，具体以当年实测为准。",
    resistance: "综合抗病能力强，耐高温。",
    cultivation: [
      "冀中南夏播，6 月上中旬播种。",
      "收籽粒按常规粮用玉米管理；做青贮则在乳线 1/2 至 3/4 时全株收获。",
      "家庭农场可分批播种，错开采收与销售窗口。",
    ],
    packing: "按单粒播种规格包装，具体规格以到货批次为准",
  },
  {
    slug: "zaodunmai",
    name: "早顿麦",
    crop: "小麦",
    badge: "早熟抢茬",
    tagline: "早熟腾茬早，完美衔接夏玉米的一年两熟品种",
    image: "/images/varieties/zaodunmai.webp",
    growthPeriod: "早熟冬小麦，具体播期按当地农技指导",
    approvalNo: "引种备案品种",
    region: "冀中南中水肥、高水肥地块",
    highlights: ["灌浆速度快，落黄干净，早熟腾茬早", "避开后期干热风，降低穗发芽风险", "抗寒稳定，分蘖能力好"],
    features: [
      "早熟水地冬小麦，灌浆速度快，落黄干净，最大特点是早熟腾茬早。",
      "避开后期干热风，降低穗发芽风险，收获期从容。",
      "抗寒性稳定，分蘖能力好，群体容易搭建。",
    ],
    yield: "早熟以抢茬为核心优势，产量以当地实测为准。",
    resistance: "抗寒稳定，后期耐干热风，落黄干净。",
    cultivation: [
      "冀中南中高水肥地块种植，播期按当地农技指导。",
      "施足底肥，返青拔节期结合浇水追肥。",
      "收获后及时播种夏玉米（良纯七八九、紫竹竿等），适配一年两熟轮作。",
    ],
    packing: "按小麦常规规格包装，具体以到货批次为准",
    featured: true,
  },
  {
    slug: "ke-966",
    name: "科 966",
    crop: "小麦",
    badge: "稳产中筋",
    tagline: "株高适中、茎秆弹性好的稳产中筋冬小麦",
    image: "/images/varieties/ke-966.webp",
    growthPeriod: "半冬性冬小麦，具体播期按当地农技指导",
    approvalNo: "引种备案品种",
    region: "石家庄周边中高水肥地块",
    highlights: ["株高适中，茎秆弹性好，抗倒伏", "成穗均匀，穗大粒饱", "耐后期高温，产量稳定，容重高"],
    features: [
      "半冬性中筋小麦，株高适中，茎秆弹性好，抗倒伏。",
      "成穗均匀，穗大粒饱，容重高。",
      "耐后期高温，产量稳定，适合散户与基地常规种植。",
    ],
    yield: "稳产性好，具体产量以当地实测为准。",
    resistance: "抗倒伏，耐后期高温。",
    cultivation: [
      "石家庄周边中高水肥地块，按当地适宜播期播种。",
      "施足底肥，返青拔节期追肥，保证成穗率。",
      "抽穗扬花期注意防治赤霉病，抢晴用药。",
    ],
    packing: "按小麦常规规格包装，具体以到货批次为准",
    featured: true,
  },
];

export function getVariety(slug: string) {
  return varieties.find((v) => v.slug === slug);
}
