<template>
  <div id="example-container" class="wrapper">
      <br/>
      <HotTable :root="root" :settings="hotSettings"></HotTable>
  </div>
</template>


<script>
  import HotTable from 'vue-handsontable-official';
  import Vue from 'vue';

  const changeFunc = function(changes, source, col, row){
    console.log(changes, source, col, row);
  }

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
        type: 'numeric'
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
    if (changes === null)
      return;



      console.log(changes, source);
        const row = changes[0][0];
        const col = changes[0][1];
        const oldVal = changes[0][2];
        const newVal = changes[0][3];
        if (col === 0) {
        console.log(row,col);
        if (newVal === "Big Data") { levels = ['Master','Senior']; console.log(levels); }
      }
    }

  export default {
    data: function() {
      return {
        root: 'test-hot',
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