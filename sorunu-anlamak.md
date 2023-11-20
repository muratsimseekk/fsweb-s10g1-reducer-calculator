# Sorunu Anlamak:
1. 1 butonuna basılmasından, güncellenen değerimizin render edilmesine kadar olan uygulama adımları nelerdir? 

-- useReducer hook ile guncelleme yaparken ; state , dispatch , reducer ve initialState kullaniyoruz . Reducer (state,action) degerleri alir . Oncelikle biz actions dosyasi icerisinde action lar olusturduk . addOne adinda bir fonksiyon olusturduk , bu fonksiyon type:ADD_ONE key value cifti bir nesne dondurdu . Bunu reducer olusturdugumuz dosya icerisine import ettik kullanmak icin . reducer (state,action ) aliyordu , switch ile nesne icerisindeki type degerine action.type yazarak ulastik . Eger case durumu ADD_ONE ise state adindaki nesnemizin total degerine 1 ekletecegimizi soyledik . Daha sonra useReducer hook kullanarak state degerine eristik . State degerimiz initialState nesnesi icerisindeki (./reducers) baslangic degerleridir. Tabi bunu once import etmemiz lazim kullanacagimiz yerde burasi da App.js dosyasi . Sonra value degerine 1 gonderdigimiz CalcButton icersine bir de onClkick olma duruumunu yollayacagiz . Bunun icin bir onClick fonksiyonu olusturdum ve bunun icerisinde dispatchState(addOne()) addOne fonksiyonunu dispatch ettim ve boylece prop olarak alinan onClick fonksiyonu valuesu 1 olan button u 1 artirdi.



Her adım için kodun hangi bölümünün geçerli olduğunu listeleyin.
* Kullanıcı 1 butonuna tıkadı.
* 
...

* TotalDisplay total artı 1'i gösterdi.
