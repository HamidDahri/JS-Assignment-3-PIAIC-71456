
var A = [24, 53, 78, 91, 12];
var B = A[0];

for(var i= 0; i < B; i++) {
    if(B < A[i]) {
        B = A[i];
    }
}
document.write("The largest number is " + B);
