import {useState} from "react";
import {AddCategory, GifGrid} from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCategory) => {

        //categories.push(newCategory);
        if (categories.includes(newCategory)) return;


        setCategories([newCategory, ...categories ]);
        // setCategories(cat => [...cat, 'Megaman'])

    };

    return (
        <>

            <h1>GifExpertApp</h1>


            <AddCategory
                onNewCategory={onAddCategory}
            />


            {
                categories.map( (category) => (
                <GifGrid key={category} category={category} />
                ))
            }



        </>
    );
};