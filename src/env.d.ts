/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client" />

declare module '*.vue' {
  import { type DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.png' {
  const component: string
  export default component
}

declare interface State {
  EliteRec: string,
  BasicdataText: string[],
  BasicDataImgForWeb: string,
  CompRec: string[],
  ProfDat: string[],
  ProfLogoForWeb: string,
  ProfAvatarForWeb: string,
  promotionRecord: string,
  CV: string[],
  Voice: string[],
  Story: [string, string, boolean, string, string, string, string],
  StoryImgForWeb: string, // 用于在网页中显示
  StoryImg2ForWeb: string, // 用于在网页中显示
  Paradox: string[],
  BasedataA: string[],
  BasedataB: string[],
  Poten: string[],
  AttackRangeBol: boolean[],
  Skill1Exists: boolean, // 是否需要显示在展示页面中
  Skill2Exists: boolean, // 是否需要显示在展示页面中
  Skill3Exists: boolean, // 是否需要显示在展示页面中
  SKill1Name: string,
  SKill2Name: string,
  SKill3Name: string,
  SKill1Des: string[], // 等级 1 到 10 的描述
  SKill2Des: string[], // 等级 1 到 10 的描述
  SKill3Des: string[], // 等级 1 到 10 的描述
  Skill1Start: number[], // 等级 1 到 10 的初始技力
  Skill2Start: number[], // 等级 1 到 10 的初始技力
  Skill3Start: number[], // 等级 1 到 10 的初始技力
  Skill1Sp: number[], // 等级 1 到 10 的所需技力
  Skill2Sp: number[], // 等级 1 到 10 的所需技力
  Skill3Sp: number[], // 等级 1 到 10 的所需技力
  Skill1Durat: number[], // 等级 1 到 10 的技能时长
  Skill2Durat: number[], // 等级 1 到 10 的技能时长
  Skill3Durat: number[], // 等级 1 到 10 的技能时长
  Skill1Type: {
    x: number,
    y: number,
  }, // 技能 1 回复方式，触发方式
  Skill2Type: {
    x: number,
    y: number,
  }, // 技能 2 回复方式，触发方式
  Skill3Type: {
    x: number,
    y: number,
  }, // 技能 3 回复方式，触发方式
  Skill1PicB64: string, // 技能 1 图标
  Skill2PicB64: string, // 技能 2 图标
  Skill3PicB64: string, // 技能 3 图标
  Skill1PicB64ForWeb: string, // 技能 1 图标，用于在网页中显示
  Skill2PicB64ForWeb: string, // 技能 2 图标，用于在网页中显示
  Skill3PicB64ForWeb: string, // 技能 3 图标，用于在网页中显示
  AbilityData: string[],
  AbilityImageForWeb: string, // 用于在网页端显示的分支图标
  Mod1IconForWeb: string, // 模组 1 图标，用于在 web 上显示
  Mod1ImgForWeb: string, // 模组 1 图片，用于在 web 上显示
  Mod2IconForWeb: string, // 模组 2 图标，用于在 web 上显示
  Mod2ImgForWeb: string, // 模组 2 图片，用于在 web 上显示
  Mod1: [],
  Mod1AddiType: { // 加成类型，0 - 攻击速度，1 - 生命，2 - 攻击，3 - 防御
    x: number,
    y: number,
    z: number,
  },
  Mod1AddiStr: string[],
  Mod2: string[],
  Mod2AddiType: { // 加成类型，0 - 攻击速度，1 - 生命，2 - 攻击，3 - 防御
    x: number,
    y: number,
    z: number,
  },
  Mod2AddiStr: string[],
  Key: string,
  SaveType: string,
  imgpos: any[],
  imgscl: number,
}

declare type LoadingKey = keyof {
  [p in keyof State as p extends `${infer A}Web` ? p : never]: State[p]
} | 'entire' | '' // 可以设置为全局变量的值

declare interface Window {
  Android: {
    loadFile(accept: 'image/*' | '*.akf,*.json'): string
    saveFile(data: string)
    log(text: string) // 用来在 Android 上打日志
    loadingKey: LoadingKey // 回调会通过这里知道应该更新哪里的值
    fileLoadedFromAndroid(data: string) // Android 会调用的回调
  }
}