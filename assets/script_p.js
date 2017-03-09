function checkConnection(postData)
{
    $.ajax({
        type: 'POST',
        url: 'https://www.sellerpanda.com/store_swatches/',
        data: postData,
        success: function (response) {

            try {
                response = JSON.parse(response);
            } catch (e) {

                return;
            }

            if (response.result == '1') {

                if(response.message == 'cancel' && $('.swatch-panda').length )
                {
                    //$('.single-option-selector').css('display','block');
                    //$('.selector-wrapper').css('display','block');
                    $('.swatch-panda').css('display','none');
                    $(window).load(function() { $('.selector-wrapper:eq('+option_hide+')').show(); });

                }


            } else if (response.result == '0') {
            }

        }
    });

    return false;
}


$( document ).ready(function() {


    var postData = {
        "controller":  "sellers",
        "action": 	   "checkStatus",
        "seller_id":   Shopify.shop
    };

    checkConnection(postData,option_hide);

});