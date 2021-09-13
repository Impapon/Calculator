# Instructions

### Button.jsx and Display.jsx are the main files that we should be concerned about

1. Display firstly initialize result(that will be shown) in the state.

2. then in render show the result. After that, Call the Button component.

3. as props handleClick function has been sent to Button.

4. from Button component every button onclick will trigger the handclick function 
from Display component.

5. every click Display(result) will change



# Issues

### ISSUE 1:
when first button clicked it display will show 0 as well.
such as if we type 7 as first time it will show 07 rather than just 7

### ISSUE 2:
 as javascript can add two string such as 7, 8 if we write as 7+8 it will shown 15 
rather than 78. thats a issue from Display's handleClick function