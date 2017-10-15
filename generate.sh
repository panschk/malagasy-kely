p=$(pwd)/js/teny2.js;
echo "//generated with generate.sh" > $p;
completeList="T = {";
levelList="L = [";
cd sary
for folder in *; do 
  levelList="$levelList \"$folder\",";
  completeList="$completeList \"$folder\":$folder,";
  echo "var $folder = [" >> $p;
  cd $folder
  for f in *.png; do
    word=${f%.png};
    if [ -e "../../feo/$folder/$word".mp3 ]; then
      echo "\"$word\",">>$p;
    else
      echo "missing $folder/$word.mp3 file";
    fi;
  done
  echo "];">>$p;
  cd ..
done
levelList="$levelList ];"
completeList="$completeList };";
echo $levelList >> $p
echo $completeList >> $p;


cd ../feo
for folder in *; do
  cd $folder
  for f in *.mp3; do
    word=${f%.mp3};
    if [ ! -e "../../sary/$folder/$word".png ]; then
      echo "missing $folder/$word.png file"          
    fi;
  done
  cd ..
done

#cat $p;

