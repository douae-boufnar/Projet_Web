$replacements = @{
    "images/dakhla/hero.jpg" = "image essa/acceuil dakhla.jpg"
    "images/dakhla/santa_maria_corni.jpg" = "image essa/L’église Santa Maria Del Corni.avif"
    "images/dakhla/phare.jpg" = "image essa/Le phare de Dakhla.jpg"
    "images/dakhla/ancien_port.jpg" = "image essa/L’ancien port de pêche.jpg"
    "images/dakhla/lemhignat.jpg" = "image essa/Les sites archéologiques de Lemhignat.jpg"
    "images/dakhla/lagune.jpg" = "image essa/La lagune de Dakhla.png"

    "images/dakhla/huitres.jpg" = "image essa/Les huîtres de Dakhla.webp"
    "images/dakhla/fruits_mer.jpg" = "image essa/les fruits de la mer.webp"
    "images/dakhla/mechoui_sahraoui.jpg" = "image essa/Le méchoui sahraoui.jpg"
    "images/dakhla/couscous_saharien.jpg" = "image essa/Le couscous saharien.webp"
    "images/dakhla/the_sahraoui.jpg" = "image essa/Le thé sahraoui.jpg"
    "images/dakhla/poisson_grille.jpg" = "image essa/poisson grillesjpeg.jpeg"

    "images/dakhla/culture_sahraouie.jpg" = "image essa/La culture sahraouie.jpg"
    "images/dakhla/hassania.jpg" = "image essa/La poésie et la musique hassanies.jpg"
    "images/dakhla/the_rituel.jpg" = "image essa/Les traditions du thé saharien.jpg"
    "images/dakhla/peche_tradition.jpg" = "image essa/La culture maritime et la pêche.jpg"
    "images/dakhla/festivals.jpg" = "image essa/Les festivals culturels.jpg"
    "images/dakhla/artisanat.jpg" = "image essa/L’artisanat saharien.jpg"

    "images/dakhla/kitesurf.jpg" = "image essa/Faire du kitesurf dans la lagune.webp"
    "images/dakhla/dune_blanche.jpg" = "image essa/Explorer la Dune Blanche.jpg"
    "images/dakhla/flamants.jpg" = "image essa/Observer les flamants roses.jpeg"
    "images/dakhla/excursion_desert.jpg" = "image essa/Faire une excursion dans le désert.avif"
    "images/dakhla/ile_dragon.jpg" = "image essa/Visiter l’île du Dragon.jpg"
    "images/dakhla/sources_asmaa.jpg" = "image essa/Profiter des sources thermales d’Asmaa.webp"
    "images/dakhla/parc_national.jpg" = "image essa/Découvrir le parc national de Dakhla.webp"
    "images/dakhla/coucher_lagune.jpg" = "image essa/Admirer le coucher de soleil sur la lagune.jpg"
}

$lines = Get-Content 'index.html' -Encoding UTF8
$newLines = @()
$inDakhla = $false
$i = 0
while ($i -lt $lines.Count) {
    $line = $lines[$i]
    if ($line -match 'id="city-dakhla"') {
        $inDakhla = $true
    }
    if ($line -match 'FIN HTML DAKHLA') {
        $inDakhla = $false
    }

    # If we are in Dakhla and hit a city-card
    if ($inDakhla -and ($line -match '<div class="city-card">')) {
        $keepBlock = $true
        $block = @()
        $divCount = 0
        $j = $i
        while ($j -lt $lines.Count) {
            $blockLine = $lines[$j]
            $block += $blockLine
            if ($blockLine -match '<div\b') { $divCount++ }
            if ($blockLine -match '</div') { $divCount-- }
            if ($blockLine -match 'images/dakhla/') {
                $hasReplacement = $false
                foreach ($key in $replacements.Keys) {
                    if ($blockLine -match $key) {
                        $hasReplacement = $true
                        break
                    }
                }
                if (-not $hasReplacement) {
                    $keepBlock = $false
                }
            }
            if ($divCount -eq 0) {
                break
            }
            $j++
        }
        if ($keepBlock) {
            foreach ($idx in 0..($block.Count - 1)) {
                foreach ($key in $replacements.Keys) {
                    $block[$idx] = $block[$idx].Replace($key, $replacements[$key])
                }
            }
            $newLines += $block
        }
        $i = $j + 1
        continue
    }

    # Same for food-pill
    if ($inDakhla -and ($line -match '<div class="food-pill">')) {
        $keepBlock = $true
        $block = @()
        $divCount = 0
        $j = $i
        while ($j -lt $lines.Count) {
            $blockLine = $lines[$j]
            $block += $blockLine
            if ($blockLine -match '<div\b') { $divCount++ }
            if ($blockLine -match '</div') { $divCount-- }
            if ($blockLine -match 'images/dakhla/') {
                $hasReplacement = $false
                foreach ($key in $replacements.Keys) {
                    if ($blockLine -match $key) {
                        $hasReplacement = $true
                        break
                    }
                }
                if (-not $hasReplacement) {
                    $keepBlock = $false
                }
            }
            if ($divCount -eq 0) {
                break
            }
            $j++
        }
        if ($keepBlock) {
            foreach ($idx in 0..($block.Count - 1)) {
                foreach ($key in $replacements.Keys) {
                    $block[$idx] = $block[$idx].Replace($key, $replacements[$key])
                }
            }
            $newLines += $block
        }
        $i = $j + 1
        continue
    }

    $processedLine = $line
    if ($inDakhla) {
        foreach ($key in $replacements.Keys) {
            $processedLine = $processedLine.Replace($key, $replacements[$key])
        }
    }
    $newLines += $processedLine
    $i++
}

Set-Content 'index.html' -Value $newLines -Encoding UTF8
Write-Output 'Done.'
