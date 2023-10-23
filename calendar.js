$(document).ready(function() {
  $('#departureDate').on('input', function() {
    $('#arrivalDate').prop('min', $(this).val());
  });
});