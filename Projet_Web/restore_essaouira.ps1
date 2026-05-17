$bytes = [System.IO.File]::ReadAllBytes("$PWD\index.html")
$text = [System.Text.Encoding]::UTF8.GetString($bytes)

$replacements = @{
    "images/essaouira/hero.jpg" = "image essa/accueil essaouira.jpg"
    "images/essaouira/medina.jpg" = "image essa/la medina essaouira.jpg"
    "images/essaouira/sqala_kasbah.jpg" = "image essa/la sqala de kasbah.webp"
    "images/essaouira/sqala_port.jpg" = "image essa/la sqala.jpg"
    "images/essaouira/synagogue_simon_attias.jpg" = "image essa/La Synagogue Simon Attias.jpg"
    "images/essaouira/port.jpg" = "image essa/Découvrir le port traditionnel.jpg"
    "images/essaouira/ile_mogador.jpg" = "image essa/ile_de_Mogador_1.jpg"
    "images/essaouira/poissons_grilles.jpg" = "image essa/poisson grillesjpeg.jpeg"
    "images/essaouira/fruits_mer.jpg" = "image essa/les fruits de la mer.webp"
    "images/essaouira/huile_argan.jpg" = "image essa/L’huile d’argan culinaire.jpeg"
    "images/essaouira/amlou.jpg" = "image essa/L’amlou.webp"
    "images/essaouira/patisseries.jpg" = "image essa/Les pâtisseries marocaines.webp"
    "images/essaouira/gnaoua.jpg" = "image essa/La musique Gnaoua.jpg"
    "images/essaouira/thuya.jpg" = "image essa/L’artisanat du bois de thuya.jpg"
    "images/essaouira/argan.jpg" = "image essa/La culture de l’argan.jpg"
    "images/essaouira/patrimoine_multiculturel.jpg" = "image essa/L’héritage juif et multiculturel.jpg"
    "images/essaouira/artistes_medina.jpg" = "image essa/L’ambiance artistique de la médina.jpg"
    "images/essaouira/traditions_maritimes.jpg" = "image essa/Les traditions maritimes.jpeg"
    "images/essaouira/cafes.jpg" = "image essa/Les cafés et la douceur de vivre.jpg"
    "images/essaouira/festivals.jpg" = "image essa/Les festivals internationaux.webp"
    "images/essaouira/remparts_coucher.jpg" = "image essa/Marcher sur les remparts au coucher du soleil.jpg"
    "images/essaouira/surf.jpg" = "image essa/Faire du surf et du kitesurf.webp"
    "images/essaouira/galeries.jpg" = "image essa/Explorer les galeries d’art.jpg"
    "images/essaouira/port_visite.jpg" = "image essa/Découvrir le port traditionnel.jpg"
    "images/essaouira/cheval_plage.jpg" = "image essa/Balade à cheval ou à dos de chameau.jpg"
    "images/essaouira/diabat.jpg" = "image essa/Visiter le village de Diabat.webp"
    "images/essaouira/atelier_artisanat.jpg" = "image essa/Participer à un atelier d’artisanat.jpeg"
}

foreach ($key in $replacements.Keys) {
    $text = $text.Replace($key, $replacements[$key])
}

# We find the city-card blocks by regex since we know their contents.
$text = [regex]::Replace($text, '(?s)[ \t]*<div class="city-card">\s*<div class="city-card-img-wrap">\s*<img src="images/essaouira/remparts\.jpg"[^>]+>\s*</div>\s*<h3>Les remparts d’Essaouira</h3>.*?</div>\s*', "")
$text = [regex]::Replace($text, '(?s)[ \t]*<div class="city-card">\s*<div class="city-card-img-wrap">\s*<img src="images/essaouira/mellah\.jpg"[^>]+>\s*</div>\s*<h3>Le Mellah</h3>.*?</div>\s*', "")

# Write using UTF8 WITHOUT BOM
$utf8NoBom = New-Object System.Text.UTF8Encoding $false
[System.IO.File]::WriteAllText("$PWD\index.html", $text, $utf8NoBom)

Write-Output "Essaouira safely restored!"
