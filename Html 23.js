<h2>CatPhotoApp</h2>
<main>

    <p>Click here to view more <a href="#">cat photos</a>.</p>

    <a href="#"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg"
                     alt="A cute orange cat lying on its back."></a>

    <p>Things cats love:</p>
    <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
    </ul>
    <p>Top 3 things cats hate:</p>
    <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
    </ol>

    <form action="https://www.freecatphotoapp.com/submit-cat-photo">

        <label htmlFor="Misha"><input id="Misha" type="checkbox" name="personality"> Misha
        </label>

        <label htmlFor="Sasha"><input id="Sasha" type="checkbox" name="personality">Sasha
        </label>

        <label htmlFor="Denis"><input id="Denis" type="checkbox" name="personality">Denis
        </label>

        <input type="text" placeholder="cat photo URL" required>
            <button type="submit">Submit</button>
    </form>
</main>