async function fetchData() {
    try {
        const BARCODE = document.getElementById("_barcodeinput").value;

        const res = await fetch(`https://world.openfoodfacts.net/api/v2/product/${BARCODE}?fields=product_name,nutriscore_data`);
        const data = await res.json(); 
        document.getElementById("Food_name").innerHTML = "Product Name : " + data.product.product_name;
        const energyValue = data.product.nutriscore_data.components.negative
    .find(i => i.id === "energy").value;

document.getElementById("energy_value").innerText = energyValue + " kJ";
const sugarValue = data.product.nutriscore_data.components.negative
    .find(i => i.id === "sugars").value;

document.getElementById("sugar_value").innerText = sugarValue + " g";
const satFatValue = data.product.nutriscore_data.components.negative
    .find(i => i.id === "saturated_fat").value;

document.getElementById("sat_fat_value").innerText = satFatValue + " g";
const saltValue = data.product.nutriscore_data.components.negative
    .find(i => i.id === "salt").value;

document.getElementById("salt_value").innerText = saltValue + " g";
const positiveNutrients = data.product.nutriscore_data.positive_nutrients;

const hasFruitsVeg = positiveNutrients.includes("fruits_vegetables_legumes") ? "Yes" : "No";

document.getElementById("fruits_veg").innerText = hasFruitsVeg;
document.getElementById("nutrientscore").innerHTML ="Nutri Score : " + data.product.nutriscore_data.grade;


    }   
    catch(error){
        console.error(error);
    }
}
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("getFactsBtn").addEventListener("click", fetchData);
});

