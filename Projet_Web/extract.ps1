$p = New-Object System.Diagnostics.Process
$p.StartInfo.UseShellExecute = $false
$p.StartInfo.RedirectStandardOutput = $true
$p.StartInfo.FileName = "git"
$p.StartInfo.Arguments = "show HEAD:./index.html"
$p.Start() | Out-Null
$bytes = $p.StandardOutput.BaseStream
$file = [System.IO.File]::Create("$PWD\original.html")
$bytes.CopyTo($file)
$file.Close()
$p.WaitForExit()
