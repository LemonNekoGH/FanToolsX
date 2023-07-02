import { defineStore } from 'pinia'
import { ref } from 'vue'

const initState = {
  EliteRec: '',
  BasicdataText: [
    '', // 立绘
    '', // 名字
    '', // 性别
    '', // 战斗经验
    '', // 出身地
    '', // 生日
    '', // 种族
    '', // 身高
    '', // 源石感染
    '', // 附加数据
  ],
  BasicDataImgForWeb: '',
  CompRec: [
    '', // 物理强度
    '', // 战场机动
    '', // 生理耐受
    '', // 战术规划
    '', // 战斗技巧
    '', // 源石技艺适应性
    '', // 客观履历
    '', // 临床诊断
    '', // 综合体检附加
  ],
  ProfDat: [
    '', // 阵营 logo
    '', // 干员头像
    '', // 档案资料 1
    '', // 档案资料 2
    '', // 档案资料 3
    '', // 档案资料 4
    '', // 附加档案
  ],
  ProfLogoForWeb: '',
  ProfAvatarForWeb: '',
  promotionRecord: '',
  CV: [
    '', // 中文
    '', // 英文
    '', // 日文
    '', // 特殊
  ],
  Voice: [
    '', // 任命助理
    '', // 交谈 1
    '', // 交谈 2
    '', // 交谈 3
    '', // 晋升交谈 1
    '', // 晋升交谈 2
    '', // 信赖提升后交谈 1
    '', // 信赖提升后交谈 2
    '', // 信赖提升后交谈 3
    '', // 闲置
    '', // 干员报道
    '', // 升级
    '', // 精英 1
    '', // 精英 2
    '', // 编入队伍
    '', // 任命队长
    '', // 行动出发
    '', // 行动开始
    '', // 选中 1
    '', // 选中 2
    '', // 部署 1
    '', // 部署 2
    '', // 作战 1
    '', // 作战 2
    '', // 作战 3
    '', // 作战 4
    '', // 完成高难关卡
    '', // 三星结束
    '', // 非三星结束
    '', // 行动失败
    '', // 进驻设施
    '', // 戳一下
    '', // 信赖触摸
    '', // 问候
    '', // 标题
  ],
  Story: [
    '', // 干员密录 1 蚀刻章
    '', // 干员密录 2 蚀刻章
    true, // 是否启用密录 2
    '', // 密录 1 标题
    '', // 密录 1 副标题
    '', // 密录 2 标题
    '', // 密录 2 副标题
  ],
  StoryImgForWeb: '', // 用于在网页中显示
  StoryImg2ForWeb: '', // 用于在网页中显示
  Paradox: [
    '', // 标题
    '', // 描述
  ],
  BasedataA: [
    '', // 分支
    '', // 站位
    '', // 标签
    '', // 再部署
    '', // 阻挡
    '', // 攻速
    '1', // 星级
    '0', // 职业
  ],
  BasedataB: [
    '', // 生命值
    '', // 攻击力
    '', // 防御力
    '', // 法术抗性
    '', // 满信赖生命值
    '', // 满信赖攻击力
    '', // 满信赖防御力
    '', // 基础费用
    '', // 精英 1 费用
    '', // 精英 2 费用
  ],
  Poten: [
    '', // 潜能 2 加成
    '', // 潜能 3 加成
    '', // 潜能 4 加成
    '', // 潜能 5 加成
    '', // 潜能 6 加成
    '', // 获取方式
    '', // 信物描述
    '', // 合同描述
  ],
  AttackRangeBol: [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  Skill1Exists: true, // 是否需要显示在展示页面中
  Skill2Exists: true, // 是否需要显示在展示页面中
  Skill3Exists: true, // 是否需要显示在展示页面中
  Skill1Name: '',
  Skill2Name: '',
  Skill3Name: '',
  Skill1Des: Array<string>(10).fill(''), // 等级 1 到 10 的描述
  Skill2Des: Array<string>(10).fill(''), // 等级 1 到 10 的描述
  Skill3Des: Array<string>(10).fill(''), // 等级 1 到 10 的描述
  Skill1Start: Array<number>(10).fill(0), // 等级 1 到 10 的初始技力
  Skill2Start: Array<number>(10).fill(0), // 等级 1 到 10 的初始技力
  Skill3Start: Array<number>(10).fill(0), // 等级 1 到 10 的初始技力
  Skill1Sp: Array<number>(10).fill(0), // 等级 1 到 10 的所需技力
  Skill2Sp: Array<number>(10).fill(0), // 等级 1 到 10 的所需技力
  Skill3Sp: Array<number>(10).fill(0), // 等级 1 到 10 的所需技力
  Skill1Durat: Array<number>(10).fill(0), // 等级 1 到 10 的技能时长
  Skill2Durat: Array<number>(10).fill(0), // 等级 1 到 10 的技能时长
  Skill3Durat: Array<number>(10).fill(0), // 等级 1 到 10 的技能时长
  Skill1Type: {
    x: 0,
    y: 0,
  }, // 技能 1 回复方式，触发方式
  Skill2Type: {
    x: 0,
    y: 0,
  }, // 技能 2 回复方式，触发方式
  Skill3Type: {
    x: 0,
    y: 0,
  }, // 技能 3 回复方式，触发方式
  Skill1PicB64: '', // 技能 1 图标
  Skill2PicB64: '', // 技能 2 图标
  Skill3PicB64: '', // 技能 3 图标
  Skill1PicB64ForWeb: '', // 技能 1 图标，用于在网页中显示
  Skill2PicB64ForWeb: '', // 技能 2 图标，用于在网页中显示
  Skill3PicB64ForWeb: '', // 技能 3 图标，用于在网页中显示
  AbilityData: [
    '', // 特性
    '', // 特性描述
    '', // 天赋 1
    '', // 天赋 1 详情
    '', // 天赋 2
    '', // 天赋 2 详情
    '', // 天赋描述
    '', // 分支图标
  ],
  AbilityImage: '', // 用于在网页端显示的分支图标
  Mod1IconForWeb: '', // 模组 1 图标，用于在 web 上显示
  Mod1ImgForWeb: '', // 模组 1 图片，用于在 web 上显示
  Mod2IconForWeb: '', // 模组 2 图标，用于在 web 上显示
  Mod2ImgForWeb: '', // 模组 2 图片，用于在 web 上显示
  Mod1: [ // 模组 1
    '', // 图标 Base64
    '', // 图片 Base64
    '', // 名称
    '', // 编号 1
    '', // 编号 2
    '', // 模组任务 1
    '', // 模组任务 2
    '', // 模组描述
  ],
  Mod1AddiType: { // 加成类型，0 - 攻击速度，1 - 生命，2 - 攻击，3 - 防御
    x: 0,
    y: 0,
    z: 0,
  },
  Mod1AddiStr: [
    '', // STAGE.I 加成 1
    '', // STAGE.I 加成 2
    '', // STAGE.I 加成 2
    '', // STAGE.I 天赋改动
    '', // STAGE.II 加成 1
    '', // STAGE.II 加成 2
    '', // STAGE.II 加成 2
    '', // STAGE.II 天赋改动
    '', // STAGE.III 加成 1
    '', // STAGE.III 加成 2
    '', // STAGE.III 加成 2
    '', // STAGE.III 天赋改动
  ],
  Mod2: [
    '', // 图标 Base64
    '', // 图片 Base64
    '', // 名称
    '', // 编号 1
    '', // 编号 2
    '', // 模组任务 1
    '', // 模组任务 2
    '', // 模组描述
  ],
  Mod2AddiType: { // 加成类型，0 - 攻击速度，1 - 生命，2 - 攻击，3 - 防御
    x: 0,
    y: 0,
    z: 0,
  },
  Mod2AddiStr: [
    '', // STAGE.I 加成 1
    '', // STAGE.I 加成 2
    '', // STAGE.I 加成 2
    '', // STAGE.I 天赋改动
    '', // STAGE.II 加成 1
    '', // STAGE.II 加成 2
    '', // STAGE.II 加成 2
    '', // STAGE.II 天赋改动
    '', // STAGE.III 加成 1
    '', // STAGE.III 加成 2
    '', // STAGE.III 加成 2
    '', // STAGE.III 天赋改动
  ],
  Key: '',
  SaveType: '',
  imgpos: [],
  imgscl: 0,
}

export type State = typeof initState

export const useState = defineStore('state', () => {
  const state = ref(initState)

  return {
    state,
  }
})
