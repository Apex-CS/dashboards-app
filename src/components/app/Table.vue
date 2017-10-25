<template>
  <div id="example-container" class="wrapper">
      <br/>
      <HotTable :root="root" :settings="hotSettings"></HotTable>
  </div>
</template>


<script>
  import HotTable from 'vue-handsontable-official';
  import Vue from 'vue';

  const profileCol = 0;
  const levelCol = 1;
  const zoneCol = 2;

  const GetCostHour = function(profile, level, zone){
    const costs = [
      {'Profile':'.Net','Level':'Junior','Zone':'MDC','Cost':3},
      {'Profile':'.Net','Level':'Intermediate','Zone':'MDC','Cost':6},
      {'Profile':'.Net','Level':'Senior','Zone':'MDC', 'Cost':12},
      {'Profile':'.Net','Level':'Master','Zone':'MDC', 'Cost':16}
    ]
    return costs.filter(x => (x.Profile === profile  && x.Level === level && x.Zone === zone)? x : false );
  };

  let dataObject = [
  ["", "", "", "", ""]
  ];
  
  const colWidthsConf = [150, 150, 150, 150,150, 150];

  const culumnHeaders = ['Profile','Level','Zone','Cost p/hour', 'Month Hours', 'Montly COST'];
  const contextMenuConf = ['row_above', 'row_below', 'remove_row'];

  let profiles = ['.Net', 'Big Data', 'Javascript UI', 'DBA'];
  let levels = ['Junior', 'Intermediate', 'Senior', 'Master'];

  const columnsConf = [
      { 
        type: 'dropdown',
        source: profiles
      },
      {
        type: 'dropdown',
        source: levels
      },
      {
        type: 'dropdown',
        source: ['MDC', 'NY', 'AU', 'PH']
      },
      {
        type: 'numeric',
        format: '$0,0.00',
        language: 'en-US', // this is the default locale, set up for USD
        allowEmpty: false,
        readOnly: true
      },
      {
        type: 'numeric',
        format: '0.00'
      },
      {
        type: 'numeric',
        format: '$0,0.00',
        language: 'en-US', // this is the default locale, set up for USD
        allowEmpty: false,
        readOnly: true
      }
    ] 

  const ChangeHook = function (changes, source) {
    if (changes === null || source === "prog")
      return;
    const row = changes[0][0];
    const col = changes[0][1];
    const oldVal = changes[0][2];
    const newVal = changes[0][3];
    this.setDataAtCell(row, 4, 30.4, "prog");
    let costHour;
    try {
    if (col === 0) {
      const level = this.getDataAtCell(row, levelCol);
      const zone = this.getDataAtCell(row, zoneCol);
      costHour = GetCostHour(newVal, level, zone)[0].Cost;
    }
    if (col === 1) {

      const profile = this.getDataAtCell(row, profileCol);
      const zone = this.getDataAtCell(row, zoneCol);
      costHour = GetCostHour(profile, newVal, zone)[0].Cost;
    }
    if (col === 2) {
      const profile = this.getDataAtCell(row, profileCol);
      const level = this.getDataAtCell(row, levelCol);
      costHour = GetCostHour(profile, level, newVal)[0].Cost;
    }

    } catch (error) {
      console.log("Combination doesn't exists");
    }
    finally {
      costHour = costHour !== undefined ? costHour : 0;
      console.log(costHour);
      this.setDataAtCell(row, 3, Number(costHour), "prog");

      const monthHour = costHour * 30.4;
      this.setDataAtCell(row, 5, Number(monthHour), "prog");
    }


  }

  export default {
    data: function() {
      return {
        root: 'ht',
        hotSettings: {
          data: dataObject,
          colHeaders: culumnHeaders,
          columns : columnsConf,
          contextMenu: contextMenuConf,
          colWidths: colWidthsConf,
          afterChange: ChangeHook
        }
      };
    },
    name: 'SampleApp',
    components: {
      HotTable
    }
  }
</script>
<style>
  #test-hot {
    width: 1100px;
    height: 400px;
    overflow: hidden;
  }
</style>