<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Галерея изображений</title>
    <link rel="stylesheet" type="text/css" href="styles/gallery.css">
</head>

<body>
    <h1 style="display: flex;" id="maintitle"><span>Галерея изображений</span><span id="dot"
    style="text-align: left; min-width: 20px;"></span></h1>
    <div class="gallery">
        <?php
        $directory = 'res/gallery/';
        $images = glob($directory . '*.{jpg,jpeg,png,gif}', GLOB_BRACE);
        if (count($images) > 0) {
            foreach ($images as $image) {
                echo '<img src="' . htmlspecialchars($image) . '" alt="Картинко">';
            }
        } else {
        }
        ?>
    </div>

    <script src="scripts/gallery.js"></script>

</body>

</html>