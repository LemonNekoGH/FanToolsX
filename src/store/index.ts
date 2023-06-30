import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useState = defineStore('state', () => {
  const state = ref({
    formjsjl: '',
    formzcda: {
      imgdata: 'null',
      dh: '',
      ywdh: '',
      sex: '',
      zdjy: '',
      csd: '',
      sr: '',
      zz: '',
      sg: '',
      hs: '',
      ksgr: '',
      fjsj: '',
    },
    zcdaimgdata: '',
    formzhjl: {
      wlqd: '',
      zcjd: '',
      slns: '',
      zdgh: '',
      zdjq: '',
      ysjy: '',
      kgll: '',
      lcfx: '',
      zhtcfj: '',
    },
    formdazl: {
      imgdata: '',
      imgdata_t: '',
      dazl1: '',
      dazl2: '',
      dazl3: '',
      dazl4: '',
      fjzl: '',
    },
    dazlimgdata: '',
    dazlimgdata_t: '',
    promotionRecord: '',
    formyyzl_top: {
      zwpy: '',
      ywpy: '',
      rwpy: '',
      tspy: '',
    },
    formyyzl: {
      rmzl: '',
      jt1: '',
      jt2: '',
      jt3: '',
      jsjt1: '',
      jsjt2: '',
      xljt1: '',
      xljt2: '',
      xljt3: '',
      xz: '',
      sj: '',
      jy1: '',
      jy2: '',
      brdw: '',
      rmdz: '',
      xdcf: '',
      xdks: '',
      xz1: '',
      xz2: '',
      bs1: '',
      bs2: '',
      zz1: '',
      zz2: '',
      zz3: '',
      zz4: '',
      ndgk: '',
      sxjs: '',
      fsxjs: '',
      xdsb: '',
      cyx: '',
      xlcm: '',
      wh: '',
      bt: '',

    },
    formgyml: {
      imgdata: '',
      imgdata_t: '',
      checkdata: true,
      gyml1: '',
      gyml2: '',
      gyml3: '',
      gyml4: '',

    },
    gymlimgdata: '',
    gymlimgdata_t: '',
    formblmn: {
      blbt: '',
      blms: '',
    },
    formjcs1: {
      fz: '',
      zw: '',
      bq: '',
      zbs: '',
      zds: '',
      jg: '',
      xj: 1,
      zy: '0',
    },
    formjcs2: {
      smz: '',
      gjl: '',
      fyl: '',
      kx: '',
      xlsmz: '',
      xlgjl: '',
      xlfyl: '',
      fy1: '',
      fy2: '',
      fy3: '',
    },
    formjcs3: {
      qn2: '',
      qn3: '',
      qn4: '',
      qn5: '',
      qn6: '',
      hq: '',
      xwms: '',
      htms: '',
    },
    fw: [false,
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
      false],
    formjnsj: {
      sw1: '',
      jn: '1',
      fs: '0',
      imgdata: '',

    },
    levels: [
      {
        value: '0',
        inputs: ['', '', '', ''],
      },
      {
        value: '1',
        inputs: ['', '', '', ''],
      },
      {
        value: '2',
        inputs: ['', '', '', ''],
      },
      {
        value: '3',
        inputs: ['', '', '', ''],
      },
      {
        value: '4',
        inputs: ['', '', '', ''],
      },
      {
        value: '5',
        inputs: ['', '', '', ''],
      },
      {
        value: '6',
        inputs: ['', '', '', ''],
      },
      {
        value: '7',
        inputs: ['', '', '', ''],
      },
      {
        value: '8',
        inputs: ['', '', '', ''],
      },
      {
        value: '9',
        inputs: ['', '', '', ''],
      },
    ],
    formjnsj1: {
      sw1: '',
      jn: '1',
      fs: '0',
      imgdata: '',

    },
    levels1: [
      {
        value: '0',
        inputs: ['', '', '', ''],
      },
      {
        value: '1',
        inputs: ['', '', '', ''],
      },
      {
        value: '2',
        inputs: ['', '', '', ''],
      },
      {
        value: '3',
        inputs: ['', '', '', ''],
      },
      {
        value: '4',
        inputs: ['', '', '', ''],
      },
      {
        value: '5',
        inputs: ['', '', '', ''],
      },
      {
        value: '6',
        inputs: ['', '', '', ''],
      },
      {
        value: '7',
        inputs: ['', '', '', ''],
      },
      {
        value: '8',
        inputs: ['', '', '', ''],
      },
      {
        value: '9',
        inputs: ['', '', '', ''],
      },
    ],
    formjnsj2: {
      sw1: '',
      jn: '1',
      fs: '0',
      imgdata: '',

    },
    levels2: [
      {
        value: '0',
        inputs: ['', '', '', ''],
      },
      {
        value: '1',
        inputs: ['', '', '', ''],
      },
      {
        value: '2',
        inputs: ['', '', '', ''],
      },
      {
        value: '3',
        inputs: ['', '', '', ''],
      },
      {
        value: '4',
        inputs: ['', '', '', ''],
      },
      {
        value: '5',
        inputs: ['', '', '', ''],
      },
      {
        value: '6',
        inputs: ['', '', '', ''],
      },
      {
        value: '7',
        inputs: ['', '', '', ''],
      },
      {
        value: '8',
        inputs: ['', '', '', ''],
      },
      {
        value: '9',
        inputs: ['', '', '', ''],
      },
    ],
    jnsjimg: '',
    jnsjimg1: '',
    jnsjimg2: '',

    formtfmz: {
      tx: '',
      txms: '',
      tf1: '',
      tfx1: '',
      tf2: '',
      tfx2: '',
      tfms: '',
      imgdata: '',
    },
    tfmzimg: '',
    formmzsj: {
      imgdata: '',
      imgdata1: '',
      mzmc: '',
      mzbh1: '',
      mzbh2: '',
      mzrw1: '',
      mzrw2: '',
      mzms: '',

    },
    mzsjimg: '',
    mzsjimg1: '',
    mzsjxz: {
      x: '0',
      y: '0',
      z: '0',
    },
    formstadta: {
      sta1: '',
      sta2: '',
      sta3: '',
      sta4: '',
      sta5: '',
      sta6: '',
      sta7: '',
      sta8: '',
      sta9: '',
      sta10: '',
      sta11: '',
      sta12: '',
    },

    // =============
    tfmzimg1: '',
    formmzsj1: {
      imgdata: '',
      imgdata1: '',
      mzmc: '',
      mzbh1: '',
      mzbh2: '',
      mzrw1: '',
      mzrw2: '',
      mzms: '',

    },
    mzsjimg2: '',
    mzsjimg3: '',
    mzsjxz1: {
      x: '0',
      y: '0',
      z: '0',
    },
    formstadta1: {
      sta1: '',
      sta2: '',
      sta3: '',
      sta4: '',
      sta5: '',
      sta6: '',
      sta7: '',
      sta8: '',
      sta9: '',
      sta10: '',
      sta11: '',
      sta12: '',
    },
    Key: '',
    SaveType: '',
    imgpos: [],
    imgscl: 0,
  })

  return {
    state,
  }
})
