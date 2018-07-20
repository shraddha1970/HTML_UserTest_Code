//Ajax call display question and options from mongodb
$(document).ready(function() {
    $.ajax({
        url: "http://localhost:3001/getQuestion"
    }).then(function(data) {
        console.log("total",data.message.length)
      $('.greeting-total').append(data.message.length);

      $('.greeting-question10').append(data.message[0].series.question);
      $('.greeting-option10').append(data.message[0].series.option1);
      $('.greeting-option20').append(data.message[0].series.option2);
      $('.greeting-option30').append(data.message[0].series.option3);
      $('.greeting-option40').append(data.message[0].series.option4);

      $('.greeting-question11').append(data.message[1].series.question);
      $('.greeting-option11').append(data.message[1].series.option1);
      $('.greeting-option21').append(data.message[1].series.option2);
      $('.greeting-option31').append(data.message[1].series.option3);
      $('.greeting-option41').append(data.message[1].series.option4);

      $('.greeting-question22').append(data.message[2].series.question);
      $('.greeting-option12').append(data.message[2].series.option1);
      $('.greeting-option22').append(data.message[2].series.option2);
      $('.greeting-option32').append(data.message[2].series.option3);
      $('.greeting-option42').append(data.message[2].series.option4);

      $('.greeting-question33').append(data.message[3].series.question);
      $('.greeting-option13').append(data.message[3].series.option1);
      $('.greeting-option23').append(data.message[3].series.option2);
      $('.greeting-option33').append(data.message[3].series.option3);
      $('.greeting-option43').append(data.message[3].series.option4);

      $('.greeting-question44').append(data.message[4].series.question);
      $('.greeting-option14').append(data.message[4].series.option1);
      $('.greeting-option24').append(data.message[4].series.option2);
      $('.greeting-option34').append(data.message[4].series.option3);
      $('.greeting-option44').append(data.message[4].series.option4);

     
  });
});