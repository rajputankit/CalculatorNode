	
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index');
};

exports.add = function(req, res){

	var operator1 = req.body.operator1;
	var operator2 = req.body.operator2;
	var result = 0;
	
	//console.log();
	
	if(operator1 == null || operator2 == null){
		
		res.end("Enter Some Inputs");
	}
	else if(isNaN(operator1) || isNaN(operator2)){
		
		res.end("Enter a Valid Number");	
	}
	else{
		
		result = Number(operator1) + Number(operator2);
		res.end(result.toString());
	}
}

exports.subtract = function(req, res){
	
	var operator1 = req.body.operator1;
	var operator2 = req.body.operator2;
	var result = 0;
	
	if(operator1 == null || operator2 == null){
		
		res.end("Enter Some Inputs");
	}
	if(isNaN(operator1) || isNaN(operator2)){
		
		res.end("Enter a Valid Number");	
	}
	else{
		
		result = Number(operator1) - Number(operator2);
		res.end(result.toString());
	}
}

exports.divide = function(req, res){
	
	var operator1 = req.body.operator1;
	var operator2 = req.body.operator2;
	var result = 0;
	
	if(operator1 == null || operator2 == null){
		
		res.end("Enter Some Inputs");
	}
	else if(isNaN(operator1) || isNaN(operator2)){
		
		res.end("Enter a Valid Number");	
	}
	else if(Number(operator2) == 0){
		
		res.end("Divide by Zero Not Possible");
	}
	else{
		
		result = Number(operator1) / Number(operator2);
		res.end(result.toString());
	}
}


exports.multiply = function(req, res){
	
	var operator1 = req.body.operator1;
	var operator2 = req.body.operator2;
	var result = 0;
	
	if(operator1 == null || operator2 == null){
		
		res.end("Enter Some Inputs");
	}
	else if(isNaN(operator1) || isNaN(operator2)){
		
		res.end("Enter a Valid Number");	
	}
	else{
		
		result = Number(operator1) * Number(operator2);
		res.end(result.toString());
	}
}
