/**
 * @package Domainarser
 * @author Meraj Ahmad Siddiqui <merajsiddiqui@outlook.com>
 * @copyright Meraj Ahmad Siddiqui
 * @description This package is writtent to parse domain details from any given url
 */



/**
 * @function validateUrl
 * @param {string} url web address
 * @returns {bool} True for valid and False for invalid
 */
var validateUrl = function(url){
	var is_url_valid = {
		
	}
	is_url_valid = validateRegex(url);
	return is_url_valid;
}

var validateRegex = function($url){

}