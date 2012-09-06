<?php
$q=$_GET["q"];

$con = mysql_connect('mysql.tomschenkjr.net', 'tsjr_visitor', 'tsjr_visitor_password');
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("tsjr_sandy", $con);

$sql="SELECT * FROM tsjr_sandy.workforceTransitions WHERE id = '".$q."'";

$result = mysql_query($sql);

// Table for 
echo "<table border='0'>
<tr>
<th colspan='2'><div class='clustersub'>Students</div></th>
</tr>";



while($row = mysql_fetch_array($result))
  {
  echo "<tr><td colspan ='2', align='right'><span class='clustercount'>" . $row['NumLeaversCompleters'] . "</span></td></tr>";
  echo "<tr><th colspan ='2'><div class='clustersub'>Top 5 Industrial Sectors Employing this major</div></th></tr>";
  echo "<tr><td>" . $row['TopSector1'] . "</td><td>" . $row['TopSector1No'] . "</td></tr>";
  echo "<tr><td>" . $row['TopSector2'] . "</td><td>" . $row['TopSector2No'] . "</td></tr>";
  echo "<tr><td>" . $row['TopSector3'] . "</td><td>" . $row['TopSector3No'] . "</td></tr>";
  echo "<tr><td>" . $row['TopSector4'] . "</td><td>" . $row['TopSector4No'] . "</td></tr>";
  echo "<tr><td>" . $row['TopSector5'] . "</td><td>" . $row['TopSector5No'] . "</td></tr>";
  }
echo "</table>";

mysql_close($con);
?>