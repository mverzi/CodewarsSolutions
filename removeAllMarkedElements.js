Array.prototype.remove_ = function(integer_list, values_list){
    return integer_list.filter(num => !values_list.includes(num))
  }