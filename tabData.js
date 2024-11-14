 // Danh sách các video live stream với đường link và tiêu đề tùy chỉnh
        let tabData = [
            // Tab 1
            [
                { title: " An Giang (ấn để xem)", link: 'http://221.133.9.35:1935/live/1.stream_360p/playlist.m3u8', homepagelink: "https://hplus.com.vn/xem-kenh-atv-truyen-hinh-an-giang-51818.html" },
                { title: " Bà Rịa - Vũng Tàu (renew)", link: 'https://1288207023.pop.vnptcdn.com/-eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3Y2NlYzYwLTExYmUtNDA2OS1hNjllLTQ5MGZhZTQ2NjBjNCIsImV4cCI6MTczMTM0NDY3NywidXJpIjoiL0JSVCIsImlhdCI6MTczMTMyMzA3N30.J6Yfo_HUHN-shzU9fBjoVe2nreJMz-jinF65heTntfA-/BRT/chunks.m3u8', homepagelink: "https://www.brt.vn/truyen-hinh" },
                { title: " Bạc Liêu ( (ấn để xem) - khóa)", link: 'https://1011337676.vnns.net/-eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzEzMjU1NDQsInVyaSI6IlwvaHR2Y1wvYmFjbGlldTEuNDgwcC5hZG0udG1zIiwiaXAiOiIifQ.1iWUxjsGpXUkdfOvHPCiud1AvjmwapKixz42loN65FQ-/htvc/baclieu1.480p.adm.tms/chunks.m3u8', homepagelink: "https://thbl.vn/" },
                { title: " Bắc Giang (ấn để xem - renew)", link: 'https://1253668792.e.cdneverest.net/YpGxGT0OJxpAXn8sZZPgwQ/1731368428/live/285f5f227e988ab4445a2138091d3d62e8d/chunklist.m3u8', homepagelink: "https://bacgiangtv.vn/" },
                { title: " Bắc Ninh", link: 'https://stream.thingnet.vn/live/smil:BTV.smil/chunklist_w2135022917_b1384000.m3u8', homepagelink: "https://bacninhtv.vn/" },
                { title: " Bắc Kạn (renew)", link: 'https://truyenhinh.vnptvas.vn/live.m3u8?c=vstv360&q=high&type=tv&token=LX-ibJYRUq9pflRtYAxfYQ&time=1586395820&gcId=1532&userId=&deviceId=&deviceType=&location=NA&requestTime=1586309420781&pkg=pkg11.hni', homepagelink: "https://backantv.vn/" },
                { title: " Bến Tre (renew)", link: 'https://1288865415.pop.vnptcdn.com/-eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImNiNTY5YjI4LTRmOGYtNGFjZi04ZWNlLTIzYmFiNTRmNzA4OSIsImV4cCI6MTczMTM0NzA3OSwidXJpIjoiL2JlbnRyZS5hZG0uNDgwcC50bXMiLCJpYXQiOjE3MzEzMjU0Nzl9.YTmoeYhWu6CK0Bgm0OyRZMbqihYdpxkwrBCQOjYyLtg-/bentre.adm.480p.tms/chunks.m3u8', homepagelink: "https://thbt.vn/" },
                { title: " Bình Định", link: 'http://truyenhinhbinhdinhonline.dynns.com:8086/live.m3u8', homepagelink: "https://binhdinhtv.vn/vi/truc-tuyen/" },
                { title: " Bình Dương 1 (ấn để xem)", link: 'https://htvc271120.cdn.vnns.io/cefea180bfe92a8999ee9ec8dc70d0fa1731599350/btv1.480p.tms/chunks.m3u8', homepagelink: "http://m.btv.org.vn/video/kenh-truyen-hinh-btv1-19.html" },
                { title: " Bình Dương 2 (ấn để xem)", link: 'https://htvc271120.cdn.vnns.io/b96c32f1c26926433e94d4a90cf5d70a1731599221/btv2.480p.tms/chunks.m3u8', homepagelink: "http://m.btv.org.vn/video/kenh-truyen-hinh-btv2-18.html" },
                { title: " Bình Phước 1 (ấn để xem)", link: 'https://live.baobinhphuoc.com.vn/bptvlive/tv1live.m3u8', homepagelink: "https://baobinhphuoc.com.vn/truc-tuyen/tv1" },
                { title: " Bình Phước 2 (ấn để xem)", link: 'https://cdn.baobinhphuoc.com.vn/live/28550d6213460634105b0bae21016f68bce/chunklist.m3u8', homepagelink: "https://baobinhphuoc.com.vn/truc-tuyen/tv2" },
                { title: " Bình Thuận", link: 'https://64d0d74b76158.streamlock.net/BTVTV/binhthuantv/chunklist_w1196388531.m3u8', homepagelink: "https://binhthuantv.vn/" },
                { title: " Cà Mau (khóa)", link: 'https://tv.ctvcamau.vn/live/tv/tv.m3u8', homepagelink: "https://ctvcamau.vn/" },
                { title: " Cao Bằng", link: 'http://118.107.85.4:1935/live/smil:CRTV.smil/chunklist_w2075319064_b584000.m3u8', homepagelink: "http://caobangtv.vn/" },
                { title: " Cần Thơ", link: 'https://live.canthotv.vn/live/tv_web/chunklist_w1983791983.m3u8', homepagelink: "https://canthotv.vn/tv-online/" }
            ],
			
			// Tab 2
            [
			
				 { title: "Đà Nẵng 1", link: "https://live.mediatech.vn/live/285b59a111d76974225a8e3004bfc31a509/chunklist.m3u8", homepagelink: "https://danangtv.vn/truc_tuyen-252" },
				 { title: "Đà Nẵng 2", link: "https://live.mediatech.vn/live/2859145290d0d7947ef88b6240123b62474/chunklist.m3u8", homepagelink: "https://danangtv.vn/truc_tuyen-253" }, 
				 { title: "Đắk Lắk (ấn để xem)", link: "https://cdn.drt.vn/live/285a27750861b964c27af22091662a74f2f/chunklist.m3u8", homepagelink: "https://drt.vn/" }, 
				 { title: "Đắk Nông", link: "https://cloudstreamthdn.tek4tv.vn/live/smil:daknong.smil/chunklist_w1138089177_b964000_sleng.m3u8", homepagelink: "https://truyenhinhdaknong.vn/" },
				 { title: "Điện Biên", link: "https://truyenhinh.vnptvas.vn/live.m3u8?c=vstv362&q=high&type=tv&token=LX-ibJYRUq9pflRtYAxfYQ&time=1586395820&gcId=1532&userId=&deviceId=&deviceType=&location=NA&requestTime=1586309420781&pkg=pkg11.hni", homepagelink: "https://dienbientv.vn/truyen-hinh/" },
				 { title: "Đồng Nai 1 (ấn để xem)", link: "https://htvc271120.cdn.vnns.io/cce71026f1f4cf7b43efc4cf0d1beeda1731920376/dongnai1.adm.720p.tms/chunks.m3u8", homepagelink: "https://hplus.com.vn/xem-kenh-truyen-hinh-dong-nai-1-83241.html" }, 
				 { title: "Đồng Nai 2 (ấn để xem)", link: "https://1011337676.vnns.net/-eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzEzMTU3OTEsInVyaSI6IlwvaHR2Y1wvZG9uZ25haTIuYWRtLjQ4MHAudG1zIiwiaXAiOiIifQ.3o02USHLMlM6lYujyqgUPXLg_P6DnWzJfTvjQR48Tt0-/htvc/dongnai2.adm.480p.tms/chunks.m3u8", homepagelink: "https://hplus.com.vn/xem-kenh-truyen-hinh-dong-nai-2-83242.html" }, 
				 { title: "Đồng Tháp 1", link: "https://618b88f69e53b.streamlock.net/THDT/thdttv/chunklist_w1913108614.m3u8", homepagelink: "https://thdt.vn/truyen-hinh" },
				 { title: "Đồng Tháp 2", link: "https://64d0d74b76158.streamlock.net/THDT2/thdttv2/chunklist_w2016562967.m3u8", homepagelink: "https://thdt.vn/" },
				 { title: "Gia Lai (khóa)", link: "https://tv.gialaitv.vn/tv.m3u8", homepagelink: "https://gialaitv.vn/" }, 
				 { title: "Hà Giang", link: "https://truyenhinh.vnptvas.vn/live.m3u8?c=vstv365&q=high&type=tv&token=LX-ibJYRUq9pflRtYAxfYQ&time=1586395820&gcId=1532&userId=&deviceId=&deviceType=&location=NA&requestTime=1586309420781&pkg=pkg11.hni", homepagelink: "https://hagiangtv.vn/" }, 
				 { title: "Hà Nam", link: "https://cdn.hanamtv.vn/live/285361fcafcd0ec47bba2fa3f5870f8dc72/chunklist.m3u8", homepagelink: "https://hanamtv.vn/truyen-hinh" },
				 { title: "Hà Nội  1", link: "https://cloudstreamhntv.tek4tv.vn/capture/smil:HN1.smil/chunklist_w1682664144_b1064000_slen.m3u8", homepagelink: "https://hanoionline.vn/lich-phat-song/HN1.htm" },
				 { title: "Hà Nội  2", link: "https://cloudstreamhntv.tek4tv.vn/live/smil:HN2.smil/chunklist_w1108980057_b1064000_slen.m3u8", homepagelink: "https://hanoionline.vn/lich-phat-song/HN2.htm" }, 
				 { title: "Hà Tĩnh", link: "https://wse.hatinhtv.net/live/httv1/chunklist_w1056237182.m3u8", homepagelink: "https://hatinhtv.vn/" }, 
				 { title: "Hải Dương", link: "https://truyenhinh.vnptvas.vn/live.m3u8?c=vstv369&q=medium&type=tv&token=gSTbcZR03r352niGuuUCig&time=1591151021&gcId=1532&userId=&deviceId=&deviceType=&location=NA&requestTime=1591064621734&pkg=pkg11.hni", homepagelink: "http://www.haiduongtv.com.vn/truyen-hinh-truc-tuyen.html" },
			],
			// Tab 3
            [
			
				 { title: "Hải Phòng (ấn để xem)", link: "https://live.mediatech.vn/live/285a4c99665fdf84e94956c66bc7dc7eb5d/chunklist.m3u8", homepagelink: "https://thhp.vn/truyen-hinh?channel=THP" },
				 { title: "Hải Phòng + (ấn để xem)", link: "https://live.mediatech.vn/live/28548ca35823d41426d8b3da7ed82bdab13/chunklist.m3u8", homepagelink: "https://thhp.vn/truyen-hinh?channel=THPONLINE" }, 
				 { title: "Hậu Giang", link: "https://60acee235f4d5.streamlock.net/HGTV/d1/chunklist_w46324097.m3u8", homepagelink: "https://haugiangtivi.vn/" }, 
				 { title: "Hậu Giang Live (chọn trên web)", link: "https://60acee235f4d5.streamlock.net/HGTVLIVE/hglive/chunklist_w1135136691.m3u8", homepagelink: "https://haugiangtivi.vn/" },
				 { title: "Hưng Yên", link: "https://1253218859.e.cdneverest.net/-HaKgkk_f2AKtr7j4n5hEw/1731359741/live/285f5449d7d7d2946e0bd2d54b7e60f25a4/chunklist.m3u8", homepagelink: "https://hungyentv.vn/truc-tuyen" },
				 { title: "Hòa Bình (ấn để xem)", link: "https://hbtvlive.3ssoft.vn/hoabinhtv/chunklist.m3u8", homepagelink: "https://hoabinhtv.vn/" }, 
				 { title: "Khánh Hòa", link: "https://tv.ktv.org.vn/hls/ktv1.m3u8", homepagelink: "https://ktv.org.vn/truyen-hinh/" }, 
				 { title: "Kiên Giang", link: "https://tv.kgtv.vn/live/kgtv/kgtv.m3u8", homepagelink: "https://kgtv.vn/" },
				 { title: "Kiên Giang I (chọn trên web)", link: "https://tv.kgtv.vn/live/kgtv1/kgtv1.m3u8", homepagelink: "https://kgtv.vn/" },
				 { title: "Kon Tum", link: "https://tv.kontumtv.vn/live/kontumtv/kontumtv.m3u8", homepagelink: "https://kontumtv.vn/" }, 
				 { title: "Lai Châu", link: "http://123.31.36.68/live.m3u8?c=vstv361&q=high&type=tv&token=1111&time=1586395820&gcId=1532&userId=&deviceId=&deviceType=&location=NA&requestTime=1586309420781&pkg=pkg11.hni", homepagelink: "http://laichautv.vn/" }, 
				 { title: "Lạng Sơn (ấn để xem)", link: "https://stream.langsontv.vn/live/285c78da0c246524c90917842f8de03bd21/chunklist.m3u8", homepagelink: "https://langsontv.vn/" },
				 { title: "Lâm Đồng", link: "http://118.107.85.5:1935/live/smil:LTV.smil/chunklist_w796597911_b1384000.m3u8", homepagelink: "http://lamdongtv.vn/" },
				 { title: "Lào Cai (nolink - xem trên TV)", link: "", homepagelink: "http://laocaitv.vn/" }, 
				 { title: "Long An (ấn để xem)", link: "https://cdn.la34.com.vn/live/2851dc2c9af68834814a89e61db0faee561/chunklist.m3u8", homepagelink: "https://la34.com.vn/" }, 
				 { title: "Nam Định (nolink - - xem trên TV)", link: "", homepagelink: "http://namdinhtv.vn/truyen-hinh-truc-tuyen" },
			],
			// Tab 4
			[
			
				 { title: "Nghệ An (ấn để xem)", link: "https://live.mediatech.vn/live/2859591eef2e92249b682db021f4247c364/chunklist.m3u8", homepagelink: "https://www.truyenhinhnghean.vn/" },
				 { title: "Ninh Bình (ấn để xem)", link: "https://live.mediatech.vn/live/28597f8fd7ea5064d0f84ab00b3699dfd86/chunklist.m3u8", homepagelink: "https://nbtv.vn/" }, 
				 { title: "Ninh Thuận)", link: "https://60acee235f4d5.streamlock.net/live/mystream/chunklist_w833201731.m3u8", homepagelink: "https://ninhthuantv.vn/" }, 
				 { title: "Phú Yên (ấn để xem)", link: "http://113.161.4.48:8080/phuyen/tv/index.m3u8", homepagelink: "http://www.ptpphuyen.vn/" },
				 { title: "Phú Thọ (ấn để xem)", link: "https://cdn.3ssoft.vn/live/phuthotv/phuthotv/index.m3u8?t=WY6dtTGk6Ha4GMhrCbCNog&e=1731614292", homepagelink: "https://phuthotv.vn/" },
				 { title: "Quảng Bình (ấn để xem)", link: "https://media.qbtv.vn/LiveApp/streams/UfqMzQUuZFxD69275138146969.m3u8", homepagelink: "https://qbtv.vn/portal/Home/default.aspx" }, 
				 { title: "Quảng Nam (ấn để xem)", link: "https://beta.qrt.vn/hls-live/livepkgr/_definst_/liveevent/livestream.m3u8", homepagelink: "https://qrt.vn/truyen-hinh-truc-tuyen/" }, 
				 { title: "Quảng Ngãi (ấn để xem)", link: "https://live.mediatech.vn/live/285aaa79b4b265a457d81bb72bc32e2c114/chunklist.m3u8", homepagelink: "https://quangngaitv.vn/" },
				 { title: "Quảng Ninh 1 (ấn để xem)", link: "https://live.baoquangninh.vn/qtvlive/tv1live.m3u8", homepagelink: "https://baoquangninh.vn/truyen-hinh" },
				 { title: "Quảng Ninh 3 (ấn để xem)", link: "https://live.baoquangninh.vn/qtvlive/tv3live.m3u8", homepagelink: "https://baoquangninh.vn/truyen-hinh" }, 
				 { title: "Quảng Trị", link: "http://quangtritv.vn/tv/tvvnpt2024.m3u8", homepagelink: "http://quangtritv.vn/" }, 
				 { title: "Sóc Trăng 1", link: "https://pa.thst.vn/hls-live/livepkgr/_definst_/liveevent/livestream.m3u8", homepagelink: "https://www.thst.vn/Lich-phat-song-day-du" },
				 { title: "Sóc Trăng 2", link: "https://pa.thst.vn/hls-live/livepkgr/_definst_/liveevent/livestream.m3u8", homepagelink: "https://www.thst.vn/Lich-phat-song-day-du-stv2" },
				 { title: "Sơn La (ấn để xem)", link: "https://cdn.sonlatv.vn/live/28595222e707a364251b8724717894baa46/chunklist.m3u8", homepagelink: "https://sonlatv.vn/" }, 
				 { title: "Tây Ninh (ấn để xem)", link: "https://1011337676.vnns.net/-eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzEzMjUzMjMsInVyaSI6IlwvaHR2Y1wvdGF5bmluaGhkLjEwODBwLm5iLmFkbS50bXMiLCJpcCI6IiJ9.VFdKOnYTePOuMzDLBBTktN3ij-BzqJ14uDZt3BBYGqs-/htvc/tayninhhd.1080p.nb.adm.tms/chunks.m3u8", homepagelink: "https://sdtv.vn/chuong-trinh/ttv11-truyen-hinh-tay-ninh/" }, 
				 { title: "Thái Bình (ấn để xem)", link: "https://live.mediatech.vn/live/285fe61ba73072f428d8a626d764222e744/chunklist.m3u8", homepagelink: "https://www.thaibinhtv.vn/" },
			],
			
			// Tab 5
			[
			
				 { title: "Thái Nguyên (ấn để xem)", link: "https://streaming.thainguyentv.vn/hls/livestream.m3u8", homepagelink: "https://thainguyentv.vn/" },
				 { title: "Thanh Hóa", link: "https://s5-ntl-cdn.sohatv.vn/live/Y5Kan2X7I7GHo4VN/thth-live/eVc6tyHuFZLQYgmX/337a54767a7233703637564336316a6d75d27457ec234a0671ca881aca2aae6113c9d43245313909f385a8eff8a5755c28e42b4a7669f0d9c3120c76a66540d8a00b4218cbd26b2ffd2863d95a96464259da5e43bd1035b029e773fa74b65b07d22dc8d41f1fc1ae02ebb0152ea64883881b8bb042e838f3ae813143db12d6ec7f4620e44753569b490ec896ede57212fc330a187ec088516c17c8a4e5149ec51b6c911979dd9818f2d68fbbe84fe46a/720.m3u8", homepagelink: "https://truyenhinhthanhhoa.vn/truyen-hinh.htm" },
				 { title: "Thừa Thiên Huế", link: "https://live.trt.com.vn/TRT-Online/chunklist.m3u8", homepagelink: "https://www.trt.com.vn/trt-online" }, 
				 { title: "Tiền Giang", link: "http://123.25.238.45:1935/live/thtg/chunklist_w680321629.m3u8", homepagelink: "http://www.thtg.vn/" }, 
				 { title: "Trà Vinh 1", link: "https://60acee235f4d5.streamlock.net/THTV/travinhtv/chunklist_w761554327.m3u8", homepagelink: "https://travinhtv.vn/" },
				 { title: "Trà Vinh 2 (chọn trên web)", link: "https://618b88f69e53b.streamlock.net/THTV2/travinhtv2/chunklist_w1599260888.m3u8", homepagelink: "https://travinhtv.vn/" },
				 { title: "Tuyên Quang", link: "https://streaming.tuyenquangtv.vn/channel/tuyenquang_radio/chunks.m3u8", homepagelink: "https://www.tuyenquangtv.vn/" },
				 { title: "Vĩnh Long 1", link: "https://live.thvli.vn/thvl1/thvli-drm/thvl1-1080p/chunks.m3u8?app=141214&sig=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXIiOjIsInVpZCI6ImY3ZGE3NzdiLWQzOTktNGJmMi05NGE5LTVhNTdkMGVjOGJjZCIsImFwcCI6MTQxMjE0LCJkZXYiOiJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTMwLjAuMC4wIFNhZmFyaS81MzcuMzYiLCJjaXAiOiIxLjUzLjg5LjIwNyIsInBsYSI6IndlYiIsImlhdCI6MTczMTMyNDQ5OH0.Mua47w1ae5XtViyXZrOdLOjROetDK6JYAGZdcR4kBoU", homepagelink: "https://www.thvli.vn/live/thvl1-hd" }, 
				 { title: "Vĩnh Long 2", link: "https://live.thvli.vn/thvl2/thvli-drm/thvl2-720p/chunks.m3u8?app=141214&sig=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXIiOjIsInVpZCI6Ijc2Yjg5NTc5LTk4NTItNGUxNC05NmIzLTE2N2QzMTljMWM5NSIsImFwcCI6MTQxMjE0LCJkZXYiOiJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTMwLjAuMC4wIFNhZmFyaS81MzcuMzYiLCJjaXAiOiIxLjUzLjg5LjIwNyIsInBsYSI6IndlYiIsImlhdCI6MTczMTMyNDU0N30.v6Yxr47CpkSe9XOzHHO7MSj9dv6-ACWCAndKlRppo4Y", homepagelink: "https://www.thvli.vn/live/thvl2-hd" }, 
				 { title: "Vĩnh Long 3", link: "https://live.thvli.vn/thvl3/thvli-drm/thvl3-1080p/chunks.m3u8?app=141214&sig=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXIiOjIsInVpZCI6Ijk0NmJkNjEwLWI1NjQtNGMyOC1hZTlkLTI0OWI3YjUyZDYwZiIsImFwcCI6MTQxMjE0LCJkZXYiOiJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTMwLjAuMC4wIFNhZmFyaS81MzcuMzYiLCJjaXAiOiIxLjUzLjg5LjIwNyIsInBsYSI6IndlYiIsImlhdCI6MTczMTMyNDU2NX0.VhzukPMP6QiexroQVqmh1lAthBwKAs86B4iBWyAVnew", homepagelink: "https://www.thvli.vn/live/thvl3-hd" },
				 { title: "Vĩnh Long 4", link: "https://live.thvli.vn/thvl4/thvli-drm/thvl4-1080p/chunks.m3u8?app=141214&sig=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2ZXIiOjIsInVpZCI6ImZhMmEyMmM0LWY4NzYtNDBiOS1iMzJmLTA4NGIwMTY2MTc1NCIsImFwcCI6MTQxMjE0LCJkZXYiOiJNb3ppbGxhLzUuMCAoV2luZG93cyBOVCAxMC4wOyBXaW42NDsgeDY0KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvMTMwLjAuMC4wIFNhZmFyaS81MzcuMzYiLCJjaXAiOiIxLjUzLjg5LjIwNyIsInBsYSI6IndlYiIsImlhdCI6MTczMTMyNDU4OX0.vBrnEowdAoSk4UVY3-_i4jhST9S_uM3CeQDAyICOKl0", homepagelink: "https://www.thvli.vn/live/thvl4-hd" },
				 { title: "Vĩnh Phúc (ấn để xem)", link: "http://vinhphuctv.vn:8090/vinhphuclive/web.stream/chunklist_w1340404493.m3u8", homepagelink: "http://vinhphuctv.vn/Truy%E1%BB%81n-h%C3%ACnh" },
				 { title: "Yên Bái", link: "https://live.yenbaitv.org.vn/hls/livestream.m3u8", homepagelink: "https://yenbaitv.org.vn/" }, 
				 { title: "VOV", link: "https://live.mediatech.vn/live/285fbc845578c6641d5a4c40534a0d1864b/chunklist.m3u8", homepagelink: "https://truyenhinhvov.vn/live.htm" }, 
				 
			],
			
			// Tab HTV
			[
			
				 { title: "HTV 1", link: "https://1011337676.vnns.net/-eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzE1NzUxMjIsInVyaSI6IlwvaHR2Y1wvaHR2MS43MjBwLm5pbWJsZS5hZG0udG1zIiwiaXAiOiIifQ.yegMsfsKHzi-wvmpvJcWWMCKwCEdflEZXv37p1l3b-0-/htvc/htv1.720p.nimble.adm.tms/chunks.m3u8", homepagelink: "https://tv.xemtv.net/kenh-htv1-truc-tuyen-hot.html"  },
				 { title: "HTV 2", link: "https://1011337676.vnns.net/-eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzE1NzQ4OTEsInVyaSI6IlwvaHR2Y1wvaHR2Mi43MjBwLm5pbWJsZS5hZG0udG1zIiwiaXAiOiIifQ.6QLWwA3h2YrPhlwQUL3u-aB7-0ce2GOmvWELWZIwem0-/htvc/htv2.720p.nimble.adm.tms/chunks.m3u8", homepagelink: "https://tv.xemtv.net/kenh-htv2-truc-tuyen-hot.html"  },
				 { title: "HTV 3", link: "https://1011337676.vnns.net/-eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzE1NzQ5ODIsInVyaSI6IlwvaHR2Y1wvaHR2My43MjBwLm5pbWJsZS5hZG0udG1zIiwiaXAiOiIifQ.RUO_AxF3fAFvgKM7QZmJdm0hFPbupjfgnlLhcyiXdDI-/htvc/htv3.720p.nimble.adm.tms/chunks.m3u8", homepagelink: "https://tv.xemtv.net/kenh-htv3-truc-tuyen-hot.html"  },
				 { title: "HTV Key", link: "https://1011337676.vnns.net/-eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzE1NzUwMDksInVyaSI6IlwvaHR2Y1wvaHR2NC43MjBwLm5pbWJsZS5hZG0udG1zIiwiaXAiOiIifQ.Vj5JfJ-zqpmN-BUYMFJJBpYXmWNjg-ViosIEPJOxGNw-/htvc/htv4.720p.nimble.adm.tms/chunks.m3u8", homepagelink: "https://tv.xemtv.net/kenh-htv4-truc-tuyen-hot.html"  },
				 { title: "HTV 7", link: "https://1011337676.vnns.net/-eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzE1NzUwNDMsInVyaSI6IlwvaHR2Y1wvaHR2Ny4xMDgwcC5uaW1ibGUuYWRtLnRtcyIsImlwIjoiIn0.wLM1npskiXjaluQE7o4-N-RQhaL4vK5W4JPVhj_wgXY-/htvc/htv7.1080p.nimble.adm.tms/chunks.m3u8", homepagelink: "https://tv.xemtv.net/kenh-htv7-truc-tuyen-hot.html"  },
				 { title: "HTV 9", link: "https://1011337676.vnns.net/-eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE3MzE1NzUwNjQsInVyaSI6IlwvaHR2Y1wvaHR2OS43MjBwLm5pbWJsZS5hZG0udG1zIiwiaXAiOiIifQ.nTE1rmczG-KlqBi9aNNLJkII7JOjhPRshfLVX---roo-/htvc/htv9.720p.nimble.adm.tms/chunks.m3u8", homepagelink: "https://tv.xemtv.net/kenh-htv9-truc-tuyen-hot.html"  },
				 
				 
			],
			
			
			// Tab Kênh thiết yếu
			[
			
				 { title: "VTV 1", link: "https://ott1.nethubtv.vn/live/vtv1/chunklist_1.m3u8", homepagelink: "https://www.vtvcab.vn/channel/menu-1,VTV1_HD.html"  },
				 { title: "VTC 1", link: "https://liveh12.vtvcab.vn/hls/ONVTC1_CL/01.m3u8", homepagelink: "https://vtc.gov.vn/live"  },
				 { title: "TTXVN", link: "https://liveh34.vtvcab.vn/hls/TTXVN_VNEWS/01.m3u8", homepagelink: "https://vnews.gov.vn/lich-phat-song.htm"  },
				 { title: "ANTV", link: "https://liveh34.vtvcab.vn/hls/ONANTV_CL/04.m3u8", homepagelink: "https://antv.gov.vn/truyen-hinh-truc-tuyen.html"  },
				 { title: "QPVN", link: "https://liveh34.vtvcab.vn/hls/ONQUOCPHONG_CL/01.m3u8", homepagelink: "http://qpvn.vn/tv.html"  },
				 { title: "QHTV", link: "https://media.quochoitv.vn/live/quochoitv_720p/stream.m3u8", homepagelink: "https://quochoitv.vn/truyen-hinh-truc-tuyen"  },
				 { title: "TH Nhân Dân", link: "https://arpt.tvic.vn/live/nhandan720/chunklist_w392459973.m3u8", homepagelink: "https://nhandantv.vn/"  },
								 
			],
        ];
