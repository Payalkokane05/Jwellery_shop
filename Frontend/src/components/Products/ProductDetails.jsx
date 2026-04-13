import React, { useState } from 'react'
import { toast } from "sonner"
const selectedProduct = {
    name: "Silver Ring",
    price: 100000,
    description: "This is a beautiful silver ring Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the ",
    material: "Silver",
    weight: 10,
    image: [
        {
            url: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUXFRgWGBgXFxgWGBcYFxgXGBcaGxgYHSggGBolHRUVIjEiJSktLi4uFx8zODMsNygtLisBCgoKDg0OGhAQGy0lICUtLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAEIQAAIBAwIDBQYEBAQFAwUAAAECEQADIRIxBEFRBRMiYXEygZGh0fAGFELBI1Kx4VNikvEHFTNygiRU0jRjoqOz/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAEDAgQF/8QAKxEAAgIBAwMDAwQDAAAAAAAAAAECEQMSITFBUXETMmEEIpEjQlKBFEPR/9oADAMBAAIRAxEAPwDhzwKFZECeZEkfHFBHZ6D2SD51b4xwTttjy2HKo2tsAD3R8q5tTjsdVJme/Y5IwMUXh+C04AIHl9a1FtEj2vpUkt/q3Hx/fFDlezGlXBkcRwQJ8R0j5fIVm8bYCcxH/ln4gCt7tS+F3XfmD9zXOteKsSrNnqZ+W1O64NKLYASfKnVAP70muzyE9Rj5bVFmpO2USSChqeaGqHc1rdndk3LvsrC/zH7zWavgHKuTL0mr/BdjPczGkdT9K6rgOwEt5Pibqa0O4qqh3OeWXsYXB9jpb2Enqd6tGzWkbNRNmqErMzu6ZuHrS/L0japBZlNw9MlsqZFahtUNrNFDshblhgwYgdVwRIPIxNTNvVOJ1kAEYZUEklpE4I+RqKLFOSflE7FRzANceTHpdrg6YT1KmTS7r0sSrrJcggBwq/8ATWJzlfPepax7MlWMXSGyO8uCEWQNx6YimZFaZClXy04YKuQuN8xknahi4+oOdXhyUYAyzzoAIHKOXU71MoFJ0gHTJtwNSEZuXTDECeW+doplYThlcuAi50ErI71p3IxOKcoQdCSMnIyutxLMZMwonc1UPELcDElNMaZYEMLQ8LtON2PpvQBYNkaAIdfCCApnSls+EerEzUnvNAhwTuQ4A1M5GhdsBRGBmhHBB0HA7xtLSPCD3aREmQQY251JFJVyp7xlgBGAkXT4jkdByFAEyksVSbbBmCMPZdmHibTziOflRrx9kBSQGCoywTrYGWjYRPukVHgWW2pI1b92qsd3yWKk7kk8+gqfDsFJMtbZj3SAklWY+JnCjMeZFIAv5C3/AO5b/W31pVH8on+JZ+CfSlToLONN3rH35imTiNJmcetUuIMGAZ94qsfMz8h8K6aSJxi2dVw/aiETMH7z51Xv9q6QWUAx7Q5EdY/cVzZJ5UkkU9Q/TSNfjO10uAKUieYOxk7g7j51iBJNGW0edTYAbb/Os6uxtRoELXSn7v406idyaOqY2xQ7FaIG1IrW7I7cezCt4k+Y9OtUVWp93SjNoUoKXJ3/AGdxlu8upGB6jmPUcqtm1XnFp2tsGQlW8v6eddX2F+KVeEvjQ+wP6T9K6I5EzmniaNo2agbNaItg5FN3NbJGcbNR7mtI2aY2qAMw2Kg1mtQ2qG1mih2ZbWaGbcVqNaoT2ay0NMzGURBGCRy5yMelQtMFkwwjf/NcYbQfrWgbVVbvDbkGN8biTuYrkyYq3R0wyXsys+36ZyJyh0kTceRjkPhvQ7riJYMEK62BAuDQshUnq2DzJoioTgiAIEKSPAInHmaHcQatRESQxxp29hQw5AnbNSTKsFctmCAA7KQ7C3hi5gL4TuAuYPSjoklQJuBYTUMXO9OGZthgEZPlmoOjAh2GoqTG2o3HkAqcBoBIgicVb4e4FVdbjvCWtW7ozJj+IzLygg5nl5UxBzfFyFCi6FOhWB8Qf9bY2jUM59oUXRGEdYju7Sn9JXDt54nY8uVV+G4OM6QGIZLTpkBTlrhAMKx5x5U+rWBGlwZthgSGRBi63Uy2MD3isjG/5bwv/tz/APs/+dPVTuOB/wAG7/oelWgOKvXmbfNDW0TVnuR1pzj0rersU0ggnuFOSq+tRZydh76VsdaddzOpCEt5VJbFEW3U1HWi+weQJtfGpWwRvtVjTUwlLULT1GVelPppFYqSGhbjINbYZ+VRAnf51bQg01+zOaVhRb7J7cucPA9pP5Ty9DyruuyO1rV9ZRs81O491eZA9cGt3sr8OXmtLxStbCajANzQ7hTpaCPZzjeatinJOiGXHGrPQClDIrnrvaX5a4LV221tD7JN03p28WoknSTJGTg10FlwwBUgg7EGa6U0zlaaGKihlJq33dLuqYikbVQazWh3dI2qVBZlNZoT2a1ms0NrNKh2c/xXCEjw4PnsfWqToVgbNOD1J/y7EAD5V09yxVS9wgO4qE8KfBeGWuTF0AiFGoHKrMA7anQ5IOdvpSv29U7BWXSDGoBFnUXQmDJG4zk1oHgwJiRiNztzjocnO+aB+W8WqTIgA7MFEHTPOSOfnUHjkuhVTiwQuaIKeDWNMjKW7SfqgxDFVI55puGuI5OpVYMuvwkhhawVGRqlj0jlU79jWWkEaoyp0t4fZXG+52oBQHfSWMtckaHKAwiDyBHM4kVg2WO4t/4F74NTUD/mF/8Awj/qT/40qNhUzie+5CpLb61Xt4q/YWqPYpyD0U5sUVlp0akpGXEEMGKZhVsIDUWQUMaBCYp9XzpzjnSxvSGSK4qEGaYMQB0q5bgjz+9qd0FWV4+NFS71og4R2BZUYqASWAgQBJyce6tq12Jwrd5bF9mu2gdRDILdxxb7worBWKruusyJERkVSMHJEpZFB8mXwnZF7iATZtO4ByQPCD0LHAPlNdFZvAvb/wDS/lPy7qHa5ce2z3CsbiC0wuADhjyArM/EPZr3eE4N7S3TYXhphRIS93rd53gABFwysNzCmBArS/Bnal7h1uG/ZuuxANs3Q2oKAAWAcaiAABIxnyq0IKL3IZJuatGf252RxFzi77XHtiGUa7jpZWNPhChjkACBE7VW4e9xPBMpwbbSVIYXLVyDB0spIn5jmKn+MrjcbfVrdpjebAtW1drhA1M7lQJAysT58hnWs8HxFns38uOH7y8by3e6YJda14CrzaJ1KWIU4EecyKThu2hqeyTN3sL8Q2uIgTpfmp393Wt0W68/4jsOyt02SXtXzbuXFIlUDW01kd23jRDkBixyKn2L+L7lpu64pWxiSCHX/uU71tZK2kYcE94ne93S7qpcDxSXVD22DKeYM1Z0VYkUGtVA2q0DbqBtUqAzmtUF7FahtUDiWVFLMQANycAUmgMt+Hqvc4ar35+2QCCYOxKsoM7QSINQv8QigsxAA5msmjLu8LVe/YndQRzBAzExn1NawvIwlSCPKgXVqcsakbjNoy+5PQfE/WlV3uvKlUv8dFPWZ5lZtVetpFQtJyNWtOK527O0BdxNWR2ZZtpau8TxBtd8pdLaWzduaNWkO3iUKpIaBMmKFdXBxWwLfC8Zbs95dWy3D2xYvG5BVlGtrLWyDOqWClY2zOM1wxTuyGaWmjN7X7Oax3bBxcs3l12rqyA6gwwKnKspwVO0iqfeQM1q8elq3w1nh0ud8Ue5dd1DBNdwIui3qAJUBJJIEk+VYmf1bT9+lEkr2HG2twt61MEUO1qJAAJJwABJJ8gMzVzgOEa40IQAMsW9lB1Mc+gGSdq1+IFuwSiiX2IJ8TDn3jLhFP8AhDcDxEzA1GFq3wZnOnS5KFnsogFmYCCQRIEEYguZAIOMBj5Yijd5bt5tqG848+TODjfYLv6GqHEu5ILHVGANlUdFXZRR0cMKHNR9qBY3L3v+gzdoXH5hCBEgan2YRreSPbbaN6t8P2jxFtAEulYQW9Sqq3DbGyG4BJUdCaze6JyD9/tRrN/Pi9M1lzk+ptY4LoXh2lxUhxxN6Rt/EbHLY4ms7jAbja7jM7fzMSxHx2q6rLFQdBmPeKzqfU1pXQHwloJJUkE8xgx6ipDhRM/7/GmGI6fMUe23Sss0qDHjroCBbjeAgrIB2MwTEsvkTFIcarLovrid4N1APFPhJDp7QjS8AKAFoWmmNsRWo5JIxLFCQfhrb2P4vC3QoJAKs2uyxIB097A0ncDvFU43rsOwfxbbut3V4GzeGCjYk/5Sdx061wtkNbYMphviCOYYbEHoaN+Wt3kCkFWUE6RLNbAltVrm9qJm1uI8Pn0Y8l7L8HNkxtby47nrYWkbdeZ9i/iq9wrC3dPe24BBBk6TlWRv1KRtXovZPatriF1W2B6jmPUcq6IzUvJCcHHwEZKyu2uzO+Cp/mmJgMQDAPqYrfZKpcdZlSImRTaMJmHw3A608CMq3FdSwQQAAcNnnG0dK57sS7dFu8boBuJbPdEQ85Km4VJ3ABwdt6vntO/aZOHtgNoWQzd4AFkiGAQq5iP1CeYE0Xs3hbygo90lGJEaRqbvI7xyxmNVxiNAwAUiYNJpNDTKXD8O7BArKrhSsFmaTPND7PM6tUZiBWjwthiPEsHmJmDzzzrbscEqxiYAAnOAIFG7mko0PUY35SlWv3VKnQWeMWrWN6sW4ikLdFa3XlnqlO40AxFRa0F0iJOW35k5PuAC/wDjT20loOwO52G5390e+p8Kmol2ySccscselWX24/JB/dk+EFS18aVngjccIoGpuuFAGST0AAJJ8qI8xWh+HrSlHuXASpJVoAxatr3t7J21Rbt9YuH1GccdUqN5JaY2D7Q4peFS2lgeJlDoxGwYEC8381xhlAcKpUxOawUE74MySdyfOtS5dN5muNlnOpvf/SNh6CgPwnP+m/8AetSyanRmGLSrILcOzD6Gk/DRlTSAxBEj7+BoiGB4ZI+MVmilkbVzkd9vWiQDg1EcOG238qYSuDt1pDJopTzFWLdyc0A7HmPnUQIAg0AWXXFJ1gSPhTW3kcv3/tRh60uB7DW7lSK5mk9qcj4UgTS5HwSImoNbMgqSGBkEYII2IqefdREz60+Bciv2xetknSpVunht3G5iMrauGd8Kx6VlcFxNy0+pC1t1JBjGQcgjn6GtUsUbWAGxDKdnU7qfr1ANQ7Z4PUO8Qs3hDTg67XsqxI/WhGhgc4B6mrN6la5RzpaJaXw+Dqvw/wDj620JxMI22v8AQT5/yn5V24YMJBBB5jM14SOEVtxW/wBg9u3eFwrFkn2G2938v3iqwz7VIlk+n6xO/wC0+yVYM51CGWNJAyQ0zPXSvwFQ7PZSCIZnnTLRAClGMAcydPPlyrOf8So6m4rhSqybbAsWEiVAHtTIIPLTuDWz2NcS4guKpDMMk7tzB3PIgZzjNXjT4OZprZltLMU5SrISmKVQRV0U9WNFKlQWeKb0G9dIEAe6mN4AbzUUzJOa8huj10rA8NbK2rj8zqA2EliowfIKcR7+puGuiI2PSjov8HHUdNtb9M7+7HXdCxqGw9/15VbI9o+COFbyfyxXVxV8Jp4KYybfTfvuIM+IYPh4Vcbj4CszirTKpAPuP7GrL3CbYEiO74Xmp9lOIBGMkgtzyNYnejFxJ/Asu7ivkq8PbIzmryGY61G0MVLSKidAr3DzkVT7oj2fgcfCtFWI86nAO/8AetKVGWjIQhpjB5+Ro0aoB+/rR+J4TmM+fOP3quDGCPQ/f+9a5FwQu8MUyMimtCZjnVy22CCQYzFBu8N+pRnp/agYNRnAzRrT5zg9Kja6HBqQTlz3FCB/BZL9KkCD5Gg235GJ+Ro5U7ffupaQ1EdJoyLioo3U4+dTZY/r5GgBH40uz2YP3YXWcvaUzlgIe35i4mpY6wYOxkrT9KrcaCoDjdSGHqDIrUJaXZjJDVGiN2wqt4TKkBkb+ZGEqfgfiDUCpHKtPtpAGBHJ7izk4YpeAk5wL8YxAEVVgHcU8i0yYsUtUEyheQFlB2Jzt0PXFdd2N+LRYuNauKTbBgOMkDbIG6+Y5Vy93h/GvPfp/K3XFLtK2BfcA7RtA/SDy8yfPrmapCbjC13JTgpZKfY9o4TiEuKGRgynYgzRSteO9k9qXeHbVbaOo/SfUV6H2D+LLV6Ff+Hc6E+Fv+0/tXTjzRltwznyYZR36G7ppUWRSq1ETwKzwgNHe1AolqAc0e5BFeJFntSRVtj+AT0j/wDowPn0zt5YBo9jYVBf+iVHV8Z5Na936jzn3A1GwdulXycR8I58P7vLH42IrqHKhBfvXLn5a8gtpZYaluBbTBQiIStt1YJDGMCZzFcuwDMqzGpgJO2TGSdhW/8AiDtJFS3wz2+5NlBpBBlnHdodRiCukudeFlYnpvApU6M5qcoo5tbLLAmfI/WjWyeeD5/t1qdu4DeW0Z1MSBMQCGZdJzM6kIxzp3YHECpyhJVaLJroFWlqqtoI2PuOR9anbv8AJsH72NYo1ZYBMY+FQayG3x+/rToKJo/pRYUUzZKZG338adRO23T6eVXfWq9/hP1LvMxMb75+/wB62n3MtAYn445fI1JB8evnT6ZOQQfPn99KL3YJjb5x/anQWV2t4hh76mLhX2sr15j604kGDkA/cfSoadOQSV6ffOmIs21BEz76djGIx97UBRA1L6kHHqR09Ks22kTyPyrLNIZTGYxy/vRbfAXOI1JaXUQssSVUKu2pmYgD3moEjY4/epdk8UUuPb0a7d425EmVNttYIwdQ3EedOKTdMxNtRbRY7fBDqIjLtEzI1BFIOQfDbXYwDI5ZpqZ2iui/4iW1XiUtWwqWrduUAkSXMtk+aj7Nc0p1Dofv41rL72ZwexEX9sT/AC3Dy5W3PPB25464onaSA37vPxRvOwA3P9Kjw9qbpB522AyN7kW19rG7jcjJESYBJxA1XHP+djz6nrmjjH/Yucv9FY249KYDpkVa0D0ob2huMH+tTssN+Zuf4jf6j9aVNoalT1MWlELW21GIEYoCdDTs39KnRsayo0N/5yfKbJAkmPl0zOmkiSKn2cCSVxk+Q9pLgjYnJ04Ee/2TDhbuKrPeEWQx7TkvkivDgkK2AWAJ6AnJziqXAcG1y5bswtq7cvEaWDHTbVCzuBIJ9kDPhJGAM1b4leoB8jMH1gzHoaz7iJYdms3QbtuHs6EygLKrd4Cu2limmTJYHYTVvpGrdciz6uh234i/Bb2OHa+l+8WQPdi6bB1hyXvKjIga0WGo4MCSetc3wV62e8W2XYNpcC5oBsgZMprJHtAYAER5Cidq/i7tDiOG7q6yCw6wxtrpfSSyEMzl9I2GNw8TyqnaUrcuN3aam0I7a4YF0S6T3MSJ2LbTsFmB1ZVUGc+KMovfwXkWpmzO4mpWkG9HYV5Z3lM2SPZJH9DU7d7+YQaOViotbkfWgB5mpqoqr3LL7B845HyqacQP1YPn9adCvuGayDQGBGCPf9KtJRHAIoUqBoz2jc/H6/WotYwY6bdR9fMUd+HPL4b/ANajbUdPd0/7fpVLMldrfMbYBB5etNbOnxLPp/vVgLzBIPyPyx6GqHFssiW0ZyQNUDnAnP8A20BZo27qmQdAYLqhnCgGVjUdQIBDY2zAJGoVC1f7lmuLJJQKVUxoLvcBdXzsLIxn/rKCRM0G0irfU8Rom2yfmP4ZC6fAusnvSCoLIW8A1DV1g+k/iS3w35R7pueAL4WW4uTGGtkZL5AULzKxXdDFCK4OLJlle5wXaPGghLM3Ga2Sxe4qr/1FtwioCdKgKJBM6i3Sgpcx0Pyoyzet3LjuXkAgKCVtMzqYOdNuAxSFJ1SCdqpW2gHUMbTXLnjUzpw0o0XeyZN0mY8doD3MbxEc5Fk4GSJ9wLSHerPZShbd1z/nZT6J3Ixs3/1D/DnEAdjbBHv+tZl7UghvOTJKcVG5j0/pRZnMffnQyDUixCfvP0pUp8h8P70qAGZevyqBs86IuKVysjsj2RZuF3ZCioug3GdyiqNYIHhBLEkQFAM8xAqtdtaGIMb4IYMIgMMgkHDKffVvs/i1tErctW7iMyklgZQA+IiDnwzIOMCuh/4idk6GtG0ijh1t4CLhXLQSzDeQLYz/AC1eKUsfg523HL5ORJJ2oqvc1Iy3CpQsRHPUoUz1BAG/QUNLvLaKshRyIqVVuizp8mNxvB3C/eByjAgK9slSluCCiKpCgEkttvXS9g9l2rouBRataQxl9T3HgiLgupqNwGcq0Echtpz7omjdn9ovwx122Kn9XQ8jjrHl5bYqsMr4luiM8K5jyG4ngrtpgLilSRqEzJU7H0qCXIrr/wAy/EPas8Rd4W7Ygp33eJ3lwv7OhQdSuMTgbHfnx78MUkyrqGZNds6l1IzKfMZUxIyM7GjJjrdcBjy3s+QymplKFbNGQ1Gi9jd37qCbfX4RvVoZNOTQBTW0V2MeRyPdS/MRg86uMDQXt0AK29NeUN9/c1XuWI9kxmfKnN4ggEe/cU67CvuK9gZ36/sRzrI7RtSNs/0548q27R7xlRIJYhQPU/c1u9g2ezx3rHVeuWmJ7u5p7rSks10iIVAAT4pjG5qkIuROc1E4yx2pdVZvXuIW1csaFvOjGyl1bsgKygnToBXVkqSYERTcJ3PeW7toWe/QK7PcTu1uAmUuIL0A6YILaQSRInJrruP/AOIC8TdVX091aee5SyHW8ApAXvGPhBwDgCJwa4fguxIgmSQAoBJI0j9InlvXU8ygq5OeGOUnutjTTjEJcWkQWmbUGRnMqCwQQ/siCTHp6ArtCnpGKZOHAykdNPUffSn4e1rdLY2ZgGGcDcnGwia5pSc5WzqrTHc0L9s2uGRCNJYrIgjYd62D53UEjPgg7aVpBB7Sx5+tXe27+q9o5Jj0ZvG2OQlojoscqqkch6+vr9aeTkni2jb6kxcjHMffvqS+e3pihapAnp8KWQPLqNqmWCwvVvjSoWpv5h8f7UqKAbVUG2orpH3NDZKmMjwV5Uu2y6l0V1LqNyoIJAHWr/bHaTLxD2Ve4RdMm2yLbwrnUrDUQzEW4UGADElQcZd1etUO17bRctl7ihbDXLbRbIh016Qe71hXcsg8eS3nFdf03VHN9RC9y1wfFPctAi3xF5Szk8ULV1ykowGTOrx6SdI8OTJMRX7P4sOtpO9kuzBXIfxmVABLCdIMjU2ZMRAmvSOxfxR2bb4dQL1tHW2sWn1IykCBb7oSS2+wM4jcV5vw117l5CpdEv37ty34Lbdy2soxh0JDSgdgCumQfOuqUVJUznhlk5B0uaTBEEGPQjFG7nVUbYVhKklZMTEkHmYxPpVm1ZI515p6BRudnjfYzjkQfdV7hu0riH+IDc2GoGH0jV4WmVur4j4XBA1EiDmiq4Ipyg504tx3RiUVJbkhesPGloaInKMSAP0ElSSZMhlGwgb0S6mmZZSBzJCR7X6j4JhSYDHEciJpXeFB2FRs2nQyrsPfI5cj6Ct64/uX4MenNe1/k0iGX2lYDqQQOXPnuPjSVwdjVG3xd5fZVD5rqtsd92tsDzJ8pPU1YHar/qtHzhlbp/iIxjH/AOTeUFQfUWrIuYhy1MW61WHHnnbuE9P/AE4B2/8AsTyP+o9MsnaDxi23vNsfyfyW1PJuf626iD04/wAh+rL+JZFskEgYAknkBuSScAeZqVvh0IkmVBGorpCKCSsm6xCDKsIBYiNqpq95saUEbFgbpEACf4haDvkRnPMzK5whc6rrtcbkWJMHnA5UfZH5D9SXwN/zZLZDWFJODptylsyMh7zjvLkEn2QoMDbNVG7Z4t1ZLjKFddL6ERWdeSuwGphgCOlXntjlimW2OnypPJJ+BxxRW/Uq8Nw6biJ+dWHtxnn15H1qX5YHbBzJ8ok+cwDtmq/C8ar2zcB8Cjxa4BWcDwgktMgYk5250o45SVxRRyS5Fc2nY9N/h1rf7G7JVbQ4riD/AArngDQQEAbJZwdnA0xpaQfWs3s/sE8ToOtVssyDVJ1NqJGm2sSX8LYIERWv+MfxBcsXLdnhyEW1hYVGACSjEAznUpQdO7f+arwjp+6Rz5ZavsicxxTOt66Lvhua21EGYOozPWiAiNo8xsfoaqhnYl2bUXYlid2LZkn1NW0tDYf6THy61F8l48CGfuYotl43iPdFBQ9JPkR4l9DzFEBB5+RPIdARyoDwWta9F+VNVb8v6/Gno0oNTIox55oveA9KGwp9E71JG2DvJNBucKrFQ2sQCAysYQaX8QQ41yy+LB0g1bRCKYEHFEZuLtCcFJUzBZlC6LhOhVa0t0BdSsSj6NGoN3OlCNW2pyOorZTsh3sXeIuG7aQdxw5R3PDJfXTqNy9z0suhVyDgSTtS4jhAeQofDXb1oubN10NzTrAJhtIhZBwYGPSupfVN8o58mBtc9bOlvfhG86JesDUvdqO7N0XGUKNKqtyIdQoWJM+tYd9Ht4uIyb+0CpwYO461f/C/bTJcS3eulBqZu+BYMGKtpLiYZZK4jpO1bXGi7eXihxF6y5cK9tEfvSO7YanREGr2NWAJO0dU1HJvHkzGUse0uDlVYHapRFRfhjbE4KyQHUysgkEdVYEEFSAcHFEUg/CoOLR0qSaHUg7/AHvUhbjFJU6UiSB5/KgZBsf0qeoUy/1qLgx9mkDDBRU0j3VXLedER6KEGJqM0oHKoE0xCbn0qBxJnEVKcUfgOxb/ABDDRauNbnxsgAAHOC5Ck++jS26QOSStmB2xdcG4f4wZbeg2SUAttpAS7i5KhW03dWnUD0HiruF/AY7sarrl9DKbhZY8UEzY0d2VJQbgnwrmRI4i8LrX24drVgXRw7BmS5qFyALZUZi3cNvUSIDEbRqBq2/aHGKnd2+Jv6UtW+9soUa5aLm4B/FKu6iEUgEyO8XIxXqRWyRwyTm04/8AAHCXe6Ja5ouW7OpWMlFF60zgAKjCMmFAA1BwTJJNE7U7TF65MKLaqEtlEKAIJbKszEElmJknJND4MJZuhYuLotC2pdfAx7tSQSRGpe8GpOZk4mA/DWMbYFc31Elsi+KK5F3f6hnbI2+HWiMC/kRnbNSFjTlT69DUFug7gKdxzHu6VzWXJd/Iht+TR8ifs02QQZkbSNx6+VOYiDz8uXQ9aH3MHAkdP996BhtY6L9+6lQ+9/yf0pUwtB7TUfyqgq6Wq5O5qFlHEk6chUWtY5VINz6VAvOfL3UCETFRmmTfPuooFMTKzcGTnrVRuzyGkEggzIMGa1VaDUyetAFaz2owP8aSYCm4mHKicXJBW6MkeNWIkxFW7Fu3djuypJjCRbYElBmw50kZc+ByYXY7UI2FIqre4DmPl8Kssr4luReFXcXRbXh31QpVmgHROm6AQpBNq5D/AK12Bob3YOlhB9II9QfdQl4q8gCk61EELcAcCCCIDTpyBtnFWF7bBAW4jqByUrdQgRul5WIwqjwsu5OKf6cutCvJHlX4K7HHhI/qD7hkVJb0mDg/I+lGt8RwxzqQGea3LM/B3WYDHYCSu2abXwjYd1gxJF54/SOfDdSfdB/m0HpPo0P111TA+lRS9yP9jRF4jg0/WWX/ADXbjDaf0cODG25mNXPTqf8A5lwH8yGBtN9jsYwAmcL8WyPCQ/SfdC9aPZiF3zH0oli07mEUtJ5be87DcZpm/EPDqItWyxzBWyqERMHXea5nCZ09epFVeN7dvXAQLSBSI/iFrp/UB4DFsCDEaeXwNMFyxapviP5Nzs5UQ2bl2015Ll42/AdVsRpiTbnVLEiJjwHcVqfij8Ynh/4QvaTphuGsyrWpyo71VIVwNBiYywjY1w1jj+MEj81egjIDmMTGB76exwUZgknmec+dHrKKqKF6Lk7myXaPbCXURF4e5c0s7m5xN1jcLMmhSDbiNMkjzM71m9npeTR7OpVZWYLDXNRkG4wy5WIE7CtxOH6f7UdLUcqm8s2VWGEeDM4Hs4iS7EgsXiZUM25A5TWp3UUVF6U/3FY3NqgBWgNZBwR99au937vKoFadhRScYycdfr5UkxuBPkcEeR5e+rhFC7gctunL+1OxA+6P8p+dPS/Ljy+dKnqQUVrN8Njn6Y+NWFX6RQLNrAEVINGPv31IqFa5MQPWnU8unKooo8p6U7Y+uKBBe7B61JhQ1vgeR6Giq8ifhEUIGh5FDJp3NDLHlWkYZNOu1Et3TTWXEGo+lMAzqD61WvcKI/pRtvWnBpDspvw07iqr8IB0HzrW1eX0qvxKSZFDBGW3CgbiKE3CWzmIPUYrRcRQWtjcY50kx0V0lPbyOo/erCODlSD6UIsR6VA2Rup0nfGx+taBGgsdYjcUdfWsgcfyuDT5xVhbs5U4nkd6N1yFJ8GnqG9OlzlVE3uX2KVp48/3pCo1Aaiz1DvZzTIfhTMiN2io4I351XurBx9++ntnNYZRFpmFR+VMXGx35UmOYPxoTE0E7sdKVD7o/wA/38aVMCimw9B/Shc/vzpUqyjbEvs+8f1q0ns++lSoYkCT9qLd+/hSpUASbl98zUX3pUq0jDGs86Lb/anpVoQ3EU9KlSQMfkKFfpUqGOPJVf6ftQG3+FKlWFyUYzc/X9qr2tvvzpqVbRkj2h7C/wDd9KH2Xz9T+9KlVF7GY/2Ghe/b96PY3NNSqfQ3LkIvL751ZbcetPSpkydzf4UA/wDU931pqVZZqJJ96PY2NKlWTYOlSpVoD//Z",
            alt: "silver ring"
        },
        {
            url: "https://images.unsplash.com/photo-1605100804763-247f67b3557e",
            alt: "silver ring"
        }
    ]
}
const ProductDetails = () => {
    const [mainImage, setMainImage] = useState(
        selectedProduct?.image?.length > 0 ? selectedProduct.image[0].url : ""
    )

    const [quantity, setQuantity] = useState(1)
    const [isButtonDisable, setIsButtonDisable] = useState(false)

    const handleQuantityChange = (action) => {
        if (action === "plus") {
            setQuantity((prev) => prev + 1)
        }
        if (action === "minus") {
            setQuantity((prev) => prev - 1)
        }
    }

    const handleAddToCart = () => {
        if (!selectedProduct) {
            toast.error("Please select a product")
            return
        }
        setIsButtonDisable(true)
        setTimeout(() => {
            toast.success("Item added to cart", { duration: 1000 });
            setIsButtonDisable(false)
        }, 500)
    }
    return (
        <div className='p-6 bg-gray-50'>
            <div className='max-w-6xl mx-auto bg-white p-8 rounded-lg shadow'>
                <div className='flex flex-col md:flex-row'>

                    {/* left thumbnail  */}
                    <div className='hidden md:flex flex-col space-y-2 mr-6'>
                        {selectedProduct.image.map((image, index) => (
                            <img key={index}
                                src={image.url}
                                alt={image.alt || `Thumbnail ${index}`}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition ${mainImage === image.url ? 'border-black' : 'border-gray-300 hover:border-gray-500'}`}
                                onClick={() => setMainImage(image.url)} />
                        ))}
                    </div>

                    {/* main image  */}
                    <div className='md:w-1/2'>
                        <div className='mb-4'>
                            <img
                                src={mainImage}
                                alt={selectedProduct.image[0]?.alt || "Main Image"}
                                className='w-full h-auto object-cover rounded-lg transition duration-300 hover:scale-105'
                            />
                        </div>
                    </div>

                    {/* mobile thumbnail  */}
                    <div className='md:hidden flex overflow-x-auto space-x-4 mb-4'>
                        {selectedProduct.image.map((image, index) => (
                            <img key={index}
                                src={image.url}
                                alt={image.alt || `Thumbnail ${index}`}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border-2 transition ${mainImage === image.url ? 'border-black' : 'border-gray-300 hover:border-gray-500'}`}
                                onClick={() => setMainImage(image.url)} />
                        ))}
                    </div>

                    {/* right side  */}
                    <div className='md:w-1/2 md:ml-10'>
                        <h1 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>
                            {selectedProduct.name}
                        </h1>

                        <p className='text-lg text-gray-400 mb-1 line-through'>
                            ₹{selectedProduct.price}
                        </p>

                        <p className='text-gray-600 mb-4'>
                            {selectedProduct.description}
                        </p>

                        <div className='mb-4'>
                            <p className='font-medium text-gray-700'>Material: {selectedProduct.material}</p>
                            <p className='font-medium text-gray-700'>Weight: {selectedProduct.weight}g</p>
                        </div>

                        <div className='mb-6'>
                            <p className='text-gray-700'>Quantity:</p>
                            <div className='flex items-center space-x-4 mt-2'>
                                <button
                                    className='px-2 py-1 bg-gray-200 rounded text-lg hover:bg-gray-300 transition'
                                    onClick={() => handleQuantityChange("minus")}
                                >
                                    -
                                </button>

                                <span className='text-lg'>{quantity}</span>

                                <button
                                    className='px-2 py-1 bg-gray-200 rounded text-lg hover:bg-gray-300 transition'
                                    onClick={() => handleQuantityChange("plus")}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <button
                            disabled={isButtonDisable}
                            className={`bg-black text-white py-2 px-6 rounded w-full mb-4 transition hover:bg-gray-800 ${isButtonDisable ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                            onClick={handleAddToCart}
                        >
                            ADD TO CART
                        </button>

                    </div>

                </div>
            </div>
        </div>

    )
}

export default ProductDetails
