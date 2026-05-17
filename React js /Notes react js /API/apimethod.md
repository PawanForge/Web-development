## API Methods (HTTP Methods)

API methods tell the server **what action** you want to perform on data.

---

### 1) GET — Read data

![Image](https://images.openai.com/static-rsc-4/9tUVUbC3bj-PfY_QKcw1v2y8oRQy_xGQ4Vti_eAVjJHfDELJZgDVaaxKvbdyRbG5nNDdX1-QbCjKFDtleqbIFbTcHg_4agFecPCicEUU81tZRcijTU5R6mpM9H6Rs0a_8fJTEI7ivlbCl22dBwtRcb1L75LrQgAaxCCQwfojjczDSw6MKLclFJxSCBJX0Fws?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/VshHfWi8FxIxoYHTBA7lz0CEnfqGxuzev1ccINRW2gCgGS8EoFm0h3PGJHpsy09BdoLVutHuxzKYidG196tmWOlWmEgOIc8pHWI31hQ7e5ZW8D7L3xI0XQrhN3JsY_Ebx-hSuVZfASEmMtWCTV0RMFfJCBI9H7J2G68fGwHWqrLp_m8eQGCOk5SZP27TKsVR?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/889okDUx6Nxjb15WsWSD3ffwCfEPIcoVpPNoHzDM0IY-E-5Qa5RGhJAbe3YGIQ54Ei08bykVyJhxdRQXLpXHlVByjnpodgaNyG1zWufN_HG3uJZB0CwnEEglyAq4eQfGMbhshnoLOiGQkFKSaGmYkew0GEHZz352U7sFnLwC3XFeC6LpDE7GToLLSr7vDAtY?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/_SwtzjYr0uog-7NfYbE7Y3oXgoc_JT3aJPhVwDP9yzJFvA-DwADW4FZpmSJIiuUgz5RazYZXYC7oWmela42ZgAdPNCmXiuHeJBOp5SrGudJdDjQLflKnO_2bI0AzsAoSkl6ABmhAxUK47reYol-mXBWg1vq7oNKETRTHQsqIeLYW2QgYazwIBiVphiK6J7sc?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/d_4gxMWP53Ip5-jcqlSPvK09VXxwIG2zPseoVw4elZXC2ISTUBge4yGsi94GzHtY7T7aMBT7XBphCkZku8YI47_UJC8BgXX1kEN2G26twBKTa9UHvLGrHsPHmuAGEoalt9Nk6WXnjKHszjzM_QU1gXhVIq-r6O7pYj_qIVrkYKrkj-PkUavryREu25toAkQR?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/Q-2ILKpvQFsTsFKOXyMIbmeHDCIxgwnQ2y_8NJVFR6Dv-VCsKTO8p-SKcLWgfQf8zgXXNZ9bvO4LY30D-o8mgKc841qMImZfv2gXvEE8q1FoG8WAAbHrPHid0FcShpnCkp5-U88zpzlIRg_xDNVV7PrB-YbApun8u2jgEFzGRr0h9Q4Vh0gRFYLlXaMZeteK?purpose=fullsize)

* Used to **fetch** data
* No body is sent
* Safe & cacheable

```js
fetch("/api/users"); // GET by default
```

---

### 2) POST — Create data

![Image](https://images.openai.com/static-rsc-4/9tUVUbC3bj-PfY_QKcw1v2y8oRQy_xGQ4Vti_eAVjJHfDELJZgDVaaxKvbdyRbG5nNDdX1-QbCjKFDtleqbIFbTcHg_4agFecPCicEUU81tZRcijTU5R6mpM9H6Rs0a_8fJTEI7ivlbCl22dBwtRcb1L75LrQgAaxCCQwfojjczDSw6MKLclFJxSCBJX0Fws?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/EDf19UP2xO4bYichx5WUBeNbMlb9LbyaQLcPu7XFMeOt5AzJdOfD_mQqQyGeclKGRfGc7L40vgbPVA8E6nfhMFxGUFYOoIoHSHoclEGDZYdCz1q9Rn85q83PmpsLPGOwPVBK92_jjTiCcREE8YAz7eYfyKM1AGBEhUvscnxDghOoPkicCb-p_8Nf2aJJXLO_?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/FPARYxfdr4K5BFP1DZGp-V_EQWAIEp421QSbJjcWAmZ34s2a8AlhejUy_URC7fwBl-PHrTA-AeZnqZLL99vZwlukROinDLbu9yPjOTizLcpyWUNmyDQG_Dr4KG6WgHJY9xcDfRmNIjoEoEBSeeJ9RLn6fyVad2s7J4oZQ75roqwbLnI3p83aRwPyrqBjL8ez?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/mpzjhr7-zdEujzXJ66eneiYjufw9pq9h5tYN6iq-Uv3oS4l_d6zSglKG9pO9v8tP-6612FDfG3fxLG5Qy7vccOpeTWE2HwPqEFRaYU_ZgSFu5GlZ2J2Ydi0thucjENAM94SqSDiTI4qXrbesY2nAbwf2PsCYYjbcsBWqjdnNDkSl-M15iN5h1kV1rgte2lI3?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/Yp3iVba7Kk6daDnuxL1CrP8Px8MjB9mKWJ1RT3bI6YUuafLL8IG5ZEzOhsC_KRWC7Pn3sm07KOj1OSCnWQk9c59Ma-is06lOHzVDEvE6h00GI9k3Nba9SjoCUkETaRRyOrZAk6ctCuj4dBfcDvqQ5SlAQTG7BkW7Hrv6c7Vvask2TPBPDhOVsLr4bm0Zugh1?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/WfaSv_YKIG0ymm-NhKZkyoufg1xRj57Hj_LZMUAS1xRYjXQzLLeD-7rKnH5xMnADuwI5ZvXBpdCa15hk8LDr4O7gMNDsndvWu8ZfAf2oUrCKJmkdZSkDoytddj4TC9T4ob-FeNhyn0sM-fJN0eE8q6-qI3_QG73MTJhkajP8ArH7xBRTN0uFVC01GaO_PVsv?purpose=fullsize)

* Used to **send** new data to server
* Has a **body** (usually JSON)

```js
fetch("/api/users", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Pawan" })
});
```

---

### 3) PUT — Update (replace) data

![Image](https://images.openai.com/static-rsc-4/9orScEM3xRJ7JnK2UXPgwszl9Ig0_7FuYKA66K2ffbdbzCfAAatBx0sxYb48GylnQvSxfn_cQphuED1xBUPeHhL0FtrLeS1f_1fmMtgJHnILP1CRyYAontAb0GbJJw3CEGB1n5b48rTBwo3ljiXkg0tkqiVVGPXQ_tNXpZsM0PPlNRERBNRk7aL_ezr6xvQF?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/1UjPl8qxASTFswVC9mu8q5nlYb5DQNr4jPKffO_nJPW-kZX9dEyUx42vZVza5L6Vzseer_VGoDdU72k-Fh_gUBz-MoxfBqN2HG38U4HkMhrwWjF3xJSjRWbCEc6yuESoFrcIB_Elv7JtHyq8eSc7EKmuSXHUVoVCJjnYsMg7OSXc_UhdDIePPqfTIftXtYWT?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/Qgzd8DC8OwRkLGiG_ODkMRwgVnQ2gPsMGMv_UWPy9nyj-avahhwIvoIm36BdfQUbNE0-WEiAt8se1t3ZnvUbR98FY-1kMm4YYH1j3dN_FNr-fmZrKsoQZJi7GFSqLjOBZk6UIlm1wTYEJVdJrY3hQ0_H9ZEJj9uHtuWjWIY60ueiDqkITzp8117U9lpHfwpE?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/QDzh9h8iakyTtquUF3uaVErJKh9q-mPFYOjVc9PDU5w_PizTbNuWliATJUxLWLF2d72Ny41NVWEFao-ooPGq6xQms2jTRGGek9J1kJ1IBYRgUMnGVXpEVOm4xarm9Tbdwk_sAN3OoELdF5Vwm9Lk7rM8QANxkLdolOZ8ZrVlrEwklrGZiWUkjehJvHd120kk?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/C9FBrlDUDHCD1Blm-DT645B6oomLBelKvYbFl_beSHqsxpEyJGcLeU7YzJjOO_rHPMiZyEb_QAgNkx_6hDuQyf2IMjt6nDCZ5FpT5haNnufQFi_IC5TlG9k7pFwjULHsPUxDJrXGx8TWLnsVxshwMYWDQQO88M75LvUcTfJuCDYgimajwlrfSHwTDRk1llZn?purpose=fullsize)

* **Replaces** the whole resource
* Has a body

```js
fetch("/api/users/1", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Pawan Kumar" })
});
```

---

### 4) PATCH — Update (partial)

![Image](https://images.openai.com/static-rsc-4/KafXGEHj1PyDiteuc7rJrfK8lYoSGF9lLh0Oks8ha1oEF2CazGlczoKIKG_m-eX6avwhydneIKgZANq17lY-Hasr3lHrlW4Ov10MMR8Nixprkv7VrZQu0Xp91FRzysK4SD0vuKUV1TrlvxkjGihickayM2Bb_v43tL4rZBglOolFCoSdvpZgxF6zOGvO_F8V?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/AtZ749ra1Q9iyikBQAv7PE3UpMdWyYmFunnysu1NI_fkxQ2DG4sdFCagogFvNDnkb4aOMf6OYra_0f3iNTu6yP1nn7g1gsFK2BXh3LEK4jyTEfAdhfQY-lK05_i9w2Ek0qvUV1w6ZsEy8U-CrnhZO1N55gLjWWBy10QELtpQn1ajRBBS_6Ep_Xh_OZbJnm0M?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/RLt98Oo7_3Dr7xfRNIoJkmoOGolaPCUuC7Xje4rXhgKsuW6rdyo9Rja_PmuO1guR_XgQdD5txo43rvy0_Yw1Mm_ir5yJrX7X_yUsdzx-lt6_hZfHWqgrQG3ZAKjSozrBlb4VwXLG_KlNPjVoWV3F5dNRkuLe18BDvg8ACfq0KTx0wPbdF-TKoXlooKqPjJc-?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/jOghBJofxvS9W4N7Mq3XfHQ5hQJvNwrHJzK1eXxYG8TMIAKiFM9DCCYFAnz2yyFqUnFmfbg5ELIMhkkHxeV6GqjvykyhxQFRzVWUxpYHjWU56793pcqfPYaJTWntTA0YdQGxxwub5i4b3f9Lvlx17yWQd4KbFrItKQtZmoVvwjFBbbjeEZqb0eSZb31cmJTw?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/qQGhx-wv_eiofO7Vp6nu5b0w2BBmZ4vW6StraufGPeLVLdGnbW1lxoYg5nI4x8BScqOtM0XJaAFaHhAS9Qm4ycS5qXcxdB8E_NVSb844al-WpS85k4Ewbjv6VdQGEIaShpSwqS1cZjSNFPZTlNjAzytlNxetUkPtDMQ7pJ5reEdYcQ2nAd0cJN-IN4bXBSzm?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/MJHIIsEyYHF2Ujv1nfoKk_Zz7gOpE-pbUxYpjEo3sjz1S6Twc6-DJWdVbEcueNKcEcC_YyalUPy4jNi9txAbrx86vCE3Y-1nw7t5mnPgDFv4jphQLCWK-Vey0nNjkBT6V2F3k6YnQlowOxbZautOduj3qSu_hgbGMPce_yinYEO6HlLf3UgZALxOS0TTjFu5?purpose=fullsize)

* Updates **only some fields**
* Has a body

```js
fetch("/api/users/1", {
  method: "PATCH",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email: "pawan@gmail.com" })
});
```

---

### 5) DELETE — Remove data

![Image](https://images.openai.com/static-rsc-4/9orScEM3xRJ7JnK2UXPgwszl9Ig0_7FuYKA66K2ffbdbzCfAAatBx0sxYb48GylnQvSxfn_cQphuED1xBUPeHhL0FtrLeS1f_1fmMtgJHnILP1CRyYAontAb0GbJJw3CEGB1n5b48rTBwo3ljiXkg0tkqiVVGPXQ_tNXpZsM0PPlNRERBNRk7aL_ezr6xvQF?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/wXvLYXhiI22OflDQYT_EktoJGSIktRXDgDyhYAD6Sl54Uuoo8Ye6cDu8pVaNg8HtPbwQnCFIhvApDdehy-XeCpFUvzlt-9mNEGAG64IEQLFWoRSxs8mbVZNv1SgGjFLehicze3rSygswVxCM3wbzGegI1qbArXgO8r7HY-oNevxf6DghzTCfMhKzt3ZKXg5t?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/LQavAeqC9NgP3XQR3nAsbz1mxzLrSHhI8oflen2ur00znHi3cTFT41x7gs7A7Sg87FRsh_maeU1dZbAvrEDJvSz86CmKFlc6Z-YvNBY8tdBRbBEooeJsRE7qN9qk6tp-vZ96gdeA14QwhKQDug0pxKNK6FPtVkCm000iBPvnQ2tFOopV3gYsgItfkmiFMoBz?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/9tUVUbC3bj-PfY_QKcw1v2y8oRQy_xGQ4Vti_eAVjJHfDELJZgDVaaxKvbdyRbG5nNDdX1-QbCjKFDtleqbIFbTcHg_4agFecPCicEUU81tZRcijTU5R6mpM9H6Rs0a_8fJTEI7ivlbCl22dBwtRcb1L75LrQgAaxCCQwfojjczDSw6MKLclFJxSCBJX0Fws?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/VshHfWi8FxIxoYHTBA7lz0CEnfqGxuzev1ccINRW2gCgGS8EoFm0h3PGJHpsy09BdoLVutHuxzKYidG196tmWOlWmEgOIc8pHWI31hQ7e5ZW8D7L3xI0XQrhN3JsY_Ebx-hSuVZfASEmMtWCTV0RMFfJCBI9H7J2G68fGwHWqrLp_m8eQGCOk5SZP27TKsVR?purpose=fullsize)

* Deletes a resource
* Usually no body

```js
fetch("/api/users/1", { method: "DELETE" });
```

---

## Quick summary

| Method | Work           | Body | Example endpoint |
| ------ | -------------- | ---- | ---------------- |
| GET    | Read           | ❌    | `/api/users`     |
| POST   | Create         | ✅    | `/api/users`     |
| PUT    | Replace        | ✅    | `/api/users/1`   |
| PATCH  | Partial update | ✅    | `/api/users/1`   |
| DELETE | Remove         | ❌    | `/api/users/1`   |

> Rule of thumb: **GET, POST, PUT, PATCH, DELETE = CRUD (Create, Read, Update, Delete)**








To **test an API**, you send requests (GET/POST/PUT/DELETE) and check the response.

Here are the most common ways developers test APIs.

---

## 1) **Postman** (Most popular)

![Image](https://images.openai.com/static-rsc-4/Uk7IlVrAN1qHasiCIgO-nNV8OwlnJ363ccc__rzf61tNydLvYO88pFHm6daxpr2VC_RG6EJC4fPsgoig9LwBBKwddVfwwLhv0IpcZ6oFvx68iX6MqUB5u3QPlFpZ88VelEaAdk1oQt48uUPZhMhysF61IA5SfLRZcyTbXvrwnD2U-oIJsaz21oUHgItwa5SR?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/pagljkbBttv1pEZpQyhJBF2PDs1rstdJUrrz2zOHhh0o_wxNp2gR7ZBdtKLBgXnd6K347E6113IqdcpL03GL21icWgFFZUrNQeVS18NuuteJu27qyx-4niKE27yyy0T4qQ2D65R2jmWimkzBHfiaSf5dgNmQ6bd436VHQWvpZjYHjiJE93VhhByJbC5mb9kt?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/nEohtmBA9Xg7anlrIvG5FLWIrXHZTzGpQ3ahPK1eGGwyNfwL1ipK4RYSj_C6nFpgaySQOdGwAfY9qoZb8IYVkMRFbfP_q8GUfIWUibCjZ0hCsTM_eJf5U1O6u7gt1smjKkgF8oiJD97UDjErkQTIFIWhiUqC8MvNdXF6vC7TeQWnO2Ip6ML18QnuEK0DW98a?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/ZbZ9ZF9bolneMnUtKRUS-wJdXFLQcoLpsC_7zX4mFjLbwGojvozS8mu7ghbvqltCTySF1ywgi3BXacSOkFGubUuYsLaVUwVIqzGe1tVs5AH96HHWlEuvnLxtuoYOnsSR4qwJK_Bivv6a1_CT0Ht0iLM8-7FcU4122_b0TWIzBOtObjAPIXiUOqJXY9Y7PMJI?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/ovsIwYJcDkk22gmHr2oQRAj8PmEKXQ6y6pvsP6IlIizrTko-9Ep0d48UI65jFgpbops0uhmvAY2CSXy028jxp6gt_yFmlUkiM8PxPvhgR_JwgB_cTyXK5uNa5t1jE_IJbyfKTSf3DxZKt3XiHC1RaLcLIpjd2tu-VBEp4XxKbkP1Y7jerOQEcmsDnBUJdvc8?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/PnDSrwTTIBeBU5XMe2FeitzC0bOHdkC8pJkABNg-QHrCEYUqM39OjCmiyUsfmOHysC-68Rj_5j6_o0aHynrsfBmro-L56L33J82mstkejjxpnXdDKeV3bFriadUW73RtJU1rgcaL5ONc6vtNxiNiBnm1kand0-SuusAduxfdB8IgmUz0w7bZGbA7X9-HpO6p?purpose=fullsize)

**Steps**

1. Open Postman
2. Select method (GET/POST/PUT/DELETE)
3. Enter API URL
4. (For POST/PUT/PATCH) add **Body → raw → JSON**
5. Click **Send**
6. See **status code** and **JSON response**

---

## 2) **Google Chrome** (Browser for GET)

* Paste API URL in address bar
* Works for **GET** only
* You’ll see JSON response

Example:

```
https://jsonplaceholder.typicode.com/users
```

---

## 3) **curl** (Terminal)

![Image](https://images.openai.com/static-rsc-4/bfSZPOYWIpFfBKXXZUKLTehFlFA1PWiZCrXpwILwdjn7NNj5k8tD0HdqX2krAO7yr1FAL2YpmC1QwKzrZnbQLumCaTQJ11rwfrWoeE_EdtyVpSFnKx_OVKLMyujaCZMRAbrpnR-V73fr--8M-M4wuec-kRlHjeb-PHK3aTwPYAbS1yGCGiKNfCUv2oNyJWZS?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/suxUZUhJ4IKHrejGc0RDV6Z3dz7RrxAaXI3qkskT9GDQC_fsOCsqEJWki_JD_Cz-OqjC4WwUE2D_Jc3RYLGTh_j8CDbx9nDo0PIimxg2BC3VkCyvZKLy-6h-TyrJFkrUDiVXQgoEitD2DnIiaEhM8iOi-Traz16XXQi_bx2N3IDk8C8uaTsDGJGtijQkfgu4?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/JVMY9cjJTDh0b-tCk1ZClOsFiTgQ50SaLSWAUykQh-hHmlas30XJniDzygj-VyaKVMCFEY6gRIiI7gMns_Im2IxL_VQDCPURH18AxxOj3Bu_aW0sgh6xkfkCHAfCtBfZydBN_0F9wrQHwTawbtyYSvfON1h_N8X751LCmeNxD_g9RwwlsZ9N5fw_PKVB52wf?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/pes913ZDFbNAs81nRegiR4w9xiCgC9hOyxz1sR2eelBaNKZC1_PgVidAfqPjI5DlKICuWw8kSpbZcLdsHACYPx9YRvxuj7pkFYG0VgautoqK9reMfwI_nUQ6x72gAPv0mPNxZ2o2yWYj56I-aMzSIZj0rmNV4ETw-bRWzQsGxymA5Was7RecPB_8tUKcyTEi?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/rJghrw3eaRirVPgxNBQw-btSC7Z8w89N9Unla3mtCRWvDZ6gUw124RqJlyk5a80XcDxmVSd7i7nRTGYEtGUls_05SArIAd9fD1SLpOsZtCZlm40pf_DTbN0XyHiIu6jVgDT3w5MO7BWcgQthURNMqqxdfCkqKCB2VxrD7_lN6Y0THdpCia-tiBm3PnNAaAOz?purpose=fullsize)

![Image](https://images.openai.com/static-rsc-4/LQavAeqC9NgP3XQR3nAsbz1mxzLrSHhI8oflen2ur00znHi3cTFT41x7gs7A7Sg87FRsh_maeU1dZbAvrEDJvSz86CmKFlc6Z-YvNBY8tdBRbBEooeJsRE7qN9qk6tp-vZ96gdeA14QwhKQDug0pxKNK6FPtVkCm000iBPvnQ2tFOopV3gYsgItfkmiFMoBz?purpose=fullsize)

**GET**

```bash
curl https://jsonplaceholder.typicode.com/users
```

**POST**

```bash
curl -X POST https://jsonplaceholder.typicode.com/users \
  -H "Content-Type: application/json" \
  -d '{"name":"Pawan"}'
```

---

## 4) Test inside JavaScript (fetch)

```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then(r => r.json())
  .then(console.log);
```

---

## 5) Free public API for practice

Use this test API anytime:

**JSONPlaceholder**

```
https://jsonplaceholder.typicode.com
```

Try:

* `/users`
* `/posts`
* `/comments`

---

## What to check while testing

* ✅ Status code (200, 201, 404, 500)
* ✅ Response time
* ✅ JSON structure
* ✅ Headers
* ✅ Error message (if any)

---

### One-line idea

> **API testing means sending requests with tools like Postman/curl/browser and verifying the JSON response and status code.**
