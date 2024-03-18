document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('.menu-toggle').addEventListener('click', function() {
        document.querySelector('.menu-items').classList.toggle('active');
        document.querySelector('.menu-toggle').classList.toggle('active');
    });

     // Check if the URL contains "#vip"
     if (window.location.href.includes("vipmember.html")) {
        // Show the VIP dialog
        showVipDialog();
    }

    if (window.location.href.includes("#download")) {
        window.location.href = app_download_url;
    }

    const appTitle = document.getElementById('appTitle');
    const detailsExpanded = document.querySelector('.app-details .details-expanded');

    appTitle.addEventListener('click', function() {
        detailsExpanded.classList.toggle('active');
    });
  


 

  
 
     // Event listener for the close button in the VIP dialog
     const closeVipDialogButton = document.getElementById("closeVipDialog");
     closeVipDialogButton.addEventListener("click", function() {
         // Close the VIP dialog
         closeVipDialog();
     });
    
    // Example data for each list
    const data = {
        list1: [
             {
        "title": "MIDV-011mmsub",
        "thumbnail": "https://www.dropbox.com/scl/fi/0dgnv3g9i13ik3fejsdp1/1709172382391.jpg?rlkey=92ae5qr1j49cihawrraej3xqw&dl=1"
    },
    {
        "title": "JUL-793mmsub",
        "thumbnail": "https://pics.dmm.co.jp/digital/video/jul00793/jul00793ps.jpg"
    },
    {
        "title": "MEYD-678mmsub",
        "thumbnail": "https://pics.dmm.co.jp/digital/video/meyd00678/meyd00678ps.jpg"
    },
    {
        "title": "DASS-115mmsub",
        "thumbnail": "https://pics.dmm.co.jp/digital/video/dass00115/dass00115ps.jpg"
    },
    {
        "title": "FSDSS-585mmsub",
        "thumbnail": "https://pics.dmm.co.jp/mono/movie/adult/1fsdss585/1fsdss585ps.jpg"
    },
    {
        "title": "STARS-814mmsub",
        "thumbnail": "https://www.dropbox.com/scl/fi/xo8io8ghmnrag81t3xmtk/1709172275245.jpg?rlkey=29t428drxlqu3c7g8s3vrz83i&dl=1"
    },
    {
        "title": "PRED-525mmsub",
        "thumbnail": "https://pics.dmm.co.jp/digital/video/pred00525/pred00525ps.jpg"
    },
    {
        "title": "SSIS-292mmsub",
        "thumbnail": "https://pics.dmm.co.jp/digital/video/ssis00292/ssis00292ps.jpg"
    },
    {
        "title": "PPPE-085mmsub",
        "thumbnail": "https://pics.dmm.co.jp/digital/video/pppe00085/pppe00085ps.jpg"
    },
    {
        "title": "ADN-266mmsub",
        "thumbnail": "https://pics.dmm.co.jp/digital/video/adn00266/adn00266ps.jpg"
    },
    {
        "title": "SSNI-869mmsub",
        "thumbnail": "https://www.dropbox.com/scl/fi/7v4vrynvk3ou5al7s9y2p/1709089879784.jpg?rlkey=pmvge5cet237j683aj3gh1ynu&dl=1"
    },
    {
        "title": "MIAA-444mmsub",
        "thumbnail": "https://pics.dmm.co.jp/digital/video/miaa00444/miaa00444ps.jpg"
    },
    {
        "title": "JUL-471mmsub",
        "thumbnail": "https://pics.dmm.co.jp/digital/video/jul00471/jul00471ps.jpg"
    },
    {
        "title": "MVSD-544mmsub",
        "thumbnail": "https://pics.dmm.co.jp/digital/video/mvsd00544/mvsd00544ps.jpg"
    },
    {
        "title": "JUY-936mmsub",
        "thumbnail": "https://pics.dmm.co.jp/digital/video/juy00936/juy00936ps.jpg"
    },
    {
        "title": "JUQ-411mmsub",
        "thumbnail": "https://www.dropbox.com/scl/fi/30vm4783l2g411ubja41e/1708923760801.jpg?rlkey=aeru5act7s4ufxk2gxwani31n&dl=1"
    },
    {
        "title": "NHDTB-466mmsub",
        "thumbnail": "https://pics.dmm.co.jp/digital/video/1nhdtb00466/1nhdtb00466ps.jpg"
    },
    {
        "title": "JUL-618mmsub",
        "thumbnail": "https://pics.dmm.co.jp/digital/video/jul00618/jul00618ps.jpg"
    },
    {
        "title": "KAWD-744mmsub",
        "thumbnail": "https://pics.dmm.co.jp/digital/video/kawd00744/kawd00744ps.jpg"
    },
    {
        "title": "JUY-939mmsub",
        "thumbnail": "https://pics.dmm.co.jp/digital/video/juy00939/juy00939ps.jpg"
    },
    {
        "title": "STARS-449mmsub",
        "thumbnail": "https://www.dropbox.com/scl/fi/m2msg1gwgoexcsmuajokp/1708923658299.jpg?rlkey=i673alr4ljla4skzk5usifyp4&dl=1"
    },
    {
        "title": "SDMF-039mmsub",
        "thumbnail": "https://pics.dmm.co.jp/mono/movie/adult/1sdmf039/1sdmf039ps.jpg"
    },
    {
        "title": "WANZ-976mmsub",
        "thumbnail": "https://pics.dmm.co.jp/digital/video/wanz00976/wanz00976ps.jpg"
    },
    {
        "title": "ADN-430mmsub",
        "thumbnail": "https://pics.dmm.co.jp/digital/video/adn00430/adn00430ps.jpg"
    },
    {
        "title": "STARS-842mmsub",
        "thumbnail": "https://pics.dmm.co.jp/mono/movie/adult/1stars842/1stars842ps.jpg"
    },
    {
        "title": "ADN-046mmsub",
        "thumbnail": "https://www.dropbox.com/scl/fi/jql50fgm3n9og6kwqppes/1708923494144.jpg?rlkey=8riy86jj04ljn89v1no9urdae&dl=1"
    },
    {
        "title": "STARS-006mmsub",
        "thumbnail": "https://pics.dmm.co.jp/mono/movie/adult/1start006/1start006ps.jpg"
    },
    {
        "title": "PRED-332mmsub",
        "thumbnail": "https://pics.dmm.co.jp/digital/video/pred00332/pred00332ps.jpg"
    },
    {
        "title": "MEYD-791mmsub",
        "thumbnail": "https://pics.dmm.co.jp/digital/video/meyd00791/meyd00791ps.jpg"
    },
    {
        "title": "JUQ-327mmsub",
        "thumbnail": "https://pics.dmm.co.jp/digital/video/juq00327/juq00327ps.jpg"
    }
        ],
        list2: [
             {
        "title": "STARS-322mmsub*vip",
        "thumbnail": "https://www.dropbox.com/scl/fi/4yychhic3kotmgmu4pu6z/1710292564595.jpg?rlkey=dl0pxywyb7k08rod8zulnfjzw&dl=1"
    },
    {
        "title": "STARS-322mmsub*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P12/main/Picsart_24-03-13_00-23-06-533.jpg"
    },
    {
        "title": "ROE-119mmsub*vip",
        "thumbnail": "https://www.dropbox.com/scl/fi/82obqeptq0q21tzrgmaic/1680226781.jpg?rlkey=nel88gozbp2robbrwm7xg61b8&dl=1"
    },
    {
        "title": "JUL-607mmsub*vip",
        "thumbnail": "https://pics.dmm.co.jp/digital/video/jul00607/jul00607ps.jpg"
    },
    {
        "title": "NACR-613mmsub*vip",
        "thumbnail": "https://i.imgur.com/wVtmwXu.jpg"
    },
    {
        "title": "SAME-101mmsub*vip",
        "thumbnail": "https://www.dropbox.com/scl/fi/lztkwsvp9xlw43ow2giat/IMG_20240312_080249.jpg?rlkey=29uxpo2azidpp2iwu16nr6ewj&dl=1"
    },
    {
        "title": "SAME-101mmsub*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P12/main/Picsart_24-03-12_00-15-26-304.jpg"
    },
    {
        "title": "JUL-359mmsub*vip",
        "thumbnail": "https://pics.dmm.co.jp/digital/video/jul00359/jul00359ps.jpg"
    },
    {
        "title": "SSIS-787mmsub*vip",
        "thumbnail": "https://i.imgur.com/L8ePHFj.jpg"
    },
    {
        "title": "DASS-085mmsub*vip",
        "thumbnail": "https://www.dropbox.com/scl/fi/dspryl93qdh9ofvc4d8b3/1710034006102.jpg?rlkey=qlqhwgo8p7yktaobxtqmkbypg&dl=1"
    },
    {
        "title": "DASS-085mmsub*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P12/main/Picsart_24-03-10_00-42-55-520.jpg"
    },
    {
        "title": "MIDV-360mmsub*vip",
        "thumbnail": "https://www.dropbox.com/scl/fi/89qxf32r3gr09ow9zza40/1683863299.jpg?rlkey=7sdci73f1psow5ygd413st5vj&dl=1"
    },
    {
        "title": "Rainbowslut - Good Wife turned into Cheating Whore*vip",
        "thumbnail": "https://i.imgur.io/QmYBAbd_d.webp?maxwidth=640&shape=thumb&fidelity=medium"
    },
    {
        "title": "SSIS-583mmsub*vip",
        "thumbnail": "https://i.imgur.com/m9281tO.jpg"
    },
    {
        "title": "ROE-170mmsub*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P8/main/Picsart_23-11-24_21-38-19-753.jpg"
    },
    {
        "title": "ATID-590mmsub*vip",
        "thumbnail": "https://www.dropbox.com/scl/fi/7ln30rv4ol96ny7tzq47a/1709950001489.jpg?rlkey=rwh34zgi618nlpvzglgh0tvxm&dl=1"
    },
    {
        "title": "JUQ-006mmsub*vip",
        "thumbnail": "https://www.dropbox.com/scl/fi/sbmb5jhvhr7232nh5aio9/juq-006-my-beloved-wife-creampie-possible-skewered.jpg?rlkey=wylu4llpzrwfto0yxto30jg60&dl=1"
    },
    {
        "title": "SSIS-623mmsub*vip",
        "thumbnail": "https://pics.dmm.co.jp/digital/video/ssis00623/ssis00623ps.jpg"
    },
    {
        "title": "VENX-220mmsub*vip",
        "thumbnail": "https://i.imgur.com/M1esjIf.jpg"
    },
    {
        "title": "BONY-034mmsub*vip",
        "thumbnail": "https://www.dropbox.com/scl/fi/z750euffshayh6txjwz4l/1709860601108.jpg?rlkey=0zxuk1pvzq2b40r8j5g44o3td&dl=1"
    },
    {
        "title": "BONY-034mmsub*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P12/main/Picsart_24-03-07_23-30-21-913.jpg"
    },
    {
        "title": "CAWD-590mmsub*vip",
        "thumbnail": "https://www.dropbox.com/scl/fi/8kw25uu9h12cpgv4y2di8/cawd-590-the-fate-of-a-girl-in-uniform-who-was-imp.jpg?rlkey=kxryksuvkn5keien5lj9xebq0&dl=1"
    },
    {
        "title": "SSIS-654mmsub*vip",
        "thumbnail": "https://pics.dmm.co.jp/digital/video/ssis00654/ssis00654ps.jpg"
    },
    {
        "title": "JUQ-201mmsub*vip",
        "thumbnail": "https://i.imgur.com/TgMsfwl.jpg"
    },
    {
        "title": "ADN-541mmsub*vip",
        "thumbnail": "https://www.dropbox.com/scl/fi/kcd28oumpqztxxp9na3mz/1709781639909.jpg?rlkey=tjlpng8iqjrsiv6obrpq4d9kz&dl=1"
    },
    {
        "title": "ADN-541mmsub*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P12/main/Picsart_24-03-07_01-21-50-473.jpg"
    },
    {
        "title": "SSNI-939mmsub*vip",
        "thumbnail": "https://pics.dmm.co.jp/digital/video/ssni00939/ssni00939ps.jpg"
    },
    {
        "title": "DRTP-027mmsub*vip",
        "thumbnail": "https://i.imgur.com/5G7oCyu.jpg"
    },
    {
        "title": "STARS-959mmsub*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P8/main/Picsart_23-11-20_13-05-50-221.jpg"
    },
    {
        "title": "DASD-936mmsub*vip",
        "thumbnail": "https://www.dropbox.com/scl/fi/vmpxky97u3hn0i2od0wek/1709689222423.jpg?rlkey=zvq9numcsvyrzmevm5wiz57u3&dl=1"
    }
            // Add more items as needed
        ],
        list3: [
   {
        "title": "The Day Of Swapping",
        "thumbnail": "https://www.dropbox.com/scl/fi/vqf3o6xylzjin29w5oqwo/ju7V9VIrHsdDIfa4l9nsGFPmacg.jpg?rlkey=teidps37f5zbn0v9y9ew9xv5s&dl=1"
    },
    {
        "title": "Dilig (2024)",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P10/main/GFLMHoxbUAAqz4g.jpg"
    },
    {
        "title": "Fumikos Legs",
        "thumbnail": "https://www.dropbox.com/scl/fi/kdvcjjewuh6yxkf8qdiyk/MV5BNDNkYzFiZjQtZGI1Mi00MGZkLTljOWEtZmMwMzYwZmMzMDY1XkEyXkFqcGdeQXVyNjgwNTk4Mg-._V1_.jpg?rlkey=kxtrvl2mmuzf3xqw6julg01c3&dl=1"
    },
    {
        "title": "Pantasya ni Tami (2024)",
        "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjNjMzYwNjItMDc1NS00MTdmLTkzM2ItYzEzNGM1OTI5MDViXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_QL75_UX380_CR0,4,380,562_.jpg"
    },
    {
        "title": "Sila ay akin (2023)",
        "thumbnail": "https://www.dropbox.com/scl/fi/fwenqjptajwly73tpp1sr/66kzlgGMp9lKUiBjjPPYG0r8Z03.jpg?rlkey=ff89wkmx71vmp9sjngkzxiqz3&dl= 1"
    },
    {
        "title": "Housewife Dealer(2020)",
        "thumbnail": "https://m.media-amazon.com/images/M/MV5BNTRiNmVjMTItNjc2Yy00MjFlLWJlMWYtMjBjNjUyMmZiYTU4XkEyXkFqcGdeQXVyMTA0NTY0NTYy._V1_QL75_UY562_CR6,0,380,562_.jpg"
    },
    {
        "title": "Petty Romance(2010)",
        "thumbnail": "https://www.dropbox.com/scl/fi/c0p1kislcgxhn5jvcbjzv/pclmmZAGZimdokF3ZmMF2yAn54K.jpg?rlkey=uyrpidh11ax209bg5div6izli&dl=1"
    },
    {
        "title": "Adult Shop Albasaeng \u2013 Those Who Experience It In Person(2019)",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P10/main/qXp6lEa5j1SuJDJbNvUgXrxZfYw.jpg"
    },
    {
        "title": "Catch the Brotherhood(2018)",
        "thumbnail": "https://www.dropbox.com/scl/fi/jq63bvptuqy1mdpxytie2/lHnM5FBes34pvNs3XCz62YJi7ys.jpg?rlkey=2hiy1ltl6i5761p938hs9vpjr&dl=1"
    },
    {
        "title": "Chaahat (2020)",
        "thumbnail": "https://m.media-amazon.com/images/M/MV5BODdlZWU5OWUtMzdkNS00N2I1LWE2YTUtOGE4M2JhYTVjNzY0XkEyXkFqcGdeQXVyMTI4MTk2NzMz._V1_QL75_UX380_CR0,3,380,562_.jpg"
    },
    {
        "title": "Pornstar 2 (2021)",
        "thumbnail": "https://www.dropbox.com/scl/fi/94ns65y2nl9t6gx8528av/MV5BZTM4NDNlOGMtMjQzYS00NTY5LWEwN2ItMzc4OGE2ZTczZmJkXkEyXkFqcGdeQXVyNTI5NjIyMw-._V1_.jpg?rlkey=bbqxof23xnwn0jiwjh1v22vwx&dl=1"
    },
    {
        "title": "Palipat-lipat, Papalit-palit (2024)",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P10/main/MV5BNjM4MTI0ZTMtMzMwOS00MWQyLTgwODEtMzBlNjk3ZTZiNzU3XkEyXkFqcGdeQXVyNTI5NjIyMw%40%40._V1_.jpg"
    },
    {
        "title": "Ikaw Lang Ang Mahal (2022)",
        "thumbnail": "https://www.dropbox.com/scl/fi/4se7dnzc2n036r5no9qqb/MV5BYjAxYmVkYjktY2ViNS00YTlkLTg0YWQtNTA2ZjQxYjJiYmRkXkEyXkFqcGdeQXVyNTI5NjIyMw-._V1_.jpg?rlkey=jylhzze26c4q7r5dczoc9w0rt&dl=1"
    },
    {
        "title": "Gangnam Daughter-in-law (2019)",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P10/main/MV5BOTA2ZWYwNmMtZTgzYS00MTMyLTgwMTQtOTVhYzBkNjFmZTMyXkEyXkFqcGdeQXVyMTEwMTM3MTg5._V1_FMjpg_UX1105_.jpg"
    },
    {
        "title": "Patikim-tikim (2023)",
        "thumbnail": "https://www.dropbox.com/scl/fi/xekc3jxpcvymuct71dmbl/MV5BMzcxNGE3NTctMWNmNC00NzIwLThlMTMtZTFlMjE4NjJjMDMyXkEyXkFqcGdeQXVyNDQ4NjgyNzg-._V1_.jpg?rlkey=gqbw2slij2i647sjdfwffa701&dl=1"
    },
    {
        "title": "Room Service (2024)",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P10/main/4e48qr_4c.jpg"
    },
    {
        "title": "The Woman Upstairs(2014)",
        "thumbnail": "https://www.dropbox.com/scl/fi/gnbxltfk59avurshvxcqq/MV5BZDg5NzRjMDMtNzlmZi00NTA5LTgwM2QtODE3YzAzZTY0ZDJmXkEyXkFqcGdeQXVyMTEwNDU1MzEy._V1_.jpg?rlkey=ze6jhcv2e6eddzteg8ag45xob&dl=1"
    },
    {
        "title": "Foursome (2023)",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P10/main/MV5BOTc4MWEwNmMtOTM3NS00MDY5LTgwN2QtMWZlNTFkYTZmZjI3XkEyXkFqcGdeQXVyNTI5NjIyMw%40%40._V1_QL75_UX380_CR0%2C4%2C380%2C562_.jpg"
    },
    {
        "title": "Hyena 2020",
        "thumbnail": "https://www.dropbox.com/scl/fi/ff54nsvgadljq8x9jjsuk/MV5BM2JkMGVlYjYtZWNlZS00MDQyLTljYzUtMWMyMTQ1MTUyOTg2XkEyXkFqcGdeQXVyMTA0NTY0NTYy._V1_.jpg?rlkey=ipjrmby2vz2rzcebo5ltllw04&dl=1"
    },
    {
        "title": "Bedspacer (2023)",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P10/main/MV5BMTc3YTIzMTAtMDU1NS00ZTcxLWJlNjAtYWM1OGUxZjllNDViXkEyXkFqcGdeQXVyNTI5NjIyMw%40%40._V1_FMjpg_UX1080_.jpg"
    },
    {
        "title": "Pretty Sister(2018)",
        "thumbnail": "https://www.dropbox.com/scl/fi/55mt7jindykitl3e8g38w/z2Q4DT1pDQU.jpg?rlkey=k5bogofegytosxq4g6adbb5yz&dl=1"
    },
    {
        "title": "Hibang (2023)",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P9/main/5yoOVjVtg7aKafHiZclVvVKQYzQ.jpg"
    },
    {
        "title": "Erotic Tutoring 2",
        "thumbnail": "https://www.dropbox.com/scl/fi/amslh90vklamxtzf7119i/MV5BOTZkZWY0YTYtNDQ2My00MTQzLWJjODMtNGE3MGI4MTI2NTQ4XkEyXkFqcGdeQXVyMTA0NTY0NTYy._V1_.jpg?rlkey=phrs5nxm8vynst5f35wnq2n4y&dl=1"
    },
    {
        "title": "24 Year Old Yoon Yul\u2019s Sexy Breasts(2021)",
        "thumbnail": "https://www.themoviedb.org/t/p/w220_and_h330_face/qvGkjlLjTy1nxClxpw2BiUS6jHB.jpg"
    },
    {
        "title": "SistersVirus(2020)",
        "thumbnail": "https://www.hancinema.net/photos/photo1299453.jpg"
    },
    {
        "title": "Haslers (2023)",
        "thumbnail": "https://m.media-amazon.com/images/M/MV5BYmVlMjk1NTYtZGFmOS00YjgzLWE1MTQtZmIzNTE5NGI3M2UwXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_QL75_UX380_CR0,4,380,562_.jpg"
    },
    {
        "title": "Your, Mine,All Mine (2021)",
        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUo7Pxfuo-ZXe8NGz0dMAgsybB7ogAF0mqHQ&usqp=CAU"
    },
    {
        "title": "Thai Female Secretary(2020)",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P9/main/nu-thu-ky-nguoi-thai-xinh-dep-1596291537.jpg"
    },
    {
        "title": "Milae Pretty Daughter in law (2021)",
        "thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlp1uyKfg9Jp7z5eqohkyfQDZbr_er4uG9Aw&usqp=CAU"
    },
    {
        "title": "Play Busty (2020)",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P9/main/XkzEO_4f.jpg"
    }
            // Add more items as needed
        ],
        list4: [
              {
        "title": "PME058*vip",
        "thumbnail": "https://ww2.chinababe.net/wp-content/uploads/PME058-500x280.jpg"
    },
    {
        "title": "XK-8191*vip",
        "thumbnail": "https://ww2.chinababe.net/wp-content/uploads/XK8191-500x280.jpg"
    },
    {
        "title": "PS-008*vip",
        "thumbnail": "https://ww1.chinababe.net/wp-content/uploads/PS-008-500x280.jpg"
    },
    {
        "title": "XKQP023*vip",
        "thumbnail": "https://ww2.chinababe.net/wp-content/uploads/XKQP023-500x280.jpg"
    },
    {
        "title": "PME-240*vip",
        "thumbnail": "https://ww2.chinababe.net/wp-content/uploads/PME240-500x280.jpg"
    },
    {
        "title": "RS-006*vip",
        "thumbnail": "https://ww1.chinababe.net/wp-content/uploads/RS-006-500x280.jpg"
    },
    {
        "title": "91BCM-052*vip",
        "thumbnail": "https://ww2.chinababe.net/wp-content/uploads/91BCM-052-500x280.jpg"
    },
    {
        "title": "GDCM-062*vip",
        "thumbnail": "https://ww2.chinababe.net/wp-content/uploads/GDCM-062-500x280.jpg"
    },
    {
        "title": "PMC253*vip",
        "thumbnail": "https://ww1.chinababe.net/wp-content/uploads/PMC253-500x280.jpg"
    },
    {
        "title": "XSJKY-059*vip",
        "thumbnail": "https://ww2.chinababe.net/wp-content/uploads/XSJKY-059-500x280.jpg"
    },
    {
        "title": "KM-008*vip",
        "thumbnail": "https://ww2.chinababe.net/wp-content/uploads/KM-008-500x280.jpg"
    },
    {
        "title": "MDSR-0003-EP1*vip",
        "thumbnail": "https://i.imgur.com/5BZJKal_d.webp?maxwidth=640&shape=thumb&fidelity=medium"
    },
    {
        "title": "XSJTC-05*vip",
        "thumbnail": "https://ww2.chinababe.net/wp-content/uploads/XSJTC-05-500x280.jpg"
    },
    {
        "title": "XKTC072*vip",
        "thumbnail": "https://ww2.chinababe.net/wp-content/uploads/XKTC072-500x280.jpg"
    },
    {
        "title": "TZ-070-EP2*vip",
        "thumbnail": "https://ww1.chinababe.net/wp-content/uploads/TZ-070-EP2-500x280.jpg"
    },
    {
        "title": "91KCM-099*vip",
        "thumbnail": "https://ww2.chinababe.net/wp-content/uploads/91KCM-099-500x280.jpg"
    },
    {
        "title": "PME170*vip",
        "thumbnail": "https://ww2.chinababe.net/wp-content/uploads/PME170-500x280.jpg"
    },
    {
        "title": "TMW069*vip",
        "thumbnail": "https://ww1.chinababe.net/wp-content/uploads/TMW069-500x280.jpg"
    },
    {
        "title": "MKY-TH-005*vip",
        "thumbnail": "https://ww2.chinababe.net/wp-content/uploads/MKY-TH-005-500x280.jpg"
    },
    {
        "title": "MGL-0003*vip",
        "thumbnail": "https://ww2.chinababe.net/wp-content/uploads/MGL-0003-500x280.jpg"
    },
    {
        "title": "TMG034*vip",
        "thumbnail": "https://ww1.chinababe.net/wp-content/uploads/TMG034-500x280.jpg"
    },
    {
        "title": "MD0044*vip",
        "thumbnail": "https://i.imgur.io/v5F8YYC_d.webp?maxwidth=640&shape=thumb&fidelity=medium"
    },
    {
        "title": "XKTC067*vip",
        "thumbnail": "https://ww2.chinababe.net/wp-content/uploads/XKTC067-500x280.jpg"
    },
    {
        "title": "MDL-0007-2*vip",
        "thumbnail": "https://ww1.chinababe.net/wp-content/uploads/MDL-0007-2-500x280.jpg"
    },
    {
        "title": "MPG-0045*vip",
        "thumbnail": "https://ww2.chinababe.net/wp-content/uploads/MPG-0045-500x280.jpg"
    },
    {
        "title": "MPG-0103*vip",
        "thumbnail": "https://ww2.chinababe.net/wp-content/uploads/MPG-0103-500x280.jpg"
    },
    {
        "title": "PMC242*vip",
        "thumbnail": "https://ww1.chinababe.net/wp-content/uploads/PMC242-500x280.jpg"
    },
    {
        "title": "MCY-0173*vip",
        "thumbnail": "https://ww2.chinababe.net/wp-content/uploads/MCY-0173-500x280.jpg"
    },
    {
        "title": "PMTC058*vip",
        "thumbnail": "https://ww2.chinababe.net/wp-content/uploads/PMTC058-500x280.jpg"
    },
    {
        "title": "G0814*vip",
        "thumbnail": "https://ww1.chinababe.net/wp-content/uploads/G0814-500x280.jpg"
    }
            // Add more items as needed
        ],
        list5: [
       {
        "title": "Lexi Lore - Slutty Babysitter Lexi Lore Tempts Hung Boss Into Fucking Her Ass*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P12/main/AddText_03-11-12.45.58.jpg"
    },
    {
        "title": "EM INDICA - BUSTY TEEN EM INDICA GETS A SLOPPY CREAMPIE FROM AN OLDER GUY*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P12/main/AddText_03-11-12.46.41.jpg"
    },
    {
        "title": "Kelsey Kane - Treadmill Tail*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P12/main/AddText_03-11-12.47.11.jpg"
    },
    {
        "title": "Kylie Shay - Roommate Hook Up*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P12/main/AddText_03-04-12.33.50.jpg"
    },
    {
        "title": "Mochi Mona - Mochi's Ready to Ride This Ride*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P12/main/AddText_03-04-12.22.11.jpg"
    },
    {
        "title": "Aubree Valentine - I Am Not The Maid*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P12/main/AddText_03-02-02.20.28.jpg"
    },
    {
        "title": "Jessica Starling - Mutually Beneficial*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P12/main/AddText_03-02-02.19.41.jpg"
    },
    {
        "title": "Anna Claire Clouds - Sneaky Squirting with her Ex*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/p11/main/AddText_02-29-12.55.52.jpg"
    },
    {
        "title": "Rissa May - Stepsis Needs To Know What My Hot Load Feels Like*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/p11/main/AddText_02-29-12.52.15.jpg"
    },
    {
        "title": "Chloe Surreal - Craving Wife Can'T Get No Satisfaction*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/p11/main/AddText_02-28-09.10.54.jpg"
    },
    {
        "title": "Lena Paul & Laney Grey - Come First*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/p11/main/AddText_02-23-02.14.50.jpg"
    },
    {
        "title": "CoCo Lovelock - Anal Craving Cutie Student Coco Is Hot For Teacher*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/p11/main/AddText_02-23-01.53.58.jpg"
    },
    {
        "title": "Alexis Texas, Dredd - Hardcore*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/p11/main/AddText_02-23-01.42.40.jpg"
    },
    {
        "title": "Dani Daniels - My Sister's Hot Friend*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/p11/main/AddText_02-19-01.50.05.jpg"
    },
    {
        "title": "Jennifer White And Leana Lovings - Perversion Therapy*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/p11/main/AddText_02-19-01.43.04.jpg"
    },
    {
        "title": "Mia Malkova - My Own Private Tryout*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/p11/main/AddText_02-19-01.34.50.jpg"
    },
    {
        "title": "Anya Ivy, Aaliyah Hadid - Sibling Rivalry 3*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/p11/main/AddText_02-11-11.59.50.jpg"
    },
    {
        "title": "HAZEL MOORE - Naughty Anal Hungry Hazel Cant Resist A Bad Boy*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/p11/main/AddText_02-11-11.53.45.jpg"
    },
    {
        "title": "Alessa Savage - My Stepdaughter's Secret*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/p11/main/AddText_02-10-01.52.50.jpg"
    },
    {
        "title": "Violet Myers - The Power Of Luv*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/p11/main/AddText_02-10-01.41.04.jpg"
    },
    {
        "title": "Lisa Belys - Fiery Tango Dancer Lisa Is Insatiable For Anal*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/p11/main/AddText_02-10-01.34.10.jpg"
    },
    {
        "title": "Nicolette Shea - Boss For A Day*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/p11/main/AddText_02-07-12.55.50.jpg"
    },
    {
        "title": "SKYLA NOVEA - GET TO KNOW MY STEPSON*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/p11/main/AddText_02-07-12.52.05.jpg"
    },
    {
        "title": "Adria Rae - Daddys Debt*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P10/main/AddText_02-03-01.48.50.jpg"
    },
    {
        "title": "Phoenix Marie - Quality Time*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P10/main/AddText_02-03-01.40.27.jpg"
    },
    {
        "title": "Jill Taylor - Babysitters Never Quit*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P10/main/AddText_01-28-08.07.54.jpg"
    },
    {
        "title": "Violet Myers - She Ruined Me*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P10/main/AddText_01-28-07.57.42.jpg"
    },
    {
        "title": "Leana Lovings - Stepdads Little Mistake*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P10/main/AddText_01-22-12.17.49.jpg"
    },
    {
        "title": "Laney Grey - Sexting Daddy*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P10/main/AddText_01-22-12.08.28.jpg"
    },
    {
        "title": "Leana Lovings - Teach Me Hard*vip",
        "thumbnail": "https://raw.githubusercontent.com/minimyanmar/P10/main/AddText_01-20-01.01.00.jpg"
    }
            // Add more items as needed
        ]
    };

    // Generate 5 horizontal lists
    for (let i = 1; i <= 5; i++) {
        const horizontalList = document.getElementById(`horizontalList${i}`);
        const listData = data[`list${i}`];

        listData.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("card");

            const title = document.createElement("strong");
            title.textContent = item.title;

            const image = document.createElement("img");
            image.src = item.thumbnail;

            card.appendChild(image);
            card.appendChild(title);
            horizontalList.appendChild(card);

            // Add click event listener to each card
            card.addEventListener("click", function() {
                showDialogue(item);
            });
        });
    }
    document.getElementById('title1').appendChild(document.createTextNode('Japan'));
    document.getElementById('title2').appendChild(document.createTextNode('VIP Japan'));
    document.getElementById('title3').appendChild(document.createTextNode('Korea'));
    document.getElementById('title4').appendChild(document.createTextNode('Vip China'));
    document.getElementById('title5').appendChild(document.createTextNode('Vip USA'));
 
  


    document.getElementById("downloadBtn").addEventListener("click", function() {
        window.location.href = "download.html";
    });
    document.getElementById("downloadfooterBtn").addEventListener("click", function() {
        window.location.href = "download.html";
    });
    
    document.getElementById("vipBtn").addEventListener("click", function() {
        window.location.href = "vipmember.html";
    });
    // Function to show dialogue
    function showDialogue(item) {
        const dialogue = document.getElementById("dialogue");
        const dialogueTitle = document.getElementById("dialogueTitle");
        const dialogueImage = document.getElementById("dialogueImage");
        const dialogueMessage = document.getElementById("dialogueMessage");
    
        dialogueTitle.textContent = item.title;
        dialogueImage.src = item.thumbnail;
        dialogueMessage.textContent = "ဒီဇာတ်ကားကိုကြည့်ရန် အောက်က Download Apkကို နှိပ်ပြီး ‌ဒေါင်းပါ။";
    
        dialogue.style.display = "block";
    
        // Close dialogue when close button clicked
        document.getElementById("closeButton").addEventListener("click", function () {
            closeDialogue();
        });
    
        // Handle download button click
        document.getElementById("downloadButton").addEventListener("click", function () {
            // Redirect to download URL
            window.location.href = "download.html";
        });
    
        // Handle cancel button click
        document.getElementById("cancelButton").addEventListener("click", function () {
            closeDialogue();
        });
    
        // Close dialogue when clicking outside of it
        window.addEventListener("click", function (event) {
            if (event.target === dialogue) {
                closeDialogue();
            }
        });
    }
    
    // Function to close dialogue
    function closeDialogue() {
        const dialogue = document.getElementById("dialogue");
        dialogue.classList.add("close");
        setTimeout(() => {
            dialogue.style.display = "none";
            dialogue.classList.remove("close");
        }, 500);
    }
    

      
    
}); 

// Function to navigate to a URL
function navigateTo(url) {
    window.location.href = url;
}

// Function to show the VIP dialog
function showVipDialog() {
    const vipDialog = document.getElementById("vip_dialog");
    vipDialog.style.display = "block";
}

// Function to close the VIP dialog
function closeVipDialog() {
    const vipDialog = document.getElementById("vip_dialog");
    vipDialog.classList.add("fadeOut");
    setTimeout(() => {
        vipDialog.style.display = "none";
        vipDialog.classList.remove("fadeOut");
    }, 500);
}


// Get the About App button
document.getElementById("aboutAppBtn").addEventListener("click", function() {
    const aboutAppDialog = document.getElementById("aboutAppDialog");
    aboutAppDialog.style.display = "block";
    aboutAppDialog.classList.add("fadeIn"); // Add fade-in animation
});

document.getElementById("closeAboutAppDialog").addEventListener("click", function() {
    const aboutAppDialog = document.getElementById("aboutAppDialog");
    aboutAppDialog.classList.remove("fadeIn"); // Remove fade-in animation
    setTimeout(() => {
        aboutAppDialog.style.display = "none";
    }, 500); // Delay to match the animation duration
});

