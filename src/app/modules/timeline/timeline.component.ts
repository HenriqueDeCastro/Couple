import { Component } from '@angular/core';
import { TimelineMonthEnum, TimelineYearEnum } from 'src/app/shared/classes/enums';
import { ITimelineElement } from 'src/app/shared/classes/interfaces';

@Component({
  selector: 'couple-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent {

  timelineList: ITimelineElement[];

  constructor() {
    this.timelineList = [
      // 2018
      {
        leftItem: {
          title: 'Quando nos conhecemos',
          description: 'Quando nos conhecemos',
          number: '01'
        },
        rightItem: {
          image: 'https://lh3.googleusercontent.com/pw/AJFCJaU5QSftBGZ34_3kZ4GtHv3Tw3Q6QbuFpcmg_zenUwxz3fneifsukkO7DarDTX4Ly-mX39igBdXHKgqGQfBwGotNGGBO4DewT2rWFYA7rS6I0K8JsTLFoUfJVTiCZ0qfVR5zwXGgZW-sAyKyn2SioTgknw=w996-h996-s-no?authuser=0'
        },
        date: {
          month: TimelineMonthEnum.APRIL,
          year: TimelineYearEnum.EIGHTEEN
        }
      },
      {
        leftItem: {
          title: 'Primeiro encontro',
          description: 'Primeiro encontro',
          number: '09'
        },
        rightItem: {
          image: 'https://lh3.googleusercontent.com/pw/AJFCJaVK92s7ufWsmk49711Ucsb8WHxcCAl6lJ9HWMXssFqyBsKYRiXdl6kGCgTtYELjfhl_1j2hHpdUKosrR0NUQ1UHkZN4VzET1sW5Xw9YCSZJvsRs1Ighs2i3cJn9BNYHf55UkcNJWnyId3ZSUsLZzf0jOw=w1283-h855-s-no?authuser=0'
        },
        date: {
          month: TimelineMonthEnum.APRIL,
          year: TimelineYearEnum.EIGHTEEN
        }
      },
      {
        leftItem: {
          title: 'Primeira "Saída"',
          description: 'Primeira "Saída" Sobrenatural a última chave ',
          number: '17'
        },
        rightItem: {
          image: 'https://lh3.googleusercontent.com/pw/AJFCJaVyS2yd5Q5btRJ4P-uKjoYadFNGwy06gZm9gpeomoM95K-NgBP1SPQEpubA21vwkih3xQ91pc4v1eJMHng8G9hiSW598kOxOUysMpoXSDqmdpKaywNhhEeSD0SezbMSnTwPqxrO4RqpmfAjf8xPOkFF7A=w1253-h855-s-no?authuser=0'
        },
        date: {
          month: TimelineMonthEnum.APRIL,
          year: TimelineYearEnum.EIGHTEEN
        }
      },
      {
        leftItem: {
          title: 'Nosso primeiro registro juntos',
          description: 'Nosso primeiro registro juntos',
          number: '01'
        },
        rightItem: {
          image: 'https://lh3.googleusercontent.com/pw/AJFCJaWzSm05E1xjcpLj-Fm3qHDMhaQLPMkWm0v9swDp9TRi3Fm1JcYdsT_jRLiwVlHUlH4-xBwE-IlPPhYgwtJwCQ6ZK-hNaHvArM0Qi0jx7iH7AlNtasjdR4E2SEFqk7wz5A5x3b0hP_EgXXCdxwJalJ7wVA=w960-h719-s-no?authuser=0'
        },
        date: {
          month: TimelineMonthEnum.MAY,
          year: TimelineYearEnum.EIGHTEEN
        }
      },
      {
        leftItem: {
          title: 'Primeiro beijo',
          description: 'Primeiro beijo',
          number: '21'
        },
        rightItem: {
          image: 'https://lh3.googleusercontent.com/pw/AJFCJaWoSQyyW8lp8Z1WV264EjCNM1AtczGmaH43Dc7OK3-0-gfTO4fn0-vzWLo2bWFWPIoy2eMZkHEBcVvE4Md4dwAeLF0llaGYjdzaABlbsmimmVSf2MW2_jm_mc6E8tdFnJx1rYp2DRNBVmbqxUyox9wtlg=w1154-h1350-s-no?authuser=0'
        },
        date: {
          month: TimelineMonthEnum.JUNE,
          year: TimelineYearEnum.EIGHTEEN
        }
      },
      {
        leftItem: {
          title: 'Começamos a namorar',
          description: 'Começamos a namorar',
          number: '23'
        },
        rightItem: {
          image: 'https://lh3.googleusercontent.com/pw/AJFCJaWFqX7SZ2GVdWarxL1-9rvKjSK2s6uhjrisY9YYbGYOEf2Cpr3ihqGjvM8kvzvCGj4H0LSYCYmajG7tSZIImMVhVdwPyxXrOVEd87khbAYpRYmKZWL3zVDH_W_RxXY0jW8Sgi87BSzW05JIoGjXrwtJhQ=w996-h996-s-no?authuser=0'
        },
        date: {
          month: TimelineMonthEnum.JULY,
          year: TimelineYearEnum.EIGHTEEN
        }
      },
      {
        leftItem: {
          title: 'Encontro Marcante',
          description: 'Encontro Marcante',
          number: '25'
        },
        rightItem: {
          image: 'https://lh3.googleusercontent.com/pw/AJFCJaUfvO5uQ3EegZ3mtjrvb2S2Ccq7L-DREYYgzcdcUCF9tbx5ygbVE2y-ig4vyTpKMDbW_booi0AGYC1uZa0AMv8Pd23B1fDOOOOZjybtea0EZ9Y5DV7nobFPWUM2P5sa3Tasv5dvovGDJ1VC99Frwpq0hg=w1796-h1350-s-no?authuser=0'
        },
        date: {
          month: TimelineMonthEnum.AUGUST,
          year: TimelineYearEnum.EIGHTEEN
        }
      },
      {
        leftItem: {
          title: 'Vandalismo romântico',
          description: 'Vandalismo romântico',
          number: '29'
        },
        rightItem: {
          image: 'https://lh3.googleusercontent.com/pw/AJFCJaXkTPIkIYmBUtFlzG3SnvYZKmq7GFmoCgQj80CMnbESDBVWpJa6-_wzfe2WbjvzoREJ8cfqIbMorzcKMEarJ-IsDGbVbA9Ys6MHVLTZO4RZxp9LPZSAfrASrS172caX_ZPA0cD1D5qrjeHdhPcsxUwcwg=w1800-h1350-s-no?authuser=0'
        },
        date: {
          month: TimelineMonthEnum.APRIL,
          year: TimelineYearEnum.NINETEEN
        }
      },
      {
        leftItem: {
          title: 'Primeiro aniversário',
          description: 'Primeiro aniversário',
          number: '23'
        },
        rightItem: {
          image: 'https://lh3.googleusercontent.com/pw/AJFCJaVCcpfIv2pQSxSxQWIEefvk8aKjc2Y-o4h99ScUm_42MbfxwwUjefy-exXoiOzwmJan3vkJZdrYEm54gx0N4nhUeNS3R9Vv6AFrhHRsh2-GQeap2yQN1AgizPvws0sGNf0SteRMZYVJE7bNJVZwMOu-1g=w1800-h1350-s-no?authuser=0'
        },
        date: {
          month: TimelineMonthEnum.JULY,
          year: TimelineYearEnum.NINETEEN
        }
      },
      {
        leftItem: {
          title: 'Encontro Marcante 2',
          description: 'Encontro Marcante 2',
          number: '12'
        },
        rightItem: {
          image: 'https://lh3.googleusercontent.com/pw/AJFCJaXYkAu2H_T71eykvxVDEl1j3ijikVSxz7OTgOZm52OpXnYjE_BCPP0JLMJmaUqhHQYYqrOPaSm3JN-h4L1eo-4ZGlfQTKa0sUCzoGadhKXqVNYCyIoTS7bxoaLV6rIY6ZSXZBSte05iCcNcUyXlqj6EWA=w1800-h1350-s-no?authuser=0'
        },
        date: {
          month: TimelineMonthEnum.JUNE,
          year: TimelineYearEnum.TWENTY_ONE
        }
      },
      {
        leftItem: {
          title: 'Ficamos noivos',
          description: 'Ficamos noivos',
          number: '24'
        },
        rightItem: {
          image: 'https://lh3.googleusercontent.com/pw/AJFCJaWKiOZebhjVglXFK1f5JfDvFKjfbqEooNkpgCBQHmAQNoTxNzIZz0-3oamT2vlsT5D_XoDfTm4hyale1cO7F0S3XBprH58B3dTBoTqcpHnu5DQrNfHuwW-UDnbMeXzwdveXuh_HNMobEkO6VMYLY64D7A=w1800-h1350-s-no?authuser=0'
        },
        date: {
          month: TimelineMonthEnum.JULY,
          year: TimelineYearEnum.TWENTY_ONE
        }
      },
      {
        leftItem: {
          title: 'Vandalismo romântico Pt.2',
          description: 'Vandalismo romântico',
          number: '12'
        },
        rightItem: {
          image: 'https://lh3.googleusercontent.com/pw/AJFCJaVPS6-1oBpwC_oYl54E_n_cwp4Rh1C_1-i6t7jE_mmkMeZESk1MmKcWojUWQEfvFYVHN6dDIk78MG6u9ie2WltbSdgjR8I4Bzz9zo1MkXEXexSHd4qxygx5Q39gaQGlXQLy3-Fz1n5LKfX7vsC80yneww=w1012-h1350-s-no?authuser=0'
        },
        date: {
          month: TimelineMonthEnum.OCTOBER,
          year: TimelineYearEnum.TWENTY_ONE
        }
      },
      {
        leftItem: {
          title: 'Encontro Marcante 3',
          description: 'Encontro Marcante 3',
          number: '07'
        },
        rightItem: {
          image: 'https://lh3.googleusercontent.com/pw/AJFCJaXHgOXsDBgi5Yb-Y4-tCWyPfaVX6Re5sDaixFWCSH0x0JVNR2mDaeD2yFyV-WZhg1JuSOyE8ZxbPQQCoMjMMbp61-6aT7riwzqqFLVM0YxeeYsPEJmMWBvPceLeRyF9QG7r31mPU7bieMxe1UkesYtDqw=w1270-h1350-s-no?authuser=0'
        },
        date: {
          month: TimelineMonthEnum.NOVEMBER,
          year: TimelineYearEnum.TWENTY_ONE
        }
      },
      {
        leftItem: {
          title: 'Vandalismo romântico Pt.3',
          description: 'Vandalismo romântico',
          number: '23'
        },
        rightItem: {
          image: 'https://lh3.googleusercontent.com/pw/AJFCJaUgTxO8yXTYQrJuDSAMWx-Q0Z4_VtfPkW5iqRbB3GO38y29YqQf1e1JnFE6rpdk8-CVynxSjoWlImEB9cRooLJ87H7aMFlkQI2Ol1V5fZsQ776SgIp2RoXRxw1NtuU1n8NT-RGQCiPJxG4kxBgzqRyuxg=w1012-h1350-s-no?authuser=0'
        },
        date: {
          month: TimelineMonthEnum.JULY,
          year: TimelineYearEnum.TWENTY_TWO
        }
      },
      {
        leftItem: {
          title: 'Nosso chá de cozinha',
          description: 'chá de cozinha',
          number: '19'
        },
        rightItem: {
          image: 'https://lh3.googleusercontent.com/pw/AJFCJaVSu-jlomKX7j7GpnfJTSjMO5t-8unnINcx7srn6yUt5zrz7SK-VKjJt6PBf5xtoqoEjsBAD_0OJv7l7X7PvztjCTuyriqbf13rQTHAwcl8uxrcuTWRB5-OKmjNN2oHdQ9e8o2mKV_QVg7Jucw9TsCG4w=w1600-h1200-s-no?authuser=0'
        },
        date: {
          month: TimelineMonthEnum.NOVEMBER,
          year: TimelineYearEnum.TWENTY_TWO
        }
      },
      {
        leftItem: {
          title: 'Casamos!',
          description: 'casamento',
          number: '21'
        },
        rightItem: {
          image: 'https://lh3.googleusercontent.com/pw/AJFCJaWHmGhB7Z56XyW4yrARqCscBcnZObL3CLifFYPHOUbYU547KUZrxfF2TlY_h5w8nUmrjDGuCiQmRAPyG3q9bj9-IlmKqbTerizl1g2fsmQ5WGI29jsifn4wgU5XxxdyvjEgtBr8aUO-OqMFX9B_QGRS5w=w1052-h1201-s-no?authuser=0'
        },
        date: {
          month: TimelineMonthEnum.JANUARY,
          year: TimelineYearEnum.TWENTY_THREE
        }
      },
      {
        leftItem: {
          title: 'LUA DE MEL!',
          description: 'coisa boa',
          number: '22'
        },
        rightItem: {
          image: 'https://lh3.googleusercontent.com/pw/AJFCJaXY2kN03x0tgWwmKPZh57t9KtPfxt9VddbJAnuMFCJlg5Hp9Uqpg7YfOTwr1WLQEyA6-jmoxlPCDbmTgqypaSv74ZXy-Nv90xA9xEI7NSv9kNN4N6V-0npK3DIGztEasM3vrc2VJLU5yRzrsjpcPP61oQ=w1538-h1350-s-no?authuser=0'
        },
        date: {
          month: TimelineMonthEnum.JANUARY,
          year: TimelineYearEnum.TWENTY_THREE
        }
      },
      {
        leftItem: {
          title: 'A primeira membro da nossa familia',
          description: 'PHOEBE',
          number: '09'
        },
        rightItem: {
          image: 'https://lh3.googleusercontent.com/pw/AJFCJaVaCDxLoajlav9CGZcUSKm_aNbxiHB8Z2kto6oaJMW-P9b5bkEGl6i29niA2L0Wsdc-EFZZaJAFqjrt_-_20Zq8bmNoz04AOtr6d3WdjH8aegkTGMqo4fvZNNygZABDW1Fy6PiSnqNW_Gy0LsTmA7Bpdw=w1012-h1350-s-no?authuser=0'
        },
        date: {
          month: TimelineMonthEnum.APRIL,
          year: TimelineYearEnum.TWENTY_THREE
        }
      },
      {
        leftItem: {
          title: 'Atualmente nós',
          description: 'PHOEBE',
          number: '01'
        },
        rightItem: {
          image: 'https://lh3.googleusercontent.com/pw/AJFCJaVK9yg7aKpYpERa4Pj_gF5_JdiWrFM0ypV0BnEeDObFUZEMcdHII9d0u9qYyYhrUo8mw3MZ97lCUarImWBuo0mQA4GgR8ER0agrIWSp0yV7WQCG8iK5NtIidQuMjmEiFTMNVpQPDxBo10k_pzdiTZwcXw=w1800-h1350-s-no?authuser=0'
        },
        date: {
          month: TimelineMonthEnum.JULY,
          year: TimelineYearEnum.TWENTY_THREE
        }
      },
    ]
  }
}
