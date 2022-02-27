module.exports={
  plugins:[
    require('autoprefixer')({
      overrideBrowserslist:[
        "Android 4.1",
        'ios 7.1',
        'chrome > 31',
        'ff > 31',
        'ie >= 8'
        //所有浏览器的最新的俩个版本
        //'last 2 version'
      ],
      grid: true
    })
  ]
}