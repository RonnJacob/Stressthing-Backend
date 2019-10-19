import numpy as np
import nvd3

np.random.seed(100)

chart_type = 'discreteBarChart'
chart = nvd3.discreteBarChart(name=chart_type, color_category='category20c', height=450, width=450)

ydata = [3, 4, 0, 1, 5, 7, 3]
xdata = ["Orange", "Banana", "Pear", "Kiwi", "Apple", "Strawberry", "Pineapple"]

chart.add_serie(y=ydata, x=xdata)
chart.buildhtml()
chart_html = chart.htmlcontent

(print(chart_html))