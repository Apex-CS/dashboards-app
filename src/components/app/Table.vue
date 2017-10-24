<template>
  <div id="example-container" class="wrapper">
      <HotTable :root="root" :settings="hotSettings"></HotTable>
  </div>
</template>


<script>
  import HotTable from 'vue-handsontable-official';
  import Vue from 'vue';

  let dataObject = [
  ["", "", "", "", ""]
  ];

  let culumnHeaders = ['Profile','Level','Zone','Cost p/hour', 'Weekly Hours'];

  let columnsConf = [
      { 
        type: 'dropdown',
        source: ['.Net', 'Big Data', 'Javascript UI', 'DBA']
      },
      {
      type: 'dropdown',
        source: ['Junior', 'Intermediate', 'Senior', 'Master']
      },
      {
        type: 'dropdown',
        source: ['MDC', 'NY', 'AU', 'PH']
      },
      {
        type: 'numeric',
        format: '$0,0.00',
        language: 'en-US', // this is the default locale, set up for USD
        allowEmpty: false
      },
      {
        type: 'numeric'
      }
    ] 

  export default {
    data: function() {
      return {
        root: 'test-hot',
        hotSettings: {
          data: dataObject,
          colHeaders: culumnHeaders,
          columns : columnsConf
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
    width: 600px;
    height: 400px;
    overflow: hidden;
  }
</style>