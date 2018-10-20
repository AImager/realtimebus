//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    inputShowed: false,
    inputVal: "",
    busList: [
      {
        "line_name": "01路",
        "line_id": "000100"
      },
      {
        "line_name": "04路",
        "line_id": "000400"
      },
      {
        "line_name": "6路",
        "line_id": "000600"
      },
      {
        "line_name": "8路",
        "line_id": "000800"
      },
      {
        "line_name": "11路",
        "line_id": "001100"
      },
      {
        "line_name": "13路",
        "line_id": "001300"
      },
      {
        "line_name": "14路",
        "line_id": "001400"
      },
      {
        "line_name": "15路",
        "line_id": "001500"
      },
      {
        "line_name": "17路",
        "line_id": "001700"
      },
      {
        "line_name": "18路",
        "line_id": "001800"
      },
      {
        "line_name": "19路",
        "line_id": "001900"
      },
      {
        "line_name": "20路",
        "line_id": "002000"
      },
      {
        "line_name": "21路",
        "line_id": "002100"
      },
      {
        "line_name": "22路",
        "line_id": "002200"
      },
      {
        "line_name": "23路",
        "line_id": "002300"
      },
      {
        "line_name": "24路",
        "line_id": "002400"
      },
      {
        "line_name": "25路",
        "line_id": "002500"
      },
      {
        "line_name": "26路",
        "line_id": "002600"
      },
      {
        "line_name": "28路",
        "line_id": "002800"
      },
      {
        "line_name": "33路",
        "line_id": "003300"
      },
      {
        "line_name": "36路",
        "line_id": "003600"
      },
      {
        "line_name": "37路",
        "line_id": "003700"
      },
      {
        "line_name": "40路",
        "line_id": "004000"
      },
      {
        "line_name": "41路",
        "line_id": "004100"
      },
      {
        "line_name": "42路",
        "line_id": "004200"
      },
      {
        "line_name": "43路",
        "line_id": "004300"
      },
      {
        "line_name": "44路",
        "line_id": "004400"
      },
      {
        "line_name": "45路",
        "line_id": "004500"
      },
      {
        "line_name": "47路",
        "line_id": "004700"
      },
      {
        "line_name": "48路",
        "line_id": "004800"
      },
      {
        "line_name": "49路",
        "line_id": "004900"
      },
      {
        "line_name": "50路",
        "line_id": "005000"
      },
      {
        "line_name": "50路区间",
        "line_id": "005006"
      },
      {
        "line_name": "51路",
        "line_id": "005100"
      },
      {
        "line_name": "52路",
        "line_id": "005200"
      },
      {
        "line_name": "54路",
        "line_id": "005400"
      },
      {
        "line_name": "55路",
        "line_id": "005500"
      },
      {
        "line_name": "56路",
        "line_id": "005600"
      },
      {
        "line_name": "57路",
        "line_id": "005700"
      },
      {
        "line_name": "58路",
        "line_id": "005800"
      },
      {
        "line_name": "59路",
        "line_id": "005900"
      },
      {
        "line_name": "60路",
        "line_id": "006000"
      },
      {
        "line_name": "61路",
        "line_id": "006100"
      },
      {
        "line_name": "63路",
        "line_id": "006300"
      },
      {
        "line_name": "64路",
        "line_id": "006400"
      },
      {
        "line_name": "65路",
        "line_id": "006500"
      },
      {
        "line_name": "66路",
        "line_id": "006600"
      },
      {
        "line_name": "67路",
        "line_id": "006700"
      },
      {
        "line_name": "68路",
        "line_id": "006800"
      },
      {
        "line_name": "69路",
        "line_id": "006900"
      },
      {
        "line_name": "70路",
        "line_id": "007000"
      },
      {
        "line_name": "71路",
        "line_id": "007100"
      },
      {
        "line_name": "72路",
        "line_id": "007200"
      },
      {
        "line_name": "74路",
        "line_id": "007400"
      },
      {
        "line_name": "76路",
        "line_id": "007600"
      },
      {
        "line_name": "78路",
        "line_id": "007800"
      },
      {
        "line_name": "79路",
        "line_id": "007900"
      },
      {
        "line_name": "80路",
        "line_id": "008000"
      },
      {
        "line_name": "87路",
        "line_id": "008700"
      },
      {
        "line_name": "88路",
        "line_id": "008800"
      },
      {
        "line_name": "89路",
        "line_id": "008900"
      },
      {
        "line_name": "90路",
        "line_id": "009000"
      },
      {
        "line_name": "91路",
        "line_id": "009100"
      },
      {
        "line_name": "92路",
        "line_id": "009200"
      },
      {
        "line_name": "92B路",
        "line_id": "009290"
      },
      {
        "line_name": "93路",
        "line_id": "009300"
      },
      {
        "line_name": "94路",
        "line_id": "009400"
      },
      {
        "line_name": "95路",
        "line_id": "009500"
      },
      {
        "line_name": "96路",
        "line_id": "009600"
      },
      {
        "line_name": "97路",
        "line_id": "009700"
      },
      {
        "line_name": "98路",
        "line_id": "009800"
      },
      {
        "line_name": "99路",
        "line_id": "009900"
      },
      {
        "line_name": "100路",
        "line_id": "010000"
      },
      {
        "line_name": "101路",
        "line_id": "010100"
      },
      {
        "line_name": "102路",
        "line_id": "010200"
      },
      {
        "line_name": "103路",
        "line_id": "010300"
      },
      {
        "line_name": "104路",
        "line_id": "010400"
      },
      {
        "line_name": "105路",
        "line_id": "010500"
      },
      {
        "line_name": "106路",
        "line_id": "010600"
      },
      {
        "line_name": "107路",
        "line_id": "010700"
      },
      {
        "line_name": "108路",
        "line_id": "010800"
      },
      {
        "line_name": "109路",
        "line_id": "010900"
      },
      {
        "line_name": "110路",
        "line_id": "011000"
      },
      {
        "line_name": "111路",
        "line_id": "011100"
      },
      {
        "line_name": "112路",
        "line_id": "011200"
      },
      {
        "line_name": "113路",
        "line_id": "011300"
      },
      {
        "line_name": "115路",
        "line_id": "011500"
      },
      {
        "line_name": "117路",
        "line_id": "011700"
      },
      {
        "line_name": "118路",
        "line_id": "011800"
      },
      {
        "line_name": "120路",
        "line_id": "012000"
      },
      {
        "line_name": "121路",
        "line_id": "012100"
      },
      {
        "line_name": "122路",
        "line_id": "012200"
      },
      {
        "line_name": "123路",
        "line_id": "012300"
      },
      {
        "line_name": "124路",
        "line_id": "012400"
      },
      {
        "line_name": "127路",
        "line_id": "012700"
      },
      {
        "line_name": "129路",
        "line_id": "012900"
      },
      {
        "line_name": "131路",
        "line_id": "013100"
      },
      {
        "line_name": "132路",
        "line_id": "013200"
      },
      {
        "line_name": "133路",
        "line_id": "013300"
      },
      {
        "line_name": "134路",
        "line_id": "013400"
      },
      {
        "line_name": "135路",
        "line_id": "013500"
      },
      {
        "line_name": "136路",
        "line_id": "013600"
      },
      {
        "line_name": "137路",
        "line_id": "013700"
      },
      {
        "line_name": "138路",
        "line_id": "013800"
      },
      {
        "line_name": "139路",
        "line_id": "013900"
      },
      {
        "line_name": "140路",
        "line_id": "014000"
      },
      {
        "line_name": "141路",
        "line_id": "014100"
      },
      {
        "line_name": "142路",
        "line_id": "014200"
      },
      {
        "line_name": "143路",
        "line_id": "014300"
      },
      {
        "line_name": "144路",
        "line_id": "014400"
      },
      {
        "line_name": "145路",
        "line_id": "014500"
      },
      {
        "line_name": "146路",
        "line_id": "014600"
      },
      {
        "line_name": "147路",
        "line_id": "014700"
      },
      {
        "line_name": "149路",
        "line_id": "014900"
      },
      {
        "line_name": "150路",
        "line_id": "015000"
      },
      {
        "line_name": "151路",
        "line_id": "015100"
      },
      {
        "line_name": "152路",
        "line_id": "015200"
      },
      {
        "line_name": "155路",
        "line_id": "015500"
      },
      {
        "line_name": "157路",
        "line_id": "015700"
      },
      {
        "line_name": "158路",
        "line_id": "015800"
      },
      {
        "line_name": "159路",
        "line_id": "015900"
      },
      {
        "line_name": "160路",
        "line_id": "016000"
      },
      {
        "line_name": "162路",
        "line_id": "016200"
      },
      {
        "line_name": "165路",
        "line_id": "016500"
      },
      {
        "line_name": "166路",
        "line_id": "016600"
      },
      {
        "line_name": "168路",
        "line_id": "016800"
      },
      {
        "line_name": "171路",
        "line_id": "017100"
      },
      {
        "line_name": "172路",
        "line_id": "017200"
      },
      {
        "line_name": "173路",
        "line_id": "017300"
      },
      {
        "line_name": "176路",
        "line_id": "017600"
      },
      {
        "line_name": "178路",
        "line_id": "017800"
      },
      {
        "line_name": "178路大站车",
        "line_id": "017880"
      },
      {
        "line_name": "179路",
        "line_id": "017900"
      },
      {
        "line_name": "180路",
        "line_id": "018000"
      },
      {
        "line_name": "184路",
        "line_id": "018400"
      },
      {
        "line_name": "185路",
        "line_id": "018500"
      },
      {
        "line_name": "187路",
        "line_id": "018700"
      },
      {
        "line_name": "189路",
        "line_id": "018900"
      },
      {
        "line_name": "190路",
        "line_id": "019000"
      },
      {
        "line_name": "197路",
        "line_id": "019700"
      },
      {
        "line_name": "205路",
        "line_id": "020500"
      },
      {
        "line_name": "206路",
        "line_id": "020600"
      },
      {
        "line_name": "210路",
        "line_id": "021000"
      },
      {
        "line_name": "216路",
        "line_id": "021606"
      },
      {
        "line_name": "218路",
        "line_id": "021800"
      },
      {
        "line_name": "220路",
        "line_id": "022006"
      },
      {
        "line_name": "222路",
        "line_id": "022206"
      },
      {
        "line_name": "224路",
        "line_id": "022400"
      },
      {
        "line_name": "252路",
        "line_id": "025206"
      },
      {
        "line_name": "253路",
        "line_id": "025306"
      },
      {
        "line_name": "257路",
        "line_id": "025706"
      },
      {
        "line_name": "301路",
        "line_id": "030103"
      },
      {
        "line_name": "302路",
        "line_id": "030203"
      },
      {
        "line_name": "303路",
        "line_id": "030303"
      },
      {
        "line_name": "304路",
        "line_id": "030403"
      },
      {
        "line_name": "305路",
        "line_id": "030503"
      },
      {
        "line_name": "306路",
        "line_id": "030603"
      },
      {
        "line_name": "307路",
        "line_id": "030703"
      },
      {
        "line_name": "308路",
        "line_id": "030803"
      },
      {
        "line_name": "309路",
        "line_id": "030903"
      },
      {
        "line_name": "310路",
        "line_id": "031003"
      },
      {
        "line_name": "311路",
        "line_id": "031103"
      },
      {
        "line_name": "312路",
        "line_id": "031203"
      },
      {
        "line_name": "315路",
        "line_id": "031503"
      },
      {
        "line_name": "316路",
        "line_id": "031603"
      },
      {
        "line_name": "317路",
        "line_id": "031703"
      },
      {
        "line_name": "318路",
        "line_id": "031803"
      },
      {
        "line_name": "319路",
        "line_id": "031903"
      },
      {
        "line_name": "320路",
        "line_id": "032003"
      },
      {
        "line_name": "321路",
        "line_id": "032103"
      },
      {
        "line_name": "322路",
        "line_id": "032203"
      },
      {
        "line_name": "323路",
        "line_id": "032303"
      },
      {
        "line_name": "324路",
        "line_id": "032403"
      },
      {
        "line_name": "325路",
        "line_id": "032503"
      },
      {
        "line_name": "326路",
        "line_id": "032603"
      },
      {
        "line_name": "327路",
        "line_id": "032703"
      },
      {
        "line_name": "328路",
        "line_id": "032803"
      },
      {
        "line_name": "329路",
        "line_id": "032903"
      },
      {
        "line_name": "330路",
        "line_id": "033003"
      },
      {
        "line_name": "332路",
        "line_id": "033203"
      },
      {
        "line_name": "340路",
        "line_id": "034003"
      },
      {
        "line_name": "341路",
        "line_id": "034103"
      },
      {
        "line_name": "342路",
        "line_id": "034203"
      },
      {
        "line_name": "405路",
        "line_id": "040500"
      },
      {
        "line_name": "406路",
        "line_id": "040600"
      },
      {
        "line_name": "502路",
        "line_id": "050200"
      },
      {
        "line_name": "508路",
        "line_id": "050800"
      },
      {
        "line_name": "510路",
        "line_id": "051000"
      },
      {
        "line_name": "519路",
        "line_id": "051900"
      },
      {
        "line_name": "522路",
        "line_id": "052200"
      },
      {
        "line_name": "527路",
        "line_id": "052700"
      },
      {
        "line_name": "528路",
        "line_id": "052800"
      },
      {
        "line_name": "537路",
        "line_id": "053700"
      },
      {
        "line_name": "538路",
        "line_id": "053800"
      },
      {
        "line_name": "547路",
        "line_id": "054700"
      },
      {
        "line_name": "548路",
        "line_id": "054800"
      },
      {
        "line_name": "551路",
        "line_id": "055100"
      },
      {
        "line_name": "552路",
        "line_id": "055200"
      },
      {
        "line_name": "554路",
        "line_id": "055400"
      },
      {
        "line_name": "559路",
        "line_id": "055900"
      },
      {
        "line_name": "561路",
        "line_id": "056100"
      },
      {
        "line_name": "62路",
        "line_id": "056200"
      },
      {
        "line_name": "577路",
        "line_id": "057700"
      },
      {
        "line_name": "597路",
        "line_id": "059700"
      },
      {
        "line_name": "607路",
        "line_id": "060700"
      },
      {
        "line_name": "609路",
        "line_id": "060900"
      },
      {
        "line_name": "615路",
        "line_id": "061500"
      },
      {
        "line_name": "624路",
        "line_id": "062400"
      },
      {
        "line_name": "627路",
        "line_id": "062700"
      },
      {
        "line_name": "628路",
        "line_id": "062800"
      },
      {
        "line_name": "629路",
        "line_id": "062900"
      },
      {
        "line_name": "630路",
        "line_id": "063000"
      },
      {
        "line_name": "632路",
        "line_id": "063200"
      },
      {
        "line_name": "700路",
        "line_id": "070000"
      },
      {
        "line_name": "701路",
        "line_id": "070100"
      },
      {
        "line_name": "702路",
        "line_id": "070200"
      },
      {
        "line_name": "703路",
        "line_id": "070300"
      },
      {
        "line_name": "703B路",
        "line_id": "070390"
      },
      {
        "line_name": "704路",
        "line_id": "070400"
      },
      {
        "line_name": "704B路",
        "line_id": "070490"
      },
      {
        "line_name": "705路",
        "line_id": "070500"
      },
      {
        "line_name": "707路",
        "line_id": "070700"
      },
      {
        "line_name": "708路",
        "line_id": "070800"
      },
      {
        "line_name": "709路",
        "line_id": "070900"
      },
      {
        "line_name": "711路",
        "line_id": "071100"
      },
      {
        "line_name": "712路",
        "line_id": "071200"
      },
      {
        "line_name": "713路",
        "line_id": "071300"
      },
      {
        "line_name": "714路",
        "line_id": "071400"
      },
      {
        "line_name": "715路",
        "line_id": "071500"
      },
      {
        "line_name": "716路",
        "line_id": "071600"
      },
      {
        "line_name": "717路",
        "line_id": "071700"
      },
      {
        "line_name": "718路",
        "line_id": "071800"
      },
      {
        "line_name": "719路",
        "line_id": "071900"
      },
      {
        "line_name": "720路",
        "line_id": "072000"
      },
      {
        "line_name": "721路",
        "line_id": "072100"
      },
      {
        "line_name": "722路",
        "line_id": "072200"
      },
      {
        "line_name": "723路",
        "line_id": "072300"
      },
      {
        "line_name": "724路",
        "line_id": "072400"
      },
      {
        "line_name": "725路",
        "line_id": "072500"
      },
      {
        "line_name": "726路",
        "line_id": "072600"
      },
      {
        "line_name": "727路",
        "line_id": "072700"
      },
      {
        "line_name": "728路",
        "line_id": "072800"
      },
      {
        "line_name": "729路",
        "line_id": "072900"
      },
      {
        "line_name": "730路",
        "line_id": "073000"
      },
      {
        "line_name": "731路",
        "line_id": "073100"
      },
      {
        "line_name": "732路",
        "line_id": "073200"
      },
      {
        "line_name": "733路",
        "line_id": "073300"
      },
      {
        "line_name": "734路",
        "line_id": "073400"
      },
      {
        "line_name": "735路",
        "line_id": "073500"
      },
      {
        "line_name": "736路",
        "line_id": "073600"
      },
      {
        "line_name": "737路",
        "line_id": "073700"
      },
      {
        "line_name": "738路",
        "line_id": "073800"
      },
      {
        "line_name": "739路",
        "line_id": "073900"
      },
      {
        "line_name": "740路",
        "line_id": "074000"
      },
      {
        "line_name": "741路",
        "line_id": "074100"
      },
      {
        "line_name": "742路",
        "line_id": "074200"
      },
      {
        "line_name": "743路",
        "line_id": "074300"
      },
      {
        "line_name": "744路",
        "line_id": "074400"
      },
      {
        "line_name": "745路",
        "line_id": "074500"
      },
      {
        "line_name": "746路",
        "line_id": "074600"
      },
      {
        "line_name": "747路",
        "line_id": "074700"
      },
      {
        "line_name": "748路",
        "line_id": "074800"
      },
      {
        "line_name": "749路",
        "line_id": "074900"
      },
      {
        "line_name": "750路",
        "line_id": "075000"
      },
      {
        "line_name": "751路",
        "line_id": "075100"
      },
      {
        "line_name": "753路",
        "line_id": "075300"
      },
      {
        "line_name": "754路",
        "line_id": "075400"
      },
      {
        "line_name": "755路",
        "line_id": "075500"
      },
      {
        "line_name": "757路",
        "line_id": "075700"
      },
      {
        "line_name": "758路",
        "line_id": "075800"
      },
      {
        "line_name": "759路",
        "line_id": "075900"
      },
      {
        "line_name": "760路",
        "line_id": "076000"
      },
      {
        "line_name": "761路",
        "line_id": "076100"
      },
      {
        "line_name": "762路",
        "line_id": "076200"
      },
      {
        "line_name": "763路",
        "line_id": "076300"
      },
      {
        "line_name": "764路",
        "line_id": "076400"
      },
      {
        "line_name": "765路",
        "line_id": "076500"
      },
      {
        "line_name": "766路",
        "line_id": "076600"
      },
      {
        "line_name": "767路",
        "line_id": "076700"
      },
      {
        "line_name": "768路",
        "line_id": "076800"
      },
      {
        "line_name": "770路",
        "line_id": "077000"
      },
      {
        "line_name": "776路",
        "line_id": "077600"
      },
      {
        "line_name": "803路",
        "line_id": "080300"
      },
      {
        "line_name": "804路",
        "line_id": "080400"
      },
      {
        "line_name": "805路",
        "line_id": "080500"
      },
      {
        "line_name": "807路",
        "line_id": "080700"
      },
      {
        "line_name": "808路",
        "line_id": "080800"
      },
      {
        "line_name": "809路",
        "line_id": "080900"
      },
      {
        "line_name": "810路",
        "line_id": "081000"
      },
      {
        "line_name": "812路",
        "line_id": "081200"
      },
      {
        "line_name": "813路",
        "line_id": "081300"
      },
      {
        "line_name": "817路",
        "line_id": "081700"
      },
      {
        "line_name": "818路",
        "line_id": "081800"
      },
      {
        "line_name": "819路",
        "line_id": "081900"
      },
      {
        "line_name": "820路",
        "line_id": "082000"
      },
      {
        "line_name": "821路",
        "line_id": "082100"
      },
      {
        "line_name": "823路",
        "line_id": "082300"
      },
      {
        "line_name": "824路",
        "line_id": "082400"
      },
      {
        "line_name": "825路",
        "line_id": "082500"
      },
      {
        "line_name": "826路",
        "line_id": "082600"
      },
      {
        "line_name": "827路",
        "line_id": "082700"
      },
      {
        "line_name": "829路",
        "line_id": "082900"
      },
      {
        "line_name": "830路",
        "line_id": "083000"
      },
      {
        "line_name": "836路",
        "line_id": "083600"
      },
      {
        "line_name": "837路",
        "line_id": "083700"
      },
      {
        "line_name": "838路",
        "line_id": "083800"
      },
      {
        "line_name": "839路",
        "line_id": "083900"
      },
      {
        "line_name": "839路区间",
        "line_id": "083980"
      },
      {
        "line_name": "841路",
        "line_id": "084100"
      },
      {
        "line_name": "842路",
        "line_id": "084200"
      },
      {
        "line_name": "845路",
        "line_id": "084500"
      },
      {
        "line_name": "846路",
        "line_id": "084600"
      },
      {
        "line_name": "849路",
        "line_id": "084900"
      },
      {
        "line_name": "850路",
        "line_id": "085000"
      },
      {
        "line_name": "853路",
        "line_id": "085300"
      },
      {
        "line_name": "855路",
        "line_id": "085500"
      },
      {
        "line_name": "856路",
        "line_id": "085600"
      },
      {
        "line_name": "858路",
        "line_id": "085800"
      },
      {
        "line_name": "859路",
        "line_id": "085900"
      },
      {
        "line_name": "862路",
        "line_id": "086200"
      },
      {
        "line_name": "864路",
        "line_id": "086400"
      },
      {
        "line_name": "867路",
        "line_id": "086700"
      },
      {
        "line_name": "868路",
        "line_id": "086800"
      },
      {
        "line_name": "869路",
        "line_id": "086900"
      },
      {
        "line_name": "870路",
        "line_id": "087000"
      },
      {
        "line_name": "909路",
        "line_id": "090900"
      },
      {
        "line_name": "911路",
        "line_id": "091100"
      },
      {
        "line_name": "912路",
        "line_id": "091200"
      },
      {
        "line_name": "46路",
        "line_id": "091600"
      },
      {
        "line_name": "46路区间",
        "line_id": "091680"
      },
      {
        "line_name": "920路",
        "line_id": "092000"
      },
      {
        "line_name": "923路",
        "line_id": "092300"
      },
      {
        "line_name": "925路",
        "line_id": "092500"
      },
      {
        "line_name": "926路",
        "line_id": "092600"
      },
      {
        "line_name": "927路",
        "line_id": "092700"
      },
      {
        "line_name": "929路",
        "line_id": "092900"
      },
      {
        "line_name": "930路",
        "line_id": "093000"
      },
      {
        "line_name": "931路",
        "line_id": "093100"
      },
      {
        "line_name": "932路",
        "line_id": "093200"
      },
      {
        "line_name": "933路",
        "line_id": "093300"
      },
      {
        "line_name": "934路",
        "line_id": "093400"
      },
      {
        "line_name": "936路",
        "line_id": "093600"
      },
      {
        "line_name": "937路",
        "line_id": "093700"
      },
      {
        "line_name": "939路",
        "line_id": "093900"
      },
      {
        "line_name": "941路",
        "line_id": "094100"
      },
      {
        "line_name": "941路跨线定班",
        "line_id": "094106"
      },
      {
        "line_name": "942路",
        "line_id": "094200"
      },
      {
        "line_name": "944路",
        "line_id": "094400"
      },
      {
        "line_name": "946路",
        "line_id": "094600"
      },
      {
        "line_name": "947路",
        "line_id": "094700"
      },
      {
        "line_name": "948路",
        "line_id": "094800"
      },
      {
        "line_name": "950路",
        "line_id": "095000"
      },
      {
        "line_name": "951路",
        "line_id": "095100"
      },
      {
        "line_name": "952路",
        "line_id": "095200"
      },
      {
        "line_name": "958路",
        "line_id": "095800"
      },
      {
        "line_name": "959路",
        "line_id": "095900"
      },
      {
        "line_name": "960路",
        "line_id": "096000"
      },
      {
        "line_name": "962路",
        "line_id": "096200"
      },
      {
        "line_name": "963路",
        "line_id": "096300"
      },
      {
        "line_name": "966路",
        "line_id": "096600"
      },
      {
        "line_name": "973路",
        "line_id": "097300"
      },
      {
        "line_name": "974路",
        "line_id": "097400"
      },
      {
        "line_name": "975路",
        "line_id": "097500"
      },
      {
        "line_name": "81路",
        "line_id": "10065"
      },
      {
        "line_name": "82路",
        "line_id": "10066"
      },
      {
        "line_name": "83路",
        "line_id": "10067"
      },
      {
        "line_name": "84路",
        "line_id": "10068"
      },
      {
        "line_name": "85路",
        "line_id": "10069"
      },
      {
        "line_name": "北蔡2路",
        "line_id": "10070"
      },
      {
        "line_name": "119路",
        "line_id": "10103"
      },
      {
        "line_name": "130路",
        "line_id": "10112"
      },
      {
        "line_name": "1014路",
        "line_id": "101400"
      },
      {
        "line_name": "219路",
        "line_id": "10146"
      },
      {
        "line_name": "313路",
        "line_id": "10173"
      },
      {
        "line_name": "314路",
        "line_id": "10174"
      },
      {
        "line_name": "338路",
        "line_id": "10192"
      },
      {
        "line_name": "572路",
        "line_id": "10219"
      },
      {
        "line_name": "572路区间1(三林)路",
        "line_id": "102191"
      },
      {
        "line_name": "573路",
        "line_id": "10220"
      },
      {
        "line_name": "454路",
        "line_id": "10221"
      },
      {
        "line_name": "576路",
        "line_id": "10222"
      },
      {
        "line_name": "581路",
        "line_id": "10224"
      },
      {
        "line_name": "583路",
        "line_id": "10225"
      },
      {
        "line_name": "隧道三线",
        "line_id": "10226"
      },
      {
        "line_name": "169路",
        "line_id": "10228"
      },
      {
        "line_name": "川奉专线",
        "line_id": "10231"
      },
      {
        "line_name": "604路",
        "line_id": "10232"
      },
      {
        "line_name": "610路",
        "line_id": "10236"
      },
      {
        "line_name": "611路",
        "line_id": "10237"
      },
      {
        "line_name": "614路",
        "line_id": "10238"
      },
      {
        "line_name": "川芦专线",
        "line_id": "10250"
      },
      {
        "line_name": "988路",
        "line_id": "10252"
      },
      {
        "line_name": "638路",
        "line_id": "10253"
      },
      {
        "line_name": "639路",
        "line_id": "10254"
      },
      {
        "line_name": "640路",
        "line_id": "10255"
      },
      {
        "line_name": "774路",
        "line_id": "10329"
      },
      {
        "line_name": "775路",
        "line_id": "10330"
      },
      {
        "line_name": "777路",
        "line_id": "10331"
      },
      {
        "line_name": "779路",
        "line_id": "10332"
      },
      {
        "line_name": "780路",
        "line_id": "10333"
      },
      {
        "line_name": "781路",
        "line_id": "10334"
      },
      {
        "line_name": "782路",
        "line_id": "10335"
      },
      {
        "line_name": "783路",
        "line_id": "10336"
      },
      {
        "line_name": "784路",
        "line_id": "10337"
      },
      {
        "line_name": "786路",
        "line_id": "10339"
      },
      {
        "line_name": "787路",
        "line_id": "10340"
      },
      {
        "line_name": "789路",
        "line_id": "10342"
      },
      {
        "line_name": "790路",
        "line_id": "10343"
      },
      {
        "line_name": "791路",
        "line_id": "10344"
      },
      {
        "line_name": "792路",
        "line_id": "10345"
      },
      {
        "line_name": "793路",
        "line_id": "10346"
      },
      {
        "line_name": "794路",
        "line_id": "10347"
      },
      {
        "line_name": "795路",
        "line_id": "10348"
      },
      {
        "line_name": "815路",
        "line_id": "10364"
      },
      {
        "line_name": "843路",
        "line_id": "10381"
      },
      {
        "line_name": "863路",
        "line_id": "10400"
      },
      {
        "line_name": "871路",
        "line_id": "10407"
      },
      {
        "line_name": "955路",
        "line_id": "10450"
      },
      {
        "line_name": "969路",
        "line_id": "10460"
      },
      {
        "line_name": "970路",
        "line_id": "10461"
      },
      {
        "line_name": "971路",
        "line_id": "10462"
      },
      {
        "line_name": "976路",
        "line_id": "10465"
      },
      {
        "line_name": "977路",
        "line_id": "10466"
      },
      {
        "line_name": "978路",
        "line_id": "10467"
      },
      {
        "line_name": "980路",
        "line_id": "10468"
      },
      {
        "line_name": "981路",
        "line_id": "10469"
      },
      {
        "line_name": "983路",
        "line_id": "10470"
      },
      {
        "line_name": "984路",
        "line_id": "10471"
      },
      {
        "line_name": "985路",
        "line_id": "10472"
      },
      {
        "line_name": "986路",
        "line_id": "10473"
      },
      {
        "line_name": "986路区间",
        "line_id": "104731"
      },
      {
        "line_name": "987路",
        "line_id": "10474"
      },
      {
        "line_name": "蔡陆专线",
        "line_id": "10495"
      },
      {
        "line_name": "浦东18路",
        "line_id": "10503"
      },
      {
        "line_name": "991路",
        "line_id": "10504"
      },
      {
        "line_name": "991路区间",
        "line_id": "105041"
      },
      {
        "line_name": "浦东24路",
        "line_id": "10505"
      },
      {
        "line_name": "636路",
        "line_id": "10507"
      },
      {
        "line_name": "182路",
        "line_id": "10508"
      },
      {
        "line_name": "大桥四线",
        "line_id": "10513"
      },
      {
        "line_name": "大桥五线",
        "line_id": "10514"
      },
      {
        "line_name": "大桥六线",
        "line_id": "10515"
      },
      {
        "line_name": "浦东28路",
        "line_id": "10521"
      },
      {
        "line_name": "外高桥4路",
        "line_id": "10530"
      },
      {
        "line_name": "453路",
        "line_id": "10532"
      },
      {
        "line_name": "外高桥3路",
        "line_id": "10533"
      },
      {
        "line_name": "浦东19路",
        "line_id": "10534"
      },
      {
        "line_name": "沪川线",
        "line_id": "10545"
      },
      {
        "line_name": "沪南线",
        "line_id": "10555"
      },
      {
        "line_name": "778路",
        "line_id": "10566"
      },
      {
        "line_name": "鹤莘线",
        "line_id": "10584"
      },
      {
        "line_name": "机场七线",
        "line_id": "10591"
      },
      {
        "line_name": "龙惠专线",
        "line_id": "10630"
      },
      {
        "line_name": "龙大专线",
        "line_id": "10631"
      },
      {
        "line_name": "龙芦专线",
        "line_id": "10632"
      },
      {
        "line_name": "龙临专线",
        "line_id": "10633"
      },
      {
        "line_name": "新芦专线",
        "line_id": "10636"
      },
      {
        "line_name": "龙东专线",
        "line_id": "10638"
      },
      {
        "line_name": "龙新芦专线",
        "line_id": "10642"
      },
      {
        "line_name": "芦杜专线",
        "line_id": "10643"
      },
      {
        "line_name": "闵行20路",
        "line_id": "10644"
      },
      {
        "line_name": "993路",
        "line_id": "10648"
      },
      {
        "line_name": "992路",
        "line_id": "10649"
      },
      {
        "line_name": "167路",
        "line_id": "10658"
      },
      {
        "line_name": "浦东9路",
        "line_id": "10674"
      },
      {
        "line_name": "两滨专线",
        "line_id": "10683"
      },
      {
        "line_name": "机场八线",
        "line_id": "10684"
      },
      {
        "line_name": "南闵专线",
        "line_id": "10699"
      },
      {
        "line_name": "浦东7路",
        "line_id": "10708"
      },
      {
        "line_name": "浦东8路",
        "line_id": "10709"
      },
      {
        "line_name": "南新专线",
        "line_id": "10718"
      },
      {
        "line_name": "989路",
        "line_id": "10760"
      },
      {
        "line_name": "浦东1路",
        "line_id": "10769"
      },
      {
        "line_name": "455路",
        "line_id": "10770"
      },
      {
        "line_name": "990路",
        "line_id": "10773"
      },
      {
        "line_name": "451路",
        "line_id": "10774"
      },
      {
        "line_name": "施崂专线",
        "line_id": "10775"
      },
      {
        "line_name": "隧道一线",
        "line_id": "10836"
      },
      {
        "line_name": "1084路",
        "line_id": "108404"
      },
      {
        "line_name": "隧道六线",
        "line_id": "10841"
      },
      {
        "line_name": "隧道九线",
        "line_id": "10844"
      },
      {
        "line_name": "181路",
        "line_id": "10847"
      },
      {
        "line_name": "浦东12路",
        "line_id": "10848"
      },
      {
        "line_name": "上嘉线",
        "line_id": "10870"
      },
      {
        "line_name": "新川专线",
        "line_id": "10904"
      },
      {
        "line_name": "995路",
        "line_id": "10920"
      },
      {
        "line_name": "188路",
        "line_id": "10928"
      },
      {
        "line_name": "张江环线",
        "line_id": "10929"
      },
      {
        "line_name": "张南专线",
        "line_id": "10930"
      },
      {
        "line_name": "177路",
        "line_id": "10932"
      },
      {
        "line_name": "796路",
        "line_id": "10933"
      },
      {
        "line_name": "175路",
        "line_id": "10935"
      },
      {
        "line_name": "772路",
        "line_id": "10937"
      },
      {
        "line_name": "周南线",
        "line_id": "10938"
      },
      {
        "line_name": "798路",
        "line_id": "10956"
      },
      {
        "line_name": "915路",
        "line_id": "10961"
      },
      {
        "line_name": "龙港快线",
        "line_id": "10964"
      },
      {
        "line_name": "川沙4路",
        "line_id": "10989"
      },
      {
        "line_name": "惠南1路",
        "line_id": "10992"
      },
      {
        "line_name": "惠南2路",
        "line_id": "10993"
      },
      {
        "line_name": "惠南3路",
        "line_id": "10994"
      },
      {
        "line_name": "惠南4路",
        "line_id": "10995"
      },
      {
        "line_name": "浦江1路",
        "line_id": "11012"
      },
      {
        "line_name": "浦江2路",
        "line_id": "11013"
      },
      {
        "line_name": "161路",
        "line_id": "11014"
      },
      {
        "line_name": "花木1路",
        "line_id": "11015"
      },
      {
        "line_name": "金桥1路",
        "line_id": "11020"
      },
      {
        "line_name": "外高桥1路",
        "line_id": "11021"
      },
      {
        "line_name": "北蔡1路",
        "line_id": "11024"
      },
      {
        "line_name": "163路",
        "line_id": "11038"
      },
      {
        "line_name": "三林1路",
        "line_id": "11051"
      },
      {
        "line_name": "曹路1路",
        "line_id": "11052"
      },
      {
        "line_name": "合庆1路",
        "line_id": "11053"
      },
      {
        "line_name": "川沙2路",
        "line_id": "11060"
      },
      {
        "line_name": "洋山专线",
        "line_id": "11067"
      },
      {
        "line_name": "洋山专线区间",
        "line_id": "110671"
      },
      {
        "line_name": "泥城1路",
        "line_id": "11077"
      },
      {
        "line_name": "泥城2路",
        "line_id": "11078"
      },
      {
        "line_name": "1059路",
        "line_id": "11079"
      },
      {
        "line_name": "泥城4路",
        "line_id": "11080"
      },
      {
        "line_name": "周康1路",
        "line_id": "11094"
      },
      {
        "line_name": "周康2路",
        "line_id": "11095"
      },
      {
        "line_name": "周康3路",
        "line_id": "11096"
      },
      {
        "line_name": "周康4路",
        "line_id": "11097"
      },
      {
        "line_name": "周康5路",
        "line_id": "11098"
      },
      {
        "line_name": "1201路",
        "line_id": "120104"
      },
      {
        "line_name": "浦江3路",
        "line_id": "12019"
      },
      {
        "line_name": "浦江4路",
        "line_id": "12020"
      },
      {
        "line_name": "1202路",
        "line_id": "120204"
      },
      {
        "line_name": "浦江5路",
        "line_id": "12021"
      },
      {
        "line_name": "浦江6路",
        "line_id": "12022"
      },
      {
        "line_name": "浦江7路",
        "line_id": "12023"
      },
      {
        "line_name": "1203路",
        "line_id": "120304"
      },
      {
        "line_name": "1204路",
        "line_id": "120404"
      },
      {
        "line_name": "曹路2路",
        "line_id": "12047"
      },
      {
        "line_name": "1205路",
        "line_id": "120504"
      },
      {
        "line_name": "1206路",
        "line_id": "120604"
      },
      {
        "line_name": "1207路",
        "line_id": "120704"
      },
      {
        "line_name": "曹路3路",
        "line_id": "12072"
      },
      {
        "line_name": "周康6路",
        "line_id": "12077"
      },
      {
        "line_name": "1208路",
        "line_id": "120804"
      },
      {
        "line_name": "174路",
        "line_id": "12084"
      },
      {
        "line_name": "张江1路",
        "line_id": "12085"
      },
      {
        "line_name": "川沙3路",
        "line_id": "12086"
      },
      {
        "line_name": "南南线",
        "line_id": "12088"
      },
      {
        "line_name": "南川线",
        "line_id": "120881"
      },
      {
        "line_name": "1062路",
        "line_id": "12089"
      },
      {
        "line_name": "大团2路",
        "line_id": "12090"
      },
      {
        "line_name": "1209路",
        "line_id": "120904"
      },
      {
        "line_name": "新场1路",
        "line_id": "12093"
      },
      {
        "line_name": "新场2路",
        "line_id": "12094"
      },
      {
        "line_name": "新场3路",
        "line_id": "12095"
      },
      {
        "line_name": "老港1路",
        "line_id": "12097"
      },
      {
        "line_name": "祝桥1路",
        "line_id": "12099"
      },
      {
        "line_name": "祝桥2路",
        "line_id": "12100"
      },
      {
        "line_name": "1210路",
        "line_id": "121004"
      },
      {
        "line_name": "芦潮港1路",
        "line_id": "12101"
      },
      {
        "line_name": "1061路",
        "line_id": "12102"
      },
      {
        "line_name": "书院2路",
        "line_id": "12103"
      },
      {
        "line_name": "书院3路",
        "line_id": "12104"
      },
      {
        "line_name": "1037路",
        "line_id": "12105"
      },
      {
        "line_name": "1611路",
        "line_id": "121104"
      },
      {
        "line_name": "1036路",
        "line_id": "12111"
      },
      {
        "line_name": "六灶2路",
        "line_id": "12112"
      },
      {
        "line_name": "宣桥1路",
        "line_id": "12114"
      },
      {
        "line_name": "1070路",
        "line_id": "12115"
      },
      {
        "line_name": "惠南8路",
        "line_id": "12116"
      },
      {
        "line_name": "1038路",
        "line_id": "12117"
      },
      {
        "line_name": "曹路4路",
        "line_id": "12118"
      },
      {
        "line_name": "1212路",
        "line_id": "121204"
      },
      {
        "line_name": "花木2路",
        "line_id": "12129"
      },
      {
        "line_name": "1035路",
        "line_id": "12146"
      },
      {
        "line_name": "泥城5路",
        "line_id": "12148"
      },
      {
        "line_name": "1215路",
        "line_id": "121504"
      },
      {
        "line_name": "183路",
        "line_id": "12151"
      },
      {
        "line_name": "申港1路",
        "line_id": "12153"
      },
      {
        "line_name": "1217路",
        "line_id": "121704"
      },
      {
        "line_name": "1218路",
        "line_id": "121804"
      },
      {
        "line_name": "1219路",
        "line_id": "121904"
      },
      {
        "line_name": "1220路",
        "line_id": "122004"
      },
      {
        "line_name": "申崇六线",
        "line_id": "12201"
      },
      {
        "line_name": "南园1路",
        "line_id": "12204"
      },
      {
        "line_name": "周康8路",
        "line_id": "12210"
      },
      {
        "line_name": "1221路",
        "line_id": "122104"
      },
      {
        "line_name": "浦东2路",
        "line_id": "12213"
      },
      {
        "line_name": "1222路",
        "line_id": "122204"
      },
      {
        "line_name": "1223路",
        "line_id": "122304"
      },
      {
        "line_name": "1227路",
        "line_id": "122704"
      },
      {
        "line_name": "1228路",
        "line_id": "122804"
      },
      {
        "line_name": "1229路",
        "line_id": "122900"
      },
      {
        "line_name": "1231路",
        "line_id": "123100"
      },
      {
        "line_name": "1600路",
        "line_id": "160004"
      },
      {
        "line_name": "1601路",
        "line_id": "160104"
      },
      {
        "line_name": "1602路",
        "line_id": "160204"
      },
      {
        "line_name": "1603路",
        "line_id": "160304"
      },
      {
        "line_name": "1604路",
        "line_id": "160404"
      },
      {
        "line_name": "1605路",
        "line_id": "160504"
      },
      {
        "line_name": "1606路",
        "line_id": "160604"
      },
      {
        "line_name": "1607路",
        "line_id": "160700"
      },
      {
        "line_name": "1608路",
        "line_id": "160804"
      },
      {
        "line_name": "1609路",
        "line_id": "160900"
      },
      {
        "line_name": "1610路",
        "line_id": "161000"
      },
      {
        "line_name": "1612路",
        "line_id": "161200"
      },
      {
        "line_name": "1650路",
        "line_id": "165004"
      },
      {
        "line_name": "1651路",
        "line_id": "165104"
      },
      {
        "line_name": "城桥2路",
        "line_id": "170104"
      },
      {
        "line_name": "1711路",
        "line_id": "171104"
      },
      {
        "line_name": "1712路",
        "line_id": "171204"
      },
      {
        "line_name": "1721路",
        "line_id": "172104"
      },
      {
        "line_name": "1731路",
        "line_id": "173104"
      },
      {
        "line_name": "浦东6路",
        "line_id": "20001"
      },
      {
        "line_name": "浦东10路",
        "line_id": "20007"
      },
      {
        "line_name": "申崇六线B",
        "line_id": "20010"
      },
      {
        "line_name": "1016路",
        "line_id": "20011"
      },
      {
        "line_name": "1017路",
        "line_id": "20012"
      },
      {
        "line_name": "1015路",
        "line_id": "20013"
      },
      {
        "line_name": "1026路",
        "line_id": "20014"
      },
      {
        "line_name": "1027路",
        "line_id": "20015"
      },
      {
        "line_name": "1028路",
        "line_id": "20016"
      },
      {
        "line_name": "1032路",
        "line_id": "20019"
      },
      {
        "line_name": "1033路",
        "line_id": "20020"
      },
      {
        "line_name": "浦东20路",
        "line_id": "20022"
      },
      {
        "line_name": "1045路",
        "line_id": "20023"
      },
      {
        "line_name": "1042路",
        "line_id": "20024"
      },
      {
        "line_name": "1047路",
        "line_id": "20026"
      },
      {
        "line_name": "1052路",
        "line_id": "20036"
      },
      {
        "line_name": "1053路",
        "line_id": "20038"
      },
      {
        "line_name": "1055路",
        "line_id": "20039"
      },
      {
        "line_name": "1056路",
        "line_id": "20040"
      },
      {
        "line_name": "1058路",
        "line_id": "20041"
      },
      {
        "line_name": "浦东27路",
        "line_id": "20042"
      },
      {
        "line_name": "1097路",
        "line_id": "20055"
      },
      {
        "line_name": "1057路",
        "line_id": "20056"
      },
      {
        "line_name": "1103路",
        "line_id": "20057"
      },
      {
        "line_name": "浦东32路",
        "line_id": "20058"
      },
      {
        "line_name": "浦东4路",
        "line_id": "20059"
      },
      {
        "line_name": "1031路",
        "line_id": "20060"
      },
      {
        "line_name": "1010路",
        "line_id": "20061"
      },
      {
        "line_name": "浦东35路",
        "line_id": "20062"
      },
      {
        "line_name": "1100路",
        "line_id": "20065"
      },
      {
        "line_name": "1104路",
        "line_id": "20068"
      },
      {
        "line_name": "1105路",
        "line_id": "20069"
      },
      {
        "line_name": "1107路",
        "line_id": "20071"
      },
      {
        "line_name": "浦东39路",
        "line_id": "20072"
      },
      {
        "line_name": "浦东36路",
        "line_id": "20073"
      },
      {
        "line_name": "浦东41路",
        "line_id": "20074"
      },
      {
        "line_name": "浦东38路",
        "line_id": "20075"
      },
      {
        "line_name": "785路",
        "line_id": "20077"
      },
      {
        "line_name": "徐闵夜宵专线",
        "line_id": "500103"
      },
      {
        "line_name": "隧道夜宵一线",
        "line_id": "500203"
      },
      {
        "line_name": "大桥三线",
        "line_id": "501900"
      },
      {
        "line_name": "申崇三线",
        "line_id": "502100"
      },
      {
        "line_name": "申崇三线区间",
        "line_id": "502180"
      },
      {
        "line_name": "隧道二线",
        "line_id": "502700"
      },
      {
        "line_name": "枫梅线",
        "line_id": "502800"
      },
      {
        "line_name": "松卫专线",
        "line_id": "503300"
      },
      {
        "line_name": "徐川专线",
        "line_id": "503900"
      },
      {
        "line_name": "石胡专线",
        "line_id": "504200"
      },
      {
        "line_name": "长征1路",
        "line_id": "504300"
      },
      {
        "line_name": "上川专线",
        "line_id": "505600"
      },
      {
        "line_name": "北安线",
        "line_id": "506300"
      },
      {
        "line_name": "北安跨线",
        "line_id": "506314"
      },
      {
        "line_name": "徐闵线",
        "line_id": "508100"
      },
      {
        "line_name": "沪松专线",
        "line_id": "508200"
      },
      {
        "line_name": "申崇四线",
        "line_id": "508400"
      },
      {
        "line_name": "松卫线",
        "line_id": "508500"
      },
      {
        "line_name": "198路",
        "line_id": "508600"
      },
      {
        "line_name": "石梅线",
        "line_id": "508900"
      },
      {
        "line_name": "沪唐专线",
        "line_id": "509000"
      },
      {
        "line_name": "浦卫专线",
        "line_id": "509100"
      },
      {
        "line_name": "石青专线",
        "line_id": "509500"
      },
      {
        "line_name": "松闵线",
        "line_id": "509800"
      },
      {
        "line_name": "南金线",
        "line_id": "509900"
      },
      {
        "line_name": "828路",
        "line_id": "510000"
      },
      {
        "line_name": "申方专线",
        "line_id": "510200"
      },
      {
        "line_name": "莘金专线",
        "line_id": "510300"
      },
      {
        "line_name": "上佘定班线",
        "line_id": "510400"
      },
      {
        "line_name": "上石线",
        "line_id": "510700"
      },
      {
        "line_name": "塘卫线",
        "line_id": "510800"
      },
      {
        "line_name": "朱松线",
        "line_id": "510900"
      },
      {
        "line_name": "塘南专线",
        "line_id": "511000"
      },
      {
        "line_name": "松新枫线",
        "line_id": "511100"
      },
      {
        "line_name": "大桥一线",
        "line_id": "511400"
      },
      {
        "line_name": "申崇五线",
        "line_id": "511500"
      },
      {
        "line_name": "申崇五线班车",
        "line_id": "511580"
      },
      {
        "line_name": "新泾1路",
        "line_id": "512300"
      },
      {
        "line_name": "虹桥枢纽4路",
        "line_id": "512700"
      },
      {
        "line_name": "申崇二线",
        "line_id": "513000"
      },
      {
        "line_name": "申崇二线区间",
        "line_id": "513080"
      },
      {
        "line_name": "松亭石专线",
        "line_id": "513100"
      },
      {
        "line_name": "831路",
        "line_id": "513500"
      },
      {
        "line_name": "青枫专线",
        "line_id": "513600"
      },
      {
        "line_name": "虹桥枢纽1路",
        "line_id": "514700"
      },
      {
        "line_name": "隧道八线",
        "line_id": "514900"
      },
      {
        "line_name": "811路",
        "line_id": "515100"
      },
      {
        "line_name": "万周专线",
        "line_id": "515200"
      },
      {
        "line_name": "南卫线",
        "line_id": "515400"
      },
      {
        "line_name": "石南专线",
        "line_id": "516000"
      },
      {
        "line_name": "申崇一线",
        "line_id": "516400"
      },
      {
        "line_name": "申川专线",
        "line_id": "517100"
      },
      {
        "line_name": "申崇六线B(崇明巴士)",
        "line_id": "517390"
      },
      {
        "line_name": "虹桥枢纽7路",
        "line_id": "517400"
      },
      {
        "line_name": "奉卫线",
        "line_id": "518100"
      },
      {
        "line_name": "1001路",
        "line_id": "60001"
      },
      {
        "line_name": "1002路",
        "line_id": "60002"
      },
      {
        "line_name": "1003路",
        "line_id": "60003"
      },
      {
        "line_name": "陆家嘴金融城1路",
        "line_id": "60004"
      },
      {
        "line_name": "航头3路",
        "line_id": "60005"
      },
      {
        "line_name": "浦东3路",
        "line_id": "60007"
      },
      {
        "line_name": "1007路",
        "line_id": "60008"
      },
      {
        "line_name": "1008路",
        "line_id": "60009"
      },
      {
        "line_name": "1004路",
        "line_id": "60015"
      },
      {
        "line_name": "1005路",
        "line_id": "60016"
      },
      {
        "line_name": "1006路",
        "line_id": "60017"
      },
      {
        "line_name": "1009路",
        "line_id": "60019"
      },
      {
        "line_name": "陆家嘴金融城环线",
        "line_id": "600197"
      },
      {
        "line_name": "1011路",
        "line_id": "60020"
      },
      {
        "line_name": "1012路",
        "line_id": "60021"
      },
      {
        "line_name": "1020路",
        "line_id": "60022"
      },
      {
        "line_name": "164路",
        "line_id": "60023"
      },
      {
        "line_name": "1019路",
        "line_id": "60024"
      },
      {
        "line_name": "1023路",
        "line_id": "60025"
      },
      {
        "line_name": "1024路",
        "line_id": "60026"
      },
      {
        "line_name": "周康10路",
        "line_id": "60027"
      },
      {
        "line_name": "1013路",
        "line_id": "60028"
      },
      {
        "line_name": "1018路",
        "line_id": "60029"
      },
      {
        "line_name": "1021路",
        "line_id": "60030"
      },
      {
        "line_name": "1022路",
        "line_id": "60031"
      },
      {
        "line_name": "1025路",
        "line_id": "60032"
      },
      {
        "line_name": "申港3路",
        "line_id": "60033"
      },
      {
        "line_name": "1029路",
        "line_id": "60034"
      },
      {
        "line_name": "1030路",
        "line_id": "60035"
      },
      {
        "line_name": "陆家嘴金融城4路",
        "line_id": "60037"
      },
      {
        "line_name": "1039路",
        "line_id": "60038"
      },
      {
        "line_name": "1040路",
        "line_id": "60039"
      },
      {
        "line_name": "1041路",
        "line_id": "60040"
      },
      {
        "line_name": "1043路",
        "line_id": "60041"
      },
      {
        "line_name": "1065路",
        "line_id": "60042"
      },
      {
        "line_name": "1034路",
        "line_id": "60043"
      },
      {
        "line_name": "1046路",
        "line_id": "60044"
      },
      {
        "line_name": "浦江11路",
        "line_id": "60050"
      },
      {
        "line_name": "浦东22路",
        "line_id": "60052"
      },
      {
        "line_name": "新场5路",
        "line_id": "60053"
      },
      {
        "line_name": "川沙5路",
        "line_id": "60054"
      },
      {
        "line_name": "799路",
        "line_id": "60055"
      },
      {
        "line_name": "1083路",
        "line_id": "60095"
      },
      {
        "line_name": "陆家嘴金融城2路",
        "line_id": "60098"
      },
      {
        "line_name": "陆家嘴金融城3路",
        "line_id": "60099"
      },
      {
        "line_name": "1054路",
        "line_id": "60108"
      },
      {
        "line_name": "1048路",
        "line_id": "61048"
      },
      {
        "line_name": "1049路",
        "line_id": "61049"
      },
      {
        "line_name": "闵行16路",
        "line_id": "660412"
      },
      {
        "line_name": "闵行22路",
        "line_id": "660512"
      },
      {
        "line_name": "闵行1路",
        "line_id": "661712"
      },
      {
        "line_name": "莘车线",
        "line_id": "664200"
      },
      {
        "line_name": "江川3路",
        "line_id": "664300"
      },
      {
        "line_name": "古美环线",
        "line_id": "664700"
      },
      {
        "line_name": "闵东线",
        "line_id": "665000"
      },
      {
        "line_name": "莘庄3路",
        "line_id": "665100"
      },
      {
        "line_name": "闵吴线",
        "line_id": "665200"
      },
      {
        "line_name": "闵马线",
        "line_id": "665300"
      },
      {
        "line_name": "莘庄2路",
        "line_id": "665400"
      },
      {
        "line_name": "莘庄1路",
        "line_id": "665800"
      },
      {
        "line_name": "七宝1路",
        "line_id": "666200"
      },
      {
        "line_name": "闵行28路",
        "line_id": "667312"
      },
      {
        "line_name": "闵行30路",
        "line_id": "667512"
      },
      {
        "line_name": "闵行29路",
        "line_id": "667612"
      },
      {
        "line_name": "闵行36路",
        "line_id": "667812"
      },
      {
        "line_name": "1050路",
        "line_id": "70005"
      },
      {
        "line_name": "1060路",
        "line_id": "70010"
      },
      {
        "line_name": "1051路",
        "line_id": "70036"
      },
      {
        "line_name": "1098路",
        "line_id": "70043"
      },
      {
        "line_name": "宝山5路",
        "line_id": "700612"
      },
      {
        "line_name": "宝山17路",
        "line_id": "700712"
      },
      {
        "line_name": "宝山82路",
        "line_id": "700812"
      },
      {
        "line_name": "宝山85路",
        "line_id": "700912"
      },
      {
        "line_name": "宝山20路",
        "line_id": "701012"
      },
      {
        "line_name": "宝山4路",
        "line_id": "701112"
      },
      {
        "line_name": "宝山14路",
        "line_id": "701212"
      },
      {
        "line_name": "961路",
        "line_id": "70123"
      },
      {
        "line_name": "宝山86路",
        "line_id": "701312"
      },
      {
        "line_name": "宝山8路",
        "line_id": "701412"
      },
      {
        "line_name": "宝山21路",
        "line_id": "701512"
      },
      {
        "line_name": "宝山2路",
        "line_id": "701612"
      },
      {
        "line_name": "宝山15路",
        "line_id": "701712"
      },
      {
        "line_name": "宝山81路",
        "line_id": "701812"
      },
      {
        "line_name": "宝山13路",
        "line_id": "701912"
      },
      {
        "line_name": "宝山84路",
        "line_id": "702012"
      },
      {
        "line_name": "宝山11路",
        "line_id": "702112"
      },
      {
        "line_name": "宝山16路",
        "line_id": "702212"
      },
      {
        "line_name": "宝山7路",
        "line_id": "702312"
      },
      {
        "line_name": "宝山6路",
        "line_id": "702412"
      },
      {
        "line_name": "宝山9路",
        "line_id": "702512"
      },
      {
        "line_name": "宝山1路",
        "line_id": "702612"
      },
      {
        "line_name": "宝山12路",
        "line_id": "702712"
      },
      {
        "line_name": "宝山19路",
        "line_id": "702812"
      },
      {
        "line_name": "宝山3路",
        "line_id": "702912"
      },
      {
        "line_name": "宝山10路",
        "line_id": "703012"
      },
      {
        "line_name": "宝山22路",
        "line_id": "703106"
      },
      {
        "line_name": "宝山23路",
        "line_id": "703200"
      },
      {
        "line_name": "宝山25路",
        "line_id": "703300"
      },
      {
        "line_name": "宝山83路",
        "line_id": "703512"
      },
      {
        "line_name": "宝山88路",
        "line_id": "704112"
      },
      {
        "line_name": "宝山87路",
        "line_id": "704212"
      },
      {
        "line_name": "罗泾班线",
        "line_id": "704300"
      },
      {
        "line_name": "宝山89路",
        "line_id": "704412"
      },
      {
        "line_name": "宝山92路",
        "line_id": "704612"
      },
      {
        "line_name": "宝山90路",
        "line_id": "704712"
      },
      {
        "line_name": "宝山91路",
        "line_id": "704812"
      },
      {
        "line_name": "宝山18路",
        "line_id": "704912"
      },
      {
        "line_name": "宝山27路",
        "line_id": "705012"
      },
      {
        "line_name": "宝山28路",
        "line_id": "705112"
      },
      {
        "line_name": "宝山35路",
        "line_id": "705212"
      },
      {
        "line_name": "宝山93路",
        "line_id": "705312"
      },
      {
        "line_name": "宝山36路",
        "line_id": "705412"
      },
      {
        "line_name": "宝山29路",
        "line_id": "705512"
      },
      {
        "line_name": "宝山31路",
        "line_id": "705612"
      },
      {
        "line_name": "浦东37路",
        "line_id": "71001"
      },
      {
        "line_name": "浦东13路",
        "line_id": "750312"
      },
      {
        "line_name": "浦东17路",
        "line_id": "751212"
      },
      {
        "line_name": "浦东11路",
        "line_id": "751512"
      },
      {
        "line_name": "孙桥1路",
        "line_id": "757700"
      },
      {
        "line_name": "合庆2路",
        "line_id": "758800"
      },
      {
        "line_name": "浦东15路",
        "line_id": "759100"
      },
      {
        "line_name": "高川专线",
        "line_id": "759500"
      },
      {
        "line_name": "外高桥2路",
        "line_id": "761600"
      },
      {
        "line_name": "惠南10路",
        "line_id": "80002"
      },
      {
        "line_name": "1095路",
        "line_id": "80101"
      },
      {
        "line_name": "1086路",
        "line_id": "80102"
      },
      {
        "line_name": "1087路",
        "line_id": "80103"
      },
      {
        "line_name": "1088路",
        "line_id": "80104"
      },
      {
        "line_name": "1089路",
        "line_id": "80105"
      },
      {
        "line_name": "大泥专线",
        "line_id": "801401"
      },
      {
        "line_name": "航大专线",
        "line_id": "801402"
      },
      {
        "line_name": "1108路",
        "line_id": "801701"
      },
      {
        "line_name": "1109路",
        "line_id": "801702"
      },
      {
        "line_name": "1111路",
        "line_id": "80201"
      },
      {
        "line_name": "浦东30路",
        "line_id": "80202"
      },
      {
        "line_name": "浦东31路",
        "line_id": "80203"
      },
      {
        "line_name": "1074路",
        "line_id": "80211"
      },
      {
        "line_name": "1092路",
        "line_id": "80212"
      },
      {
        "line_name": "1093路",
        "line_id": "80213"
      },
      {
        "line_name": "1096路",
        "line_id": "80301"
      },
      {
        "line_name": "浦东33路",
        "line_id": "80302"
      },
      {
        "line_name": "1094路",
        "line_id": "80311"
      },
      {
        "line_name": "1101路",
        "line_id": "80320"
      },
      {
        "line_name": "1102路",
        "line_id": "80321"
      },
      {
        "line_name": "1064路",
        "line_id": "80331"
      },
      {
        "line_name": "金山9路",
        "line_id": "830312"
      },
      {
        "line_name": "金山9路区间",
        "line_id": "830380"
      },
      {
        "line_name": "金山卫一路",
        "line_id": "830412"
      },
      {
        "line_name": "金山1路",
        "line_id": "830512"
      },
      {
        "line_name": "金山工业区二路",
        "line_id": "830612"
      },
      {
        "line_name": "金山工业区一路",
        "line_id": "830712"
      },
      {
        "line_name": "金山8路",
        "line_id": "830812"
      },
      {
        "line_name": "金山5路",
        "line_id": "830912"
      },
      {
        "line_name": "金山7路",
        "line_id": "831012"
      },
      {
        "line_name": "金山2路",
        "line_id": "831112"
      },
      {
        "line_name": "金山3路",
        "line_id": "831212"
      },
      {
        "line_name": "金山卫二路",
        "line_id": "831312"
      },
      {
        "line_name": "金山4路",
        "line_id": "831412"
      },
      {
        "line_name": "金山6路",
        "line_id": "831512"
      },
      {
        "line_name": "朱泾五路",
        "line_id": "831613"
      },
      {
        "line_name": "山阳二路",
        "line_id": "831713"
      },
      {
        "line_name": "山阳二路工业区",
        "line_id": "831780"
      },
      {
        "line_name": "张堰二路",
        "line_id": "832213"
      },
      {
        "line_name": "山阳一路",
        "line_id": "832313"
      },
      {
        "line_name": "山阳一路区间",
        "line_id": "832380"
      },
      {
        "line_name": "漕泾一路",
        "line_id": "832713"
      },
      {
        "line_name": "张堰一路",
        "line_id": "832913"
      },
      {
        "line_name": "亭林三路",
        "line_id": "833013"
      },
      {
        "line_name": "石化三线",
        "line_id": "833700"
      },
      {
        "line_name": "金张卫支线",
        "line_id": "834000"
      },
      {
        "line_name": "金漕线",
        "line_id": "834500"
      },
      {
        "line_name": "枫戚快线",
        "line_id": "834700"
      },
      {
        "line_name": "朱卫专线",
        "line_id": "834900"
      },
      {
        "line_name": "金枫线",
        "line_id": "835000"
      },
      {
        "line_name": "石漕线",
        "line_id": "835200"
      },
      {
        "line_name": "朱钱卫线",
        "line_id": "835300"
      },
      {
        "line_name": "金石线",
        "line_id": "835700"
      },
      {
        "line_name": "石化一线",
        "line_id": "835800"
      },
      {
        "line_name": "朱卫线",
        "line_id": "836000"
      },
      {
        "line_name": "松江12路",
        "line_id": "875612"
      },
      {
        "line_name": "1066路",
        "line_id": "88801"
      },
      {
        "line_name": "1067路",
        "line_id": "88802"
      },
      {
        "line_name": "1068路",
        "line_id": "88803"
      },
      {
        "line_name": "1069路",
        "line_id": "88804"
      },
      {
        "line_name": "惠南6路",
        "line_id": "88805"
      },
      {
        "line_name": "惠南11路",
        "line_id": "88806"
      },
      {
        "line_name": "1071路",
        "line_id": "88807"
      },
      {
        "line_name": "1072路",
        "line_id": "88808"
      },
      {
        "line_name": "1073路",
        "line_id": "88809"
      },
      {
        "line_name": "1079路",
        "line_id": "88810"
      },
      {
        "line_name": "惠南5路",
        "line_id": "88811"
      },
      {
        "line_name": "1075路",
        "line_id": "88812"
      },
      {
        "line_name": "1077路",
        "line_id": "88813"
      },
      {
        "line_name": "1078路",
        "line_id": "88814"
      },
      {
        "line_name": "1063路",
        "line_id": "88815"
      },
      {
        "line_name": "1082路",
        "line_id": "88816"
      },
      {
        "line_name": "浦东29路",
        "line_id": "88818"
      },
      {
        "line_name": "祝桥3路",
        "line_id": "88888"
      },
      {
        "line_name": "周康9路",
        "line_id": "90008"
      },
      {
        "line_name": "浦东25路",
        "line_id": "90011"
      },
      {
        "line_name": "1080路",
        "line_id": "90013"
      },
      {
        "line_name": "1081路",
        "line_id": "90014"
      },
      {
        "line_name": "1085路",
        "line_id": "90015"
      },
      {
        "line_name": "1091路",
        "line_id": "90016"
      },
      {
        "line_name": "1099路",
        "line_id": "90017"
      },
      {
        "line_name": "1090路",
        "line_id": "90018"
      },
      {
        "line_name": "1106路",
        "line_id": "90019"
      },
      {
        "line_name": "1110路",
        "line_id": "90020"
      },
      {
        "line_name": "南堡二线",
        "line_id": "971112"
      },
      {
        "line_name": "崇明乡村6路",
        "line_id": "971212"
      },
      {
        "line_name": "崇明乡村3路",
        "line_id": "971312"
      },
      {
        "line_name": "崇明乡村1路",
        "line_id": "971412"
      },
      {
        "line_name": "崇明乡村5路",
        "line_id": "971512"
      },
      {
        "line_name": "崇明乡村4路",
        "line_id": "971612"
      },
      {
        "line_name": "南海二线",
        "line_id": "971713"
      },
      {
        "line_name": "南堡专线",
        "line_id": "971800"
      },
      {
        "line_name": "长兴2路",
        "line_id": "971900"
      },
      {
        "line_name": "南红专线",
        "line_id": "972000"
      },
      {
        "line_name": "城桥1路",
        "line_id": "972100"
      },
      {
        "line_name": "崇明东滩2路",
        "line_id": "972200"
      },
      {
        "line_name": "堡七线",
        "line_id": "972400"
      },
      {
        "line_name": "南堡支线",
        "line_id": "972500"
      },
      {
        "line_name": "陈前线",
        "line_id": "972600"
      },
      {
        "line_name": "横沙2路",
        "line_id": "972700"
      },
      {
        "line_name": "南新专线（崇明）",
        "line_id": "972800"
      },
      {
        "line_name": "长兴3路",
        "line_id": "972900"
      },
      {
        "line_name": "崇明乡村10路",
        "line_id": "973000"
      },
      {
        "line_name": "南风线",
        "line_id": "973100"
      },
      {
        "line_name": "南东专线",
        "line_id": "973200"
      },
      {
        "line_name": "南跃线",
        "line_id": "973300"
      },
      {
        "line_name": "崇明乡村9路",
        "line_id": "973400"
      },
      {
        "line_name": "南隆专线",
        "line_id": "973500"
      },
      {
        "line_name": "南建专线",
        "line_id": "973600"
      },
      {
        "line_name": "南裕专线",
        "line_id": "973700"
      },
      {
        "line_name": "南海线",
        "line_id": "973800"
      },
      {
        "line_name": "堡陈北线",
        "line_id": "973900"
      },
      {
        "line_name": "陈凤线",
        "line_id": "974000"
      },
      {
        "line_name": "长兴1路",
        "line_id": "974100"
      },
      {
        "line_name": "堡四线",
        "line_id": "974200"
      },
      {
        "line_name": "南牛线",
        "line_id": "974300"
      },
      {
        "line_name": "堡陈专线",
        "line_id": "974400"
      },
      {
        "line_name": "堡红线",
        "line_id": "974500"
      },
      {
        "line_name": "南江专线",
        "line_id": "974600"
      },
      {
        "line_name": "堡进线",
        "line_id": "974700"
      },
      {
        "line_name": "堡胜专线",
        "line_id": "975000"
      },
      {
        "line_name": "堡陈中线",
        "line_id": "975100"
      },
      {
        "line_name": "南同专线",
        "line_id": "975200"
      },
      {
        "line_name": "长兴4路",
        "line_id": "975600"
      },
      {
        "line_name": "崇明东滩1路",
        "line_id": "975712"
      },
      {
        "line_name": "崇明乡村11路",
        "line_id": "975812"
      },
      {
        "line_name": "崇明乡村7路",
        "line_id": "975912"
      },
      {
        "line_name": "长南线",
        "line_id": "976000"
      },
      {
        "line_name": "横长线",
        "line_id": "976100"
      },
      {
        "line_name": "浦东14路",
        "line_id": "999900"
      }
    ],
    searchList: []
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
    var list = this.data.busList;
    var searchList = [];
    var showLen = 0;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].line_name.indexOf(this.data.inputVal) != -1) {
        searchList.push(list[i]);
        showLen = showLen + 1;
        if (showLen == 10) {
          break;
        }
      }
    }
    this.setData({
      searchList: searchList
    });
  },
  onHide: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
});
