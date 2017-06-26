/**
 * Created by xianrongbin on 2017/6/23.
 */
(function(){
    require.config({
        paths:{
            'text':'libs/require.text',
            'AbstractView':'js/view',
            'Vue':'libs/vue'
        }
    });

    require(['js/list-main'],function(vueList){

    });
})();