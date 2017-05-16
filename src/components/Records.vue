<template>
  <div id="Records" class="bw">
    <div class="di">
      <div class="es bsk">
        <div class="brv">
          <div class="brw">
            <br/>
            <h2 class="brx">Overview</h2>
          </div>
        </div>
        <hr class="afx">
        <table id="tbl1" class="display" width="100%"></table>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    components: {
    },
    name: 'records',
    data () {
      return {
      }
    },
    mount () {
      var dataSet = [
        [ 'Tiger Nixon', 'System Architect', 'Edinburgh', '5421', '2011/04/25', '$320,800' ],
        [ 'Garrett Winters', 'Accountant', 'Tokyo', '8422', '2011/07/25', '$170,750' ],
        [ 'Ashton Cox', 'Junior Technical Author', 'San Francisco', '1562', '2009/01/12', '$86,000' ],
        [ 'Cedric Kelly', 'Senior Javascript Developer', 'Edinburgh', '6224', '2012/03/29', '$433,060' ],
        [ 'Airi Satou', 'Accountant', 'Tokyo', '5407', '2008/11/28', '$162,700' ],
        [ 'Brielle Williamson', 'Integration Specialist', 'New York', '4804', '2012/12/02', '$372,000' ],
        [ 'Herrod Chandler', 'Sales Assistant', 'San Francisco', '9608', '2012/08/06', '$137,500' ],
        [ 'Rhona Davidson', 'Integration Specialist', 'Tokyo', '6200', '2010/10/14', '$327,900' ],
        [ 'Colleen Hurst', 'Javascript Developer', 'San Francisco', '2360', '2009/09/15', '$205,500' ],
        [ 'Sonya Frost', 'Software Engineer', 'Edinburgh', '1667', '2008/12/13', '$103,600' ],
        [ 'Jena Gaines', 'Office Manager', 'London', '3814', '2008/12/19', '$90,560' ],
        [ 'Quinn Flynn', 'Support Lead', 'Edinburgh', '9497', '2013/03/03', '$342,000' ],
        [ 'Charde Marshall', 'Regional Director', 'San Francisco', '6741', '2008/10/16', '$470,600' ],
        [ 'Haley Kennedy', 'Senior Marketing Designer', 'London', '3597', '2012/12/18', '$313,500' ],
        [ 'Tatyana Fitzpatrick', 'Regional Director', 'London', '1965', '2010/03/17', '$385,750' ],
        [ 'Michael Silva', 'Marketing Designer', 'London', '1581', '2012/11/27', '$198,500' ],
        [ 'Paul Byrd', 'Chief Financial Officer (CFO)', 'New York', '3059', '2010/06/09', '$725,000' ],
        [ 'Gloria Little', 'Systems Administrator', 'New York', '1721', '2009/04/10', '$237,500' ],
        [ 'Bradley Greer', 'Software Engineer', 'London', '2558', '2012/10/13', '$132,000' ],
        [ 'Dai Rios', 'Personnel Lead', 'Edinburgh', '2290', '2012/09/26', '$217,500' ],
        [ 'Jenette Caldwell', 'Development Lead', 'New York', '1937', '2011/09/03', '$345,000' ],
        [ 'Yuri Berry', 'Chief Marketing Officer (CMO)', 'New York', '6154', '2009/06/25', '$675,000' ],
        [ 'Caesar Vance', 'Pre-Sales Support', 'New York', '8330', '2011/12/12', '$106,450' ],
        [ 'Doris Wilder', 'Sales Assistant', 'Sidney', '3023', '2010/09/20', '$85,600' ],
        [ 'Angelica Ramos', 'Chief Executive Officer (CEO)', 'London', '5797', '2009/10/09', '$1,200,000' ],
        [ 'Gavin Joyce', 'Developer', 'Edinburgh', '8822', '2010/12/22', '$92,575' ],
        [ 'Jennifer Chang', 'Regional Director', 'Singapore', '9239', '2010/11/14', '$357,650' ],
        [ 'Brenden Wagner', 'Software Engineer', 'San Francisco', '1314', '2011/06/07', '$206,850' ],
        [ 'Fiona Green', 'Chief Operating Officer (COO)', 'San Francisco', '2947', '2010/03/11', '$850,000' ],
        [ 'Shou Itou', 'Regional Marketing', 'Tokyo', '8899', '2011/08/14', '$163,000' ],
        [ 'Michelle House', 'Integration Specialist', 'Sidney', '2769', '2011/06/02', '$95,400' ],
        [ 'Suki Burks', 'Developer', 'London', '6832', '2009/10/22', '$114,500' ],
        [ 'Prescott Bartlett', 'Technical Author', 'London', '3606', '2011/05/07', '$145,000' ],
        [ 'Gavin Cortez', 'Team Leader', 'San Francisco', '2860', '2008/10/26', '$235,500' ],
        [ 'Martena Mccray', 'Post-Sales support', 'Edinburgh', '8240', '2011/03/09', '$324,050' ],
        [ 'Unity Butler', 'Marketing Designer', 'San Francisco', '5384', '2009/12/09', '$85,675' ]
      ]
      $(document).ready(function() {
        $('#example').DataTable( {
          data: dataSet,
          columns: [
            { title: 'Name' },
            { title: 'Position' },
            { title: 'Office' },
            { title: 'Extn.' },
            { title: 'Start date'},
            { title: 'Salary' }
          ]
        })
      })
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bw {
    position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-right: 15px;
    padding-left: 15px; }
  @media (min-width: 576px) {
    .bw {
      padding-right: 15px;
      padding-left: 15px; } }
  @media (min-width: 768px) {
    .bw {
      padding-right: 15px;
      padding-left: 15px; } }
  @media (min-width: 992px) {
    .bw {
      padding-right: 15px;
      padding-left: 15px; } }
  @media (min-width: 1200px) {
    .bw {
      padding-right: 15px;
      padding-left: 15px; } }
  @media (min-width: 768px) {
    .bw {
      width: 880px;
      max-width: 100%; } }
  @media (min-width: 992px) {
    .bw {
      width: 950px;
      max-width: 100%; } }
  @media (min-width: 1200px) {
    .bw {
      width: 1100px;
      max-width: 100%; } }

  .di {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px; }
  @media (min-width: 576px) {
    .di {
      margin-right: -15px;
      margin-left: -15px; } }
  @media (min-width: 768px) {
    .di {
      margin-right: -15px;
      margin-left: -15px; } }
  @media (min-width: 992px) {
    .di {
      margin-right: -15px;
      margin-left: -15px; } }
  @media (min-width: 1200px) {
    .di {
      margin-right: -15px;
      margin-left: -15px; } }

  .dl, .dm, .dn, .do, .dp, .dq, .dr, .ds, .dt, .du, .dv, .dw, .dk, .dx, .dy, .dz, .ea, .eb, .ec, .ed, .ee, .ef, .eg, .eh, .ei, .ej, .ek, .el, .em, .en, .eo, .ep, .eq, .er, .es, .et, .eu, .ev, .ew, .ex, .ey, .ez, .fa, .fb, .fc, .fd, .fe, .ff, .fg, .fh, .fi, .fj, .fk, .fl, .fm, .fn, .fo, .fp, .fq, .fr, .fs, .ft, .fu, .fv, .fw {
    position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px; }
  @media (min-width: 576px) {
    .dl, .dm, .dn, .do, .dp, .dq, .dr, .ds, .dt, .du, .dv, .dw, .dk, .dx, .dy, .dz, .ea, .eb, .ec, .ed, .ee, .ef, .eg, .eh, .ei, .ej, .ek, .el, .em, .en, .eo, .ep, .eq, .er, .es, .et, .eu, .ev, .ew, .ex, .ey, .ez, .fa, .fb, .fc, .fd, .fe, .ff, .fg, .fh, .fi, .fj, .fk, .fl, .fm, .fn, .fo, .fp, .fq, .fr, .fs, .ft, .fu, .fv, .fw {
      padding-right: 15px;
      padding-left: 15px; } }
  @media (min-width: 768px) {
    .dl, .dm, .dn, .do, .dp, .dq, .dr, .ds, .dt, .du, .dv, .dw, .dk, .dx, .dy, .dz, .ea, .eb, .ec, .ed, .ee, .ef, .eg, .eh, .ei, .ej, .ek, .el, .em, .en, .eo, .ep, .eq, .er, .es, .et, .eu, .ev, .ew, .ex, .ey, .ez, .fa, .fb, .fc, .fd, .fe, .ff, .fg, .fh, .fi, .fj, .fk, .fl, .fm, .fn, .fo, .fp, .fq, .fr, .fs, .ft, .fu, .fv, .fw {
      padding-right: 15px;
      padding-left: 15px; } }
  @media (min-width: 992px) {
    .dl, .dm, .dn, .do, .dp, .dq, .dr, .ds, .dt, .du, .dv, .dw, .dk, .dx, .dy, .dz, .ea, .eb, .ec, .ed, .ee, .ef, .eg, .eh, .ei, .ej, .ek, .el, .em, .en, .eo, .ep, .eq, .er, .es, .et, .eu, .ev, .ew, .ex, .ey, .ez, .fa, .fb, .fc, .fd, .fe, .ff, .fg, .fh, .fi, .fj, .fk, .fl, .fm, .fn, .fo, .fp, .fq, .fr, .fs, .ft, .fu, .fv, .fw {
      padding-right: 15px;
      padding-left: 15px; } }
  @media (min-width: 1200px) {
    .dl, .dm, .dn, .do, .dp, .dq, .dr, .ds, .dt, .du, .dv, .dw, .dk, .dx, .dy, .dz, .ea, .eb, .ec, .ed, .ee, .ef, .eg, .eh, .ei, .ej, .ek, .el, .em, .en, .eo, .ep, .eq, .er, .es, .et, .eu, .ev, .ew, .ex, .ey, .ez, .fa, .fb, .fc, .fd, .fe, .ff, .fg, .fh, .fi, .fj, .fk, .fl, .fm, .fn, .fo, .fp, .fq, .fr, .fs, .ft, .fu, .fv, .fw {
      padding-right: 15px;
      padding-left: 15px; } }

  .brv::after {
    display: block;
    content: "";
    clear: both; }

  @media (min-width: 768px) {
    .brw {
      float: left; } }

  .brx {
    margin-top: 0; }

  .afx {
    margin-top: 1rem !important; }


  /* this part for records page only */
  table.dataTable {
    width: 100%;
    margin: 0 auto;
    clear: both;
    border-collapse: separate;
    border-spacing: 0
  }
  table.dataTable thead th, table.dataTable tfoot th {
    font-weight: bold
  }
  table.dataTable thead th, table.dataTable thead td {
    padding: 10px 18px;
    border-bottom: 1px solid #111
  }
  table.dataTable thead th:active, table.dataTable thead td:active {
    outline: none
  }
  table.dataTable tfoot th, table.dataTable tfoot td {
    padding: 10px 18px 6px 18px;
    border-top: 1px solid #111
  }
  table.dataTable thead .sorting, table.dataTable thead .sorting_asc, table.dataTable thead .sorting_desc, table.dataTable thead .sorting_asc_disabled, table.dataTable thead .sorting_desc_disabled {
    cursor: pointer;
    *cursor: hand
  }
  table.dataTable thead .sorting, table.dataTable thead .sorting_asc, table.dataTable thead .sorting_desc, table.dataTable thead .sorting_asc_disabled, table.dataTable thead .sorting_desc_disabled {
    background-repeat: no-repeat;
    background-position: center right
  }
  table.dataTable thead .sorting {
    background-image: url("../../images/sort_both.png")
  }
  table.dataTable thead .sorting_asc {
    background-image: url("../../images/sort_asc.png")
  }
  table.dataTable thead .sorting_desc {
    background-image: url("../../images/sort_desc.png")
  }
  table.dataTable thead .sorting_asc_disabled {
    background-image: url("../../images/sort_asc_disabled.png")
  }
  table.dataTable thead .sorting_desc_disabled {
    background-image: url("../../images/sort_desc_disabled.png")
  }
  table.dataTable tbody tr {
    background-color: #ffffff
  }
  table.dataTable tbody tr.selected {
    background-color: #B0BED9
  }
  table.dataTable tbody th, table.dataTable tbody td {
    padding: 8px 10px
  }
  table.dataTable.row-border tbody th, table.dataTable.row-border tbody td, table.dataTable.display tbody th, table.dataTable.display tbody td {
    border-top: 1px solid #ddd
  }
  table.dataTable.row-border tbody tr:first-child th, table.dataTable.row-border tbody tr:first-child td, table.dataTable.display tbody tr:first-child th, table.dataTable.display tbody tr:first-child td {
    border-top: none
  }
  table.dataTable.cell-border tbody th, table.dataTable.cell-border tbody td {
    border-top: 1px solid #ddd;
    border-right: 1px solid #ddd
  }
  table.dataTable.cell-border tbody tr th:first-child, table.dataTable.cell-border tbody tr td:first-child {
    border-left: 1px solid #ddd
  }
  table.dataTable.cell-border tbody tr:first-child th, table.dataTable.cell-border tbody tr:first-child td {
    border-top: none
  }
  table.dataTable.stripe tbody tr.odd, table.dataTable.display tbody tr.odd {
    background-color: #f9f9f9
  }
  table.dataTable.stripe tbody tr.odd.selected, table.dataTable.display tbody tr.odd.selected {
    background-color: #acbad4
  }
  table.dataTable.hover tbody tr:hover, table.dataTable.display tbody tr:hover {
    background-color: #f6f6f6
  }
  table.dataTable.hover tbody tr:hover.selected, table.dataTable.display tbody tr:hover.selected {
    background-color: #aab7d1
  }
  table.dataTable.order-column tbody tr>.sorting_1, table.dataTable.order-column tbody tr>.sorting_2, table.dataTable.order-column tbody tr>.sorting_3, table.dataTable.display tbody tr>.sorting_1, table.dataTable.display tbody tr>.sorting_2, table.dataTable.display tbody tr>.sorting_3 {
    background-color: #fafafa
  }
  table.dataTable.order-column tbody tr.selected>.sorting_1, table.dataTable.order-column tbody tr.selected>.sorting_2, table.dataTable.order-column tbody tr.selected>.sorting_3, table.dataTable.display tbody tr.selected>.sorting_1, table.dataTable.display tbody tr.selected>.sorting_2, table.dataTable.display tbody tr.selected>.sorting_3 {
    background-color: #acbad5
  }
  table.dataTable.display tbody tr.odd>.sorting_1, table.dataTable.order-column.stripe tbody tr.odd>.sorting_1 {
    background-color: #f1f1f1
  }
  table.dataTable.display tbody tr.odd>.sorting_2, table.dataTable.order-column.stripe tbody tr.odd>.sorting_2 {
    background-color: #f3f3f3
  }
  table.dataTable.display tbody tr.odd>.sorting_3, table.dataTable.order-column.stripe tbody tr.odd>.sorting_3 {
    background-color: whitesmoke
  }
  table.dataTable.display tbody tr.odd.selected>.sorting_1, table.dataTable.order-column.stripe tbody tr.odd.selected>.sorting_1 {
    background-color: #a6b4cd
  }
  table.dataTable.display tbody tr.odd.selected>.sorting_2, table.dataTable.order-column.stripe tbody tr.odd.selected>.sorting_2 {
    background-color: #a8b5cf
  }
  table.dataTable.display tbody tr.odd.selected>.sorting_3, table.dataTable.order-column.stripe tbody tr.odd.selected>.sorting_3 {
    background-color: #a9b7d1
  }
  table.dataTable.display tbody tr.even>.sorting_1, table.dataTable.order-column.stripe tbody tr.even>.sorting_1 {
    background-color: #fafafa
  }
  table.dataTable.display tbody tr.even>.sorting_2, table.dataTable.order-column.stripe tbody tr.even>.sorting_2 {
    background-color: #fcfcfc
  }
  table.dataTable.display tbody tr.even>.sorting_3, table.dataTable.order-column.stripe tbody tr.even>.sorting_3 {
    background-color: #fefefe
  }
  table.dataTable.display tbody tr.even.selected>.sorting_1, table.dataTable.order-column.stripe tbody tr.even.selected>.sorting_1 {
    background-color: #acbad5
  }
  table.dataTable.display tbody tr.even.selected>.sorting_2, table.dataTable.order-column.stripe tbody tr.even.selected>.sorting_2 {
    background-color: #aebcd6
  }
  table.dataTable.display tbody tr.even.selected>.sorting_3, table.dataTable.order-column.stripe tbody tr.even.selected>.sorting_3 {
    background-color: #afbdd8
  }
  table.dataTable.display tbody tr:hover>.sorting_1, table.dataTable.order-column.hover tbody tr:hover>.sorting_1 {
    background-color: #eaeaea
  }
  table.dataTable.display tbody tr:hover>.sorting_2, table.dataTable.order-column.hover tbody tr:hover>.sorting_2 {
    background-color: #ececec
  }
  table.dataTable.display tbody tr:hover>.sorting_3, table.dataTable.order-column.hover tbody tr:hover>.sorting_3 {
    background-color: #efefef
  }
  table.dataTable.display tbody tr:hover.selected>.sorting_1, table.dataTable.order-column.hover tbody tr:hover.selected>.sorting_1 {
    background-color: #a2aec7
  }
  table.dataTable.display tbody tr:hover.selected>.sorting_2, table.dataTable.order-column.hover tbody tr:hover.selected>.sorting_2 {
    background-color: #a3b0c9
  }
  table.dataTable.display tbody tr:hover.selected>.sorting_3, table.dataTable.order-column.hover tbody tr:hover.selected>.sorting_3 {
    background-color: #a5b2cb
  }
  table.dataTable.no-footer {
    border-bottom: 1px solid #111
  }
  table.dataTable.nowrap th, table.dataTable.nowrap td {
    white-space: nowrap
  }
  table.dataTable.compact thead th, table.dataTable.compact thead td {
    padding: 4px 17px 4px 4px
  }
  table.dataTable.compact tfoot th, table.dataTable.compact tfoot td {
    padding: 4px
  }
  table.dataTable.compact tbody th, table.dataTable.compact tbody td {
    padding: 4px
  }
  table.dataTable th.dt-left, table.dataTable td.dt-left {
    text-align: left
  }
  table.dataTable th.dt-center, table.dataTable td.dt-center, table.dataTable td.dataTables_empty {
    text-align: center
  }
  table.dataTable th.dt-right, table.dataTable td.dt-right {
    text-align: right
  }
  table.dataTable th.dt-justify, table.dataTable td.dt-justify {
    text-align: justify
  }
  table.dataTable th.dt-nowrap, table.dataTable td.dt-nowrap {
    white-space: nowrap
  }
  table.dataTable thead th.dt-head-left, table.dataTable thead td.dt-head-left, table.dataTable tfoot th.dt-head-left, table.dataTable tfoot td.dt-head-left {
    text-align: left
  }
  table.dataTable thead th.dt-head-center, table.dataTable thead td.dt-head-center, table.dataTable tfoot th.dt-head-center, table.dataTable tfoot td.dt-head-center {
    text-align: center
  }
  table.dataTable thead th.dt-head-right, table.dataTable thead td.dt-head-right, table.dataTable tfoot th.dt-head-right, table.dataTable tfoot td.dt-head-right {
    text-align: right
  }
  table.dataTable thead th.dt-head-justify, table.dataTable thead td.dt-head-justify, table.dataTable tfoot th.dt-head-justify, table.dataTable tfoot td.dt-head-justify {
    text-align: justify
  }
  table.dataTable thead th.dt-head-nowrap, table.dataTable thead td.dt-head-nowrap, table.dataTable tfoot th.dt-head-nowrap, table.dataTable tfoot td.dt-head-nowrap {
    white-space: nowrap
  }
  table.dataTable tbody th.dt-body-left, table.dataTable tbody td.dt-body-left {
    text-align: left
  }
  table.dataTable tbody th.dt-body-center, table.dataTable tbody td.dt-body-center {
    text-align: center
  }
  table.dataTable tbody th.dt-body-right, table.dataTable tbody td.dt-body-right {
    text-align: right
  }
  table.dataTable tbody th.dt-body-justify, table.dataTable tbody td.dt-body-justify {
    text-align: justify
  }
  table.dataTable tbody th.dt-body-nowrap, table.dataTable tbody td.dt-body-nowrap {
    white-space: nowrap
  }
  table.dataTable, table.dataTable th, table.dataTable td {
    -webkit-box-sizing: content-box;
    box-sizing: content-box
  }
  .dataTables_wrapper {
    position: relative;
    clear: both;
    *zoom: 1;
    zoom: 1
  }
  .dataTables_wrapper .dataTables_length {
    float: left
  }
  .dataTables_wrapper .dataTables_filter {
    float: right;
    text-align: right
  }
  .dataTables_wrapper .dataTables_filter input {
    margin-left: 0.5em
  }
  .dataTables_wrapper .dataTables_info {
    clear: both;
    float: left;
    padding-top: 0.755em
  }
  .dataTables_wrapper .dataTables_paginate {
    float: right;
    text-align: right;
    padding-top: 0.25em
  }
  .dataTables_wrapper .dataTables_paginate .paginate_button {
    box-sizing: border-box;
    display: inline-block;
    min-width: 1.5em;
    padding: 0.5em 1em;
    margin-left: 2px;
    text-align: center;
    text-decoration: none !important;
    cursor: pointer;
    *cursor: hand;
    color: #333 !important;
    border: 1px solid transparent;
    border-radius: 2px
  }
  .dataTables_wrapper .dataTables_paginate .paginate_button.current, .dataTables_wrapper .dataTables_paginate .paginate_button.current:hover {
    color: #333 !important;
    border: 1px solid #979797;
    background-color: white;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #fff), color-stop(100%, #dcdcdc));
    background: -webkit-linear-gradient(top, #fff 0%, #dcdcdc 100%);
    background: -moz-linear-gradient(top, #fff 0%, #dcdcdc 100%);
    background: -ms-linear-gradient(top, #fff 0%, #dcdcdc 100%);
    background: -o-linear-gradient(top, #fff 0%, #dcdcdc 100%);
    background: linear-gradient(to bottom, #fff 0%, #dcdcdc 100%)
  }
  .dataTables_wrapper .dataTables_paginate .paginate_button.disabled, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:hover, .dataTables_wrapper .dataTables_paginate .paginate_button.disabled:active {
    cursor: default;
    color: #666 !important;
    border: 1px solid transparent;
    background: transparent;
    box-shadow: none
  }
  .dataTables_wrapper .dataTables_paginate .paginate_button:hover {
    color: white !important;
    border: 1px solid #111;
    background-color: #585858;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #585858), color-stop(100%, #111));
    background: -webkit-linear-gradient(top, #585858 0%, #111 100%);
    background: -moz-linear-gradient(top, #585858 0%, #111 100%);
    background: -ms-linear-gradient(top, #585858 0%, #111 100%);
    background: -o-linear-gradient(top, #585858 0%, #111 100%);
    background: linear-gradient(to bottom, #585858 0%, #111 100%)
  }
  .dataTables_wrapper .dataTables_paginate .paginate_button:active {
    outline: none;
    background-color: #2b2b2b;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%, #2b2b2b), color-stop(100%, #0c0c0c));
    background: -webkit-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);
    background: -moz-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);
    background: -ms-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);
    background: -o-linear-gradient(top, #2b2b2b 0%, #0c0c0c 100%);
    background: linear-gradient(to bottom, #2b2b2b 0%, #0c0c0c 100%);
    box-shadow: inset 0 0 3px #111
  }
  .dataTables_wrapper .dataTables_paginate .ellipsis {
    padding: 0 1em
  }
  .dataTables_wrapper .dataTables_processing {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 40px;
    margin-left: -50%;
    margin-top: -25px;
    padding-top: 20px;
    text-align: center;
    font-size: 1.2em;
    background-color: white;
    background: -webkit-gradient(linear, left top, right top, color-stop(0%, rgba(255, 255, 255, 0)), color-stop(25%, rgba(255, 255, 255, 0.9)), color-stop(75%, rgba(255, 255, 255, 0.9)), color-stop(100%, rgba(255, 255, 255, 0)));
    background: -webkit-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.9) 75%, rgba(255, 255, 255, 0) 100%);
    background: -moz-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.9) 75%, rgba(255, 255, 255, 0) 100%);
    background: -ms-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.9) 75%, rgba(255, 255, 255, 0) 100%);
    background: -o-linear-gradient(left, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.9) 75%, rgba(255, 255, 255, 0) 100%);
    background: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.9) 25%, rgba(255, 255, 255, 0.9) 75%, rgba(255, 255, 255, 0) 100%)
  }
  .dataTables_wrapper .dataTables_length, .dataTables_wrapper .dataTables_filter, .dataTables_wrapper .dataTables_info, .dataTables_wrapper .dataTables_processing, .dataTables_wrapper .dataTables_paginate {
    color: #333
  }
  .dataTables_wrapper .dataTables_scroll {
    clear: both
  }
  .dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody {
    *margin-top: -1px;
    -webkit-overflow-scrolling: touch
  }
  .dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>thead>tr>th, .dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>thead>tr>td, .dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>tbody>tr>th, .dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>tbody>tr>td {
    vertical-align: middle
  }
  .dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>thead>tr>th>div.dataTables_sizing, .dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>thead>tr>td>div.dataTables_sizing, .dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>tbody>tr>th>div.dataTables_sizing, .dataTables_wrapper .dataTables_scroll div.dataTables_scrollBody>table>tbody>tr>td>div.dataTables_sizing {
    height: 0;
    overflow: hidden;
    margin: 0 !important;
    padding: 0 !important
  }
  .dataTables_wrapper.no-footer .dataTables_scrollBody {
    border-bottom: 1px solid #111
  }
  .dataTables_wrapper.no-footer div.dataTables_scrollHead>table, .dataTables_wrapper.no-footer div.dataTables_scrollBody>table {
    border-bottom: none
  }
  .dataTables_wrapper:after {
    visibility: hidden;
    display: block;
    content: "";
    clear: both;
    height: 0
  }
  @media screen and (max-width: 767px) {
    .dataTables_wrapper .dataTables_info, .dataTables_wrapper .dataTables_paginate {
      float: none;
      text-align: center
    }
    .dataTables_wrapper .dataTables_paginate {
      margin-top: 0.5em
    }
  }
  @media screen and (max-width: 640px) {
    .dataTables_wrapper .dataTables_length, .dataTables_wrapper .dataTables_filter {
      float: none;
      text-align: center
    }

    .dataTables_wrapper .dataTables_filter {
      margin-top: 0.5em
    }
  }
</style>
