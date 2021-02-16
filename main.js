function vueTest()
{
	const string = `['1', '1', '1', ' 1 »,« 1 »,« 0 »,« 0 »,« 0 »,« 0 »,« 0 »,« 0 »,« 0 »,« 0 »,« 0 »,« 0 »,« 0 » , «0», «0», «0», «0», «1», «1», «1», «1», «1», «0», «0», «1», « 0 ',' 1 ',' 0 ',' 1 ',' 1 ',' 1 ',' 1 ',' 1 ',' 1 ',' 1 ',' 1 ',' 1 ',' 1 ' , «1», «1», «1», «1», «1», «1», «1», «1», «1», «1»,«0», «1», «1», «1», «1», «1», «1», «1», «1», «0», «0», «0», «0» ',' 0 ',' 0 ',' 0 ',' 0 ',' 0 ',' 0 ',' 0 ',' 0 ',' 0 ',' 0 ',' 0 ',' 0 ', «0», «0», «0», «0», «0», «1», «1», «1», «1», «1», «1», «1», «1» ',' 1 ',' 1 ',' 0 ',' 0 ',' 1 ',' 1 ',' 1 ',' 1 ',' 1 ',' 1 ',' 1 ',' 1 ', «0», «0», «0», «0», «0», «0», «0», «1», «1», «1», «1», «1», «1» ']`
	let newArr = []

	for (let str in string)
	{
		let data = string[str]

		if (data == '1' || data == '0')
		{
			newArr.push(data)
		}

	}

	function compareNumbers(a, b)
	{
		if (a.length < b.length)
		{
			return -1
		} else
		{
			return 1
		}
	}

	let tempString = newArr.join('')
	tempString = tempString.replace(/10/g, '1/0')
	tempString = tempString.replace(/01/g, '0/1')
	tempString = tempString.split('/').sort(compareNumbers)
	//Сортировка
	// console.log(tempString)

	//Тут самая длиннай последовательность из 1
	let length = 0
	let result = []
	for (let i =0 ; i<tempString.length; i++){
		if (tempString[i][0] === '0') continue

		if (tempString[i].length > length) result = tempString[i]
	}
	console.log(result)


}

vueTest()
