option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'line',
        lineStyle: {
          color: 'rgba(0,0,0,0.2)',
          width: 1,
          type: 'solid'
        }
      }
    },
    legend: {
      data: ['Roadway Type', 'BAC', 'Work Zone', 'Vulnerable User', 'Driver Behavior', 'Others'],
      orient: 'vertical',
    },
    singleAxis: {
      top: 150,
      bottom: 150,
      axisTick: {},
      axisLabel: {},
      type: 'time',
      axisPointer: {
        animation: true,
        label: {
          show: false
        }
      },
      splitLine: {
        show: false,
        lineStyle: {
          type: 'dashed',
          opacity: 0.2
        }
      }
    },
    color: [
    '#eda388', // Roadway Type
    '#eccc79', // BAC
    '#afba71', // Work Zone
    '#7c9bbf', // Vulnerable User
    '#de9cad', // Driver Behavior
    '#B3D2B2'  // Others
  ],
    series: [
      {
        type: 'themeRiver',
        emphasis: {
          itemStyle: {
            shadowBlur: 20,
            shadowColor: 'rgba(0, 0, 0, 0.8)',
          }
        },
        data: [['2024/01/10', 0.08696122407082323, 'Roadway Type'],
   ['2024/01/10', 0, 'BAC'],
   ['2024/01/10', 0, 'Work Zone'],
   ['2024/01/10', 0.19773374168152175, 'Vulnerable User'],
   ['2024/01/10', 0.007465142987320335, 'Driver Behavior'],
   ['2024/01/10', 0.3825620843210291, 'Others'],
   ['2024/01/04', 0.08488236505226705, 'Roadway Type'],
   ['2024/01/04', 0, 'BAC'],
   ['2024/01/04', 0, 'Work Zone'],
   ['2024/01/04', 0.182133466390751, 'Vulnerable User'],
   ['2024/01/04', 0.014898204910745233, 'Driver Behavior'],
   ['2024/01/04', 0.35145038775569537, 'Others'],
   ['2024/01/06', 0.1408616265194895, 'Roadway Type'],
   ['2024/01/06', 0.01779792638746802, 'BAC'],
   ['2024/01/06', 0, 'Work Zone'],
   ['2024/01/06', 0.007219465937949887, 'Vulnerable User'],
   ['2024/01/06', 0.025993311389031094, 'Driver Behavior'],
   ['2024/01/06', 0.45629616675773493, 'Others'],
   ['2024/01/19', 0.2484838652296951, 'Roadway Type'],
   ['2024/01/19', 0, 'BAC'],
   ['2024/01/19', 0, 'Work Zone'],
   ['2024/01/19', 0, 'Vulnerable User'],
   ['2024/01/19', 0.010937698334895449, 'Driver Behavior'],
   ['2024/01/19', 0.47660374003762784, 'Others'],
   ['2024/01/18', 0, 'Roadway Type'],
   ['2024/01/18', 0.0097111400675356, 'BAC'],
   ['2024/01/18', 0.0069633414543431, 'Work Zone'],
   ['2024/01/18', 0.1299360603052571, 'Vulnerable User'],
   ['2024/01/18', 0.0016761530798318, 'Driver Behavior'],
   ['2024/01/18', 0.5861105972301782, 'Others'],
   ['2024/01/03', 0.025815621861364754, 'Roadway Type'],
   ['2024/01/03', 0, 'BAC'],
   ['2024/01/03', 0, 'Work Zone'],
   ['2024/01/03', 0.0233649528125367, 'Vulnerable User'],
   ['2024/01/03', 0, 'Driver Behavior'],
   ['2024/01/03', 0.49392957244466673, 'Others'],
   ['2024/02/06', 0.030212200938817737, 'Roadway Type'],
   ['2024/02/06', 0.6594290768074164, 'BAC'],
   ['2024/02/06', 0.0006533148325433716, 'Work Zone'],
   ['2024/02/06', 0, 'Vulnerable User'],
   ['2024/02/06', 0.12291947226131753, 'Driver Behavior'],
   ['2024/02/06', 0.18799208251134011, 'Others'],
   ['2024/01/22', 0.05803132291430373, 'Roadway Type'],
   ['2024/01/22', 0.020123467425216587, 'BAC'],
   ['2024/01/22', 0, 'Work Zone'],
   ['2024/01/22', 0.17407006091844793, 'Vulnerable User'],
   ['2024/01/22', 0, 'Driver Behavior'],
   ['2024/01/22', 0.5023161762879607, 'Others'],
   ['2024/01/23', 0.0358156215753299, 'Roadway Type'],
   ['2024/01/23', 0, 'BAC'],
   ['2024/01/23', 0, 'Work Zone'],
   ['2024/01/23', 0.1874554386875152, 'Vulnerable User'],
   ['2024/01/23', 0.1547652939852552, 'Driver Behavior'],
   ['2024/01/23', 0.4213246958808362, 'Others'],
   ['2024/01/08', 0.1552645356799693, 'Roadway Type'],
   ['2024/01/08', 0.02861066735675186, 'BAC'],
   ['2024/01/08', 0.0006417797942035734, 'Work Zone'],
   ['2024/01/08', 0.006945894772239791, 'Vulnerable User'],
   ['2024/01/08', 0.003913203680861271, 'Driver Behavior'],
   ['2024/01/08', 0.4634868721289132, 'Others'],
   ['2024/01/12', 0.06287883501165367, 'Roadway Type'],
   ['2024/01/12', 0.1982375071514245, 'BAC'],
   ['2024/01/12', 0.0449464445255704, 'Work Zone'],
   ['2024/01/12', 0.00856592227402098, 'Vulnerable User'],
   ['2024/01/12', 0.05272523455338958, 'Driver Behavior'],
   ['2024/01/12', 0.3095359220100719, 'Others'],
   ['2024/01/05', 0.0380858896414903, 'Roadway Type'],
   ['2024/01/05', 0.0032075530344101, 'BAC'],
   ['2024/01/05', 0, 'Work Zone'],
   ['2024/01/05', 0, 'Vulnerable User'],
   ['2024/01/05', 0.0626178569474186, 'Driver Behavior'],
   ['2024/01/05', 0.542127858482531, 'Others'],
   ['2024/02/02', 0.0309459548823625, 'Roadway Type'],
   ['2024/02/02', 0, 'BAC'],
   ['2024/02/02', 0.4549742850345622, 'Work Zone'],
   ['2024/02/02', 0.0738891024240084, 'Vulnerable User'],
   ['2024/02/02', 0.2227913043514736, 'Driver Behavior'],
   ['2024/02/02', 0.16857724837671523, 'Others'],
   ['2024/02/08', 0.08778389458805246, 'Roadway Type'],
   ['2024/02/08', 0.5631345328821237, 'BAC'],
   ['2024/02/08', 0.05239624465108078, 'Work Zone'],
   ['2024/02/08', 0.010475339978268789, 'Vulnerable User'],
   ['2024/02/08', 0.06075614284034431, 'Driver Behavior'],
   ['2024/02/08', 0.23609764215344597, 'Others'],
   ['2024/02/07', 0, 'Roadway Type'],
   ['2024/02/07', 0.6422629701716873, 'BAC'],
   ['2024/02/07', 0.07672703718053954, 'Work Zone'],
   ['2024/02/07', 0, 'Vulnerable User'],
   ['2024/02/07', 0.0669252126950696, 'Driver Behavior'],
   ['2024/02/07', 0.22259045589440926, 'Others'],
   ['2024/02/10', 0.1631036345909715, 'Roadway Type'],
   ['2024/02/10', 0.28241255545767174, 'BAC'],
   ['2024/02/10', 0.4461045637862106, 'Work Zone'],
   ['2024/02/10', 0.02425657687346685, 'Vulnerable User'],
   ['2024/02/10', 0.12137112261509665, 'Driver Behavior'],
   ['2024/02/10', 0, 'Others'],
   ['2024/01/20', 0.1340760767893748, 'Roadway Type'],
   ['2024/01/20', 0.0247088507280762, 'BAC'],
   ['2024/01/20', 0, 'Work Zone'],
   ['2024/01/20', 0.024303468706056, 'Vulnerable User'],
   ['2024/01/20', 0.0263501763012832, 'Driver Behavior'],
   ['2024/01/20', 0.5400882858049825, 'Others'],
   ['2024/01/29', 0.05458651643805515, 'Roadway Type'],
   ['2024/01/29', 0.5014237762759588, 'BAC'],
   ['2024/01/29', 0, 'Work Zone'],
   ['2024/01/29', 0.00805889156154395, 'Vulnerable User'],
   ['2024/01/29', 0.07437658231922423, 'Driver Behavior'],
   ['2024/01/29', 0.25147557698013906, 'Others'],
   ['2024/01/31', 0.04766181169431698, 'Roadway Type'],
   ['2024/01/31', 0.2311669366655963, 'BAC'],
   ['2024/01/31', 0, 'Work Zone'],
   ['2024/01/31', 0.0960558256572726, 'Vulnerable User'],
   ['2024/01/31', 0.2081771515737647, 'Driver Behavior'],
   ['2024/01/31', 0.33333431115316714, 'Others'],
   ['2024/01/14', 0.05060311393535262, 'Roadway Type'],
   ['2024/01/14', 0.028807627967295423, 'BAC'],
   ['2024/01/14', 0.003831677698592181, 'Work Zone'],
   ['2024/01/14', 0.007292652423611798, 'Vulnerable User'],
   ['2024/01/14', 0.1678989360080692, 'Driver Behavior'],
   ['2024/01/14', 0.4506681517056193, 'Others'],
   ['2024/01/15', 0.01817388386713993, 'Roadway Type'],
   ['2024/01/15', 0, 'BAC'],
   ['2024/01/15', 0, 'Work Zone'],
   ['2024/01/15', 0.0103040949164974, 'Vulnerable User'],
   ['2024/01/15', 0.23478754472713204, 'Driver Behavior'],
   ['2024/01/15', 0.46029043873389996, 'Others'],
   ['2024/01/01', 0.1398468290008823, 'Roadway Type'],
   ['2024/01/01', 0, 'BAC'],
   ['2024/01/01', 0, 'Work Zone'],
   ['2024/01/01', 0, 'Vulnerable User'],
   ['2024/01/01', 0, 'Driver Behavior'],
   ['2024/01/01', 0.3574192400537211, 'Others'],
   ['2024/01/02', 0.0558978896892863, 'Roadway Type'],
   ['2024/01/02', 0.130284291514255, 'BAC'],
   ['2024/01/02', 0, 'Work Zone'],
   ['2024/01/02', 0, 'Vulnerable User'],
   ['2024/01/02', 0, 'Driver Behavior'],
   ['2024/01/02', 0.3295332688449051, 'Others'],
   ['2024/02/03', 0.09043822225539523, 'Roadway Type'],
   ['2024/02/03', 0.6848944798041918, 'BAC'],
   ['2024/02/03', 0, 'Work Zone'],
   ['2024/02/03', 0.018209130922955435, 'Vulnerable User'],
   ['2024/02/03', 0.08048676626450296, 'Driver Behavior'],
   ['2024/02/03', 0.09777051609286938, 'Others'],
   ['2024/02/05', 0, 'Roadway Type'],
   ['2024/02/05', 0.6781785833576279, 'BAC'],
   ['2024/02/05', 0.0671438843192227, 'Work Zone'],
   ['2024/02/05', 0, 'Vulnerable User'],
   ['2024/02/05', 0.1217131600382734, 'Driver Behavior'],
   ['2024/02/05', 0.12102657521532631, 'Others'],
   ['2024/01/25', 0.0406458160109445, 'Roadway Type'],
   ['2024/01/25', 0.06272600054642094, 'BAC'],
   ['2024/01/25', 0, 'Work Zone'],
   ['2024/01/25', 0.11675660176898964, 'Vulnerable User'],
   ['2024/01/25', 0.15526782865594038, 'Driver Behavior'],
   ['2024/01/25', 0.47673586480550034, 'Others'],
   ['2024/01/17', 0.0811153731333708, 'Roadway Type'],
   ['2024/01/17', 0.015080886767914282, 'BAC'],
   ['2024/01/17', 0, 'Work Zone'],
   ['2024/01/17', 0, 'Vulnerable User'],
   ['2024/01/17', 0.14676136096069112, 'Driver Behavior'],
   ['2024/01/17', 0.488633791714602, 'Others'],
   ['2024/01/13', 0, 'Roadway Type'],
   ['2024/01/13', 0, 'BAC'],
   ['2024/01/13', 0, 'Work Zone'],
   ['2024/01/13', 0.022188072083128865, 'Vulnerable User'],
   ['2024/01/13', 0.1784873415703514, 'Driver Behavior'],
   ['2024/01/13', 0.4766938828972702, 'Others'],
   ['2024/01/26', 0.13674407395277866, 'Roadway Type'],
   ['2024/01/26', 0.095342769112755, 'BAC'],
   ['2024/01/26', 0.11172440145186824, 'Work Zone'],
   ['2024/01/26', 0.111264198298201, 'Vulnerable User'],
   ['2024/01/26', 0.03685992803237831, 'Driver Behavior'],
   ['2024/01/26', 0.36823859961291033, 'Others'],
   ['2024/01/16', 0.06353122083928375, 'Roadway Type'],
   ['2024/01/16', 0.2898164499279748, 'BAC'],
   ['2024/01/16', 0.011563453240567796, 'Work Zone'],
   ['2024/01/16', 0.005335515484316355, 'Vulnerable User'],
   ['2024/01/16', 0, 'Driver Behavior'],
   ['2024/01/16', 0.3599661747859299, 'Others'],
   ['2024/02/01', 0.1129831612314014, 'Roadway Type'],
   ['2024/02/01', 0.4186429351224082, 'BAC'],
   ['2024/02/01', 0.052369198609605, 'Work Zone'],
   ['2024/02/01', 0.1079612075178758, 'Vulnerable User'],
   ['2024/02/01', 0, 'Driver Behavior'],
   ['2024/02/01', 0.2508600530187399, 'Others'],
   ['2024/01/21', 0.1342120815426583, 'Roadway Type'],
   ['2024/01/21', 0.6166859614331364, 'BAC'],
   ['2024/01/21', 0, 'Work Zone'],
   ['2024/01/21', 0, 'Vulnerable User'],
   ['2024/01/21', 0, 'Driver Behavior'],
   ['2024/01/21', 0, 'Others'],
   ['2024/02/04', 0.0716249130250308, 'Roadway Type'],
   ['2024/02/04', 0.6041775583901786, 'BAC'],
   ['2024/02/04', 0.213744732860306, 'Work Zone'],
   ['2024/02/04', 0, 'Vulnerable User'],
   ['2024/02/04', 0, 'Driver Behavior'],
   ['2024/02/04', 0.09764059851607967, 'Others'],
   ['2024/01/24', 0.1049393853126944, 'Roadway Type'],
   ['2024/01/24', 0.31055922850529255, 'BAC'],
   ['2024/01/24', 0, 'Work Zone'],
   ['2024/01/24', 0.01878571994342345, 'Vulnerable User'],
   ['2024/01/24', 0.089746017388592, 'Driver Behavior'],
   ['2024/01/24', 0.3246053670764303, 'Others'],
   ['2024/01/11', 0.04936822350636366, 'Roadway Type'],
   ['2024/01/11', 0, 'BAC'],
   ['2024/01/11', 0, 'Work Zone'],
   ['2024/01/11', 0.14262491090640209, 'Vulnerable User'],
   ['2024/01/11', 0.046997527031212426, 'Driver Behavior'],
   ['2024/01/11', 0.4374306573600858, 'Others'],
   ['2024/01/27', 0.0773542584636147, 'Roadway Type'],
   ['2024/01/27', 0, 'BAC'],
   ['2024/01/27', 0, 'Work Zone'],
   ['2024/01/27', 0.4434794540585594, 'Vulnerable User'],
   ['2024/01/27', 0.2103046087358252, 'Driver Behavior'],
   ['2024/01/27', 0.14598473658425518, 'Others'],
   ['2024/01/09', 0.1364710523156848, 'Roadway Type'],
   ['2024/01/09', 0.0004423594423711167, 'BAC'],
   ['2024/01/09', 0, 'Work Zone'],
   ['2024/01/09', 0.007757405564053068, 'Vulnerable User'],
   ['2024/01/09', 0.06896122067093273, 'Driver Behavior'],
   ['2024/01/09', 0.44530113813164024, 'Others'],
   ['2024/01/07', 0.1622331177292925, 'Roadway Type'],
   ['2024/01/07', 0, 'BAC'],
   ['2024/01/07', 0, 'Work Zone'],
   ['2024/01/07', 0.0082081653765932, 'Vulnerable User'],
   ['2024/01/07', 0.1093745347233216, 'Driver Behavior'],
   ['2024/01/07', 0.37797639274971095, 'Others'],
   ['2024/01/28', 0.11964932741649133, 'Roadway Type'],
   ['2024/01/28', 0.4049314329420992, 'BAC'],
   ['2024/01/28', 0.015430833995485003, 'Work Zone'],
   ['2024/01/28', 0, 'Vulnerable User'],
   ['2024/01/28', 0.04906236758911281, 'Driver Behavior'],
   ['2024/01/28', 0.2996698111595717, 'Others'],
   ['2024/02/09', 0.0187507724603292, 'Roadway Type'],
   ['2024/02/09', 0.8572450620553655, 'BAC'],
   ['2024/02/09', 0, 'Work Zone'],
   ['2024/02/09', 0, 'Vulnerable User'],
   ['2024/02/09', 0.0740314384675142, 'Driver Behavior'],
   ['2024/02/09', 0.07188846083103023, 'Others'],
   ['2024/01/30', 0.3316850049601267, 'Roadway Type'],
   ['2024/01/30', 0.4647593919145034, 'BAC'],
   ['2024/01/30', 0.0304041735471544, 'Work Zone'],
   ['2024/01/30', 0.0729508620091666, 'Vulnerable User'],
   ['2024/01/30', 0, 'Driver Behavior'],
   ['2024/01/30', 0, 'Others']]
      }
    ]
  };