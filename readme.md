Задача 192.1

Пусть у вас есть список ul с тегами li:
```
ul {
	padding: 30px;
	border: 1px solid red;
}
li {
	list-style-type: none;
	margin-bottom: 20px;
	border: 1px dashed black;
}
<ul id="elem">
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
	<li>text</li>
</ul>


Привяжите к тегу ul обработчик клика. В этом обработчике проверяйте с помощью свойства tagName, по какому тегу был клик. Если клик был по тегу li - добавьте в конец текста этого тега восклицательный знак. А если клик был по тегу ul - добавьте ему в конец еще один пункт списка.