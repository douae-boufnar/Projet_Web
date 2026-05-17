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

    if ($inDakhla -and ($line -match '<div class="city-card">')) {
        # Check if the next few lines contain 'images/dakhla/'
        $keepBlock = $true
        $block = @()
        $divCount = 0
        $j = $i
        while ($j -lt $lines.Count) {
            $block += $lines[$j]
            if ($lines[$j] -match '<div\b') { $divCount++ }
            if ($lines[$j] -match '</div') { $divCount-- }
            if ($lines[$j] -match 'images/dakhla/') {
                $keepBlock = $false
            }
            if ($divCount -eq 0) {
                break
            }
            $j++
        }
        if ($keepBlock) {
            $newLines += $block
        }
        $i = $j + 1
        continue
    }

    if ($inDakhla -and ($line -match '<div class="food-pill">')) {
        $keepBlock = $true
        $block = @()
        $divCount = 0
        $j = $i
        while ($j -lt $lines.Count) {
            $block += $lines[$j]
            if ($lines[$j] -match '<div\b') { $divCount++ }
            if ($lines[$j] -match '</div') { $divCount-- }
            if ($lines[$j] -match 'images/dakhla/') {
                $keepBlock = $false
            }
            if ($divCount -eq 0) {
                break
            }
            $j++
        }
        if ($keepBlock) {
            $newLines += $block
        }
        $i = $j + 1
        continue
    }

    $newLines += $line
    $i++
}
Set-Content 'index_temp.html' -Value $newLines -Encoding UTF8
