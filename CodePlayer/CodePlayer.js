function updateOutput()
			{
				$("iframe").contents().find("html").html("<html> <head> <style type='text/css'>" + $("#cssPanel").val() + "</style> </head> <body>" + $("#htmlPanel").val() + "</body> </html>");
				document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
			}
			$(".toggleButton").hover(function()
			{
				$(this).addClass("highlightedButton");
			}, function()
			{
				$(this).removeClass("highlightedButton");
			});
			$(".toggleButton").click(function()
			{
				$(this).toggleClass("active");
				$(this).removeClass("highlightedButton");
				var panelId = $(this).attr("id")+"Panel";
				$("#"+panelId).toggleClass("hidden");
				var numberofActivePanels=4-$('.hidden').length;
				$(".panel").width(($(window).width()/numberofActivePanels)-10);
			});
			$(".panel").height($(window).height()-$(header).height()-15);
			$(".panel").width(($(window).width()/2)-10);
			$("iframe").contents().find("html").html($("#htmlPanel").val());
			updateOutput();
			$("textarea").on('change keyup paste', function()
			{
				updateOutput();
			});