﻿var enemyDataArr = [
  {
    "index": "MOB_MP_NightChickM_N",
    "name": "나이트 칙 런처",
    "img": "NightChickM",
    "type": "경장 공격기",
    "info": "흔히 볼 수 있는 미사일로 무장한 철충. 무조건 앞으로 돌격하는 모습이 브라우니와 비슷합니다.<br><br><br>- 보고자 레프리콘",
    "HPbase": 50,
    "HPlvl": 20,
    "ATKbase": 20,
    "ATKlvl": 2,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 3,
    "CRT": 0,
    "HIT": 75,
    "DOD": 0,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "미사일 공격",
        "img": "Missile",
        "range": 2,
        "AP": 4,
        "description": "미사일을 발사해 $(1) 피해를 줍니다. 대상이 이동 불가 상태면 직격해 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "미사일 집중 공격",
        "img": "Missile",
        "range": 1,
        "AP": 6,
        "description": "미사일 근접 사격으로 $(1.2) 피해를 줍니다. 대상이 이동 불가 상태면 직격해 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "목표 록온",
        "img": "Snipe",
        "range": 0,
        "AP": 0,
        "description": "대기 시, 주변의 적을 록온해 2라운드 동안 사거리가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChick_N",
    "name": "나이트 칙",
    "img": "NightChick",
    "type": "경장 공격기",
    "info": "하아… 이 예쁜 애의 이름은 나이트 칙입니당. 예쁘지만 더 예쁜 폴른이를 잡아먹은 무서운 녀석들이에용. 쉬지않고 기관총을 난사하니 주의해 주세용~!<br><br><br>- 보고자 그렘린입니당! ",
    "HPbase": 50,
    "HPlvl": 15,
    "ATKbase": 15,
    "ATKlvl": 1,
    "DEFbase": 0,
    "DEFlvl": 0.5,
    "AGI": 4,
    "CRT": 0,
    "HIT": 95,
    "DOD": 0,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "머신건 견제 사격",
        "img": "ARShot",
        "range": 3,
        "AP": 4,
        "description": "머신건 견제 사격으로 $(1) 피해를 줍니다. 일정 확률로 2라운드 동안 대상의 회피를 낮츱니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "머신건 연사",
        "img": "ARShot",
        "range": 2,
        "AP": 6,
        "description": "머신건을 조준 사격해 $(1.2) 피해를 줍니다. 대상이 회피 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "정조준",
        "img": "Snipe",
        "range": 0,
        "AP": 0,
        "description": "대기 시, 적을 조준해 2라운드 동안 적중과 사거리가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickS_N",
    "name": "나이트 칙 실더",
    "img": "NightChickS",
    "type": "경장 보호기",
    "info": "이 자식들 짜증나 방패를 들고 앞을 자꾸 가로막거든? 다행히 머리가 나빠서 바로 뒤만 가로 막지만… 어쨌든 이 녀석들이 방어 자세를 취하기 전에 뒤를 정리해 두라고!<br><br><br>- 보고자 그리폰",
    "HPbase": 100,
    "HPlvl": 21.25,
    "ATKbase": 30,
    "ATKlvl": 5,
    "DEFbase": 10,
    "DEFlvl": 1,
    "AGI": 3.25,
    "CRT": 0,
    "HIT": 75,
    "DOD": 0,
    "resist": [
      20,
      20,
      20
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "방패 내려치기",
        "img": "MeleeAttack",
        "range": 2,
        "AP": 4,
        "description": "방패로 내리쳐 $(1) 피해를 줍니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칙 방패 방어술",
        "img": "SelfDefBuff",
        "range": 6,
        "AP": 3,
        "description": "방패를 올려 3라운드 동안 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 커버링",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 칙 방패 방어술이 적용된 상태면 바로 뒤에 있는 아군 1기를 보호합니다.",
        "areadata": [
          6
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChick_TU",
    "name": "나이트 칙",
    "img": "NightChick",
    "type": "경장 공격기",
    "info": "하아… 이 예쁜 애의 이름은 나이트 칙입니당. 예쁘지만 더 예쁜 폴른이를 잡아먹은 무서운 녀석들이에용. 쉬지않고 기관총을 난사하니 주의해 주세용~!<br><br><br>- 보고자 그렘린입니당! ",
    "HPbase": 68,
    "HPlvl": 15.299999999999999,
    "ATKbase": 25,
    "ATKlvl": 5,
    "DEFbase": 0,
    "DEFlvl": 0.5,
    "AGI": 4,
    "CRT": 0,
    "HIT": 95,
    "DOD": 0,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "머신건 견제 사격",
        "img": "ARShot",
        "range": 3,
        "AP": 4,
        "description": "머신건 견제 사격으로 $(1) 피해를 줍니다. 일정 확률로 2라운드 동안 대상의 회피를 낮츱니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "머신건 연사",
        "img": "ARShot",
        "range": 2,
        "AP": 6,
        "description": "머신건을 조준 사격해 $(1.2) 피해를 줍니다. 대상이 회피 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "정조준",
        "img": "Snipe",
        "range": 0,
        "AP": 0,
        "description": "대기 시, 적을 조준해 2라운드 동안 적중과 사거리가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickM_TU",
    "name": "나이트 칙 런처",
    "img": "NightChickM",
    "type": "경장 공격기",
    "info": "흔히 볼 수 있는 미사일로 무장한 철충. 무조건 앞으로 돌격하는 모습이 브라우니와 비슷합니다.<br><br><br>- 보고자 레프리콘",
    "HPbase": 70,
    "HPlvl": 16.575,
    "ATKbase": 25,
    "ATKlvl": 5.5,
    "DEFbase": 0,
    "DEFlvl": 0.5,
    "AGI": 3,
    "CRT": 0,
    "HIT": 85,
    "DOD": 0,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "미사일 공격",
        "img": "Missile",
        "range": 2,
        "AP": 4,
        "description": "미사일을 발사해 $(1) 피해를 줍니다. 대상이 이동 불가 상태면 직격해 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "미사일 집중 공격",
        "img": "Missile",
        "range": 1,
        "AP": 6,
        "description": "미사일 근접 사격으로 $(1.2) 피해를 줍니다. 대상이 이동 불가 상태면 직격해 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "목표 록온",
        "img": "Snipe",
        "range": 0,
        "AP": 0,
        "description": "대기 시, 주변의 적을 록온해 2라운드 동안 사거리가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_BigChick_N",
    "name": "빅 칙",
    "img": "BigChick",
    "type": "중장 공격기",
    "info": "엄청 큰 나이트 칙이지 말임다! 하는 짓은 나이트 칙이랑 똑같은데 갑빠도 두껍고 총도 더 쎄게 쏘지 말임다. 움직이기 전에 얼른 죽여야 함다!<br><br><br>- 보고자 브라우니지 말임다.",
    "HPbase": 290,
    "HPlvl": 45,
    "ATKbase": 45,
    "ATKlvl": 10,
    "DEFbase": 20,
    "DEFlvl": 2,
    "AGI": 3.25,
    "CRT": 0,
    "HIT": 90,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "중 기관총 사격",
        "img": "MGShot",
        "range": 4,
        "AP": 5,
        "description": "중 기관총으로 $(1.2) 피해를 줍니다. 대상이 방어력 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "영거리 중 기관총",
        "img": "MGShot",
        "range": 1,
        "AP": 8,
        "description": "중 기관총 근접 사격으로 $(2) 피해를 줍니다. 대상의 방어력을 일정 비율 무시하며, 방어력 감소 상태인 경우 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Stalker_B0108",
    "name": "스토커",
    "img": "Stalker_B0108",
    "type": "경장 공격기",
    "info": "철충 연결체입니다. 힘을 모아서 엄청난 한 방을 노리는 비열한 타입의 적입니다. 하지만 힘을 모으고 있는 시간은 짧으니 최대한 공격을 늦춰서 제 포를 이용해 처리하는 게 가장 좋아 보이는군요.<br><br><br>- 보고자 비스트 헌터",
    "HPbase": 100,
    "HPlvl": 125,
    "ATKbase": 12,
    "ATKlvl": 11.5,
    "DEFbase": 24,
    "DEFlvl": 0.5,
    "AGI": 4,
    "CRT": 5,
    "HIT": 160,
    "DOD": 25,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "저격",
        "img": "Chargeshot",
        "range": 6,
        "AP": 4,
        "description": "레일건 저격으로 $(1) 피해를 줍니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "챠지",
        "img": "SelfAtkBuff",
        "range": 6,
        "AP": 4,
        "description": "레일건을 충전해, 다음 공격이 치명타로 적용되며 일정 라운드 동안 공격력이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "리액터 폭발",
        "img": "SuiceideBomb",
        "range": 0,
        "AP": 0,
        "description": "사망 시, 리액터가 폭발에 주변에 매우 높은 물리 피해를 줍니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickS_TU2",
    "name": "나이트 칙 실더",
    "img": "NightChickS",
    "type": "경장 보호기",
    "info": "이 자식들 짜증나 방패를 들고 앞을 자꾸 가로막거든? 다행히 머리가 나빠서 바로 뒤만 가로 막지만… 어쨌든 이 녀석들이 방어 자세를 취하기 전에 뒤를 정리해 두라고!<br><br><br>- 보고자 그리폰",
    "HPbase": 230,
    "HPlvl": 42.5,
    "ATKbase": 45,
    "ATKlvl": 6,
    "DEFbase": 40,
    "DEFlvl": 2.5,
    "AGI": 3.3,
    "CRT": 5,
    "HIT": 100,
    "DOD": 10,
    "resist": [
      20,
      20,
      20
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "방패 내려치기",
        "img": "MeleeAttack",
        "range": 2,
        "AP": 4,
        "description": "방패로 내리쳐 $(1) 피해를 줍니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칙 방패 방어술",
        "img": "SelfDefBuff",
        "range": 6,
        "AP": 3,
        "description": "방패를 올려 3라운드 동안 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 커버링",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 칙 방패 방어술이 적용된 상태면 바로 뒤에 있는 아군 1기를 보호합니다.",
        "areadata": [
          6
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Scout_N",
    "name": "스카우트",
    "img": "Scout",
    "type": "기동 지원기",
    "info": "저 망할 날파리들! 엄청 빨라서 잘 맞지도 않고 뭐만 하려하면 방해해서 진짜 짜증나는 녀석들이야. 백발백중인 미호가 필요해!<br><br><br>- 스틸 드라코",
    "HPbase": 100,
    "HPlvl": 22.5,
    "ATKbase": 40,
    "ATKlvl": 4.5,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.5,
    "CRT": 10,
    "HIT": 90,
    "DOD": 45,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "충격 미사일",
        "img": "Missile",
        "range": 2,
        "AP": 6,
        "description": "충격 미사일을 발사해 $(1.2) 피해를 주며, 일정 확률로 대상의 AP를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "색적 보고",
        "img": "SelfSpdBuff",
        "range": 6,
        "AP": 8,
        "description": "목표 아군에게 적 발견 경보를 울려 대상의 AP와 사거리를 증가시킵니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Harvester_N",
    "name": "하베스터",
    "img": "Harvester",
    "type": "중장 지원기",
    "info": "얘는 원래는 나처럼 일하던 애였던 것 같아. 멀리 있는 적을 갈고리로 당겨오니 주의하는 게 좋아. 나처럼 힘들게 사는 애니 편히 보내 주는 게 좋을 지도…<br><br><br>- 더치걸",
    "HPbase": 200,
    "HPlvl": 40,
    "ATKbase": 45,
    "ATKlvl": 8,
    "DEFbase": 50,
    "DEFlvl": 2.5,
    "AGI": 3.2,
    "CRT": 5,
    "HIT": 85,
    "DOD": 0,
    "resist": [
      15,
      15,
      15
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "폐기물 분쇄",
        "img": "MeleeAttack",
        "range": 1,
        "AP": 10,
        "description": "근접 공격으로 $(2) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 대상을 강타해 피해량이 증가하며 일정 확률로 2라운드 동안 행동 불가로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "폐기물 수거",
        "img": "Hang",
        "range": 4,
        "AP": 4,
        "description": "집게로 목표 대상을 포획해 $(0.5) 피해를 주며 2칸 앞으로 당깁니다. 적중 시, 2라운드 동안 행동력이 감소하며 일정 확률로 이동 불가 상태가 됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChick_TU2",
    "name": "나이트 칙",
    "img": "NightChick",
    "type": "경장 공격기",
    "info": "하아… 이 예쁜 애의 이름은 나이트 칙입니당. 예쁘지만 더 예쁜 폴른이를 잡아먹은 무서운 녀석들이에용. 쉬지않고 기관총을 난사하니 주의해 주세용~!<br><br><br>- 보고자 그렘린입니당! ",
    "HPbase": 130,
    "HPlvl": 29.5,
    "ATKbase": 45,
    "ATKlvl": 5.5,
    "DEFbase": 15,
    "DEFlvl": 0.6,
    "AGI": 4,
    "CRT": 5,
    "HIT": 130,
    "DOD": 10,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "머신건 견제 사격",
        "img": "ARShot",
        "range": 3,
        "AP": 4,
        "description": "머신건 견제 사격으로 $(1) 피해를 줍니다. 일정 확률로 2라운드 동안 대상의 회피를 낮츱니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "머신건 연사",
        "img": "ARShot",
        "range": 2,
        "AP": 6,
        "description": "머신건을 조준 사격해 $(1.2) 피해를 줍니다. 대상이 회피 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "정조준",
        "img": "Snipe",
        "range": 0,
        "AP": 0,
        "description": "대기 시, 적을 조준해 2라운드 동안 적중과 사거리가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickM_TU2",
    "name": "나이트 칙 런처",
    "img": "NightChickM",
    "type": "경장 공격기",
    "info": "흔히 볼 수 있는 미사일로 무장한 철충. 무조건 앞으로 돌격하는 모습이 브라우니와 비슷합니다.<br><br><br>- 보고자 레프리콘",
    "HPbase": 150,
    "HPlvl": 32.5,
    "ATKbase": 50,
    "ATKlvl": 6,
    "DEFbase": 20,
    "DEFlvl": 0.75,
    "AGI": 3.25,
    "CRT": 5,
    "HIT": 110,
    "DOD": 12.5,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "미사일 공격",
        "img": "Missile",
        "range": 2,
        "AP": 4,
        "description": "미사일을 발사해 $(1) 피해를 줍니다. 대상이 이동 불가 상태면 직격해 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "미사일 집중 공격",
        "img": "Missile",
        "range": 1,
        "AP": 6,
        "description": "미사일 근접 사격으로 $(1.2) 피해를 줍니다. 대상이 이동 불가 상태면 직격해 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "목표 록온",
        "img": "Snipe",
        "range": 0,
        "AP": 0,
        "description": "대기 시, 주변의 적을 록온해 2라운드 동안 사거리가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickC_N",
    "name": "나이트 칙 캐논",
    "img": "NightChickC",
    "type": "중장 공격기",
    "info": "박격포로 무장한 나이트 칙인데... 별 거 아닌 폭죽이나 쏴대는 벌레야. 아, 약한 애들한텐 무서우려나?<br><br><br>- 메이 보고함",
    "HPbase": 120,
    "HPlvl": 30,
    "ATKbase": 70,
    "ATKlvl": 8.5,
    "DEFbase": 20,
    "DEFlvl": 1.5,
    "AGI": 3.25,
    "CRT": 5,
    "HIT": 95,
    "DOD": 0,
    "resist": [
      25,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "플레임 버너",
        "img": "WideFireShot",
        "range": 2,
        "AP": 4,
        "attr": "fire",
        "description": "화염 방사로 $(0.8) 화염 속성 피해를 주며, 일정 확률로 3라운드 동안 지속 화염 피해를 입는 점화 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "곡사포",
        "img": "CannonShotDelay",
        "range": 5,
        "AP": 8,
        "description": "1라운드 후에 착탄하는 곡사포를 발사해 목표 범위에 $(1.75)의 피해를 줍니다. 대상이 이동 불가 상태면 피해량이 증가합니다.",
        "areadata": [
          0,
          0.5,
          0,
          0.5,
          1,
          0.5,
          0,
          0.5,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "연료 탱크 유폭",
        "img": "SuiceideBomb",
        "range": 0,
        "AP": 0,
        "attr": "fire",
        "description": "사망 시, 연료 탱크가 유폭해 주변에 괴멸적인 피해를 주고 피해 감소 효과를 해제합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_FABigChick_N",
    "name": "풀아머 빅 칙",
    "img": "FABigChick",
    "type": "중장 공격기",
    "info": "빅 칙과는 달라! 빅 칙과는! 뭐로 만든지는 몰라도 장갑이 차원이 다르니 나 같은 대 장갑 요원이 없으면 꽤나 곤란할걸?<br><br><br> - 불가사리 보고함",
    "HPbase": 1000,
    "HPlvl": 50,
    "ATKbase": 90,
    "ATKlvl": 10.5,
    "DEFbase": 35,
    "DEFlvl": 2.25,
    "AGI": 3.25,
    "CRT": 5,
    "HIT": 95,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "칙 중 기관포",
        "img": "MGShot",
        "range": 4,
        "AP": 4,
        "description": "기관포로 $(1.5) 피해를 줍니다. 대상의 방어력을 일정 비율 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "듀얼 칙 캐논",
        "img": "CannonShot",
        "range": 2,
        "AP": 7,
        "description": "캐논포를 연사해 목표 열에 $(1.25) 피해를 줍니다. 피해 감소 효과를 무효화합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 반응 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "반응 장갑으로 인해 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Predator_B0208",
    "name": "프레데터",
    "img": "Predator_B0208",
    "type": "중장 보호기",
    "info": "<교전 기록 없음>",
    "HPbase": 40,
    "HPlvl": 165,
    "ATKbase": 135,
    "ATKlvl": 10,
    "DEFbase": 104,
    "DEFlvl": 4,
    "AGI": 3.3,
    "CRT": 10,
    "HIT": 135,
    "DOD": 0,
    "resist": [
      50,
      50,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "후려치기",
        "img": "MeleeAttack",
        "range": 1,
        "AP": 3,
        "description": "대상을 강타해 $(1.6) 피해를 주고, 1칸 뒤로 밀어내며 일정 확률로 2라운드 동안 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "부식 용액",
        "img": "TeamDefDeBuff",
        "range": 3,
        "AP": 3,
        "description": "부식 용액으로 목표 대상들에게 $(0.5) 피해를 주며, 2라운드 동안 부식 상태로 만듭니다. 부식 상태인 대상은 방어력과 행동력이 감소하며, 지속 물리 피해를 입습니다. 보호 효과를 무시합니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "생존 본능",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "HP 25% 이하가 되면 받는 피해가 감소하며, 행동력 / 적중 / 효과 저항이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "마무리 공격",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "생존 본능이 발동한 상태로 공격하는 경우, 방어막과 피해 감소 효과를 무시하며 대상의 방어력을 일정 비율 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "멈출 수 없는 본능",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 일정 확률로 이동 불가 / 행동 불가 / 행동력 감소 효과를 해제합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChick_TU3",
    "name": "나이트 칙",
    "img": "NightChick",
    "type": "경장 공격기",
    "info": "하아… 이 예쁜 애의 이름은 나이트 칙입니당. 예쁘지만 더 예쁜 폴른이를 잡아먹은 무서운 녀석들이에용. 쉬지않고 기관총을 난사하니 주의해 주세용~!<br><br><br>- 보고자 그렘린입니당! ",
    "HPbase": 225,
    "HPlvl": 40,
    "ATKbase": 50,
    "ATKlvl": 6,
    "DEFbase": 27,
    "DEFlvl": 0.65,
    "AGI": 4,
    "CRT": 5,
    "HIT": 175,
    "DOD": 17.5,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "머신건 견제 사격",
        "img": "ARShot",
        "range": 3,
        "AP": 4,
        "description": "머신건 견제 사격으로 $(1) 피해를 줍니다. 일정 확률로 2라운드 동안 대상의 회피를 낮츱니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "머신건 연사",
        "img": "ARShot",
        "range": 2,
        "AP": 6,
        "description": "머신건을 조준 사격해 $(1.2) 피해를 줍니다. 대상이 회피 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "정조준",
        "img": "Snipe",
        "range": 0,
        "AP": 0,
        "description": "대기 시, 적을 조준해 2라운드 동안 적중과 사거리가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickSI_TU2",
    "name": "나이트 칙 실더 개",
    "img": "NightChickSI",
    "type": "경장 보호기",
    "info": "일반 칙 실더보다 큰 방패 때문에 뒤의 대상들을 공격하기 위해서는 더 용맹한 정신이 필요하다. 나이트 칙 실더와 헷갈리지 않도록 지휘 콘솔을 반드시 확인해야 함.<br><br><br>- 마리 ",
    "HPbase": 250,
    "HPlvl": 57.5,
    "ATKbase": 50,
    "ATKlvl": 5.75,
    "DEFbase": 45,
    "DEFlvl": 2.5,
    "AGI": 3.3,
    "CRT": 5,
    "HIT": 125,
    "DOD": 17.5,
    "resist": [
      35,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "방패 강타",
        "img": "MeleeAttack",
        "range": 3,
        "AP": 4,
        "description": "방패로 강타해 $(1.1000000000000001) 피해를 줍니다. 대상이 회피 감소 상태면 일정 확률로 행동 불가로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칙 가드 올리기",
        "img": "ShieldWall",
        "range": 6,
        "AP": 3,
        "description": "3라운드 동안 같은 행의 뒤에 있는 아군을 보호합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "강화 방패",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "방패 장갑이 강화되어 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickC_TU3",
    "name": "나이트 칙 캐논",
    "img": "NightChickC",
    "type": "중장 공격기",
    "info": "박격포로 무장한 나이트 칙인데... 별 거 아닌 폭죽이나 쏴대는 벌레야. 아, 약한 애들한텐 무서우려나?<br><br><br>- 메이 보고함",
    "HPbase": 180,
    "HPlvl": 40.5,
    "ATKbase": 80,
    "ATKlvl": 9.5,
    "DEFbase": 45,
    "DEFlvl": 2.25,
    "AGI": 3.3,
    "CRT": 5,
    "HIT": 114,
    "DOD": 0,
    "resist": [
      25,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "플레임 버너",
        "img": "WideFireShot",
        "range": 2,
        "AP": 4,
        "attr": "fire",
        "description": "화염 방사로 $(0.8) 화염 속성 피해를 주며, 일정 확률로 3라운드 동안 지속 화염 피해를 입는 점화 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "곡사포",
        "img": "CannonShotDelay",
        "range": 5,
        "AP": 8,
        "description": "1라운드 후에 착탄하는 곡사포를 발사해 목표 범위에 $(1.75)의 피해를 줍니다. 대상이 이동 불가 상태면 피해량이 증가합니다.",
        "areadata": [
          0,
          0.5,
          0,
          0.5,
          1,
          0.5,
          0,
          0.5,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "연료 탱크 유폭",
        "img": "SuiceideBomb",
        "range": 0,
        "AP": 0,
        "attr": "fire",
        "description": "사망 시, 연료 탱크가 유폭해 주변에 괴멸적인 피해를 주고 피해 감소 효과를 해제합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Legion_N",
    "name": "레기온",
    "img": "Legion",
    "type": "경장 지원기",
    "info": "공중의 적만 집요하게 노리니 공중 부대 운용 시 주의해! 구리게 보이는 점착제를 떼느라 이틀이나 고생했어. 그거 묻으면 진짜 아싸처럼 보이니 주의하라고!<br><br><br>- 실피드",
    "HPbase": 180,
    "HPlvl": 33.5,
    "ATKbase": 60,
    "ATKlvl": 5,
    "DEFbase": 18,
    "DEFlvl": 0.675,
    "AGI": 4.05,
    "CRT": 5,
    "HIT": 170,
    "DOD": 20,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "GAU 미니건",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "미니건을 발사해 $(1) 피해를 줍니다. 대상이 기동형인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "점착탄",
        "img": "SlowShot",
        "range": 4,
        "AP": 5,
        "description": "점착탄을 던져 $(0.33) 피해를 줍니다. 적중한 대상을 2라운드 동안 이동 불가 상태로 만들고, 일정 확률로 회피 / 행동력을 감소 시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "경계 태세",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 처치되면  경계 태세로 전환해, 양 옆의 아군의 행동력을 감소시키며 대상의 공격을 지원합니다.",
        "areadata": [
          8,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickM_TU3",
    "name": "나이트 칙 런처",
    "img": "NightChickM",
    "type": "경장 공격기",
    "info": "흔히 볼 수 있는 미사일로 무장한 철충. 무조건 앞으로 돌격하는 모습이 브라우니와 비슷합니다.<br><br><br>- 보고자 레프리콘",
    "HPbase": 250,
    "HPlvl": 47.5,
    "ATKbase": 60,
    "ATKlvl": 6.5,
    "DEFbase": 36,
    "DEFlvl": 0.9,
    "AGI": 3.4,
    "CRT": 5,
    "HIT": 155,
    "DOD": 22.5,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "미사일 공격",
        "img": "Missile",
        "range": 2,
        "AP": 4,
        "description": "미사일을 발사해 $(1) 피해를 줍니다. 대상이 이동 불가 상태면 직격해 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "미사일 집중 공격",
        "img": "Missile",
        "range": 1,
        "AP": 6,
        "description": "미사일 근접 사격으로 $(1.2) 피해를 줍니다. 대상이 이동 불가 상태면 직격해 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "목표 록온",
        "img": "Snipe",
        "range": 0,
        "AP": 0,
        "description": "대기 시, 주변의 적을 록온해 2라운드 동안 사거리가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Scout_TU3",
    "name": "스카우트",
    "img": "Scout",
    "type": "기동 지원기",
    "info": "저 망할 날파리들! 엄청 빨라서 잘 맞지도 않고 뭐만 하려하면 방해해서 진짜 짜증나는 녀석들이야. 백발백중인 미호가 필요해!<br><br><br>- 스틸 드라코",
    "HPbase": 150,
    "HPlvl": 28.5,
    "ATKbase": 50,
    "ATKlvl": 5,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.5,
    "CRT": 10,
    "HIT": 110,
    "DOD": 60,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "충격 미사일",
        "img": "Missile",
        "range": 2,
        "AP": 6,
        "description": "충격 미사일을 발사해 $(1.2) 피해를 주며, 일정 확률로 대상의 AP를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "색적 보고",
        "img": "SelfSpdBuff",
        "range": 6,
        "AP": 8,
        "description": "목표 아군에게 적 발견 경보를 울려 대상의 AP와 사거리를 증가시킵니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Zapper_N",
    "name": "재퍼",
    "img": "Zapper",
    "type": "경장 지원기",
    "info": "호전성이 낮은 개체예요. 건드리지만 않으면 공격하지 않으니 주의해 주세요. 고압 전류 공격을 하니까요. 설마 제가 대신 맞아서 찌릿찌릿에 눈 뜨는 걸 바라는 건 아니겠죠?<br><br><br>- 보고자 블랙 리리스",
    "HPbase": 200,
    "HPlvl": 32.5,
    "ATKbase": 50,
    "ATKlvl": 5,
    "DEFbase": 25,
    "DEFlvl": 1,
    "AGI": 4,
    "CRT": 5,
    "HIT": 140,
    "DOD": 10,
    "resist": [
      0,
      0,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "전격 방사",
        "img": "Shock",
        "range": 3,
        "AP": 4,
        "attr": "electric",
        "description": "전격을 방사해 $(0.8) 전기 속성 피해를 주고 일정 확률로 대상의 회피와 AP를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "고압 전류",
        "img": "Shock",
        "range": 1,
        "AP": 8,
        "attr": "electric",
        "description": "고압 전류로 $(1.2) 전기 속성 피해를 주고, 일정 확률로 대상을 행동 불능 상태로 만들고 회피를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "경계 모드",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "적과 인접하거나 공격당하기 전까지 경계 상태로 대기합니다. 공격당하기 전까지 받는 피해와 행동력이 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Phalangites_TU",
    "name": "팔랑스",
    "img": "Phalangites",
    "type": "경장 보호기",
    "info": "각이 잡힌 대열로 행군하는 철충입니다. 철충 놈들 중엔 드물게 군기가 들어있지 말입니다. 딱 밀착해서 서로서로를 보호하는 녀석들이니 진형을 아작내는 게 중요하지 말임다.<br><br><br>- 블러디팬서",
    "HPbase": 400,
    "HPlvl": 72.5,
    "ATKbase": 55,
    "ATKlvl": 5.75,
    "DEFbase": 50,
    "DEFlvl": 3,
    "AGI": 3.95,
    "CRT": 10,
    "HIT": 150,
    "DOD": 25,
    "resist": [
      40,
      40,
      40
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "머신건 속사",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "머신건을 발사해 $(1) 피해를 줍니다. 대상이 기동형인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "대열 방어",
        "img": "TeamDefBuff",
        "range": 6,
        "AP": 4,
        "description": "3라운드 동안 같은 열의 아군을 보호하며, 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "밀집 대형",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 같은 열에 인접한 아군에게 피해 감소 효과를 부여합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          8,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Harvester_TU3",
    "name": "하베스터",
    "img": "Harvester",
    "type": "중장 지원기",
    "info": "얘는 원래는 나처럼 일하던 애였던 것 같아. 멀리 있는 적을 갈고리로 당겨오니 주의하는 게 좋아. 나처럼 힘들게 사는 애니 편히 보내 주는 게 좋을 지도…<br><br><br>- 더치걸",
    "HPbase": 275,
    "HPlvl": 60,
    "ATKbase": 60,
    "ATKlvl": 8.5,
    "DEFbase": 100,
    "DEFlvl": 4.5,
    "AGI": 3.2,
    "CRT": 5,
    "HIT": 100,
    "DOD": 0,
    "resist": [
      15,
      15,
      15
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "폐기물 분쇄",
        "img": "MeleeAttack",
        "range": 1,
        "AP": 10,
        "description": "근접 공격으로 $(2) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 대상을 강타해 피해량이 증가하며 일정 확률로 2라운드 동안 행동 불가로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "폐기물 수거",
        "img": "Hang",
        "range": 4,
        "AP": 4,
        "description": "집게로 목표 대상을 포획해 $(0.5) 피해를 주며 2칸 앞으로 당깁니다. 적중 시, 2라운드 동안 행동력이 감소하며 일정 확률로 이동 불가 상태가 됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Centurion_N",
    "name": "센츄리온",
    "img": "Centurion",
    "type": "경장 공격기",
    "info": "작은 부대의 지휘관 역할을 하는 철충으로 보입니다. 주변 철충에게 일제 공격을 지시하는 정황이 포착되었군요. 부하들이 파괴되면 경계를 하는 것 같아요. 먼저 처리하는 게 좋을 것으로 보입니다.<br><br><br>- 37식 다이카",
    "HPbase": 2500,
    "HPlvl": 60,
    "ATKbase": 70,
    "ATKlvl": 8.5,
    "DEFbase": 25,
    "DEFlvl": 1.75,
    "AGI": 4,
    "CRT": 10,
    "HIT": 150,
    "DOD": 15,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "XM 유탄 발사기",
        "img": "GrenadeAttack_2",
        "range": 4,
        "AP": 6,
        "description": "유탄을 발사해 목표 행에 $(1) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "일제 공격 개시",
        "img": "Snipe",
        "range": 5,
        "AP": 4,
        "description": "2라운드 동안 대상을 목표로 지정해 $(0.25) 피해를 주고 표식을 남기며, 받는 피해가 증가하는 상태로 만듭니다. 보호 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "반격 태세",
        "img": "DefCounter",
        "range": 0,
        "AP": 0,
        "description": "아군 사망 시, 3라운드 동안 공격력과 치명타가 증가하며 반격합니다. 공격력과 치명타 증가 효과는 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickSI_TU3",
    "name": "나이트 칙 실더 개",
    "img": "NightChickSI",
    "type": "경장 보호기",
    "info": "일반 칙 실더보다 큰 방패 때문에 뒤의 대상들을 공격하기 위해서는 더 용맹한 정신이 필요하다. 나이트 칙 실더와 헷갈리지 않도록 지휘 콘솔을 반드시 확인해야 함.<br><br><br>- 마리 ",
    "HPbase": 350,
    "HPlvl": 75,
    "ATKbase": 60,
    "ATKlvl": 6.5,
    "DEFbase": 70,
    "DEFlvl": 3.5,
    "AGI": 3.4,
    "CRT": 5,
    "HIT": 150,
    "DOD": 25,
    "resist": [
      35,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "방패 강타",
        "img": "MeleeAttack",
        "range": 3,
        "AP": 4,
        "description": "방패로 강타해 $(1.1000000000000001) 피해를 줍니다. 대상이 회피 감소 상태면 일정 확률로 행동 불가로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칙 가드 올리기",
        "img": "ShieldWall",
        "range": 6,
        "AP": 3,
        "description": "3라운드 동안 같은 행의 뒤에 있는 아군을 보호합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "강화 방패",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "방패 장갑이 강화되어 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_HeavyScout_TU",
    "name": "헤비 스카우트",
    "img": "Scout",
    "type": "기동 공격기",
    "info": "스카우트와 비슷해요. 탄종은 좀 다른 것 같지만. 뭘 쏘길래 모두 피해냈어요. 별로 정확하진 않은 것 같군요. 주변 철충들과 대열을 갖추려고 하면 주의해 주세요.<br><br><br>- 페로 드림",
    "HPbase": 250,
    "HPlvl": 40,
    "ATKbase": 80,
    "ATKlvl": 9,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.25,
    "CRT": 15,
    "HIT": 120,
    "DOD": 40,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "대 장갑 기관포",
        "img": "AntiArmorShot",
        "range": 2,
        "AP": 6,
        "description": "대 장갑 기관포를 발사해 $(1.2) 피해를 줍니다. 대상의 방어력을 일정 비율 무시하며, 방어 감소 상태인 경우 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "공습 준비",
        "img": "SelfSpdBuff",
        "range": 6,
        "AP": 5,
        "description": "3라운드 동안 회피 / 치명타 / 행동력이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "공격 포메이션",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "대기 시, 같은 열에 인접한 공격기의 AP / 치명타 / 사거리 / 방어 관통을 증가시킵니다.",
        "areadata": [
          8,
          5,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Kidnapper_CH",
    "name": "트릭스터",
    "img": "Kidnapper_B0308",
    "type": "경장 공격기",
    "info": "요원 암살용 철충 연결체. 빠르고 민첩하다. 나와 우리 부대처럼 기동전이 가능한 부대가 맡는 게 좋을 것 같군. 포획이든 파괴든 쉽지 않다.<br><br><br>- 칸",
    "HPbase": 100,
    "HPlvl": 275,
    "ATKbase": 50,
    "ATKlvl": 12.5,
    "DEFbase": 26,
    "DEFlvl": 1.5,
    "AGI": 4.2,
    "CRT": 15,
    "HIT": 250,
    "DOD": 40,
    "resist": [
      15,
      15,
      15
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "클로 돌진",
        "img": "AssaultAttack",
        "range": 4,
        "AP": 4,
        "description": "클로 돌진으로 목표와 바로 뒤의 대상에게 $(1) 피해를 줍니다. 5라운드 동안 공격 대상의 방어력을 감소시킵니다. 최대 5번까지 중첩됩니다.",
        "areadata": [
          4,
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "광란의 학살",
        "img": "AssaultAttack",
        "range": 5,
        "AP": 4,
        "description": "순식간에 대상에게 접근해 $(1.6) 피해를 줍니다. 방어막 / 피해 감소 / 보호 효과를 무시하며, 대상의 HP가 낮을수록 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "살육 쾌감",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "도발 상태일 때 공격 적중 시, 5라운드 동안 공격력이 증가합니다. 해당 효과는 5번까지 중첩됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "위협 감지",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 위협을 감지해 해당 라운드 동안 회피가 증가하며 공격력이 감소합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "광란",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "적을 처치한 경우, 3라운드 동안 행동력과 치명타가 증가합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Scout_TU4",
    "name": "스카우트",
    "img": "Scout",
    "type": "기동 지원기",
    "info": "저 망할 날파리들! 엄청 빨라서 잘 맞지도 않고 뭐만 하려하면 방해해서 진짜 짜증나는 녀석들이야. 백발백중인 미호가 필요해!<br><br><br>- 스틸 드라코",
    "HPbase": 200,
    "HPlvl": 35,
    "ATKbase": 60,
    "ATKlvl": 5.5,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.5,
    "CRT": 10,
    "HIT": 135,
    "DOD": 75,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "충격 미사일",
        "img": "Missile",
        "range": 2,
        "AP": 6,
        "description": "충격 미사일을 발사해 $(1.2) 피해를 주며, 일정 확률로 대상의 AP를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "색적 보고",
        "img": "SelfSpdBuff",
        "range": 6,
        "AP": 8,
        "description": "목표 아군에게 적 발견 경보를 울려 대상의 AP와 사거리를 증가시킵니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickM_TU4",
    "name": "나이트 칙 런처",
    "img": "NightChickM",
    "type": "경장 공격기",
    "info": "흔히 볼 수 있는 미사일로 무장한 철충. 무조건 앞으로 돌격하는 모습이 브라우니와 비슷합니다.<br><br><br>- 보고자 레프리콘",
    "HPbase": 300,
    "HPlvl": 57.5,
    "ATKbase": 80,
    "ATKlvl": 7.5,
    "DEFbase": 54,
    "DEFlvl": 1.125,
    "AGI": 3.6,
    "CRT": 10,
    "HIT": 200,
    "DOD": 32.5,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "미사일 공격",
        "img": "Missile",
        "range": 2,
        "AP": 4,
        "description": "미사일을 발사해 $(1) 피해를 줍니다. 대상이 이동 불가 상태면 직격해 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "미사일 집중 공격",
        "img": "Missile",
        "range": 1,
        "AP": 6,
        "description": "미사일 근접 사격으로 $(1.2) 피해를 줍니다. 대상이 이동 불가 상태면 직격해 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "목표 록온",
        "img": "Snipe",
        "range": 0,
        "AP": 0,
        "description": "대기 시, 주변의 적을 록온해 2라운드 동안 사거리가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickSP_N",
    "name": "칙 스나이퍼",
    "img": "NightChickSP",
    "type": "경장 공격기",
    "info": "엄폐와 위장 능력이 좋음. 빠르게 한 방으로 처치하는 게 좋을 것 같음.<br><br><br>- 발키리",
    "HPbase": 180,
    "HPlvl": 37.5,
    "ATKbase": 70,
    "ATKlvl": 8,
    "DEFbase": 9,
    "DEFlvl": 0.45,
    "AGI": 4,
    "CRT": 12.5,
    "HIT": 235,
    "DOD": 25,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "정조준 저격",
        "img": "Snipe",
        "range": 4,
        "AP": 7,
        "description": "보호 효과를 무시하는 저격으로 $(1.5) 피해를 줍니다. 대상이 이동 불가 상태면 정밀 사격으로 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "위장",
        "img": "SelfSpdBuff",
        "range": 6,
        "AP": 4,
        "description": "위장 파장을 발산해 3라운드 동안 회피 / 치명타가 증가하며 받는 피해가 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "대응 저격",
        "img": "DefCounter",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 위장 상태인 경우 반격을 활성화합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickDE_TU2",
    "name": "나이트 칙 디텍터",
    "img": "NightChickDE",
    "type": "경장 지원기",
    "info": "그 아이는 별로 위험한 아인 아니거든? 근데 자꾸 우리를 방해하는 공격을 하니까 다른 애들이랑 있으면 주의해야 하거든? 맞으면 다른 철충한테 지원 요청하는 못된 아이니까 혼내줘야행! 누나 보고 있을께~!<br><br><br>- 예쁜 누나 포츈이 보고해용~!",
    "HPbase": 160,
    "HPlvl": 45,
    "ATKbase": 50,
    "ATKlvl": 4.75,
    "DEFbase": 25,
    "DEFlvl": 0.75,
    "AGI": 4.1,
    "CRT": 5,
    "HIT": 220,
    "DOD": 42.5,
    "resist": [
      15,
      15,
      15
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "약점 포착",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "목표를 공격 대상으로 지정해 $(1) 피해를 주고, 2라운드 동안 표식 상태로 만듭니다. 표식 상태인 대상인 추가 피해를 받으며, 회피가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "섬광 탄막",
        "img": "Beam",
        "range": 4,
        "AP": 7,
        "description": "지정한 위치에 섬광탄을 발사해 2라운드 동안 적중을 낮추고, 대상의 AP를 감소시킵니다.",
        "areadata": [
          4,
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "레이더 공유",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 일정 확률로 인접한 아군에게 경보를 울리며 전황을 공유합니다. 레이더를 공유 받은 경우, AP가 증가하며 2라운드 동안 사거리와 적중률이 증가합니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "레이더 재밍",
        "img": "TeamAtkDeBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 사망하는 경우, 주변 철충의 센서에 오류를 일으킵니다. 오류가 일어난 대상들은 적중이 크게 감소하며, 적중 강화 효과가 해제됩니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChick_TU4",
    "name": "나이트 칙",
    "img": "NightChick",
    "type": "경장 공격기",
    "info": "하아… 이 예쁜 애의 이름은 나이트 칙입니당. 예쁘지만 더 예쁜 폴른이를 잡아먹은 무서운 녀석들이에용. 쉬지않고 기관총을 난사하니 주의해 주세용~!<br><br><br>- 보고자 그렘린입니당! ",
    "HPbase": 275,
    "HPlvl": 52.5,
    "ATKbase": 65,
    "ATKlvl": 7,
    "DEFbase": 40.5,
    "DEFlvl": 0.7200000000000001,
    "AGI": 4,
    "CRT": 5,
    "HIT": 220,
    "DOD": 25,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "머신건 견제 사격",
        "img": "ARShot",
        "range": 3,
        "AP": 4,
        "description": "머신건 견제 사격으로 $(1) 피해를 줍니다. 일정 확률로 2라운드 동안 대상의 회피를 낮츱니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "머신건 연사",
        "img": "ARShot",
        "range": 2,
        "AP": 6,
        "description": "머신건을 조준 사격해 $(1.2) 피해를 줍니다. 대상이 회피 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "정조준",
        "img": "Snipe",
        "range": 0,
        "AP": 0,
        "description": "대기 시, 적을 조준해 2라운드 동안 적중과 사거리가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Wasp_N",
    "name": "와습",
    "img": "Wasp",
    "type": "기동 공격기",
    "info": "누가 이 자식한테 이 뿔침을 달아준 거야? 물론 나처럼 빠르진 않지만 나보다 느린 애들은 전부 조심하도록 해. 제법 빠른 속도로 돌격을 하니 말이야.<br><br><br>- 슬레이프니르",
    "HPbase": 200,
    "HPlvl": 32.5,
    "ATKbase": 70,
    "ATKlvl": 8.75,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.35,
    "CRT": 10,
    "HIT": 125,
    "DOD": 60,
    "resist": [
      50,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "화염 방사",
        "img": "WideFireShot",
        "range": 3,
        "AP": 6,
        "attr": "fire",
        "description": "화염 방사로 대상에게 $(0.75) 피해를 주고, 대상 뒤에 50% 감소한 피해를 줍니다. 일정 확률로 대상을 점화 상태로 만들어 3라운드 동안 지속 화염 피해를 줍니다.",
        "areadata": [
          0,
          0,
          0,
          0.5,
          1,
          0,
          0,
          0,
          0
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "자폭 돌격",
        "img": "SuiceideBomb",
        "range": 6,
        "AP": 10,
        "description": "공격 대상에게 자폭해 $(5) 피해를 줍니다. 대상의 방어력을 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "회피 기동",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 사망한 경우, 2라운드 동안 회피가 증가하며 행동력과 적중이 감소합니다. 해당 효과는 최대 3번까지 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Harvester_TU4",
    "name": "하베스터",
    "img": "Harvester",
    "type": "중장 지원기",
    "info": "얘는 원래는 나처럼 일하던 애였던 것 같아. 멀리 있는 적을 갈고리로 당겨오니 주의하는 게 좋아. 나처럼 힘들게 사는 애니 편히 보내 주는 게 좋을 지도…<br><br><br>- 더치걸",
    "HPbase": 380,
    "HPlvl": 80,
    "ATKbase": 75,
    "ATKlvl": 9.5,
    "DEFbase": 150,
    "DEFlvl": 5.5,
    "AGI": 3.25,
    "CRT": 5,
    "HIT": 125,
    "DOD": 0,
    "resist": [
      15,
      15,
      15
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "폐기물 분쇄",
        "img": "MeleeAttack",
        "range": 1,
        "AP": 10,
        "description": "근접 공격으로 $(2) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 대상을 강타해 피해량이 증가하며 일정 확률로 2라운드 동안 행동 불가로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "폐기물 수거",
        "img": "Hang",
        "range": 4,
        "AP": 4,
        "description": "집게로 목표 대상을 포획해 $(0.5) 피해를 주며 2칸 앞으로 당깁니다. 적중 시, 2라운드 동안 행동력이 감소하며 일정 확률로 이동 불가 상태가 됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickC_TU4",
    "name": "나이트 칙 캐논",
    "img": "NightChickC",
    "type": "중장 공격기",
    "info": "박격포로 무장한 나이트 칙인데... 별 거 아닌 폭죽이나 쏴대는 벌레야. 아, 약한 애들한텐 무서우려나?<br><br><br>- 메이 보고함",
    "HPbase": 247.5,
    "HPlvl": 60.75,
    "ATKbase": 90,
    "ATKlvl": 10.5,
    "DEFbase": 67.5,
    "DEFlvl": 3.15,
    "AGI": 3.3,
    "CRT": 5,
    "HIT": 135,
    "DOD": 0,
    "resist": [
      25,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "플레임 버너",
        "img": "WideFireShot",
        "range": 2,
        "AP": 4,
        "attr": "fire",
        "description": "화염 방사로 $(0.8) 화염 속성 피해를 주며, 일정 확률로 3라운드 동안 지속 화염 피해를 입는 점화 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "곡사포",
        "img": "CannonShotDelay",
        "range": 5,
        "AP": 8,
        "description": "1라운드 후에 착탄하는 곡사포를 발사해 목표 범위에 $(1.75)의 피해를 줍니다. 대상이 이동 불가 상태면 피해량이 증가합니다.",
        "areadata": [
          0,
          0.5,
          0,
          0.5,
          1,
          0.5,
          0,
          0.5,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "연료 탱크 유폭",
        "img": "SuiceideBomb",
        "range": 0,
        "AP": 0,
        "attr": "fire",
        "description": "사망 시, 연료 탱크가 유폭해 주변에 괴멸적인 피해를 주고 피해 감소 효과를 해제합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_BigChick_TU3",
    "name": "빅 칙",
    "img": "BigChick",
    "type": "중장 공격기",
    "info": "엄청 큰 나이트 칙이지 말임다! 하는 짓은 나이트 칙이랑 똑같은데 갑빠도 두껍고 총도 더 쎄게 쏘지 말임다. 움직이기 전에 얼른 죽여야 함다!<br><br><br>- 보고자 브라우니지 말임다.",
    "HPbase": 1000,
    "HPlvl": 90,
    "ATKbase": 65,
    "ATKlvl": 11,
    "DEFbase": 100,
    "DEFlvl": 5,
    "AGI": 3.3,
    "CRT": 5,
    "HIT": 130,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "중 기관총 사격",
        "img": "MGShot",
        "range": 4,
        "AP": 5,
        "description": "중 기관총으로 $(1.2) 피해를 줍니다. 대상이 방어력 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "영거리 중 기관총",
        "img": "MGShot",
        "range": 1,
        "AP": 8,
        "description": "중 기관총 근접 사격으로 $(2) 피해를 줍니다. 대상의 방어력을 일정 비율 무시하며, 방어력 감소 상태인 경우 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Zapper_TU4",
    "name": "재퍼",
    "img": "Zapper",
    "type": "경장 지원기",
    "info": "호전성이 낮은 개체예요. 건드리지만 않으면 공격하지 않으니 주의해 주세요. 고압 전류 공격을 하니까요. 설마 제가 대신 맞아서 찌릿찌릿에 눈 뜨는 걸 바라는 건 아니겠죠?<br><br><br>- 보고자 블랙 리리스",
    "HPbase": 250,
    "HPlvl": 45,
    "ATKbase": 60,
    "ATKlvl": 6,
    "DEFbase": 40,
    "DEFlvl": 1.5,
    "AGI": 4,
    "CRT": 5,
    "HIT": 165,
    "DOD": 17.5,
    "resist": [
      0,
      0,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "전격 방사",
        "img": "Shock",
        "range": 3,
        "AP": 4,
        "attr": "electric",
        "description": "전격을 방사해 $(0.8) 전기 속성 피해를 주고 일정 확률로 대상의 회피와 AP를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "고압 전류",
        "img": "Shock",
        "range": 1,
        "AP": 8,
        "attr": "electric",
        "description": "고압 전류로 $(1.2) 전기 속성 피해를 주고, 일정 확률로 대상을 행동 불능 상태로 만들고 회피를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "경계 모드",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "적과 인접하거나 공격당하기 전까지 경계 상태로 대기합니다. 공격당하기 전까지 받는 피해와 행동력이 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Legion_TU4",
    "name": "레기온",
    "img": "Legion",
    "type": "경장 지원기",
    "info": "공중의 적만 집요하게 노리니 공중 부대 운용 시 주의해! 구리게 보이는 점착제를 떼느라 이틀이나 고생했어. 그거 묻으면 진짜 아싸처럼 보이니 주의하라고!<br><br><br>- 실피드",
    "HPbase": 270,
    "HPlvl": 40.5,
    "ATKbase": 70,
    "ATKlvl": 6,
    "DEFbase": 22.5,
    "DEFlvl": 0.765,
    "AGI": 4.05,
    "CRT": 5,
    "HIT": 195,
    "DOD": 27.5,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "GAU 미니건",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "미니건을 발사해 $(1) 피해를 줍니다. 대상이 기동형인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "점착탄",
        "img": "SlowShot",
        "range": 4,
        "AP": 5,
        "description": "점착탄을 던져 $(0.33) 피해를 줍니다. 적중한 대상을 2라운드 동안 이동 불가 상태로 만들고, 일정 확률로 회피 / 행동력을 감소 시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "경계 태세",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 처치되면  경계 태세로 전환해, 양 옆의 아군의 행동력을 감소시키며 대상의 공격을 지원합니다.",
        "areadata": [
          8,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickCM_TU2",
    "name": "케미컬 칙",
    "img": "NightChickCM",
    "type": "경장 지원기",
    "info": "냄새 나고 이상한 액체를 뿌려. 더럽고 음란해. 그 이상한 액을 뒤집어 쓴 애들은 한 동안 근처에 못 오게 했어. 특히 스틸 드라코는…<br><br><br>- 보고자 미호",
    "HPbase": 300,
    "HPlvl": 60,
    "ATKbase": 65,
    "ATKlvl": 6.75,
    "DEFbase": 25,
    "DEFlvl": 0.75,
    "AGI": 4.1,
    "CRT": 10,
    "HIT": 195,
    "DOD": 52.5,
    "resist": [
      50,
      50,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "화학탄 발사",
        "img": "Missile",
        "range": 4,
        "AP": 4,
        "description": "화학 탄두를 발사해 $(0.8) 피해를 줍니다. 3라운드 동안 대상을 부식 상태로 만듭니다. 부식 상태가 된 대상은 방어력 / 행동력이 감소하며 매 라운드 지속 피해를 입습니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "화학탄 난사",
        "img": "MultiMissile",
        "range": 2,
        "AP": 6,
        "description": "화학 탄두를 난사해 지정 범위에 $(0.5) 피해를 줍니다. 3라운드 동안 대상을 부식 상태로 만듭니다. 부식 상태가 된 대상은 방어력 / 행동력이 감소하며 매 라운드 지속 피해를 입습니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "적응 시스템",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 자신과 인접한 아군에게 걸린 방해 효과를 해제합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Scarab_N",
    "name": "스캐럽",
    "img": "Scarab",
    "type": "기동 보호기",
    "info": "이상한 구조인데 잘도 나는 거 있지? 나 저거 꼭 분해하고 싶으니까 잡히면 나한테 보내 줘야 해! 겁쟁이라 무서우면 방어를 하니까 빨리 해치우는 게 좋아.<br><br><br>- 보고자 닥터",
    "HPbase": 315,
    "HPlvl": 47.25,
    "ATKbase": 75,
    "ATKlvl": 6.5,
    "DEFbase": 85,
    "DEFlvl": 1.5,
    "AGI": 4.5,
    "CRT": 10,
    "HIT": 120,
    "DOD": 80,
    "resist": [
      25,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "실드 돌격",
        "img": "AssaultAttack",
        "range": 3,
        "AP": 6,
        "description": "대상에게 돌격해 $(1.5) 피해를 주고, 대상의 행 보호 효과와 피해 감소 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "보호 기동",
        "img": "SelfDefBuff",
        "range": 6,
        "AP": 4,
        "description": "3라운드 동안 지정한 아군을 보호하고 행동력을 올려줍니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "방어 기동",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "HP가 50% 이하가 되면 방어 기동을 실행해, 받는 피해가 감소하고 방어력이 증가하며 회피가 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickDE_TU3",
    "name": "나이트 칙 디텍터",
    "img": "NightChickDE",
    "type": "경장 지원기",
    "info": "그 아이는 별로 위험한 아인 아니거든? 근데 자꾸 우리를 방해하는 공격을 하니까 다른 애들이랑 있으면 주의해야 하거든? 맞으면 다른 철충한테 지원 요청하는 못된 아이니까 혼내줘야행! 누나 보고 있을께~!<br><br><br>- 예쁜 누나 포츈이 보고해용~!",
    "HPbase": 275,
    "HPlvl": 65,
    "ATKbase": 60,
    "ATKlvl": 5.5,
    "DEFbase": 35,
    "DEFlvl": 1,
    "AGI": 4.15,
    "CRT": 5,
    "HIT": 260,
    "DOD": 55,
    "resist": [
      20,
      20,
      20
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "약점 포착",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "목표를 공격 대상으로 지정해 $(1) 피해를 주고, 2라운드 동안 표식 상태로 만듭니다. 표식 상태인 대상인 추가 피해를 받으며, 회피가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "섬광 탄막",
        "img": "Beam",
        "range": 4,
        "AP": 7,
        "description": "지정한 위치에 섬광탄을 발사해 2라운드 동안 적중을 낮추고, 대상의 AP를 감소시킵니다.",
        "areadata": [
          4,
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "레이더 공유",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 일정 확률로 인접한 아군에게 경보를 울리며 전황을 공유합니다. 레이더를 공유 받은 경우, AP가 증가하며 2라운드 동안 사거리와 적중률이 증가합니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "레이더 재밍",
        "img": "TeamAtkDeBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 사망하는 경우, 주변 철충의 센서에 오류를 일으킵니다. 오류가 일어난 대상들은 적중이 크게 감소하며, 적중 강화 효과가 해제됩니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Raider_B04",
    "name": "레이더",
    "img": "Raider_B04",
    "type": "기동 지원기",
    "info": "고속 교란용 연결체. 지휘 능력이 제법 뛰어나 대량의 철충 부대와 함께 다니기 때문에 주의하는 게 좋아. 보기보다 겁쟁이라 위협을 느끼면 닥치는대로 전격탄을 난사하니 대비하는 작전을 세우면 그럭저럭 상대할 만 할 거야.<br><br><br>- 레오나",
    "HPbase": 13385,
    "HPlvl": 135,
    "ATKbase": 10,
    "ATKlvl": 10,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.3,
    "CRT": 25,
    "HIT": 160,
    "DOD": 80,
    "resist": [
      -25,
      0,
      75
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "교란 파동",
        "img": "TeamAtkDeBuff",
        "range": 4,
        "AP": 8,
        "description": "목표 범위에 보호 효과를 무시하는 교란 파동을 발사해 $(0.25) 피해를 주고, 3라운드 동안 대상의 사거리 / 적중 / 치명타를 감소시킵니다. 일정 확률로 대상에게 걸려있는 강화 효과를 해제합니다.",
        "areadata": [
          7,
          4,
          5,
          1
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "반응 폭탄 투하",
        "img": "AirStrike",
        "range": 4,
        "AP": 6,
        "description": "목표 지점에 폭탄을 투하해 보호 효과를 무시하고 $(1.2) 피해를 줍니다. 목표 지점 주변은 피해가 50% 감소하며, 치명타 적중 시 피해량이 증가합니다.",
        "areadata": [
          0,
          0.5,
          0,
          0.5,
          1,
          0.5,
          0,
          0.5,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "교신 프로토콜",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "경계 상태로 라운드 개시 시, 인접한 철충들의 적중 감소 효과를 해제하고 적중 / 회피 / 치명타를 증가시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "명령 프로토콜",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "자신의 HP가 50% 이하 상태에서 피격된 경우, 주변 철충들에게 요격 명령을 내려 AP를 증가시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "경계",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "통솔하는 철충이 처치된 경우, 경계 상태가 되어 2라운드 동안 행동력과 회피가 증가합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Scout_TU5",
    "name": "스카우트",
    "img": "Scout",
    "type": "기동 지원기",
    "info": "저 망할 날파리들! 엄청 빨라서 잘 맞지도 않고 뭐만 하려하면 방해해서 진짜 짜증나는 녀석들이야. 백발백중인 미호가 필요해!<br><br><br>- 스틸 드라코",
    "HPbase": 250,
    "HPlvl": 42.5,
    "ATKbase": 70,
    "ATKlvl": 6.5,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.5,
    "CRT": 10,
    "HIT": 170,
    "DOD": 90,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "충격 미사일",
        "img": "Missile",
        "range": 2,
        "AP": 6,
        "description": "충격 미사일을 발사해 $(1.2) 피해를 주며, 일정 확률로 대상의 AP를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "색적 보고",
        "img": "SelfSpdBuff",
        "range": 6,
        "AP": 8,
        "description": "목표 아군에게 적 발견 경보를 울려 대상의 AP와 사거리를 증가시킵니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Raider_CH",
    "name": "광폭화 레이더",
    "img": "Raider_B04",
    "type": "기동 지원기",
    "info": "고속 교란용 연결체. 지휘 능력이 제법 뛰어나 대량의 철충 부대와 함께 다니기 때문에 주의하는 게 좋아. 보기보다 겁쟁이라 위협을 느끼면 닥치는대로 전격탄을 난사하니 대비하는 작전을 세우면 그럭저럭 상대할 만 할 거야.<br><br><br>- 레오나",
    "HPbase": 8385,
    "HPlvl": 135,
    "ATKbase": 60,
    "ATKlvl": 10,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.55,
    "CRT": 15,
    "HIT": 180,
    "DOD": 120,
    "resist": [
      -25,
      0,
      75
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "플라즈마 광탄",
        "img": "Shock",
        "range": 5,
        "AP": 7,
        "attr": "electric",
        "description": "전격구를 발사해 $(1.5) 전기 속성 피해를 줍니다. 대상이 감전 상태면 회피를 감소시키며, 일정 확률로 행동 불능 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "광탄 난사",
        "img": "WideLightning",
        "range": 5,
        "AP": 5,
        "attr": "electric",
        "description": "방전 공격으로 보호 효과를 무시하고 $(0.5) 전기 속성 피해를 줍니다. 일정 확률로 대상을 감전시켜 3라운드 동안 행동력과 회피를 낮춥니다.",
        "areadata": [
          7,
          4,
          5,
          1
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "교신 프로토콜",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "경계 상태로 라운드 개시 시, 인접한 철충들의 적중 감소 효과를 해제하고 적중 / 회피 / 치명타를 증가시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "명령 프로토콜",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "자신의 HP가 50% 이하 상태에서 피격된 경우, 주변 철충들에게 요격 명령을 내려 AP를 증가시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "경계",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "통솔하는 철충이 처치된 경우, 경계 상태가 되어 2라운드 동안 행동력과 회피가 증가합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickMEX_TU",
    "name": "강화형 칙 런쳐",
    "img": "NightChickM",
    "type": "경장 공격기",
    "info": "흔히 볼 수 있는 미사일로 무장한 철충. 무조건 앞으로 돌격하는 모습이 브라우니와 비슷합니다.<br><br><br>- 보고자 레프리콘",
    "HPbase": 205,
    "HPlvl": 42.5,
    "ATKbase": 70,
    "ATKlvl": 7.5,
    "DEFbase": 25,
    "DEFlvl": 0.75,
    "AGI": 3.6,
    "CRT": 12.5,
    "HIT": 145,
    "DOD": 30,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "강화 미사일 공격",
        "img": "Missile",
        "range": 2,
        "AP": 4,
        "description": "미사일을 발사해 $(1.2) 피해를 줍니다. 대상이 이동 불가 상태면 직격으로 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "강화 미사일 난사",
        "img": "Missile",
        "range": 1,
        "AP": 6,
        "description": "미사일 근접 사격으로 $(1.6) 피해를 줍니다. 대상이 이동 불가 상태면 직격으로 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "기동 사격",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "이동 시, 4라운드 동안 사거리 / 공격력 / 행동력이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickEX_TU",
    "name": "강화형 나이트 칙",
    "img": "NightChick",
    "type": "경장 공격기",
    "info": "하아… 이 예쁜 애의 이름은 나이트 칙입니당. 예쁘지만 더 예쁜 폴른이를 잡아먹은 무서운 녀석들이에용. 쉬지않고 기관총을 난사하니 주의해 주세용~!<br><br><br>- 보고자 그렘린입니당! ",
    "HPbase": 200,
    "HPlvl": 37.5,
    "ATKbase": 60,
    "ATKlvl": 6.5,
    "DEFbase": 15,
    "DEFlvl": 0.25,
    "AGI": 4.05,
    "CRT": 10,
    "HIT": 160,
    "DOD": 20,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "강화 머신건 사격",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "머신건 사격으로 $(1) 피해를 줍니다. 2라운드 동안 대상의 회피를 낮츱니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "강화 머신건 연사",
        "img": "ARShot",
        "range": 1,
        "AP": 6,
        "description": "머신건을 조준 사격해 $(1.4) 피해를 줍니다. 대상이 회피 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 정밀 조준",
        "img": "Snipe",
        "range": 0,
        "AP": 0,
        "description": "대기 시, 3라운드 동안 적중 / 사거리 / 치명타가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickMEX_TU2",
    "name": "강화형 칙 런쳐",
    "img": "NightChickM",
    "type": "경장 공격기",
    "info": "흔히 볼 수 있는 미사일로 무장한 철충. 무조건 앞으로 돌격하는 모습이 브라우니와 비슷합니다.<br><br><br>- 보고자 레프리콘",
    "HPbase": 260,
    "HPlvl": 55,
    "ATKbase": 80,
    "ATKlvl": 8.5,
    "DEFbase": 35,
    "DEFlvl": 1.25,
    "AGI": 3.7,
    "CRT": 12.5,
    "HIT": 185,
    "DOD": 42.5,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "강화 미사일 공격",
        "img": "Missile",
        "range": 2,
        "AP": 4,
        "description": "미사일을 발사해 $(1.2) 피해를 줍니다. 대상이 이동 불가 상태면 직격으로 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "강화 미사일 난사",
        "img": "Missile",
        "range": 1,
        "AP": 6,
        "description": "미사일 근접 사격으로 $(1.6) 피해를 줍니다. 대상이 이동 불가 상태면 직격으로 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "기동 사격",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "이동 시, 4라운드 동안 사거리 / 공격력 / 행동력이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickEX_TU2",
    "name": "강화형 나이트 칙",
    "img": "NightChick",
    "type": "경장 공격기",
    "info": "하아… 이 예쁜 애의 이름은 나이트 칙입니당. 예쁘지만 더 예쁜 폴른이를 잡아먹은 무서운 녀석들이에용. 쉬지않고 기관총을 난사하니 주의해 주세용~!<br><br><br>- 보고자 그렘린입니당! ",
    "HPbase": 240,
    "HPlvl": 47.5,
    "ATKbase": 65,
    "ATKlvl": 7.5,
    "DEFbase": 20,
    "DEFlvl": 0.5,
    "AGI": 4.05,
    "CRT": 10,
    "HIT": 200,
    "DOD": 32.5,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "강화 머신건 사격",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "머신건 사격으로 $(1) 피해를 줍니다. 2라운드 동안 대상의 회피를 낮츱니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "강화 머신건 연사",
        "img": "ARShot",
        "range": 1,
        "AP": 6,
        "description": "머신건을 조준 사격해 $(1.4) 피해를 줍니다. 대상이 회피 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 정밀 조준",
        "img": "Snipe",
        "range": 0,
        "AP": 0,
        "description": "대기 시, 3라운드 동안 적중 / 사거리 / 치명타가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ScoutEX_TU",
    "name": "강습형 스카우트",
    "img": "Scout",
    "type": "기동 지원기",
    "info": "저 망할 날파리들! 엄청 빨라서 잘 맞지도 않고 뭐만 하려하면 방해해서 진짜 짜증나는 녀석들이야. 백발백중인 미호가 필요해!<br><br><br>- 스틸 드라코",
    "HPbase": 150,
    "HPlvl": 32.5,
    "ATKbase": 70,
    "ATKlvl": 6.25,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.55,
    "CRT": 10,
    "HIT": 105,
    "DOD": 75,
    "resist": [
      15,
      15,
      15
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "강화 충격탄",
        "img": "Missile",
        "range": 2,
        "AP": 6,
        "description": "충격 미사일을 발사해 $(1.2) 피해를 주고 대상의 AP를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "색적 경보",
        "img": "Scan",
        "range": 6,
        "AP": 6,
        "description": "목표 아군에게 적 발견 경보를 울려 대상의 AP와 사거리를 증가시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "강습 대열",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "이동 시, 3라운드 동안 인접한 공격기의 공격을 지원하며 AP를 증가시킵니다.",
        "areadata": [
          8,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickCM_TU",
    "name": "케미컬 칙",
    "img": "NightChickCM",
    "type": "경장 지원기",
    "info": "냄새 나고 이상한 액체를 뿌려. 더럽고 음란해. 그 이상한 액을 뒤집어 쓴 애들은 한 동안 근처에 못 오게 했어. 특히 스틸 드라코는…<br><br><br>- 보고자 미호",
    "HPbase": 250,
    "HPlvl": 45,
    "ATKbase": 50,
    "ATKlvl": 6,
    "DEFbase": 20,
    "DEFlvl": 0.5,
    "AGI": 4.1,
    "CRT": 10,
    "HIT": 160,
    "DOD": 40,
    "resist": [
      50,
      50,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "화학탄 발사",
        "img": "Missile",
        "range": 4,
        "AP": 4,
        "description": "화학 탄두를 발사해 $(0.8) 피해를 줍니다. 3라운드 동안 대상을 부식 상태로 만듭니다. 부식 상태가 된 대상은 방어력 / 행동력이 감소하며 매 라운드 지속 피해를 입습니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "화학탄 난사",
        "img": "MultiMissile",
        "range": 2,
        "AP": 6,
        "description": "화학 탄두를 난사해 지정 범위에 $(0.5) 피해를 줍니다. 3라운드 동안 대상을 부식 상태로 만듭니다. 부식 상태가 된 대상은 방어력 / 행동력이 감소하며 매 라운드 지속 피해를 입습니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "적응 시스템",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 자신과 인접한 아군에게 걸린 방해 효과를 해제합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_HarvesterEX_TU",
    "name": "아머드 하베스터",
    "img": "Harvester",
    "type": "중장 지원기",
    "info": "얘는 원래는 나처럼 일하던 애였던 것 같아. 멀리 있는 적을 갈고리로 당겨오니 주의하는 게 좋아. 나처럼 힘들게 사는 애니 편히 보내 주는 게 좋을 지도…<br><br><br>- 더치걸",
    "HPbase": 500,
    "HPlvl": 72.5,
    "ATKbase": 70,
    "ATKlvl": 9,
    "DEFbase": 100,
    "DEFlvl": 5,
    "AGI": 3.25,
    "CRT": 5,
    "HIT": 100,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "폐기물 파쇄",
        "img": "MeleeAttack",
        "range": 1,
        "AP": 9,
        "description": "근접 공격으로 $(2.6) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 대상을 강타해 피해량이 증가하며 2라운드 동안 행동 불가로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "폐기물 수집",
        "img": "Hang",
        "range": 4,
        "AP": 4,
        "description": "집게로 목표 대상을 포획해 $(0.5) 피해를 주며 2칸 앞으로 당깁니다. 적중 시, 2라운드 동안 행동력이 감소하며 이동 불가 상태가 됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "초합금 플레이팅",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "견고한 장갑으로 인해, 일정 위력 이하의 공격은 통하지 않습니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickCEX_TU",
    "name": "개량형 칙 캐논",
    "img": "NightChickC",
    "type": "중장 공격기",
    "info": "박격포로 무장한 나이트 칙인데... 별 거 아닌 폭죽이나 쏴대는 벌레야. 아, 약한 애들한텐 무서우려나?<br><br><br>- 메이 보고함",
    "HPbase": 250,
    "HPlvl": 55,
    "ATKbase": 60,
    "ATKlvl": 10,
    "DEFbase": 50,
    "DEFlvl": 2,
    "AGI": 3.3,
    "CRT": 10,
    "HIT": 105,
    "DOD": 0,
    "resist": [
      50,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "네이팜 분사",
        "img": "WideFireShot",
        "range": 2,
        "AP": 4,
        "attr": "fire",
        "description": "화염 방사로 $(1.1000000000000001) 화염 속성 피해를 주며, 3라운드 동안 지속 화염 피해를 입는 점화 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "강화 곡사 포격",
        "img": "CannonShotDelay",
        "range": 6,
        "AP": 7,
        "description": "1라운드 후에 착탄하는 곡사포를 발사해 목표 범위에 $(2)의 피해를 줍니다. 대상이 이동 불가 상태면 피해량이 증가합니다.",
        "areadata": [
          0,
          0.75,
          0,
          0.75,
          1,
          0.75,
          0,
          0.75,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "연료 탱크 파괴",
        "img": "SuiceideBomb",
        "range": 0,
        "AP": 0,
        "attr": "fire",
        "description": "사망 시, 연료 탱크가 유폭해 주변에 괴멸적인 피해를 주며 피해 감소 효과를 해제합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "조준 보정",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 3라운드 동안 적중이 증가합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_FABigChickEX_TU",
    "name": "FA 빅 칙 II",
    "img": "FABigChick",
    "type": "중장 공격기",
    "info": "빅 칙과는 달라! 빅 칙과는! 뭐로 만든지는 몰라도 장갑이 차원이 다르니 나 같은 대 장갑 요원이 없으면 꽤나 곤란할걸?<br><br><br> - 불가사리 보고함",
    "HPbase": 1500,
    "HPlvl": 82.5,
    "ATKbase": 85,
    "ATKlvl": 10.5,
    "DEFbase": 60,
    "DEFlvl": 3.5,
    "AGI": 3.3,
    "CRT": 10,
    "HIT": 95,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "강화 중 기관포",
        "img": "MGShot",
        "range": 4,
        "AP": 4,
        "description": "중 기관포로 $(1.6) 피해를 줍니다. 대상의 방어력을 일정 비율 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "듀얼 칙 캐논포",
        "img": "CannonShotWide",
        "range": 2,
        "AP": 6,
        "description": "캐논포를 연사해 목표 열에 $(1.35) 피해를 줍니다. 대상의 피해 감소 효과를 해제합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "빅 칙 반응 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "반응 장갑으로 인해 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "작열탄두",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "작열탄두를 장비해 경장형에게 주는 피해가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_BigChickM_TU",
    "name": "빅 칙 런쳐",
    "img": "BigChickM",
    "type": "중장 공격기",
    "info": "엄청나게 피하기 힘든 미사일을 마구 쏴댐. 멀리서 처리하는 게 제일 좋을 것 같아.<br><br><br>- 핀토가 정찰 중 보고",
    "HPbase": 1250,
    "HPlvl": 77.5,
    "ATKbase": 75,
    "ATKlvl": 9,
    "DEFbase": 45,
    "DEFlvl": 2.5,
    "AGI": 3.25,
    "CRT": 10,
    "HIT": 110,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "고폭 미사일",
        "img": "CruiseMissile",
        "range": 5,
        "AP": 7,
        "description": "1라운드 후 착탄하며 $(3) 피해를 주는 미사일을 발사합니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "마이크로 미사일",
        "img": "MultiMissile",
        "range": 1,
        "AP": 3,
        "description": "지정 범위에 $(0.5) 피해를 주는 마이크로 미사일을 발사합니다. 보호 효과를 무시하며 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다. 200%의 적중 보정이 적용됩니다.",
        "areadata": [
          7,
          4,
          5,
          1
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "유도 미사일",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 대상이 기동형인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_BigChickEX_TU",
    "name": "시작형 빅 칙",
    "img": "BigChick",
    "type": "중장 공격기",
    "info": "엄청 큰 나이트 칙이지 말임다! 하는 짓은 나이트 칙이랑 똑같은데 갑빠도 두껍고 총도 더 쎄게 쏘지 말임다. 움직이기 전에 얼른 죽여야 함다!<br><br><br>- 보고자 브라우니지 말임다.",
    "HPbase": 1000,
    "HPlvl": 80,
    "ATKbase": 80,
    "ATKlvl": 10,
    "DEFbase": 50,
    "DEFlvl": 3,
    "AGI": 3.2,
    "CRT": 10,
    "HIT": 100,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "칙 중 기관포 발사",
        "img": "MGShot",
        "range": 4,
        "AP": 5,
        "description": "중 기관총으로 $(1.5) 피해를 줍니다. 대상이 방어력 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "영거리 중 기관포",
        "img": "MGShot",
        "range": 1,
        "AP": 8,
        "description": "중 기관총 근접 사격으로 방어력을 일정 비율 무시하고 $(2.4) 피해를 줍니다. 대상이 방어력 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "근접 조준 사격",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "적 진영에 가까울수록, 라운드 개시 시 적중이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ScoutEX_TU2",
    "name": "강습형 스카우트",
    "img": "Scout",
    "type": "기동 지원기",
    "info": "저 망할 날파리들! 엄청 빨라서 잘 맞지도 않고 뭐만 하려하면 방해해서 진짜 짜증나는 녀석들이야. 백발백중인 미호가 필요해!<br><br><br>- 스틸 드라코",
    "HPbase": 200,
    "HPlvl": 45,
    "ATKbase": 80,
    "ATKlvl": 7,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.55,
    "CRT": 10,
    "HIT": 130,
    "DOD": 90,
    "resist": [
      15,
      15,
      15
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "강화 충격탄",
        "img": "Missile",
        "range": 2,
        "AP": 6,
        "description": "충격 미사일을 발사해 $(1.2) 피해를 주고 대상의 AP를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "색적 경보",
        "img": "Scan",
        "range": 6,
        "AP": 6,
        "description": "목표 아군에게 적 발견 경보를 울려 대상의 AP와 사거리를 증가시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "강습 대열",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "이동 시, 3라운드 동안 인접한 공격기의 공격을 지원하며 AP를 증가시킵니다.",
        "areadata": [
          8,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Juggernaut_TU",
    "name": "저거너트",
    "img": "Juggernaut",
    "type": "중장 보호기",
    "info": "성격이 나빠 보이는 철충인 거예요. 공격을 시작하면 끝까지 공격하거든요. 그래서 공중 부대로 유인을 하는 게 좋을 것 같아요. 그 덩치로 다른 철충들을 보호하지 못하게요.<br><br><br>- 블랙 하운드",
    "HPbase": 1750,
    "HPlvl": 85,
    "ATKbase": 70,
    "ATKlvl": 8,
    "DEFbase": 100,
    "DEFlvl": 7,
    "AGI": 3.2,
    "CRT": 10,
    "HIT": 105,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "스턴 펀치",
        "img": "MeleeAttack",
        "range": 1,
        "AP": 10,
        "description": "대상을 강타해 $(2.4) 피해를 주고, 일정 확률로 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "몸통 박치기",
        "img": "AssaultAttack",
        "range": 2,
        "AP": 9,
        "description": "대상에게 돌진해 $(1.6) 피해를 주고, 뒤로 1칸 밀어냅니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "방벽 전환",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 사망한 경우, 방어 태세로 전환해 2라운드 동안 행 보호와 열 보호 효과를 활성화합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "방어 프로토콜",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 일정 확률로 방어력이 대폭 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickMEX_TU3",
    "name": "강화형 칙 런쳐",
    "img": "NightChickM",
    "type": "경장 공격기",
    "info": "흔히 볼 수 있는 미사일로 무장한 철충. 무조건 앞으로 돌격하는 모습이 브라우니와 비슷합니다.<br><br><br>- 보고자 레프리콘",
    "HPbase": 320,
    "HPlvl": 70,
    "ATKbase": 90,
    "ATKlvl": 9.5,
    "DEFbase": 45,
    "DEFlvl": 1.75,
    "AGI": 3.8,
    "CRT": 15,
    "HIT": 225,
    "DOD": 55,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "강화 미사일 공격",
        "img": "Missile",
        "range": 2,
        "AP": 4,
        "description": "미사일을 발사해 $(1.2) 피해를 줍니다. 대상이 이동 불가 상태면 직격으로 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "강화 미사일 난사",
        "img": "Missile",
        "range": 1,
        "AP": 6,
        "description": "미사일 근접 사격으로 $(1.6) 피해를 줍니다. 대상이 이동 불가 상태면 직격으로 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "기동 사격",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "이동 시, 4라운드 동안 사거리 / 공격력 / 행동력이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_LegionEX_TU",
    "name": "정예 레기온",
    "img": "Legion",
    "type": "경장 지원기",
    "info": "공중의 적만 집요하게 노리니 공중 부대 운용 시 주의해! 구리게 보이는 점착제를 떼느라 이틀이나 고생했어. 그거 묻으면 진짜 아싸처럼 보이니 주의하라고!<br><br><br>- 실피드",
    "HPbase": 300,
    "HPlvl": 52.5,
    "ATKbase": 65,
    "ATKlvl": 7,
    "DEFbase": 30,
    "DEFlvl": 0.75,
    "AGI": 4.1,
    "CRT": 10,
    "HIT": 200,
    "DOD": 30,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "GAU 대공 미니건",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "미니건을 발사해 $(1) 피해를 줍니다. 대상이 기동형인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "강화 점착탄",
        "img": "SlowShot",
        "range": 4,
        "AP": 5,
        "description": "점착탄을 던져 $(0.4) 피해를 주고, 일정 확률로 적중한 대상을 3라운드 동안 이동 불가 / 회피 / 행동력 감소 상태로 만듭니다. 일정 확률로 대상의 회피 / 행동력 강화 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "경계 경보",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 처치되면 경계 태세로 전환해 양 옆의 아군의 행동력을 올려주며 대상의 공격을 지원합니다.",
        "areadata": [
          8,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickEX_TU3",
    "name": "강화형 나이트 칙",
    "img": "NightChick",
    "type": "경장 공격기",
    "info": "하아… 이 예쁜 애의 이름은 나이트 칙입니당. 예쁘지만 더 예쁜 폴른이를 잡아먹은 무서운 녀석들이에용. 쉬지않고 기관총을 난사하니 주의해 주세용~!<br><br><br>- 보고자 그렘린입니당! ",
    "HPbase": 300,
    "HPlvl": 67.5,
    "ATKbase": 70,
    "ATKlvl": 8,
    "DEFbase": 25,
    "DEFlvl": 0.75,
    "AGI": 4.1,
    "CRT": 10,
    "HIT": 240,
    "DOD": 45,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "강화 머신건 사격",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "머신건 사격으로 $(1) 피해를 줍니다. 2라운드 동안 대상의 회피를 낮츱니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "강화 머신건 연사",
        "img": "ARShot",
        "range": 1,
        "AP": 6,
        "description": "머신건을 조준 사격해 $(1.4) 피해를 줍니다. 대상이 회피 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 정밀 조준",
        "img": "Snipe",
        "range": 0,
        "AP": 0,
        "description": "대기 시, 3라운드 동안 적중 / 사거리 / 치명타가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_CenturionEX_TU",
    "name": "엘리트 센츄리온",
    "img": "Centurion",
    "type": "경장 공격기",
    "info": "작은 부대의 지휘관 역할을 하는 철충으로 보입니다. 주변 철충에게 일제 공격을 지시하는 정황이 포착되었군요. 부하들이 파괴되면 경계를 하는 것 같아요. 먼저 처리하는 게 좋을 것으로 보입니다.<br><br><br>- 37식 다이카",
    "HPbase": 3000,
    "HPlvl": 75,
    "ATKbase": 80,
    "ATKlvl": 10,
    "DEFbase": 50,
    "DEFlvl": 2,
    "AGI": 4,
    "CRT": 15,
    "HIT": 175,
    "DOD": 25,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "XM 로켓 런쳐",
        "img": "GrenadeAttack_2",
        "range": 4,
        "AP": 6,
        "description": "유탄을 발사해 목표 대상들에게 $(1) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "일제 공격 표식",
        "img": "Scan",
        "range": 5,
        "AP": 3,
        "description": "2라운드 동안 대상을 목표로 지정해 $(0.3) 피해를 주고 표식을 남기며, 받는 피해가 증가하는 상태로 만듭니다. 보호 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "역습 태세",
        "img": "DefCounter",
        "range": 0,
        "AP": 0,
        "description": "아군 사망 시, 3라운드 동안 공격력과 치명타가 증가하며 반격합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "부대 재 정비",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시 역습 태세인 경우, 인접한 아군들의 행동력과 적중을 증가시킵니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Phalangites_TU2",
    "name": "팔랑스",
    "img": "Phalangites",
    "type": "경장 보호기",
    "info": "각이 잡힌 대열로 행군하는 철충입니다. 철충 놈들 중엔 드물게 군기가 들어있지 말입니다. 딱 밀착해서 서로서로를 보호하는 녀석들이니 진형을 아작내는 게 중요하지 말임다.<br><br><br>- 블러디팬서",
    "HPbase": 600,
    "HPlvl": 85,
    "ATKbase": 65,
    "ATKlvl": 6.5,
    "DEFbase": 85,
    "DEFlvl": 4.5,
    "AGI": 3.95,
    "CRT": 10,
    "HIT": 175,
    "DOD": 37.5,
    "resist": [
      40,
      40,
      40
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "머신건 속사",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "머신건을 발사해 $(1) 피해를 줍니다. 대상이 기동형인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "대열 방어",
        "img": "TeamDefBuff",
        "range": 6,
        "AP": 4,
        "description": "3라운드 동안 같은 열의 아군을 보호하며, 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "밀집 대형",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 같은 열에 인접한 아군에게 피해 감소 효과를 부여합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          8,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_LegionEX_TU2",
    "name": "정예 레기온",
    "img": "Legion",
    "type": "경장 지원기",
    "info": "공중의 적만 집요하게 노리니 공중 부대 운용 시 주의해! 구리게 보이는 점착제를 떼느라 이틀이나 고생했어. 그거 묻으면 진짜 아싸처럼 보이니 주의하라고!<br><br><br>- 실피드",
    "HPbase": 450,
    "HPlvl": 67.5,
    "ATKbase": 75,
    "ATKlvl": 7.75,
    "DEFbase": 45,
    "DEFlvl": 1,
    "AGI": 4.1,
    "CRT": 10,
    "HIT": 250,
    "DOD": 40,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "GAU 대공 미니건",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "미니건을 발사해 $(1) 피해를 줍니다. 대상이 기동형인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "강화 점착탄",
        "img": "SlowShot",
        "range": 4,
        "AP": 5,
        "description": "점착탄을 던져 $(0.4) 피해를 주고, 일정 확률로 적중한 대상을 3라운드 동안 이동 불가 / 회피 / 행동력 감소 상태로 만듭니다. 일정 확률로 대상의 회피 / 행동력 강화 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "경계 경보",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 처치되면 경계 태세로 전환해 양 옆의 아군의 행동력을 올려주며 대상의 공격을 지원합니다.",
        "areadata": [
          8,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickCEX_TU3",
    "name": "개량형 칙 캐논",
    "img": "NightChickC",
    "type": "중장 공격기",
    "info": "박격포로 무장한 나이트 칙인데... 별 거 아닌 폭죽이나 쏴대는 벌레야. 아, 약한 애들한텐 무서우려나?<br><br><br>- 메이 보고함",
    "HPbase": 425,
    "HPlvl": 87.5,
    "ATKbase": 90,
    "ATKlvl": 12.5,
    "DEFbase": 100,
    "DEFlvl": 5,
    "AGI": 3.35,
    "CRT": 10,
    "HIT": 145,
    "DOD": 0,
    "resist": [
      50,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "네이팜 분사",
        "img": "WideFireShot",
        "range": 2,
        "AP": 4,
        "attr": "fire",
        "description": "화염 방사로 $(1.1000000000000001) 화염 속성 피해를 주며, 3라운드 동안 지속 화염 피해를 입는 점화 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "강화 곡사 포격",
        "img": "CannonShotDelay",
        "range": 6,
        "AP": 7,
        "description": "1라운드 후에 착탄하는 곡사포를 발사해 목표 범위에 $(2)의 피해를 줍니다. 대상이 이동 불가 상태면 피해량이 증가합니다.",
        "areadata": [
          0,
          0.75,
          0,
          0.75,
          1,
          0.75,
          0,
          0.75,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "연료 탱크 파괴",
        "img": "SuiceideBomb",
        "range": 0,
        "AP": 0,
        "attr": "fire",
        "description": "사망 시, 연료 탱크가 유폭해 주변에 괴멸적인 피해를 주며 피해 감소 효과를 해제합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "조준 보정",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 3라운드 동안 적중이 증가합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_HeavyScout_TU2",
    "name": "헤비 스카우트",
    "img": "Scout",
    "type": "기동 공격기",
    "info": "스카우트와 비슷해요. 탄종은 좀 다른 것 같지만. 뭘 쏘길래 모두 피해냈어요. 별로 정확하진 않은 것 같군요. 주변 철충들과 대열을 갖추려고 하면 주의해 주세요.<br><br><br>- 페로 드림",
    "HPbase": 375,
    "HPlvl": 52.5,
    "ATKbase": 90,
    "ATKlvl": 10,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.25,
    "CRT": 15,
    "HIT": 140,
    "DOD": 52.5,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "대 장갑 기관포",
        "img": "AntiArmorShot",
        "range": 2,
        "AP": 6,
        "description": "대 장갑 기관포를 발사해 $(1.2) 피해를 줍니다. 대상의 방어력을 일정 비율 무시하며, 방어 감소 상태인 경우 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "공습 준비",
        "img": "SelfSpdBuff",
        "range": 6,
        "AP": 5,
        "description": "3라운드 동안 회피 / 치명타 / 행동력이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "공격 포메이션",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "대기 시, 같은 열에 인접한 공격기의 AP / 치명타 / 사거리 / 방어 관통을 증가시킵니다.",
        "areadata": [
          8,
          5,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ZapperEX_TU",
    "name": "강화형 재퍼",
    "img": "Zapper",
    "type": "경장 지원기",
    "info": "호전성이 낮은 개체예요. 건드리지만 않으면 공격하지 않으니 주의해 주세요. 고압 전류 공격을 하니까요. 설마 제가 대신 맞아서 찌릿찌릿에 눈 뜨는 걸 바라는 건 아니겠죠?<br><br><br>- 보고자 블랙 리리스",
    "HPbase": 350,
    "HPlvl": 57.5,
    "ATKbase": 55,
    "ATKlvl": 6,
    "DEFbase": 40,
    "DEFlvl": 1,
    "AGI": 4.05,
    "CRT": 10,
    "HIT": 175,
    "DOD": 20,
    "resist": [
      25,
      25,
      75
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "전격 체인",
        "img": "Shock",
        "range": 3,
        "AP": 4,
        "attr": "electric",
        "description": "전격을 방사해 $(0.8) 전기 속성 피해를 주고 대상의 AP와 회피를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "초고압 전류",
        "img": "Shock",
        "range": 1,
        "AP": 8,
        "attr": "electric",
        "description": "고압 전류로 $(1.2) 전기 속성 피해를 주고, 회피를 감소시킵니다. 일정 확률로 대상을 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "사주 경계",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "적을 발견하거나 적에게 공격당하기 전 까지는 경계 상태로 대기합니다. 공격당하기 전까지 받는 피해가 대폭 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_BigChickM_TU2",
    "name": "빅 칙 런쳐",
    "img": "BigChickM",
    "type": "중장 공격기",
    "info": "엄청나게 피하기 힘든 미사일을 마구 쏴댐. 멀리서 처리하는 게 제일 좋을 것 같아.<br><br><br>- 핀토가 정찰 중 보고",
    "HPbase": 1750,
    "HPlvl": 90,
    "ATKbase": 90,
    "ATKlvl": 11,
    "DEFbase": 90,
    "DEFlvl": 4,
    "AGI": 3.25,
    "CRT": 10,
    "HIT": 135,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "고폭 미사일",
        "img": "CruiseMissile",
        "range": 5,
        "AP": 7,
        "description": "1라운드 후 착탄하며 $(3) 피해를 주는 미사일을 발사합니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "마이크로 미사일",
        "img": "MultiMissile",
        "range": 1,
        "AP": 3,
        "description": "지정 범위에 $(0.5) 피해를 주는 마이크로 미사일을 발사합니다. 보호 효과를 무시하며 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다. 200%의 적중 보정이 적용됩니다.",
        "areadata": [
          7,
          4,
          5,
          1
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "유도 미사일",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 대상이 기동형인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Mammoth_TU",
    "name": "매머드",
    "img": "Mammoth",
    "type": "중장 공격기",
    "info": "한 방이 엄청나게 무서운데다 장갑도 두꺼워서 장갑 사이에 치명타를 먹이거나 아니면 관통할 수 있는 무기가 좋아 보이네. 뭐, 못 피하면 죽으니까 조심하라고.<br><br><br>- 보고자 샌드걸",
    "HPbase": 1000,
    "HPlvl": 70,
    "ATKbase": 100,
    "ATKlvl": 10.5,
    "DEFbase": 75,
    "DEFlvl": 5,
    "AGI": 3.15,
    "CRT": 5,
    "HIT": 105,
    "DOD": 0,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "직사 포격",
        "img": "CannonShotWide",
        "range": 2,
        "AP": 7,
        "description": "직사 포격으로 목표 대상이 있는 열에 $(1.35) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "2연장 곡사포",
        "img": "CannonShotDelay",
        "range": 6,
        "AP": 9,
        "description": "1라운드 뒤에 착탄하는 곡사 포격으로 목표 지점에 $(2.5) 보호 무시 피해를 줍니다. 목표 지점 주변에는 피해가 50% 감소합니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          0,
          0.75,
          0,
          0.75,
          1,
          0.75,
          0,
          0.75,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "고폭 충격탄",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 적의 방어막과 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ScoutEX_TU3",
    "name": "강습형 스카우트",
    "img": "Scout",
    "type": "기동 지원기",
    "info": "저 망할 날파리들! 엄청 빨라서 잘 맞지도 않고 뭐만 하려하면 방해해서 진짜 짜증나는 녀석들이야. 백발백중인 미호가 필요해!<br><br><br>- 스틸 드라코",
    "HPbase": 250,
    "HPlvl": 52.5,
    "ATKbase": 90,
    "ATKlvl": 8,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.6,
    "CRT": 10,
    "HIT": 155,
    "DOD": 105,
    "resist": [
      15,
      15,
      15
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "강화 충격탄",
        "img": "Missile",
        "range": 2,
        "AP": 6,
        "description": "충격 미사일을 발사해 $(1.2) 피해를 주고 대상의 AP를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "색적 경보",
        "img": "Scan",
        "range": 6,
        "AP": 6,
        "description": "목표 아군에게 적 발견 경보를 울려 대상의 AP와 사거리를 증가시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "강습 대열",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "이동 시, 3라운드 동안 인접한 공격기의 공격을 지원하며 AP를 증가시킵니다.",
        "areadata": [
          8,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ZapperEX_TU2",
    "name": "강화형 재퍼",
    "img": "Zapper",
    "type": "경장 지원기",
    "info": "호전성이 낮은 개체예요. 건드리지만 않으면 공격하지 않으니 주의해 주세요. 고압 전류 공격을 하니까요. 설마 제가 대신 맞아서 찌릿찌릿에 눈 뜨는 걸 바라는 건 아니겠죠?<br><br><br>- 보고자 블랙 리리스",
    "HPbase": 525,
    "HPlvl": 72.5,
    "ATKbase": 65,
    "ATKlvl": 6.5,
    "DEFbase": 60,
    "DEFlvl": 1.5,
    "AGI": 4.05,
    "CRT": 10,
    "HIT": 215,
    "DOD": 40,
    "resist": [
      25,
      25,
      75
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "전격 체인",
        "img": "Shock",
        "range": 3,
        "AP": 4,
        "attr": "electric",
        "description": "전격을 방사해 $(0.8) 전기 속성 피해를 주고 대상의 AP와 회피를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "초고압 전류",
        "img": "Shock",
        "range": 1,
        "AP": 8,
        "attr": "electric",
        "description": "고압 전류로 $(1.2) 전기 속성 피해를 주고, 회피를 감소시킵니다. 일정 확률로 대상을 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "사주 경계",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "적을 발견하거나 적에게 공격당하기 전 까지는 경계 상태로 대기합니다. 공격당하기 전까지 받는 피해가 대폭 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_HarvesterEX_TU2",
    "name": "아머드 하베스터",
    "img": "Harvester",
    "type": "중장 지원기",
    "info": "얘는 원래는 나처럼 일하던 애였던 것 같아. 멀리 있는 적을 갈고리로 당겨오니 주의하는 게 좋아. 나처럼 힘들게 사는 애니 편히 보내 주는 게 좋을 지도…<br><br><br>- 더치걸",
    "HPbase": 750,
    "HPlvl": 90,
    "ATKbase": 90,
    "ATKlvl": 10,
    "DEFbase": 125,
    "DEFlvl": 6,
    "AGI": 3.25,
    "CRT": 5,
    "HIT": 120,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "폐기물 파쇄",
        "img": "MeleeAttack",
        "range": 1,
        "AP": 9,
        "description": "근접 공격으로 $(2.6) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 대상을 강타해 피해량이 증가하며 2라운드 동안 행동 불가로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "폐기물 수집",
        "img": "Hang",
        "range": 4,
        "AP": 4,
        "description": "집게로 목표 대상을 포획해 $(0.5) 피해를 주며 2칸 앞으로 당깁니다. 적중 시, 2라운드 동안 행동력이 감소하며 이동 불가 상태가 됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "초합금 플레이팅",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "견고한 장갑으로 인해, 일정 위력 이하의 공격은 통하지 않습니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_BigChickM_TU3",
    "name": "빅 칙 런쳐",
    "img": "BigChickM",
    "type": "중장 공격기",
    "info": "엄청나게 피하기 힘든 미사일을 마구 쏴댐. 멀리서 처리하는 게 제일 좋을 것 같아.<br><br><br>- 핀토가 정찰 중 보고",
    "HPbase": 2750,
    "HPlvl": 115,
    "ATKbase": 105,
    "ATKlvl": 12.5,
    "DEFbase": 135,
    "DEFlvl": 5.5,
    "AGI": 3.3,
    "CRT": 10,
    "HIT": 160,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "고폭 미사일",
        "img": "CruiseMissile",
        "range": 5,
        "AP": 7,
        "description": "1라운드 후 착탄하며 $(3) 피해를 주는 미사일을 발사합니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "마이크로 미사일",
        "img": "MultiMissile",
        "range": 1,
        "AP": 3,
        "description": "지정 범위에 $(0.5) 피해를 주는 마이크로 미사일을 발사합니다. 보호 효과를 무시하며 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다. 200%의 적중 보정이 적용됩니다.",
        "areadata": [
          7,
          4,
          5,
          1
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "유도 미사일",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 대상이 기동형인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_BigChick_TU2",
    "name": "빅 칙",
    "img": "BigChick",
    "type": "중장 공격기",
    "info": "엄청 큰 나이트 칙이지 말임다! 하는 짓은 나이트 칙이랑 똑같은데 갑빠도 두껍고 총도 더 쎄게 쏘지 말임다. 움직이기 전에 얼른 죽여야 함다!<br><br><br>- 보고자 브라우니지 말임다.",
    "HPbase": 500,
    "HPlvl": 65,
    "ATKbase": 55,
    "ATKlvl": 10.5,
    "DEFbase": 50,
    "DEFlvl": 3.5,
    "AGI": 3.25,
    "CRT": 5,
    "HIT": 110,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "중 기관총 사격",
        "img": "MGShot",
        "range": 4,
        "AP": 5,
        "description": "중 기관총으로 $(1.2) 피해를 줍니다. 대상이 방어력 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "영거리 중 기관총",
        "img": "MGShot",
        "range": 1,
        "AP": 8,
        "description": "중 기관총 근접 사격으로 $(2) 피해를 줍니다. 대상의 방어력을 일정 비율 무시하며, 방어력 감소 상태인 경우 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickDE_N",
    "name": "나이트 칙 디텍터",
    "img": "NightChickDE",
    "type": "경장 지원기",
    "info": "그 아이는 별로 위험한 아인 아니거든? 근데 자꾸 우리를 방해하는 공격을 하니까 다른 애들이랑 있으면 주의해야 하거든? 맞으면 다른 철충한테 지원 요청하는 못된 아이니까 혼내줘야행! 누나 보고 있을께~!<br><br><br>- 예쁜 누나 포츈이 보고해용~!",
    "HPbase": 120,
    "HPlvl": 25,
    "ATKbase": 40,
    "ATKlvl": 4,
    "DEFbase": 15,
    "DEFlvl": 0.49612500000000004,
    "AGI": 4.1,
    "CRT": 5,
    "HIT": 180,
    "DOD": 30,
    "resist": [
      10,
      10,
      10
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "약점 포착",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "목표를 공격 대상으로 지정해 $(1) 피해를 주고, 2라운드 동안 표식 상태로 만듭니다. 표식 상태인 대상인 추가 피해를 받으며, 회피가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "섬광 탄막",
        "img": "Beam",
        "range": 4,
        "AP": 7,
        "description": "지정한 위치에 섬광탄을 발사해 2라운드 동안 적중을 낮추고, 대상의 AP를 감소시킵니다.",
        "areadata": [
          4,
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "레이더 공유",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 일정 확률로 인접한 아군에게 경보를 울리며 전황을 공유합니다. 레이더를 공유 받은 경우, AP가 증가하며 2라운드 동안 사거리와 적중률이 증가합니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "레이더 재밍",
        "img": "TeamAtkDeBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 사망하는 경우, 주변 철충의 센서에 오류를 일으킵니다. 오류가 일어난 대상들은 적중이 크게 감소하며, 적중 강화 효과가 해제됩니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickSI_TU4",
    "name": "나이트 칙 실더 개",
    "img": "NightChickSI",
    "type": "경장 보호기",
    "info": "일반 칙 실더보다 큰 방패 때문에 뒤의 대상들을 공격하기 위해서는 더 용맹한 정신이 필요하다. 나이트 칙 실더와 헷갈리지 않도록 지휘 콘솔을 반드시 확인해야 함.<br><br><br>- 마리 ",
    "HPbase": 450,
    "HPlvl": 105,
    "ATKbase": 75,
    "ATKlvl": 7.25,
    "DEFbase": 90,
    "DEFlvl": 4.5,
    "AGI": 3.6,
    "CRT": 5,
    "HIT": 180,
    "DOD": 32.5,
    "resist": [
      35,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "방패 강타",
        "img": "MeleeAttack",
        "range": 3,
        "AP": 4,
        "description": "방패로 강타해 $(1.1000000000000001) 피해를 줍니다. 대상이 회피 감소 상태면 일정 확률로 행동 불가로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칙 가드 올리기",
        "img": "ShieldWall",
        "range": 6,
        "AP": 3,
        "description": "3라운드 동안 같은 행의 뒤에 있는 아군을 보호합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "강화 방패",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "방패 장갑이 강화되어 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Mammoth_TU2",
    "name": "매머드",
    "img": "Mammoth",
    "type": "중장 공격기",
    "info": "한 방이 엄청나게 무서운데다 장갑도 두꺼워서 장갑 사이에 치명타를 먹이거나 아니면 관통할 수 있는 무기가 좋아 보이네. 뭐, 못 피하면 죽으니까 조심하라고.<br><br><br>- 보고자 샌드걸",
    "HPbase": 1500,
    "HPlvl": 95,
    "ATKbase": 110,
    "ATKlvl": 12,
    "DEFbase": 125,
    "DEFlvl": 7,
    "AGI": 3.15,
    "CRT": 5,
    "HIT": 120,
    "DOD": 0,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "직사 포격",
        "img": "CannonShotWide",
        "range": 2,
        "AP": 7,
        "description": "직사 포격으로 목표 대상이 있는 열에 $(1.35) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "2연장 곡사포",
        "img": "CannonShotDelay",
        "range": 6,
        "AP": 9,
        "description": "1라운드 뒤에 착탄하는 곡사 포격으로 목표 지점에 $(2.5) 보호 무시 피해를 줍니다. 목표 지점 주변에는 피해가 50% 감소합니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          0,
          0.75,
          0,
          0.75,
          1,
          0.75,
          0,
          0.75,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "고폭 충격탄",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 적의 방어막과 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Wasp_TU5",
    "name": "와습",
    "img": "Wasp",
    "type": "기동 공격기",
    "info": "누가 이 자식한테 이 뿔침을 달아준 거야? 물론 나처럼 빠르진 않지만 나보다 느린 애들은 전부 조심하도록 해. 제법 빠른 속도로 돌격을 하니 말이야.<br><br><br>- 슬레이프니르",
    "HPbase": 275,
    "HPlvl": 45,
    "ATKbase": 85,
    "ATKlvl": 9.25,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.35,
    "CRT": 10,
    "HIT": 140,
    "DOD": 70,
    "resist": [
      50,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "화염 방사",
        "img": "WideFireShot",
        "range": 3,
        "AP": 6,
        "attr": "fire",
        "description": "화염 방사로 대상에게 $(0.75) 피해를 주고, 대상 뒤에 50% 감소한 피해를 줍니다. 일정 확률로 대상을 점화 상태로 만들어 3라운드 동안 지속 화염 피해를 줍니다.",
        "areadata": [
          0,
          0,
          0,
          0.5,
          1,
          0,
          0,
          0,
          0
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "자폭 돌격",
        "img": "SuiceideBomb",
        "range": 6,
        "AP": 10,
        "description": "공격 대상에게 자폭해 $(5) 피해를 줍니다. 대상의 방어력을 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "회피 기동",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 사망한 경우, 2라운드 동안 회피가 증가하며 행동력과 적중이 감소합니다. 해당 효과는 최대 3번까지 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Phalangites_TU3",
    "name": "팔랑스",
    "img": "Phalangites",
    "type": "경장 보호기",
    "info": "각이 잡힌 대열로 행군하는 철충입니다. 철충 놈들 중엔 드물게 군기가 들어있지 말입니다. 딱 밀착해서 서로서로를 보호하는 녀석들이니 진형을 아작내는 게 중요하지 말임다.<br><br><br>- 블러디팬서",
    "HPbase": 800,
    "HPlvl": 100,
    "ATKbase": 72.5,
    "ATKlvl": 7,
    "DEFbase": 120,
    "DEFlvl": 6,
    "AGI": 4,
    "CRT": 10,
    "HIT": 200,
    "DOD": 50,
    "resist": [
      40,
      40,
      40
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "머신건 속사",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "머신건을 발사해 $(1) 피해를 줍니다. 대상이 기동형인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "대열 방어",
        "img": "TeamDefBuff",
        "range": 6,
        "AP": 4,
        "description": "3라운드 동안 같은 열의 아군을 보호하며, 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "밀집 대형",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 같은 열에 인접한 아군에게 피해 감소 효과를 부여합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          8,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickSP_TU6",
    "name": "칙 스나이퍼",
    "img": "NightChickSP",
    "type": "경장 공격기",
    "info": "엄폐와 위장 능력이 좋음. 빠르게 한 방으로 처치하는 게 좋을 것 같음.<br><br><br>- 발키리",
    "HPbase": 275,
    "HPlvl": 61.25,
    "ATKbase": 95,
    "ATKlvl": 11,
    "DEFbase": 20,
    "DEFlvl": 1,
    "AGI": 4,
    "CRT": 12.5,
    "HIT": 300,
    "DOD": 40,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "정조준 저격",
        "img": "Snipe",
        "range": 4,
        "AP": 7,
        "description": "보호 효과를 무시하는 저격으로 $(1.5) 피해를 줍니다. 대상이 이동 불가 상태면 정밀 사격으로 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "위장",
        "img": "SelfSpdBuff",
        "range": 6,
        "AP": 4,
        "description": "위장 파장을 발산해 3라운드 동안 회피 / 치명타가 증가하며 받는 피해가 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "대응 저격",
        "img": "DefCounter",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 위장 상태인 경우 반격을 활성화합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickCM_TU3",
    "name": "케미컬 칙",
    "img": "NightChickCM",
    "type": "경장 지원기",
    "info": "냄새 나고 이상한 액체를 뿌려. 더럽고 음란해. 그 이상한 액을 뒤집어 쓴 애들은 한 동안 근처에 못 오게 했어. 특히 스틸 드라코는…<br><br><br>- 보고자 미호",
    "HPbase": 400,
    "HPlvl": 77.5,
    "ATKbase": 80,
    "ATKlvl": 7.5,
    "DEFbase": 30,
    "DEFlvl": 1,
    "AGI": 4.15,
    "CRT": 10,
    "HIT": 229,
    "DOD": 65,
    "resist": [
      50,
      50,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "화학탄 발사",
        "img": "Missile",
        "range": 4,
        "AP": 4,
        "description": "화학 탄두를 발사해 $(0.8) 피해를 줍니다. 3라운드 동안 대상을 부식 상태로 만듭니다. 부식 상태가 된 대상은 방어력 / 행동력이 감소하며 매 라운드 지속 피해를 입습니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "화학탄 난사",
        "img": "MultiMissile",
        "range": 2,
        "AP": 6,
        "description": "화학 탄두를 난사해 지정 범위에 $(0.5) 피해를 줍니다. 3라운드 동안 대상을 부식 상태로 만듭니다. 부식 상태가 된 대상은 방어력 / 행동력이 감소하며 매 라운드 지속 피해를 입습니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "적응 시스템",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 자신과 인접한 아군에게 걸린 방해 효과를 해제합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickC_TU5",
    "name": "나이트 칙 캐논",
    "img": "NightChickC",
    "type": "중장 공격기",
    "info": "박격포로 무장한 나이트 칙인데... 별 거 아닌 폭죽이나 쏴대는 벌레야. 아, 약한 애들한텐 무서우려나?<br><br><br>- 메이 보고함",
    "HPbase": 350,
    "HPlvl": 90,
    "ATKbase": 100,
    "ATKlvl": 11.5,
    "DEFbase": 100,
    "DEFlvl": 5,
    "AGI": 3.3,
    "CRT": 5,
    "HIT": 155,
    "DOD": 0,
    "resist": [
      25,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "플레임 버너",
        "img": "WideFireShot",
        "range": 2,
        "AP": 4,
        "attr": "fire",
        "description": "화염 방사로 $(0.8) 화염 속성 피해를 주며, 일정 확률로 3라운드 동안 지속 화염 피해를 입는 점화 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "곡사포",
        "img": "CannonShotDelay",
        "range": 5,
        "AP": 8,
        "description": "1라운드 후에 착탄하는 곡사포를 발사해 목표 범위에 $(1.75)의 피해를 줍니다. 대상이 이동 불가 상태면 피해량이 증가합니다.",
        "areadata": [
          0,
          0.5,
          0,
          0.5,
          1,
          0.5,
          0,
          0.5,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "연료 탱크 유폭",
        "img": "SuiceideBomb",
        "range": 0,
        "AP": 0,
        "attr": "fire",
        "description": "사망 시, 연료 탱크가 유폭해 주변에 괴멸적인 피해를 주고 피해 감소 효과를 해제합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Harvester_TU5",
    "name": "하베스터",
    "img": "Harvester",
    "type": "중장 지원기",
    "info": "얘는 원래는 나처럼 일하던 애였던 것 같아. 멀리 있는 적을 갈고리로 당겨오니 주의하는 게 좋아. 나처럼 힘들게 사는 애니 편히 보내 주는 게 좋을 지도…<br><br><br>- 더치걸",
    "HPbase": 550,
    "HPlvl": 100,
    "ATKbase": 90,
    "ATKlvl": 10.5,
    "DEFbase": 200,
    "DEFlvl": 7,
    "AGI": 3.3,
    "CRT": 5,
    "HIT": 150,
    "DOD": 0,
    "resist": [
      15,
      15,
      15
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "폐기물 분쇄",
        "img": "MeleeAttack",
        "range": 1,
        "AP": 10,
        "description": "근접 공격으로 $(2) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 대상을 강타해 피해량이 증가하며 일정 확률로 2라운드 동안 행동 불가로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "폐기물 수거",
        "img": "Hang",
        "range": 4,
        "AP": 4,
        "description": "집게로 목표 대상을 포획해 $(0.5) 피해를 주며 2칸 앞으로 당깁니다. 적중 시, 2라운드 동안 행동력이 감소하며 일정 확률로 이동 불가 상태가 됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickDE_TU4",
    "name": "나이트 칙 디텍터",
    "img": "NightChickDE",
    "type": "경장 지원기",
    "info": "그 아이는 별로 위험한 아인 아니거든? 근데 자꾸 우리를 방해하는 공격을 하니까 다른 애들이랑 있으면 주의해야 하거든? 맞으면 다른 철충한테 지원 요청하는 못된 아이니까 혼내줘야행! 누나 보고 있을께~!<br><br><br>- 예쁜 누나 포츈이 보고해용~!",
    "HPbase": 350,
    "HPlvl": 85,
    "ATKbase": 70,
    "ATKlvl": 6.25,
    "DEFbase": 45,
    "DEFlvl": 1.25,
    "AGI": 4.15,
    "CRT": 5,
    "HIT": 300,
    "DOD": 67.5,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "약점 포착",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "목표를 공격 대상으로 지정해 $(1) 피해를 주고, 2라운드 동안 표식 상태로 만듭니다. 표식 상태인 대상인 추가 피해를 받으며, 회피가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "섬광 탄막",
        "img": "Beam",
        "range": 4,
        "AP": 7,
        "description": "지정한 위치에 섬광탄을 발사해 2라운드 동안 적중을 낮추고, 대상의 AP를 감소시킵니다.",
        "areadata": [
          4,
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "레이더 공유",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 일정 확률로 인접한 아군에게 경보를 울리며 전황을 공유합니다. 레이더를 공유 받은 경우, AP가 증가하며 2라운드 동안 사거리와 적중률이 증가합니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "레이더 재밍",
        "img": "TeamAtkDeBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 사망하는 경우, 주변 철충의 센서에 오류를 일으킵니다. 오류가 일어난 대상들은 적중이 크게 감소하며, 적중 강화 효과가 해제됩니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_HeavyScout_TU3",
    "name": "헤비 스카우트",
    "img": "Scout",
    "type": "기동 공격기",
    "info": "스카우트와 비슷해요. 탄종은 좀 다른 것 같지만. 뭘 쏘길래 모두 피해냈어요. 별로 정확하진 않은 것 같군요. 주변 철충들과 대열을 갖추려고 하면 주의해 주세요.<br><br><br>- 페로 드림",
    "HPbase": 500,
    "HPlvl": 62.5,
    "ATKbase": 105,
    "ATKlvl": 11.5,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.25,
    "CRT": 20,
    "HIT": 160,
    "DOD": 65,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "대 장갑 기관포",
        "img": "AntiArmorShot",
        "range": 2,
        "AP": 6,
        "description": "대 장갑 기관포를 발사해 $(1.2) 피해를 줍니다. 대상의 방어력을 일정 비율 무시하며, 방어 감소 상태인 경우 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "공습 준비",
        "img": "SelfSpdBuff",
        "range": 6,
        "AP": 5,
        "description": "3라운드 동안 회피 / 치명타 / 행동력이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "공격 포메이션",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "대기 시, 같은 열에 인접한 공격기의 AP / 치명타 / 사거리 / 방어 관통을 증가시킵니다.",
        "areadata": [
          8,
          5,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Legion_TU5",
    "name": "레기온",
    "img": "Legion",
    "type": "경장 지원기",
    "info": "공중의 적만 집요하게 노리니 공중 부대 운용 시 주의해! 구리게 보이는 점착제를 떼느라 이틀이나 고생했어. 그거 묻으면 진짜 아싸처럼 보이니 주의하라고!<br><br><br>- 실피드",
    "HPbase": 350,
    "HPlvl": 60,
    "ATKbase": 80,
    "ATKlvl": 7,
    "DEFbase": 30,
    "DEFlvl": 0.95,
    "AGI": 4.05,
    "CRT": 5,
    "HIT": 220,
    "DOD": 35,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "GAU 미니건",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "미니건을 발사해 $(1) 피해를 줍니다. 대상이 기동형인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "점착탄",
        "img": "SlowShot",
        "range": 4,
        "AP": 5,
        "description": "점착탄을 던져 $(0.33) 피해를 줍니다. 적중한 대상을 2라운드 동안 이동 불가 상태로 만들고, 일정 확률로 회피 / 행동력을 감소 시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "경계 태세",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 처치되면  경계 태세로 전환해, 양 옆의 아군의 행동력을 감소시키며 대상의 공격을 지원합니다.",
        "areadata": [
          8,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Kidnapper_B0308",
    "name": "트릭스터",
    "img": "Kidnapper_B0308",
    "type": "경장 공격기",
    "info": "요원 암살용 철충 연결체. 빠르고 민첩하다. 나와 우리 부대처럼 기동전이 가능한 부대가 맡는 게 좋을 것 같군. 포획이든 파괴든 쉽지 않다.<br><br><br>- 칸",
    "HPbase": 2850,
    "HPlvl": 275,
    "ATKbase": 150,
    "ATKlvl": 12.5,
    "DEFbase": 26,
    "DEFlvl": 1.5,
    "AGI": 4.25,
    "CRT": 20,
    "HIT": 300,
    "DOD": 60,
    "resist": [
      15,
      15,
      15
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "클로 돌진",
        "img": "AssaultAttack",
        "range": 4,
        "AP": 4,
        "description": "클로 돌진으로 목표와 바로 뒤의 대상에게 $(1) 피해를 줍니다. 5라운드 동안 공격 대상의 방어력을 감소시킵니다. 최대 5번까지 중첩됩니다.",
        "areadata": [
          4,
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "손톱날 발사",
        "img": "MultiMissile",
        "range": 1,
        "AP": 6,
        "attr": "fire",
        "description": "폭발하는 손톱날을 발사해 목표 열에 $(1.4) 피해를 주고 대상을 뒤로 한칸 밉니다. 공격 대상들은 2라운드 동안 적중이 감소합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "살육 쾌감",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "도발 상태일 때 공격 적중 시, 5라운드 동안 공격력이 증가합니다. 해당 효과는 5번까지 중첩됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "위협 감지",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 위협을 감지해 해당 라운드 동안 회피가 증가하며 공격력이 감소합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "광란",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "적을 처치한 경우, 3라운드 동안 행동력과 치명타가 증가합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Stalker_TU2",
    "name": "스토커",
    "img": "Stalker_B0108",
    "type": "경장 공격기",
    "info": "철충 연결체입니다. 힘을 모아서 엄청난 한 방을 노리는 비열한 타입의 적입니다. 하지만 힘을 모으고 있는 시간은 짧으니 최대한 공격을 늦춰서 제 포를 이용해 처리하는 게 가장 좋아 보이는군요.<br><br><br>- 보고자 비스트 헌터",
    "HPbase": 160,
    "HPlvl": 140,
    "ATKbase": 81,
    "ATKlvl": 13.5,
    "DEFbase": 40,
    "DEFlvl": 0.75,
    "AGI": 4.1,
    "CRT": 10,
    "HIT": 280,
    "DOD": 50,
    "resist": [
      35,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "저격",
        "img": "Chargeshot",
        "range": 6,
        "AP": 4,
        "description": "레일건 저격으로 $(1) 피해를 줍니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "챠지",
        "img": "SelfAtkBuff",
        "range": 6,
        "AP": 4,
        "description": "레일건을 충전해, 다음 공격이 치명타로 적용되며 공격력이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "리액터 폭발",
        "img": "SuiceideBomb",
        "range": 0,
        "AP": 0,
        "description": "사망 시, 리액터가 폭발에 주변에 매우 높은 물리 피해를 줍니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickSP_TU5",
    "name": "칙 스나이퍼",
    "img": "NightChickSP",
    "type": "경장 공격기",
    "info": "엄폐와 위장 능력이 좋음. 빠르게 한 방으로 처치하는 게 좋을 것 같음.<br><br><br>- 발키리",
    "HPbase": 240,
    "HPlvl": 52.5,
    "ATKbase": 80,
    "ATKlvl": 9.5,
    "DEFbase": 15,
    "DEFlvl": 0.75,
    "AGI": 4,
    "CRT": 12.5,
    "HIT": 270,
    "DOD": 32.5,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "정조준 저격",
        "img": "Snipe",
        "range": 4,
        "AP": 7,
        "description": "보호 효과를 무시하는 저격으로 $(1.5) 피해를 줍니다. 대상이 이동 불가 상태면 정밀 사격으로 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "위장",
        "img": "SelfSpdBuff",
        "range": 6,
        "AP": 4,
        "description": "위장 파장을 발산해 3라운드 동안 회피 / 치명타가 증가하며 받는 피해가 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "대응 저격",
        "img": "DefCounter",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 위장 상태인 경우 반격을 활성화합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Mammoth_TU3",
    "name": "매머드",
    "img": "Mammoth",
    "type": "중장 공격기",
    "info": "한 방이 엄청나게 무서운데다 장갑도 두꺼워서 장갑 사이에 치명타를 먹이거나 아니면 관통할 수 있는 무기가 좋아 보이네. 뭐, 못 피하면 죽으니까 조심하라고.<br><br><br>- 보고자 샌드걸",
    "HPbase": 2000,
    "HPlvl": 155,
    "ATKbase": 120,
    "ATKlvl": 14,
    "DEFbase": 175,
    "DEFlvl": 9,
    "AGI": 3.2,
    "CRT": 7.5,
    "HIT": 135,
    "DOD": 0,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "직사 포격",
        "img": "CannonShotWide",
        "range": 2,
        "AP": 7,
        "description": "직사 포격으로 목표 대상이 있는 열에 $(1.35) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "2연장 곡사포",
        "img": "CannonShotDelay",
        "range": 6,
        "AP": 9,
        "description": "1라운드 뒤에 착탄하는 곡사 포격으로 목표 지점에 $(2.5) 보호 무시 피해를 줍니다. 목표 지점 주변에는 피해가 50% 감소합니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          0,
          0.75,
          0,
          0.75,
          1,
          0.75,
          0,
          0.75,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "고폭 충격탄",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 적의 방어막과 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Scarab_TU5",
    "name": "스캐럽",
    "img": "Scarab",
    "type": "기동 보호기",
    "info": "이상한 구조인데 잘도 나는 거 있지? 나 저거 꼭 분해하고 싶으니까 잡히면 나한테 보내 줘야 해! 겁쟁이라 무서우면 방어를 하니까 빨리 해치우는 게 좋아.<br><br><br>- 보고자 닥터",
    "HPbase": 500,
    "HPlvl": 65,
    "ATKbase": 85,
    "ATKlvl": 7.5,
    "DEFbase": 115,
    "DEFlvl": 2,
    "AGI": 4.5,
    "CRT": 10,
    "HIT": 135,
    "DOD": 95,
    "resist": [
      25,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "실드 돌격",
        "img": "AssaultAttack",
        "range": 3,
        "AP": 6,
        "description": "대상에게 돌격해 $(1.5) 피해를 주고, 대상의 행 보호 효과와 피해 감소 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "보호 기동",
        "img": "SelfDefBuff",
        "range": 6,
        "AP": 4,
        "description": "3라운드 동안 지정한 아군을 보호하고 행동력을 올려줍니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "방어 기동",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "HP가 50% 이하가 되면 방어 기동을 실행해, 받는 피해가 감소하고 방어력이 증가하며 회피가 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Juggernaut_TU2",
    "name": "저거너트",
    "img": "Juggernaut",
    "type": "중장 보호기",
    "info": "성격이 나빠 보이는 철충인 거예요. 공격을 시작하면 끝까지 공격하거든요. 그래서 공중 부대로 유인을 하는 게 좋을 것 같아요. 그 덩치로 다른 철충들을 보호하지 못하게요.<br><br><br>- 블랙 하운드",
    "HPbase": 2750,
    "HPlvl": 110,
    "ATKbase": 80,
    "ATKlvl": 8.75,
    "DEFbase": 175,
    "DEFlvl": 10,
    "AGI": 3.2,
    "CRT": 10,
    "HIT": 120,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "스턴 펀치",
        "img": "MeleeAttack",
        "range": 1,
        "AP": 10,
        "description": "대상을 강타해 $(2.4) 피해를 주고, 일정 확률로 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "몸통 박치기",
        "img": "AssaultAttack",
        "range": 2,
        "AP": 9,
        "description": "대상에게 돌진해 $(1.6) 피해를 주고, 뒤로 1칸 밀어냅니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "방벽 전환",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 사망한 경우, 방어 태세로 전환해 2라운드 동안 행 보호와 열 보호 효과를 활성화합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "방어 프로토콜",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 일정 확률로 방어력이 대폭 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_TrainingDummy_N",
    "name": "표적 더미",
    "img": "NightChick",
    "type": "경장 지원기",
    "info": "연습용으로 쓰이는 표적 나이트 칙 모형이다.",
    "HPbase": 1000,
    "HPlvl": 200,
    "ATKbase": 0,
    "ATKlvl": 0,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 3,
    "CRT": 0,
    "HIT": 0,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "장갑 강화",
        "img": "ShieldWall",
        "range": 2,
        "AP": 6,
        "description": "2라운드 동안 방어력이 대폭 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "회피 강화",
        "img": "Move",
        "range": 2,
        "AP": 6,
        "description": "2라운드 동안 회피가 대폭 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "초기화",
        "img": "Shock",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 해로운 효과를 모두 해제합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickSI_N",
    "name": "나이트 칙 실더 개",
    "img": "NightChickSI",
    "type": "경장 보호기",
    "info": "일반 칙 실더보다 큰 방패 때문에 뒤의 대상들을 공격하기 위해서는 더 용맹한 정신이 필요하다. 나이트 칙 실더와 헷갈리지 않도록 지휘 콘솔을 반드시 확인해야 함.<br><br><br>- 마리 ",
    "HPbase": 150,
    "HPlvl": 35,
    "ATKbase": 40,
    "ATKlvl": 5,
    "DEFbase": 30,
    "DEFlvl": 1.5,
    "AGI": 3.3,
    "CRT": 5,
    "HIT": 100,
    "DOD": 10,
    "resist": [
      35,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "방패 강타",
        "img": "MeleeAttack",
        "range": 3,
        "AP": 4,
        "description": "방패로 강타해 $(1.1000000000000001) 피해를 줍니다. 대상이 회피 감소 상태면 일정 확률로 행동 불가로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칙 가드 올리기",
        "img": "ShieldWall",
        "range": 6,
        "AP": 3,
        "description": "3라운드 동안 같은 행의 뒤에 있는 아군을 보호합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "강화 방패",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "방패 장갑이 강화되어 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_WaspEX_TU",
    "name": "와습 HM",
    "img": "Wasp",
    "type": "기동 공격기",
    "info": "누가 이 자식한테 이 뿔침을 달아준 거야? 물론 나처럼 빠르진 않지만 나보다 느린 애들은 전부 조심하도록 해. 제법 빠른 속도로 돌격을 하니 말이야.<br><br><br>- 슬레이프니르",
    "HPbase": 300,
    "HPlvl": 37.5,
    "ATKbase": 90,
    "ATKlvl": 10.75,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.35,
    "CRT": 20,
    "HIT": 135,
    "DOD": 75,
    "resist": [
      75,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "화염 작렬",
        "img": "WideFireShot",
        "range": 3,
        "AP": 6,
        "attr": "fire",
        "description": "화염 방사로 대상에게 $(0.8) 피해를 주고, 대상 뒤에 50% 감소한 피해를 줍니다. 대상을 점화 상태로 만들어 2라운드 동안 지속 화염 피해를 줍니다.",
        "areadata": [
          0,
          0,
          0,
          0.5,
          1,
          0,
          0,
          0,
          0
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "자폭 돌진",
        "img": "SuiceideBomb",
        "range": 7,
        "AP": 10,
        "description": "공격 대상에게 돌격 후, 자폭해 $(6) 피해를 줍니다. 대상의 방어력을 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "고속 기동",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 사망한 경우, 2라운드 동안 회피가 증가하며 행동력 / 적중이 감소합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_HarvesterEX_TU3",
    "name": "아머드 하베스터",
    "img": "Harvester",
    "type": "중장 지원기",
    "info": "얘는 원래는 나처럼 일하던 애였던 것 같아. 멀리 있는 적을 갈고리로 당겨오니 주의하는 게 좋아. 나처럼 힘들게 사는 애니 편히 보내 주는 게 좋을 지도…<br><br><br>- 더치걸",
    "HPbase": 1000,
    "HPlvl": 105,
    "ATKbase": 110,
    "ATKlvl": 11.25,
    "DEFbase": 150,
    "DEFlvl": 7,
    "AGI": 3.3,
    "CRT": 5,
    "HIT": 140,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "폐기물 파쇄",
        "img": "MeleeAttack",
        "range": 1,
        "AP": 9,
        "description": "근접 공격으로 $(2.6) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 대상을 강타해 피해량이 증가하며 2라운드 동안 행동 불가로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "폐기물 수집",
        "img": "Hang",
        "range": 4,
        "AP": 4,
        "description": "집게로 목표 대상을 포획해 $(0.5) 피해를 주며 2칸 앞으로 당깁니다. 적중 시, 2라운드 동안 행동력이 감소하며 이동 불가 상태가 됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "초합금 플레이팅",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "견고한 장갑으로 인해, 일정 위력 이하의 공격은 통하지 않습니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickEX_TU4",
    "name": "강화형 나이트 칙",
    "img": "NightChick",
    "type": "경장 공격기",
    "info": "하아… 이 예쁜 애의 이름은 나이트 칙입니당. 예쁘지만 더 예쁜 폴른이를 잡아먹은 무서운 녀석들이에용. 쉬지않고 기관총을 난사하니 주의해 주세용~!<br><br><br>- 보고자 그렘린입니당! ",
    "HPbase": 350,
    "HPlvl": 82.5,
    "ATKbase": 75,
    "ATKlvl": 9,
    "DEFbase": 30,
    "DEFlvl": 1,
    "AGI": 4.1,
    "CRT": 10,
    "HIT": 280,
    "DOD": 57.499,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "강화 머신건 사격",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "머신건 사격으로 $(1) 피해를 줍니다. 2라운드 동안 대상의 회피를 낮츱니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "강화 머신건 연사",
        "img": "ARShot",
        "range": 1,
        "AP": 6,
        "description": "머신건을 조준 사격해 $(1.4) 피해를 줍니다. 대상이 회피 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 정밀 조준",
        "img": "Snipe",
        "range": 0,
        "AP": 0,
        "description": "대기 시, 3라운드 동안 적중 / 사거리 / 치명타가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickMEX_TU4",
    "name": "강화형 칙 런쳐",
    "img": "NightChickM",
    "type": "경장 공격기",
    "info": "흔히 볼 수 있는 미사일로 무장한 철충. 무조건 앞으로 돌격하는 모습이 브라우니와 비슷합니다.<br><br><br>- 보고자 레프리콘",
    "HPbase": 400,
    "HPlvl": 87.5,
    "ATKbase": 100,
    "ATKlvl": 10.5,
    "DEFbase": 55,
    "DEFlvl": 2.25,
    "AGI": 3.9,
    "CRT": 15,
    "HIT": 265,
    "DOD": 67.5,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "강화 미사일 공격",
        "img": "Missile",
        "range": 2,
        "AP": 4,
        "description": "미사일을 발사해 $(1.2) 피해를 줍니다. 대상이 이동 불가 상태면 직격으로 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "강화 미사일 난사",
        "img": "Missile",
        "range": 1,
        "AP": 6,
        "description": "미사일 근접 사격으로 $(1.6) 피해를 줍니다. 대상이 이동 불가 상태면 직격으로 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "기동 사격",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "이동 시, 4라운드 동안 사거리 / 공격력 / 행동력이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_LegionEX_TU3",
    "name": "정예 레기온",
    "img": "Legion",
    "type": "경장 지원기",
    "info": "공중의 적만 집요하게 노리니 공중 부대 운용 시 주의해! 구리게 보이는 점착제를 떼느라 이틀이나 고생했어. 그거 묻으면 진짜 아싸처럼 보이니 주의하라고!<br><br><br>- 실피드",
    "HPbase": 600,
    "HPlvl": 82.5,
    "ATKbase": 85,
    "ATKlvl": 8.5,
    "DEFbase": 60,
    "DEFlvl": 1.25,
    "AGI": 4.15,
    "CRT": 10,
    "HIT": 300,
    "DOD": 50,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "GAU 대공 미니건",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "미니건을 발사해 $(1) 피해를 줍니다. 대상이 기동형인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "강화 점착탄",
        "img": "SlowShot",
        "range": 4,
        "AP": 5,
        "description": "점착탄을 던져 $(0.4) 피해를 주고, 일정 확률로 적중한 대상을 3라운드 동안 이동 불가 / 회피 / 행동력 감소 상태로 만듭니다. 일정 확률로 대상의 회피 / 행동력 강화 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "경계 경보",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 처치되면 경계 태세로 전환해 양 옆의 아군의 행동력을 올려주며 대상의 공격을 지원합니다.",
        "areadata": [
          8,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_CenturionEX_TU2",
    "name": "엘리트 센츄리온",
    "img": "Centurion",
    "type": "경장 공격기",
    "info": "작은 부대의 지휘관 역할을 하는 철충으로 보입니다. 주변 철충에게 일제 공격을 지시하는 정황이 포착되었군요. 부하들이 파괴되면 경계를 하는 것 같아요. 먼저 처리하는 게 좋을 것으로 보입니다.<br><br><br>- 37식 다이카",
    "HPbase": 3750,
    "HPlvl": 92.5,
    "ATKbase": 95,
    "ATKlvl": 11,
    "DEFbase": 75,
    "DEFlvl": 2.5,
    "AGI": 4,
    "CRT": 15,
    "HIT": 200,
    "DOD": 32.5,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "XM 로켓 런쳐",
        "img": "GrenadeAttack_2",
        "range": 4,
        "AP": 6,
        "description": "유탄을 발사해 목표 대상들에게 $(1) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "일제 공격 표식",
        "img": "Scan",
        "range": 5,
        "AP": 3,
        "description": "2라운드 동안 대상을 목표로 지정해 $(0.3) 피해를 주고 표식을 남기며, 받는 피해가 증가하는 상태로 만듭니다. 보호 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "역습 태세",
        "img": "DefCounter",
        "range": 0,
        "AP": 0,
        "description": "아군 사망 시, 3라운드 동안 공격력과 치명타가 증가하며 반격합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "부대 재 정비",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시 역습 태세인 경우, 인접한 아군들의 행동력과 적중을 증가시킵니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ScarabEX_TU2",
    "name": "스캐럽 HC",
    "img": "Scarab",
    "type": "기동 보호기",
    "info": "이상한 구조인데 잘도 나는 거 있지? 나 저거 꼭 분해하고 싶으니까 잡히면 나한테 보내 줘야 해! 겁쟁이라 무서우면 방어를 하니까 빨리 해치우는 게 좋아.<br><br><br>- 보고자 닥터",
    "HPbase": 650,
    "HPlvl": 75,
    "ATKbase": 80,
    "ATKlvl": 7,
    "DEFbase": 115,
    "DEFlvl": 2.25,
    "AGI": 4.55,
    "CRT": 15,
    "HIT": 150,
    "DOD": 120,
    "resist": [
      50,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "실드 돌진",
        "img": "AssaultAttack",
        "range": 3,
        "AP": 6,
        "description": "대상에게 돌격해 $(1.5) 피해를 주고, 대상의 행 / 열 보호 효과와 피해 감소 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "호위 기동",
        "img": "SelfDefBuff",
        "range": 6,
        "AP": 4,
        "description": "3라운드 동안 지정한 아군을 보호하며, 대상의 행동력과 적중을 증가시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "경계 기동",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시 HP가 50% 이하인 경우, 받는 피해와 회피가 감소하고 방어력이 대폭 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_WaspEX_TU2",
    "name": "와습 HM",
    "img": "Wasp",
    "type": "기동 공격기",
    "info": "누가 이 자식한테 이 뿔침을 달아준 거야? 물론 나처럼 빠르진 않지만 나보다 느린 애들은 전부 조심하도록 해. 제법 빠른 속도로 돌격을 하니 말이야.<br><br><br>- 슬레이프니르",
    "HPbase": 400,
    "HPlvl": 50,
    "ATKbase": 105,
    "ATKlvl": 12,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.35,
    "CRT": 20,
    "HIT": 150,
    "DOD": 90,
    "resist": [
      75,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "화염 작렬",
        "img": "WideFireShot",
        "range": 3,
        "AP": 6,
        "attr": "fire",
        "description": "화염 방사로 대상에게 $(0.8) 피해를 주고, 대상 뒤에 50% 감소한 피해를 줍니다. 대상을 점화 상태로 만들어 2라운드 동안 지속 화염 피해를 줍니다.",
        "areadata": [
          0,
          0,
          0,
          0.5,
          1,
          0,
          0,
          0,
          0
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "자폭 돌진",
        "img": "SuiceideBomb",
        "range": 7,
        "AP": 10,
        "description": "공격 대상에게 돌격 후, 자폭해 $(6) 피해를 줍니다. 대상의 방어력을 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "고속 기동",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 사망한 경우, 2라운드 동안 회피가 증가하며 행동력 / 적중이 감소합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ScoutEX_TU4",
    "name": "강습형 스카우트",
    "img": "Scout",
    "type": "기동 지원기",
    "info": "저 망할 날파리들! 엄청 빨라서 잘 맞지도 않고 뭐만 하려하면 방해해서 진짜 짜증나는 녀석들이야. 백발백중인 미호가 필요해!<br><br><br>- 스틸 드라코",
    "HPbase": 300,
    "HPlvl": 60,
    "ATKbase": 100,
    "ATKlvl": 9,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.6,
    "CRT": 10,
    "HIT": 180,
    "DOD": 120,
    "resist": [
      15,
      15,
      15
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "강화 충격탄",
        "img": "Missile",
        "range": 2,
        "AP": 6,
        "description": "충격 미사일을 발사해 $(1.2) 피해를 주고 대상의 AP를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "색적 경보",
        "img": "Scan",
        "range": 6,
        "AP": 6,
        "description": "목표 아군에게 적 발견 경보를 울려 대상의 AP와 사거리를 증가시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "강습 대열",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "이동 시, 3라운드 동안 인접한 공격기의 공격을 지원하며 AP를 증가시킵니다.",
        "areadata": [
          8,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Fallen_TU4",
    "name": "경비용 폴른",
    "img": "Fallen",
    "type": "경장 지원기",
    "info": "폴른의 자율 경비용 기종이다.",
    "HPbase": 700,
    "HPlvl": 82.5,
    "ATKbase": 80,
    "ATKlvl": 6.75,
    "DEFbase": 60,
    "DEFlvl": 4.5,
    "AGI": 3.9,
    "CRT": 5,
    "HIT": 215,
    "DOD": 25,
    "resist": [
      0,
      0,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "머신건 사격",
        "img": "MGShot",
        "range": 4,
        "AP": 4,
        "description": "머신건을 발사해 목표 적에게 $(1)의 피해를 줍니다. 대상이 방어력 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "대 장갑 진동탄",
        "img": "SelfDefDeBuff",
        "range": 4,
        "AP": 6,
        "description": "대 장갑 진동탄을 발사해 $(0.25) 피해를 주고, 목표 대상의 방어력을 낮춥니다. 대상에게 피해 감소 효과가 있는 경우, 해당 효과를 무효화합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Rampart_TU4",
    "name": "경비용 램파트",
    "img": "Rampart",
    "type": "경장 보호기",
    "info": "램파트의 자율 경비용 기종이다.",
    "HPbase": 1100,
    "HPlvl": 95,
    "ATKbase": 80,
    "ATKlvl": 7,
    "DEFbase": 100,
    "DEFlvl": 5,
    "AGI": 3.9,
    "CRT": 5,
    "HIT": 200,
    "DOD": 35,
    "resist": [
      40,
      40,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "목표 견제",
        "img": "ARShot",
        "range": 3,
        "AP": 4,
        "description": "위협 사격으로 $(1) 피해를 주고, 2라운드 동안 대상의 공격력과 적중을 낮춥니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "목표 호위",
        "img": "ShieldWall",
        "range": 6,
        "AP": 6,
        "description": "3라운드 동안 지정한 아군을 보호하며, 대상의 AP를 증가시킵니다. 해당 스킬 사용 시, 자신이 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Drone_TU4",
    "name": "경비용 드론",
    "img": "Drone",
    "type": "기동 지원기",
    "info": "드론의 자율 경비용 기종이다.",
    "HPbase": 400,
    "HPlvl": 50,
    "ATKbase": 80,
    "ATKlvl": 6.5,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.45,
    "CRT": 5,
    "HIT": 160,
    "DOD": 120,
    "resist": [
      0,
      0,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "충격파 미사일",
        "img": "Missile",
        "range": 3,
        "AP": 5,
        "description": "충격파 미사일을 발사해 $(1.1000000000000001) 피해를 주고, 대상을 뒤로 1칸 밀어내며 AP를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "정밀 스캔",
        "img": "Scan",
        "range": 1,
        "AP": 7,
        "description": "목표 지점에 있는 대상들의 약점을 분석해, 3라운드 동안 받는 피해를 증가시키며 효과 저항과 회피를 감소시킵니다.",
        "areadata": [
          8,
          5,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_AMG11_TU4",
    "name": "경비용 AMG-11",
    "img": "AMG11",
    "type": "경장 지원기",
    "info": "AMG-11의 자율 경비용 기종이다.",
    "HPbase": 450,
    "HPlvl": 62.5,
    "ATKbase": 80,
    "ATKlvl": 7,
    "DEFbase": 35,
    "DEFlvl": 1.75,
    "AGI": 4.1,
    "CRT": 5,
    "HIT": 235,
    "DOD": 0,
    "resist": [
      0,
      0,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "목표 경보",
        "img": "ARShot",
        "range": 5,
        "AP": 4,
        "description": "대상을 표식 설정하며 $(1) 피해를 줍니다. 3라운드 동안 대상은 받는 피해가 증가하며, 회피가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "지원 개시",
        "img": "SelfAtkBuff",
        "range": 6,
        "AP": 6,
        "description": "3라운드 동안 지정한 아군의 공격을 지원하며, 대상의 행동력을 높입니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_PuppHead_TU4",
    "name": "경비용 펍 헤드",
    "img": "PuppHead",
    "type": "경장 지원기",
    "info": "펍 헤드의 자율 경비용 기종이다.",
    "HPbase": 450,
    "HPlvl": 67.5,
    "ATKbase": 70,
    "ATKlvl": 6,
    "DEFbase": 45,
    "DEFlvl": 2.25,
    "AGI": 4,
    "CRT": 5,
    "HIT": 200,
    "DOD": 60,
    "resist": [
      0,
      0,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "테이저 발사",
        "img": "Shock",
        "range": 2,
        "AP": 4,
        "attr": "electric",
        "description": "목표 적을 감전시켜 $(0.75)의 전기 속성 피해를 주고 AP와 회피를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "체포 사슬",
        "img": "Hang",
        "range": 4,
        "AP": 4,
        "description": "목표 대상을 체포해 $(0.01) 피해를 주면서 최대 2칸까지 앞으로 당기고, 3라운드 동안 이동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Stinger_TU4",
    "name": "양산형 스팅어",
    "img": "Stinger",
    "type": "기동 공격기",
    "info": "스팅어의 양산형 기종이다.",
    "HPbase": 430,
    "HPlvl": 49.5,
    "ATKbase": 100,
    "ATKlvl": 10,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.3,
    "CRT": 10,
    "HIT": 140,
    "DOD": 100,
    "resist": [
      50,
      0,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "네이팜 버너",
        "img": "WideFireShot",
        "range": 2,
        "AP": 5,
        "attr": "fire",
        "description": "화염 방사로 $(0.75) 피해를 주고, 뒤의 대상에게는 50% 감소한 피해를 줍니다. 3라운드 동안 대상을 점화 상태로 만들어 지속 화염 피해를 줍니다.",
        "areadata": [
          0,
          0,
          0,
          0.5,
          1,
          0,
          0,
          0,
          0
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "파쇄 돌격",
        "img": "AssaultAttack",
        "range": 3,
        "AP": 7,
        "description": "목표 대상에게 돌격해 $(1.4) 피해를 줍니다. 대상의 방어력을 일정 비율 무시하며, 표식 상태인 경우 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "예열 개시",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "이동 시, 3라운드 동안 공격력 / 행동력 / 회피가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Gigantes_TU4",
    "name": "양산형 기간테스",
    "img": "Gigantes",
    "type": "중장 보호기",
    "info": "기간테스의 양산형 기종이다.",
    "HPbase": 2150,
    "HPlvl": 140,
    "ATKbase": 90,
    "ATKlvl": 9,
    "DEFbase": 200,
    "DEFlvl": 12,
    "AGI": 3.2,
    "CRT": 5,
    "HIT": 130,
    "DOD": 0,
    "resist": [
      0,
      0,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "로켓 배쉬",
        "img": "MeleeAttack",
        "range": 1,
        "AP": 9,
        "description": "대상을 강타해 $(1.8) 피해를 주고, 일정 확률로 해당 라운드 동안 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "실드 차지",
        "img": "AssaultAttack",
        "range": 2,
        "AP": 7,
        "description": "대상에게 돌진해 $(1.3) 피해를 주고, 뒤로 1칸 밀며 대상에게 걸린 행 보호 또는 열 보호 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "거점 방어 모드",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시, 3라운드 동안 행 보호 효과를 활성화하며 방어력이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Seljuq_TU4",
    "name": "양산형 셀주크",
    "img": "Seljuq",
    "type": "중장 공격기",
    "info": "셀주크의 양산형 기종이다.",
    "HPbase": 1300,
    "HPlvl": 95,
    "ATKbase": 125,
    "ATKlvl": 12.5,
    "DEFbase": 120,
    "DEFlvl": 6,
    "AGI": 3.1,
    "CRT": 5,
    "HIT": 150,
    "DOD": 0,
    "resist": [
      0,
      0,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "175mm 직사포",
        "img": "CannonShotWide",
        "range": 2,
        "AP": 7,
        "description": "직사 포격으로 목표 대상이 있는 열에 $(1) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "175mm 곡사포",
        "img": "CannonShotDelay",
        "range": 6,
        "AP": 10,
        "description": "2라운드 뒤에 착탄하는 곡사 포격으로 목표 지점에 $(2) 보호 무시 피해를 줍니다. 목표 지점 주변에는 피해가 50% 감소합니다. 표식 상태인 대상에게는 피해량이 증가합니다.",
        "areadata": [
          0,
          0.5,
          0,
          0.5,
          1,
          0.5,
          0,
          0.5,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "대 보병 고폭탄",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "대 보병 고폭탄을 장전해, 경장형에게 주는 피해가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Scarab_TU6",
    "name": "스캐럽",
    "img": "Scarab",
    "type": "기동 보호기",
    "info": "이상한 구조인데 잘도 나는 거 있지? 나 저거 꼭 분해하고 싶으니까 잡히면 나한테 보내 줘야 해! 겁쟁이라 무서우면 방어를 하니까 빨리 해치우는 게 좋아.<br><br><br>- 보고자 닥터",
    "HPbase": 650,
    "HPlvl": 75,
    "ATKbase": 95,
    "ATKlvl": 8,
    "DEFbase": 130,
    "DEFlvl": 2.25,
    "AGI": 4.5,
    "CRT": 10,
    "HIT": 150,
    "DOD": 110,
    "resist": [
      25,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "실드 돌격",
        "img": "AssaultAttack",
        "range": 3,
        "AP": 6,
        "description": "대상에게 돌격해 $(1.5) 피해를 주고, 대상의 행 보호 효과와 피해 감소 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "보호 기동",
        "img": "SelfDefBuff",
        "range": 6,
        "AP": 4,
        "description": "3라운드 동안 지정한 아군을 보호하고 행동력을 올려줍니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "방어 기동",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "HP가 50% 이하가 되면 방어 기동을 실행해, 받는 피해가 감소하고 방어력이 증가하며 회피가 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Centurion_TU5",
    "name": "센츄리온",
    "img": "Centurion",
    "type": "경장 공격기",
    "info": "작은 부대의 지휘관 역할을 하는 철충으로 보입니다. 주변 철충에게 일제 공격을 지시하는 정황이 포착되었군요. 부하들이 파괴되면 경계를 하는 것 같아요. 먼저 처리하는 게 좋을 것으로 보입니다.<br><br><br>- 37식 다이카",
    "HPbase": 3750,
    "HPlvl": 90,
    "ATKbase": 90,
    "ATKlvl": 10,
    "DEFbase": 35,
    "DEFlvl": 2.25,
    "AGI": 4,
    "CRT": 10,
    "HIT": 200,
    "DOD": 25,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "XM 유탄 발사기",
        "img": "GrenadeAttack_2",
        "range": 4,
        "AP": 6,
        "description": "유탄을 발사해 목표 행에 $(1) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "일제 공격 개시",
        "img": "Snipe",
        "range": 5,
        "AP": 4,
        "description": "2라운드 동안 대상을 목표로 지정해 $(0.25) 피해를 주고 표식을 남기며, 받는 피해가 증가하는 상태로 만듭니다. 보호 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "반격 태세",
        "img": "DefCounter",
        "range": 0,
        "AP": 0,
        "description": "아군 사망 시, 3라운드 동안 공격력과 치명타가 증가하며 반격합니다. 공격력과 치명타 증가 효과는 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_UnderWatcherSensor_B05",
    "name": "언더왓쳐 센서",
    "img": "UnderWatcherSensor_B05",
    "type": "중장 보호기",
    "info": "조준용 센서가 달린 파츠네요. 피해를 주거나 파괴하면 공격을 피하기 쉬워질거에요.<br><br><br>- 스카디",
    "HPbase": 19030,
    "HPlvl": 130,
    "ATKbase": 0,
    "ATKlvl": 0,
    "DEFbase": 1465,
    "DEFlvl": 15,
    "AGI": 4.5,
    "CRT": 0,
    "HIT": 999,
    "DOD": 0,
    "resist": [
      25,
      50,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "록 온 센서",
        "img": "Scan",
        "range": 8,
        "AP": 4,
        "description": "목표 대상을 조준해 3라운드 동안 표식을 설정하고, 받는 피해가 증가하며 회피가 감소한 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "다중 록 온 시스템",
        "img": "Scan",
        "range": 8,
        "AP": 6,
        "description": "목표 대상들을 조준해 3라운드 동안 표식을 설정하고, 받는 피해가 증가하며 회피가 감소한 상태로 만듭니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "조준 보정 시스템",
        "img": "Scan",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 자신의 현재 HP 비율에 따라 주변 장치에게 적중 증가 효과를 줍니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "최대 출력",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "에너지 충전 중첩이 3 이상이면, 방해 효과를 걸 확률이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_UnderWatcher_B05",
    "name": "언더왓쳐",
    "img": "UnderWatcher_B05",
    "type": "중장 보호기",
    "info": "제 해킹으로 성능이 저하된 상태지만, 에너지 충전이 완료되면 여전히 무시무시한 공격을 할 거예요. 충전을 막기 위해 제네레이터를 공격하는 것도 좋겠네요. 본체는 공격 직후를 노리면 더 많은 타격을 줄 수 있을 것 같네요.<br><br><br>- 스카디",
    "HPbase": 46200,
    "HPlvl": 200,
    "ATKbase": 193,
    "ATKlvl": 13.5,
    "DEFbase": 1255,
    "DEFlvl": 5,
    "AGI": 3.75,
    "CRT": 12.5,
    "HIT": 150,
    "DOD": 0,
    "resist": [
      25,
      50,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "확산 플라즈마 입자포",
        "img": "WideBeamShot",
        "range": 5,
        "AP": 3,
        "description": "지정 범위에 보호 효과를 무시하고 $(0.6) 피해를 주는 확산 입자포를 발사합니다. 표식 상태인 대상에게 피해량이 증가합니다.",
        "areadata": [
          7,
          4,
          5,
          1
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "메가 플라즈마 캐논",
        "img": "BeamShot",
        "range": 8,
        "AP": 10,
        "description": "지정 행에 $(2) 피해를 주는 플라즈마 입자포를 발사합니다. 보호 효과를 무시하며, 표식 상태인 대상에게 피해량이 크게 증가합니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "특수 합금 발사구",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시 에너지 충전 상태인 경우, 공격하기 전까지는 방어력과 효과 저항이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "최대 출력",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "에너지 충전 중첩이 4 이상이면, 공격할 때 방어막과 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "시스템 정지",
        "img": "SuiceideBomb",
        "range": 0,
        "AP": 0,
        "description": "사망할 경우, 관련된 모든 시스템이 정지합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_UnderWatcherGenerator_B05",
    "name": "언더왓쳐 제네레이터",
    "img": "UnderWatcherGenerator_B05",
    "type": "중장 보호기",
    "info": "에너지 공급용 제네레이터네요. 계속 공격해보면 에너지 공급을 멈출 수 있을 것 같네요.<br><br><br>- 스카디",
    "HPbase": 39305,
    "HPlvl": 155,
    "ATKbase": 0,
    "ATKlvl": 0,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.35,
    "CRT": 0,
    "HIT": 999,
    "DOD": 0,
    "resist": [
      25,
      50,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "에너지 충전",
        "img": "SelfAtkBuff",
        "range": 6,
        "AP": 4,
        "description": "각 장치들에게 에너지를 전달해, 공격력을 증가시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          1,
          2,
          3
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "에너지 실드",
        "img": "SelfDefBuff",
        "range": 6,
        "AP": 8,
        "description": "에너지 실드를 전개해 2라운드 동안 피해를 흡수하는 방어막을 부여하고, 상태 이상을 해제합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "재충전 개시",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, HP가 50% 이하면 자신에게 걸린 해로운 효과를 모두 제거하고 받는 피해가 감소하며 효과 저항이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "제네레이터 쇼트",
        "img": "SelfSpdDeBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 일정 확률로 쇼트가 생겨 2라운드 동안 행동 불능이 됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "제네레이터 파괴",
        "img": "SuiceideBomb",
        "range": 0,
        "AP": 0,
        "description": "파괴될 경우, 모든 파츠의 강화 효과가 해제되고 행동 불가 상태가 됩니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_UnderWatcherArm_B05",
    "name": "언더왓쳐 암",
    "img": "UnderWatcherArm_B05",
    "type": "중장 보호기",
    "info": "언더왓쳐의 공격용 암 파츠네요. 대공 기능이 있는 것 같으니 주의하세요.<br><br><br>- 스카디",
    "HPbase": 25650,
    "HPlvl": 150,
    "ATKbase": 160,
    "ATKlvl": 10,
    "DEFbase": 793,
    "DEFlvl": 3,
    "AGI": 4.15,
    "CRT": 15,
    "HIT": 180,
    "DOD": 0,
    "resist": [
      25,
      50,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "플라즈마 커터",
        "img": "MeleeAttack",
        "range": 8,
        "AP": 3,
        "description": "플라즈마 커터로 $(1) 피해를 줍니다. 대상이 표식 상태면 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "대공 펄스 빔 포",
        "img": "WideBeamShot",
        "range": 8,
        "AP": 6,
        "description": "목표 열에 $(1) 피해를 줍니다. 대상이 기동형이면 피해량이 증가합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "재 조준",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 적중 강화 상태면 적중이 추가로 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "최대 출력",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "에너지 충전 중첩이 5 이상이면, 적중이 증가하며 반격합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Zapper_TU5",
    "name": "재퍼",
    "img": "Zapper",
    "type": "경장 지원기",
    "info": "호전성이 낮은 개체예요. 건드리지만 않으면 공격하지 않으니 주의해 주세요. 고압 전류 공격을 하니까요. 설마 제가 대신 맞아서 찌릿찌릿에 눈 뜨는 걸 바라는 건 아니겠죠?<br><br><br>- 보고자 블랙 리리스",
    "HPbase": 300,
    "HPlvl": 60,
    "ATKbase": 70,
    "ATKlvl": 6.5,
    "DEFbase": 55,
    "DEFlvl": 2,
    "AGI": 4,
    "CRT": 5,
    "HIT": 200,
    "DOD": 25,
    "resist": [
      0,
      0,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "전격 방사",
        "img": "Shock",
        "range": 3,
        "AP": 4,
        "attr": "electric",
        "description": "전격을 방사해 $(0.8) 전기 속성 피해를 주고 일정 확률로 대상의 회피와 AP를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "고압 전류",
        "img": "Shock",
        "range": 1,
        "AP": 8,
        "attr": "electric",
        "description": "고압 전류로 $(1.2) 전기 속성 피해를 주고, 일정 확률로 대상을 행동 불능 상태로 만들고 회피를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "경계 모드",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "적과 인접하거나 공격당하기 전까지 경계 상태로 대기합니다. 공격당하기 전까지 받는 피해와 행동력이 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickCM_TU4",
    "name": "케미컬 칙",
    "img": "NightChickCM",
    "type": "경장 지원기",
    "info": "냄새 나고 이상한 액체를 뿌려. 더럽고 음란해. 그 이상한 액을 뒤집어 쓴 애들은 한 동안 근처에 못 오게 했어. 특히 스틸 드라코는…<br><br><br>- 보고자 미호",
    "HPbase": 500,
    "HPlvl": 92.5,
    "ATKbase": 95,
    "ATKlvl": 8.25,
    "DEFbase": 35,
    "DEFlvl": 1.25,
    "AGI": 4.15,
    "CRT": 10,
    "HIT": 265,
    "DOD": 77.5,
    "resist": [
      50,
      50,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "화학탄 발사",
        "img": "Missile",
        "range": 4,
        "AP": 4,
        "description": "화학 탄두를 발사해 $(0.8) 피해를 줍니다. 3라운드 동안 대상을 부식 상태로 만듭니다. 부식 상태가 된 대상은 방어력 / 행동력이 감소하며 매 라운드 지속 피해를 입습니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "화학탄 난사",
        "img": "MultiMissile",
        "range": 2,
        "AP": 6,
        "description": "화학 탄두를 난사해 지정 범위에 $(0.5) 피해를 줍니다. 3라운드 동안 대상을 부식 상태로 만듭니다. 부식 상태가 된 대상은 방어력 / 행동력이 감소하며 매 라운드 지속 피해를 입습니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "적응 시스템",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 자신과 인접한 아군에게 걸린 방해 효과를 해제합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickCEX_TU4",
    "name": "개량형 칙 캐논",
    "img": "NightChickC",
    "type": "중장 공격기",
    "info": "박격포로 무장한 나이트 칙인데... 별 거 아닌 폭죽이나 쏴대는 벌레야. 아, 약한 애들한텐 무서우려나?<br><br><br>- 메이 보고함",
    "HPbase": 550,
    "HPlvl": 100,
    "ATKbase": 105,
    "ATKlvl": 13.75,
    "DEFbase": 125,
    "DEFlvl": 6.5,
    "AGI": 3.35,
    "CRT": 10,
    "HIT": 165,
    "DOD": 0,
    "resist": [
      50,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "네이팜 분사",
        "img": "WideFireShot",
        "range": 2,
        "AP": 4,
        "attr": "fire",
        "description": "화염 방사로 $(1.1000000000000001) 화염 속성 피해를 주며, 3라운드 동안 지속 화염 피해를 입는 점화 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "강화 곡사 포격",
        "img": "CannonShotDelay",
        "range": 6,
        "AP": 7,
        "description": "1라운드 후에 착탄하는 곡사포를 발사해 목표 범위에 $(2)의 피해를 줍니다. 대상이 이동 불가 상태면 피해량이 증가합니다.",
        "areadata": [
          0,
          0.75,
          0,
          0.75,
          1,
          0.75,
          0,
          0.75,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "연료 탱크 파괴",
        "img": "SuiceideBomb",
        "range": 0,
        "AP": 0,
        "attr": "fire",
        "description": "사망 시, 연료 탱크가 유폭해 주변에 괴멸적인 피해를 주며 피해 감소 효과를 해제합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "조준 보정",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 3라운드 동안 적중이 증가합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_BigChickEX_TU4",
    "name": "시작형 빅 칙",
    "img": "BigChick",
    "type": "중장 공격기",
    "info": "엄청 큰 나이트 칙이지 말임다! 하는 짓은 나이트 칙이랑 똑같은데 갑빠도 두껍고 총도 더 쎄게 쏘지 말임다. 움직이기 전에 얼른 죽여야 함다!<br><br><br>- 보고자 브라우니지 말임다.",
    "HPbase": 4250,
    "HPlvl": 155,
    "ATKbase": 140,
    "ATKlvl": 15,
    "DEFbase": 200,
    "DEFlvl": 7.5,
    "AGI": 3.25,
    "CRT": 15,
    "HIT": 175,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "칙 중 기관포 발사",
        "img": "MGShot",
        "range": 4,
        "AP": 5,
        "description": "중 기관총으로 $(1.5) 피해를 줍니다. 대상이 방어력 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "영거리 중 기관포",
        "img": "MGShot",
        "range": 1,
        "AP": 8,
        "description": "중 기관총 근접 사격으로 방어력을 일정 비율 무시하고 $(2.4) 피해를 줍니다. 대상이 방어력 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "근접 조준 사격",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "적 진영에 가까울수록, 라운드 개시 시 적중이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_FABigChickEX_TU4",
    "name": "FA 빅 칙 II",
    "img": "FABigChick",
    "type": "중장 공격기",
    "info": "빅 칙과는 달라! 빅 칙과는! 뭐로 만든지는 몰라도 장갑이 차원이 다르니 나 같은 대 장갑 요원이 없으면 꽤나 곤란할걸?<br><br><br> - 불가사리 보고함",
    "HPbase": 4500,
    "HPlvl": 160,
    "ATKbase": 145,
    "ATKlvl": 15.75,
    "DEFbase": 240,
    "DEFlvl": 8.75,
    "AGI": 3.35,
    "CRT": 10,
    "HIT": 170,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "강화 중 기관포",
        "img": "MGShot",
        "range": 4,
        "AP": 4,
        "description": "중 기관포로 $(1.6) 피해를 줍니다. 대상의 방어력을 일정 비율 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "듀얼 칙 캐논포",
        "img": "CannonShotWide",
        "range": 2,
        "AP": 6,
        "description": "캐논포를 연사해 목표 열에 $(1.35) 피해를 줍니다. 대상의 피해 감소 효과를 해제합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "빅 칙 반응 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "반응 장갑으로 인해 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "작열탄두",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "작열탄두를 장비해 경장형에게 주는 피해가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_BigChickM_TU4",
    "name": "빅 칙 런쳐",
    "img": "BigChickM",
    "type": "중장 공격기",
    "info": "엄청나게 피하기 힘든 미사일을 마구 쏴댐. 멀리서 처리하는 게 제일 좋을 것 같아.<br><br><br>- 핀토가 정찰 중 보고",
    "HPbase": 4000,
    "HPlvl": 150,
    "ATKbase": 120,
    "ATKlvl": 14,
    "DEFbase": 180,
    "DEFlvl": 7,
    "AGI": 3.3,
    "CRT": 10,
    "HIT": 185,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "고폭 미사일",
        "img": "CruiseMissile",
        "range": 5,
        "AP": 7,
        "description": "1라운드 후 착탄하며 $(3) 피해를 주는 미사일을 발사합니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "마이크로 미사일",
        "img": "MultiMissile",
        "range": 1,
        "AP": 3,
        "description": "지정 범위에 $(0.5) 피해를 주는 마이크로 미사일을 발사합니다. 보호 효과를 무시하며 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다. 200%의 적중 보정이 적용됩니다.",
        "areadata": [
          7,
          4,
          5,
          1
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "유도 미사일",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 대상이 기동형인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_LegionEX_TU4",
    "name": "정예 레기온",
    "img": "Legion",
    "type": "경장 지원기",
    "info": "공중의 적만 집요하게 노리니 공중 부대 운용 시 주의해! 구리게 보이는 점착제를 떼느라 이틀이나 고생했어. 그거 묻으면 진짜 아싸처럼 보이니 주의하라고!<br><br><br>- 실피드",
    "HPbase": 750,
    "HPlvl": 100,
    "ATKbase": 95,
    "ATKlvl": 9.25,
    "DEFbase": 75,
    "DEFlvl": 1.5,
    "AGI": 4.15,
    "CRT": 10,
    "HIT": 350,
    "DOD": 60,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "GAU 대공 미니건",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "미니건을 발사해 $(1) 피해를 줍니다. 대상이 기동형인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "강화 점착탄",
        "img": "SlowShot",
        "range": 4,
        "AP": 5,
        "description": "점착탄을 던져 $(0.4) 피해를 주고, 일정 확률로 적중한 대상을 3라운드 동안 이동 불가 / 회피 / 행동력 감소 상태로 만듭니다. 일정 확률로 대상의 회피 / 행동력 강화 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "경계 경보",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 처치되면 경계 태세로 전환해 양 옆의 아군의 행동력을 올려주며 대상의 공격을 지원합니다.",
        "areadata": [
          8,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Phalangites_TU4",
    "name": "팔랑스",
    "img": "Phalangites",
    "type": "경장 보호기",
    "info": "각이 잡힌 대열로 행군하는 철충입니다. 철충 놈들 중엔 드물게 군기가 들어있지 말입니다. 딱 밀착해서 서로서로를 보호하는 녀석들이니 진형을 아작내는 게 중요하지 말임다.<br><br><br>- 블러디팬서",
    "HPbase": 1000,
    "HPlvl": 112.5,
    "ATKbase": 85,
    "ATKlvl": 7.75,
    "DEFbase": 155,
    "DEFlvl": 7.5,
    "AGI": 4,
    "CRT": 10,
    "HIT": 225,
    "DOD": 62.5,
    "resist": [
      40,
      40,
      40
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "머신건 속사",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "머신건을 발사해 $(1) 피해를 줍니다. 대상이 기동형인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "대열 방어",
        "img": "TeamDefBuff",
        "range": 6,
        "AP": 4,
        "description": "3라운드 동안 같은 열의 아군을 보호하며, 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "밀집 대형",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 같은 열에 인접한 아군에게 피해 감소 효과를 부여합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          8,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_HarvesterEX_TU4",
    "name": "아머드 하베스터",
    "img": "Harvester",
    "type": "중장 지원기",
    "info": "얘는 원래는 나처럼 일하던 애였던 것 같아. 멀리 있는 적을 갈고리로 당겨오니 주의하는 게 좋아. 나처럼 힘들게 사는 애니 편히 보내 주는 게 좋을 지도…<br><br><br>- 더치걸",
    "HPbase": 1250,
    "HPlvl": 120,
    "ATKbase": 130,
    "ATKlvl": 12.5,
    "DEFbase": 175,
    "DEFlvl": 8,
    "AGI": 3.3,
    "CRT": 5,
    "HIT": 160,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "폐기물 파쇄",
        "img": "MeleeAttack",
        "range": 1,
        "AP": 9,
        "description": "근접 공격으로 $(2.6) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 대상을 강타해 피해량이 증가하며 2라운드 동안 행동 불가로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "폐기물 수집",
        "img": "Hang",
        "range": 4,
        "AP": 4,
        "description": "집게로 목표 대상을 포획해 $(0.5) 피해를 주며 2칸 앞으로 당깁니다. 적중 시, 2라운드 동안 행동력이 감소하며 이동 불가 상태가 됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "초합금 플레이팅",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "견고한 장갑으로 인해, 일정 위력 이하의 공격은 통하지 않습니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Juggernaut_TU3",
    "name": "저거너트",
    "img": "Juggernaut",
    "type": "중장 보호기",
    "info": "성격이 나빠 보이는 철충인 거예요. 공격을 시작하면 끝까지 공격하거든요. 그래서 공중 부대로 유인을 하는 게 좋을 것 같아요. 그 덩치로 다른 철충들을 보호하지 못하게요.<br><br><br>- 블랙 하운드",
    "HPbase": 3750,
    "HPlvl": 180,
    "ATKbase": 90,
    "ATKlvl": 9.5,
    "DEFbase": 250,
    "DEFlvl": 13,
    "AGI": 3.25,
    "CRT": 10,
    "HIT": 135,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "스턴 펀치",
        "img": "MeleeAttack",
        "range": 1,
        "AP": 10,
        "description": "대상을 강타해 $(2.4) 피해를 주고, 일정 확률로 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "몸통 박치기",
        "img": "AssaultAttack",
        "range": 2,
        "AP": 9,
        "description": "대상에게 돌진해 $(1.6) 피해를 주고, 뒤로 1칸 밀어냅니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "방벽 전환",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 사망한 경우, 방어 태세로 전환해 2라운드 동안 행 보호와 열 보호 효과를 활성화합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "방어 프로토콜",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 일정 확률로 방어력이 대폭 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_WaspEX_TU3",
    "name": "와습 HM",
    "img": "Wasp",
    "type": "기동 공격기",
    "info": "누가 이 자식한테 이 뿔침을 달아준 거야? 물론 나처럼 빠르진 않지만 나보다 느린 애들은 전부 조심하도록 해. 제법 빠른 속도로 돌격을 하니 말이야.<br><br><br>- 슬레이프니르",
    "HPbase": 500,
    "HPlvl": 60,
    "ATKbase": 120,
    "ATKlvl": 13,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.4,
    "CRT": 20,
    "HIT": 165,
    "DOD": 105,
    "resist": [
      75,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "화염 작렬",
        "img": "WideFireShot",
        "range": 3,
        "AP": 6,
        "attr": "fire",
        "description": "화염 방사로 대상에게 $(0.8) 피해를 주고, 대상 뒤에 50% 감소한 피해를 줍니다. 대상을 점화 상태로 만들어 2라운드 동안 지속 화염 피해를 줍니다.",
        "areadata": [
          0,
          0,
          0,
          0.5,
          1,
          0,
          0,
          0,
          0
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "자폭 돌진",
        "img": "SuiceideBomb",
        "range": 7,
        "AP": 10,
        "description": "공격 대상에게 돌격 후, 자폭해 $(6) 피해를 줍니다. 대상의 방어력을 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "고속 기동",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 사망한 경우, 2라운드 동안 회피가 증가하며 행동력 / 적중이 감소합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_HeavyScout_TU4",
    "name": "헤비 스카우트",
    "img": "Scout",
    "type": "기동 공격기",
    "info": "스카우트와 비슷해요. 탄종은 좀 다른 것 같지만. 뭘 쏘길래 모두 피해냈어요. 별로 정확하진 않은 것 같군요. 주변 철충들과 대열을 갖추려고 하면 주의해 주세요.<br><br><br>- 페로 드림",
    "HPbase": 625,
    "HPlvl": 77.5,
    "ATKbase": 120,
    "ATKlvl": 13,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.25,
    "CRT": 20,
    "HIT": 180,
    "DOD": 77.5,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "대 장갑 기관포",
        "img": "AntiArmorShot",
        "range": 2,
        "AP": 6,
        "description": "대 장갑 기관포를 발사해 $(1.2) 피해를 줍니다. 대상의 방어력을 일정 비율 무시하며, 방어 감소 상태인 경우 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "공습 준비",
        "img": "SelfSpdBuff",
        "range": 6,
        "AP": 5,
        "description": "3라운드 동안 회피 / 치명타 / 행동력이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "공격 포메이션",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "대기 시, 같은 열에 인접한 공격기의 AP / 치명타 / 사거리 / 방어 관통을 증가시킵니다.",
        "areadata": [
          8,
          5,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_CenturionEX_TU4",
    "name": "엘리트 센츄리온",
    "img": "Centurion",
    "type": "경장 공격기",
    "info": "작은 부대의 지휘관 역할을 하는 철충으로 보입니다. 주변 철충에게 일제 공격을 지시하는 정황이 포착되었군요. 부하들이 파괴되면 경계를 하는 것 같아요. 먼저 처리하는 게 좋을 것으로 보입니다.<br><br><br>- 37식 다이카",
    "HPbase": 5000,
    "HPlvl": 145,
    "ATKbase": 125,
    "ATKlvl": 13,
    "DEFbase": 125,
    "DEFlvl": 3.5,
    "AGI": 4.05,
    "CRT": 15,
    "HIT": 250,
    "DOD": 47.5,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "XM 로켓 런쳐",
        "img": "GrenadeAttack_2",
        "range": 4,
        "AP": 6,
        "description": "유탄을 발사해 목표 대상들에게 $(1) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "일제 공격 표식",
        "img": "Scan",
        "range": 5,
        "AP": 3,
        "description": "2라운드 동안 대상을 목표로 지정해 $(0.3) 피해를 주고 표식을 남기며, 받는 피해가 증가하는 상태로 만듭니다. 보호 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "역습 태세",
        "img": "DefCounter",
        "range": 0,
        "AP": 0,
        "description": "아군 사망 시, 3라운드 동안 공격력과 치명타가 증가하며 반격합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "부대 재 정비",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시 역습 태세인 경우, 인접한 아군들의 행동력과 적중을 증가시킵니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChick_RV",
    "name": "나이트 칙 Type-S",
    "img": "NightChick",
    "type": "경장 공격기",
    "info": "<교전 기록 없음>",
    "HPbase": 41835,
    "HPlvl": 300,
    "ATKbase": 150,
    "ATKlvl": 0,
    "DEFbase": 50,
    "DEFlvl": 0,
    "AGI": 5,
    "CRT": 25,
    "HIT": 222,
    "DOD": 25,
    "resist": [
      99,
      -50,
      -50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "S.C. 머신건",
        "img": "MGShot",
        "range": 5,
        "AP": 3,
        "description": "머신건 사격으로 $(1) 피해를 줍니다. 대상이 회피 감소 상태면 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "근접 난사",
        "img": "MGShot",
        "range": 1,
        "AP": 3,
        "description": "머신건 근접 사격으로 $(1.5) 피해를 줍니다. 대상이 방어 감소 상태면 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "기동 준비",
        "img": "SelfSpdDeBuff",
        "range": 0,
        "AP": 0,
        "description": "적을 공격하기 전까지 행동력이 감소하며 받는 피해가 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "전투 적응 회로",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 공격력 / 방어력 / 명중 / 회피가 증가합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "칙 기회 포착",
        "img": "DefCounter",
        "range": 0,
        "AP": 0,
        "description": "회피 성공 시, 적의 빈틈을 노려 반격 합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickSP_TU8",
    "name": "칙 스나이퍼",
    "img": "NightChickSP",
    "type": "경장 공격기",
    "info": "엄폐와 위장 능력이 좋음. 빠르게 한 방으로 처치하는 게 좋을 것 같음.<br><br><br>- 발키리",
    "HPbase": 325,
    "HPlvl": 83.5,
    "ATKbase": 120,
    "ATKlvl": 13.5,
    "DEFbase": 30,
    "DEFlvl": 1.5,
    "AGI": 4,
    "CRT": 12.5,
    "HIT": 380,
    "DOD": 55,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "정조준 저격",
        "img": "Snipe",
        "range": 4,
        "AP": 7,
        "description": "보호 효과를 무시하는 저격으로 $(1.5) 피해를 줍니다. 대상이 이동 불가 상태면 정밀 사격으로 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "위장",
        "img": "SelfSpdBuff",
        "range": 6,
        "AP": 4,
        "description": "위장 파장을 발산해 3라운드 동안 회피 / 치명타가 증가하며 받는 피해가 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "대응 저격",
        "img": "DefCounter",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 위장 상태인 경우 반격을 활성화합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Juggernaut_TU4",
    "name": "저거너트",
    "img": "Juggernaut",
    "type": "중장 보호기",
    "info": "성격이 나빠 보이는 철충인 거예요. 공격을 시작하면 끝까지 공격하거든요. 그래서 공중 부대로 유인을 하는 게 좋을 것 같아요. 그 덩치로 다른 철충들을 보호하지 못하게요.<br><br><br>- 블랙 하운드",
    "HPbase": 5000,
    "HPlvl": 205,
    "ATKbase": 100,
    "ATKlvl": 10.5,
    "DEFbase": 325,
    "DEFlvl": 16,
    "AGI": 3.25,
    "CRT": 10,
    "HIT": 150,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "스턴 펀치",
        "img": "MeleeAttack",
        "range": 1,
        "AP": 10,
        "description": "대상을 강타해 $(2.4) 피해를 주고, 일정 확률로 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "몸통 박치기",
        "img": "AssaultAttack",
        "range": 2,
        "AP": 9,
        "description": "대상에게 돌진해 $(1.6) 피해를 주고, 뒤로 1칸 밀어냅니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "방벽 전환",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 사망한 경우, 방어 태세로 전환해 2라운드 동안 행 보호와 열 보호 효과를 활성화합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "방어 프로토콜",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 일정 확률로 방어력이 대폭 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickS_TU3",
    "name": "나이트 칙 실더",
    "img": "NightChickS",
    "type": "경장 보호기",
    "info": "이 자식들 짜증나 방패를 들고 앞을 자꾸 가로막거든? 다행히 머리가 나빠서 바로 뒤만 가로 막지만… 어쨌든 이 녀석들이 방어 자세를 취하기 전에 뒤를 정리해 두라고!<br><br><br>- 보고자 그리폰",
    "HPbase": 350,
    "HPlvl": 65,
    "ATKbase": 60,
    "ATKlvl": 7,
    "DEFbase": 70,
    "DEFlvl": 4,
    "AGI": 3.35,
    "CRT": 5,
    "HIT": 140,
    "DOD": 20,
    "resist": [
      20,
      20,
      20
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "방패 내려치기",
        "img": "MeleeAttack",
        "range": 2,
        "AP": 4,
        "description": "방패로 내리쳐 $(1) 피해를 줍니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칙 방패 방어술",
        "img": "SelfDefBuff",
        "range": 6,
        "AP": 3,
        "description": "방패를 올려 3라운드 동안 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 커버링",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 칙 방패 방어술이 적용된 상태면 바로 뒤에 있는 아군 1기를 보호합니다.",
        "areadata": [
          6
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickSI_SS1",
    "name": "나이트 칙 실더 개",
    "img": "NightChickSI",
    "type": "경장 보호기",
    "info": "일반 칙 실더보다 큰 방패 때문에 뒤의 대상들을 공격하기 위해서는 더 용맹한 정신이 필요하다. 나이트 칙 실더와 헷갈리지 않도록 지휘 콘솔을 반드시 확인해야 함.<br><br><br>- 마리 ",
    "HPbase": 200,
    "HPlvl": 60,
    "ATKbase": 55,
    "ATKlvl": 6.125,
    "DEFbase": 57.5,
    "DEFlvl": 3,
    "AGI": 3.3499999999999996,
    "CRT": 5,
    "HIT": 135,
    "DOD": 20,
    "resist": [
      35,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "방패 강타",
        "img": "MeleeAttack",
        "range": 3,
        "AP": 4,
        "description": "방패로 강타해 $(1.1000000000000001) 피해를 줍니다. 대상이 회피 감소 상태면 일정 확률로 행동 불가로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칙 가드 올리기",
        "img": "ShieldWall",
        "range": 6,
        "AP": 3,
        "description": "3라운드 동안 같은 행의 뒤에 있는 아군을 보호합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "강화 방패",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "방패 장갑이 강화되어 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "위축",
        "img": "TeamAtkDeBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시, 상대 진영에 램파트가 있을 경우 모든 아군의 방어력 / 회피가 감소합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_FABigChick_SS1",
    "name": "풀아머 빅 칙",
    "img": "FABigChick",
    "type": "중장 공격기",
    "info": "빅 칙과는 달라! 빅 칙과는! 뭐로 만든지는 몰라도 장갑이 차원이 다르니 나 같은 대 장갑 요원이 없으면 꽤나 곤란할걸?<br><br><br> - 불가사리 보고함",
    "HPbase": 300,
    "HPlvl": 45,
    "ATKbase": 90,
    "ATKlvl": 10,
    "DEFbase": 35,
    "DEFlvl": 2.25,
    "AGI": 3.25,
    "CRT": 5,
    "HIT": 95,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "칙 중 기관포",
        "img": "MGShot",
        "range": 4,
        "AP": 4,
        "description": "기관포로 $(1.5) 피해를 줍니다. 대상의 방어력을 일정 비율 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "듀얼 칙 캐논",
        "img": "CannonShot",
        "range": 2,
        "AP": 7,
        "description": "캐논포를 연사해 목표 열에 $(1.25) 피해를 줍니다. 피해 감소 효과를 무효화합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 반응 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "반응 장갑으로 인해 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "공포",
        "img": "TeamAtkDeBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시, 상대 진영에 램파트가 있을 경우 모든 아군의 공격력 / 적중이 감소합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Phalangites_SS1",
    "name": "팔랑스",
    "img": "Phalangites",
    "type": "경장 보호기",
    "info": "각이 잡힌 대열로 행군하는 철충입니다. 철충 놈들 중엔 드물게 군기가 들어있지 말입니다. 딱 밀착해서 서로서로를 보호하는 녀석들이니 진형을 아작내는 게 중요하지 말임다.<br><br><br>- 블러디팬서",
    "HPbase": 150,
    "HPlvl": 55,
    "ATKbase": 50,
    "ATKlvl": 5.85,
    "DEFbase": 55,
    "DEFlvl": 2.75,
    "AGI": 3.8,
    "CRT": 10,
    "HIT": 165,
    "DOD": 25,
    "resist": [
      40,
      40,
      40
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "머신건 속사",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "머신건을 발사해 $(1) 피해를 줍니다. 대상이 기동형인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "대열 방어",
        "img": "TeamDefBuff",
        "range": 6,
        "AP": 4,
        "description": "3라운드 동안 같은 열의 아군을 보호하며, 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "밀집 대형",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 같은 열에 인접한 아군에게 피해 감소 효과를 부여합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          8,
          2
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "의기소침",
        "img": "TeamAtkDeBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시, 상대 진영에 콘스탄챠 S2가 있을 경우 모든 아군의 방어력 / 행동력이 감소합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_BigChick_SS1",
    "name": "빅 칙",
    "img": "BigChick",
    "type": "중장 공격기",
    "info": "엄청 큰 나이트 칙이지 말임다! 하는 짓은 나이트 칙이랑 똑같은데 갑빠도 두껍고 총도 더 쎄게 쏘지 말임다. 움직이기 전에 얼른 죽여야 함다!<br><br><br>- 보고자 브라우니지 말임다.",
    "HPbase": 250,
    "HPlvl": 40,
    "ATKbase": 55,
    "ATKlvl": 9.5,
    "DEFbase": 30,
    "DEFlvl": 3,
    "AGI": 3.25,
    "CRT": 5,
    "HIT": 110,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "중 기관총 사격",
        "img": "MGShot",
        "range": 4,
        "AP": 5,
        "description": "중 기관총으로 $(1.2) 피해를 줍니다. 대상이 방어력 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "영거리 중 기관총",
        "img": "MGShot",
        "range": 1,
        "AP": 8,
        "description": "중 기관총 근접 사격으로 $(2) 피해를 줍니다. 대상의 방어력을 일정 비율 무시하며, 방어력 감소 상태인 경우 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "사기 저하",
        "img": "TeamAtkDeBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시, 상대 진영에 콘스탄챠 S2가 있을 경우 모든 아군의 공격력 / 치명타가 감소합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Mammoth_N",
    "name": "매머드",
    "img": "Mammoth",
    "type": "중장 공격기",
    "info": "한 방이 엄청나게 무서운데다 장갑도 두꺼워서 장갑 사이에 치명타를 먹이거나 아니면 관통할 수 있는 무기가 좋아 보이네. 뭐, 못 피하면 죽으니까 조심하라고.<br><br><br>- 보고자 샌드걸",
    "HPbase": 171.072,
    "HPlvl": 42.768,
    "ATKbase": 80,
    "ATKlvl": 10.7217,
    "DEFbase": 24.623999999999995,
    "DEFlvl": 1.8467999999999998,
    "AGI": 3.1,
    "CRT": 5,
    "HIT": 100,
    "DOD": 0,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "직사 포격",
        "img": "CannonShotWide",
        "range": 2,
        "AP": 7,
        "description": "직사 포격으로 목표 대상이 있는 열에 $(1.35) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "2연장 곡사포",
        "img": "CannonShotDelay",
        "range": 6,
        "AP": 9,
        "description": "1라운드 뒤에 착탄하는 곡사 포격으로 목표 지점에 $(2.5) 보호 무시 피해를 줍니다. 목표 지점 주변에는 피해가 50% 감소합니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          0,
          0.75,
          0,
          0.75,
          1,
          0.75,
          0,
          0.75,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "고폭 충격탄",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 적의 방어막과 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_BigChickEX_TU2",
    "name": "시작형 빅 칙",
    "img": "BigChick",
    "type": "중장 공격기",
    "info": "엄청 큰 나이트 칙이지 말임다! 하는 짓은 나이트 칙이랑 똑같은데 갑빠도 두껍고 총도 더 쎄게 쏘지 말임다. 움직이기 전에 얼른 죽여야 함다!<br><br><br>- 보고자 브라우니지 말임다.",
    "HPbase": 2000,
    "HPlvl": 92.5,
    "ATKbase": 100,
    "ATKlvl": 12,
    "DEFbase": 100,
    "DEFlvl": 4.5,
    "AGI": 3.2,
    "CRT": 10,
    "HIT": 125,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "칙 중 기관포 발사",
        "img": "MGShot",
        "range": 4,
        "AP": 5,
        "description": "중 기관총으로 $(1.5) 피해를 줍니다. 대상이 방어력 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "영거리 중 기관포",
        "img": "MGShot",
        "range": 1,
        "AP": 8,
        "description": "중 기관총 근접 사격으로 방어력을 일정 비율 무시하고 $(2.4) 피해를 줍니다. 대상이 방어력 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "근접 조준 사격",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "적 진영에 가까울수록, 라운드 개시 시 적중이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_UnderWatcherSensor_TU2",
    "name": "언더왓쳐 센서",
    "img": "UnderWatcherSensor_B05",
    "type": "중장 보호기",
    "info": "조준용 센서가 달린 파츠네요. 피해를 주거나 파괴하면 공격을 피하기 쉬워질거에요.<br><br><br>- 스카디",
    "HPbase": 24730,
    "HPlvl": 130,
    "ATKbase": 0,
    "ATKlvl": 0,
    "DEFbase": 2315,
    "DEFlvl": 15,
    "AGI": 4.5,
    "CRT": 0,
    "HIT": 999,
    "DOD": 0,
    "resist": [
      50,
      75,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "록 온 센서",
        "img": "Scan",
        "range": 8,
        "AP": 5,
        "description": "목표 대상을 조준해 표식으로 설정한 후, 받는 피해가 증가하며 회피가 감소한 상태로 만듭니다. AP를 감소시키며, 일정 확률로 강화 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "다중 록 온 시스템",
        "img": "Scan",
        "range": 8,
        "AP": 6,
        "description": "목표 대상들을 조준해 표식으로 설정한 후, 받는 피해가 증가하며 회피가 감소한 상태로 만듭니다. 강화 효과를 해제하며, AP를 감소시킵니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "조준 보정 시스템",
        "img": "Scan",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 자신의 현재 HP 비율에 따라 주변 장치에게 적중 증가 효과를 줍니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "최대 출력",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "에너지 충전 중첩이 3 이상이면, 방해 효과를 걸 확률과 회피가 대폭 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "반응 강화 모드",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "HP가 50% 이하가 되면 매 라운드 회피가 증가합니다. 최대 3회까지 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_UnderWatcher_TU2",
    "name": "언더왓쳐",
    "img": "UnderWatcher_B05",
    "type": "중장 보호기",
    "info": "에너지 충전이 완료되면 무시무시한 공격을 할 거예요. 충전을 막기 위해 제네레이터를 공격하는 것도 좋겠네요. 본체는 공격 직후를 노리면 더 많은 타격을 줄 수 있을 것 같네요.<br><br><br>- 스카디",
    "HPbase": 49200,
    "HPlvl": 200,
    "ATKbase": 283,
    "ATKlvl": 13.5,
    "DEFbase": 1605,
    "DEFlvl": 5,
    "AGI": 3.75,
    "CRT": 15,
    "HIT": 175,
    "DOD": 0,
    "resist": [
      50,
      75,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "확산 플라즈마 입자포",
        "img": "WideBeamShot",
        "range": 5,
        "AP": 3,
        "description": "지정 범위에 보호 효과를 무시하고 $(0.5) 피해를 주는 확산 입자포를 발사합니다. 대상이 표식 상태면 피해량이 증가하며, 대상의 방어력을 감소시킵니다.",
        "areadata": [
          7,
          8,
          4,
          5,
          6,
          1,
          2
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "메가 플라즈마 캐논",
        "img": "BeamShot",
        "range": 8,
        "AP": 10,
        "description": "지정 행에 $(2) 피해를 주는 플라즈마 입자포를 발사합니다. 보호 효과를 무시하며, 표식 상태인 대상에게 피해량이 크게 증가합니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "특수 합금 발사구",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 받을 때, 에너지 충전 상태면 높은 확률로 최소 피해만 받습니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "최대 출력",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "에너지 충전 중첩이 4 이상이면, 공격할 때 방어막과 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "시스템 정지",
        "img": "SuiceideBomb",
        "range": 0,
        "AP": 0,
        "description": "사망할 경우, 관련된 모든 시스템이 정지합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_UnderWatcherGenerator_TU2",
    "name": "언더왓쳐 제네레이터",
    "img": "UnderWatcherGenerator_B05",
    "type": "중장 보호기",
    "info": "에너지 공급용 제네레이터네요. 계속 공격해보면 에너지 공급을 멈출 수 있을 것 같네요.<br><br><br>- 스카디",
    "HPbase": 47755,
    "HPlvl": 155,
    "ATKbase": 0,
    "ATKlvl": 0,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 7,
    "CRT": 0,
    "HIT": 999,
    "DOD": 0,
    "resist": [
      50,
      75,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "에너지 충전",
        "img": "SelfAtkBuff",
        "range": 8,
        "AP": 7,
        "description": "각 장치들에게 에너지를 전달해, 공격력과 효과 저항을 증가시키며 받는 피해를 1회 무효화합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          1,
          2,
          3
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "에너지 실드",
        "img": "SelfDefBuff",
        "range": 8,
        "AP": 4,
        "description": "에너지 실드를 전개해 피해를 흡수하는 방어막을 부여하고, 상태 이상을 해제합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "에너지 코팅",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "스킬 사용 시, 받는 공격을 3회 무효화합니다. 3라운드 동안 받는 피해가 감소하며, 효과 저항이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "제네레이터 쇼트",
        "img": "SelfSpdDeBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 높은 확률로 AP가 감소하며 낮은 확률로 쇼트가 생겨 행동 불능이 됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "제네레이터 파괴",
        "img": "SuiceideBomb",
        "range": 0,
        "AP": 0,
        "description": "파괴될 경우, 모든 파츠의 강화 효과가 해제되고 행동 불가 상태가 됩니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_UnderWatcherArm_TU2",
    "name": "언더왓쳐 암",
    "img": "UnderWatcherArm_B05",
    "type": "중장 보호기",
    "info": "언더왓쳐의 공격용 암 파츠네요. 대공 기능이 있는 것 같으니 주의하세요.<br><br><br>- 스카디",
    "HPbase": 25650,
    "HPlvl": 150,
    "ATKbase": 210,
    "ATKlvl": 10,
    "DEFbase": 1763,
    "DEFlvl": 3,
    "AGI": 4.15,
    "CRT": 20,
    "HIT": 200,
    "DOD": 0,
    "resist": [
      50,
      75,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "플라즈마 커터",
        "img": "MeleeAttack",
        "range": 8,
        "AP": 3,
        "description": "플라즈마 커터로 $(1) 피해를 줍니다. 대상이 표식 상태면 피해량이 증가하며, 대상의 방어력을 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "대공 펄스 빔 포",
        "img": "WideBeamShot",
        "range": 8,
        "AP": 5,
        "description": "목표 열에 $(1) 피해를 줍니다. 대상이 기동형이면 피해량이 증가합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "재 조준",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 적중 강화 상태면 적중이 추가로 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "최대 출력",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "에너지 충전 중첩이 5 이상이면, 적중과 치명타가 증가하며 반격합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "긴급 요격 모드",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "자신의 HP가 50% 이하인 경우, 라운드 개시 시 AP가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Legion_TU6",
    "name": "레기온",
    "img": "Legion",
    "type": "경장 지원기",
    "info": "공중의 적만 집요하게 노리니 공중 부대 운용 시 주의해! 구리게 보이는 점착제를 떼느라 이틀이나 고생했어. 그거 묻으면 진짜 아싸처럼 보이니 주의하라고!<br><br><br>- 실피드",
    "HPbase": 400,
    "HPlvl": 72.5,
    "ATKbase": 90,
    "ATKlvl": 8,
    "DEFbase": 35,
    "DEFlvl": 1,
    "AGI": 4.05,
    "CRT": 5,
    "HIT": 245,
    "DOD": 42.5,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "GAU 미니건",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "미니건을 발사해 $(1) 피해를 줍니다. 대상이 기동형인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "점착탄",
        "img": "SlowShot",
        "range": 4,
        "AP": 5,
        "description": "점착탄을 던져 $(0.33) 피해를 줍니다. 적중한 대상을 2라운드 동안 이동 불가 상태로 만들고, 일정 확률로 회피 / 행동력을 감소 시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "경계 태세",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 처치되면  경계 태세로 전환해, 양 옆의 아군의 행동력을 감소시키며 대상의 공격을 지원합니다.",
        "areadata": [
          8,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickM_TU5",
    "name": "나이트 칙 런처",
    "img": "NightChickM",
    "type": "경장 공격기",
    "info": "흔히 볼 수 있는 미사일로 무장한 철충. 무조건 앞으로 돌격하는 모습이 브라우니와 비슷합니다.<br><br><br>- 보고자 레프리콘",
    "HPbase": 276,
    "HPlvl": 62.97500000000001,
    "ATKbase": 67,
    "ATKlvl": 6.7,
    "DEFbase": 68,
    "DEFlvl": 1.515625,
    "AGI": 3.75,
    "CRT": 11.666,
    "HIT": 225,
    "DOD": 42.5,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "미사일 공격",
        "img": "Missile",
        "range": 2,
        "AP": 4,
        "description": "미사일을 발사해 $(1) 피해를 줍니다. 대상이 이동 불가 상태면 직격해 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "미사일 집중 공격",
        "img": "Missile",
        "range": 1,
        "AP": 6,
        "description": "미사일 근접 사격으로 $(1.2) 피해를 줍니다. 대상이 이동 불가 상태면 직격해 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "목표 록온",
        "img": "Snipe",
        "range": 0,
        "AP": 0,
        "description": "대기 시, 주변의 적을 록온해 2라운드 동안 사거리가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickQM_N",
    "name": "칙 쿼터마스터",
    "img": "NightChickQM",
    "type": "경장 지원기",
    "info": "철충의 보급 기체네요. 공격 저지 능력이 뛰어나니 주력 공격기를 잘 보호해야 장기전을 방지할 수 있어요.<br><br><br>- 실키",
    "HPbase": 288,
    "HPlvl": 74.4,
    "ATKbase": 60,
    "ATKlvl": 6,
    "DEFbase": 70,
    "DEFlvl": 3,
    "AGI": 4,
    "CRT": 5,
    "HIT": 250,
    "DOD": 20,
    "resist": [
      20,
      20,
      20
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "공격 방해",
        "img": "Shot",
        "range": 4,
        "AP": 5,
        "description": "대상에게 $(1.2) 피해를 주며, 2라운드 동안 대상의 공격력 / 적중 / 치명타를 낮춥니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "출력 강화",
        "img": "TeamAtkBuff",
        "range": 3,
        "AP": 7,
        "description": "주변 아군의 출력을 강화해 공격력 / 적중 / 치명타를 높입니다. 자신은 행동력이 증가합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "일제 공격 지원",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 일정 확률로 무장 보급을 받은 아군의 공격을 지원합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "숙련된 칙 웅크리기",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "HP가 50% 이하가 되면 받는 피해가 감소하며 회피가 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "과전류 방출",
        "img": "TeamAtkDeBuff",
        "range": 0,
        "AP": 0,
        "description": "사망 시, 모든 아군의 행동력 / 공격력이 감소합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChick_TU5",
    "name": "나이트 칙",
    "img": "NightChick",
    "type": "경장 공격기",
    "info": "하아… 이 예쁜 애의 이름은 나이트 칙입니당. 예쁘지만 더 예쁜 폴른이를 잡아먹은 무서운 녀석들이에용. 쉬지않고 기관총을 난사하니 주의해 주세용~!<br><br><br>- 보고자 그렘린입니당! ",
    "HPbase": 255,
    "HPlvl": 56.650000000000006,
    "ATKbase": 63,
    "ATKlvl": 6.3,
    "DEFbase": 54,
    "DEFlvl": 1.77001953125,
    "AGI": 4.05,
    "CRT": 5,
    "HIT": 200,
    "DOD": 32.5,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "머신건 견제 사격",
        "img": "ARShot",
        "range": 3,
        "AP": 4,
        "description": "머신건 견제 사격으로 $(1) 피해를 줍니다. 일정 확률로 2라운드 동안 대상의 회피를 낮츱니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "머신건 연사",
        "img": "ARShot",
        "range": 2,
        "AP": 6,
        "description": "머신건을 조준 사격해 $(1.2) 피해를 줍니다. 대상이 회피 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "정조준",
        "img": "Snipe",
        "range": 0,
        "AP": 0,
        "description": "대기 시, 적을 조준해 2라운드 동안 적중과 사거리가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_LegionSP_N",
    "name": "레기온 스나이퍼",
    "img": "LegionSP",
    "type": "경장 공격기",
    "info": "적의 빈틈을 노리는 용의주도한 개체입니다. 대물 저격총을 가지고 있으니 중장갑 전투원을 운용할 때는 주의해주세요.<br><br><br>- 팬텀",
    "HPbase": 216,
    "HPlvl": 58.5,
    "ATKbase": 73,
    "ATKlvl": 7.3,
    "DEFbase": 53,
    "DEFlvl": 2.0625,
    "AGI": 3.9,
    "CRT": 7.5,
    "HIT": 175,
    "DOD": 20,
    "resist": [
      20,
      20,
      20
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "점착탄 난사",
        "img": "TeamSpdDeBuff",
        "range": 4,
        "AP": 5,
        "description": "점착탄을 난사해 $(0.01) 피해를 주고, 대상들의 회피를 낮추며 회피 강화 효과를 해제합니다. 적중 대상은 이동 불가 상태가 되며, 자신은 적중과 치명타가 증가합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "대장갑 정밀 저격",
        "img": "Snipe",
        "range": 5,
        "AP": 7,
        "description": "대장갑 정밀 저격으로 $(1.5) 방어 관통 피해를 줍니다. 대상이 중장형인 경우, 피해량이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "위장 홀로그램 발산",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "위장 홀로그램을 발산해, 적 진영과 멀수록 회피가 증가합니다. 해당 효과는 공격 시, 해당 라운드에는 일시적으로 해제됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickDE_TU5",
    "name": "나이트 칙 디텍터",
    "img": "NightChickDE",
    "type": "경장 지원기",
    "info": "그 아이는 별로 위험한 아인 아니거든? 근데 자꾸 우리를 방해하는 공격을 하니까 다른 애들이랑 있으면 주의해야 하거든? 맞으면 다른 철충한테 지원 요청하는 못된 아이니까 혼내줘야행! 누나 보고 있을께~!<br><br><br>- 예쁜 누나 포츈이 보고해용~!",
    "HPbase": 305,
    "HPlvl": 68,
    "ATKbase": 54,
    "ATKlvl": 5.4,
    "DEFbase": 56,
    "DEFlvl": 2.1875000000000004,
    "AGI": 4.2,
    "CRT": 5,
    "HIT": 315,
    "DOD": 80,
    "resist": [
      30,
      30,
      30
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "약점 포착",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "목표를 공격 대상으로 지정해 $(1) 피해를 주고, 2라운드 동안 표식 상태로 만듭니다. 표식 상태인 대상인 추가 피해를 받으며, 회피가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "섬광 탄막",
        "img": "Beam",
        "range": 4,
        "AP": 7,
        "description": "지정한 위치에 섬광탄을 발사해 2라운드 동안 적중을 낮추고, 대상의 AP를 감소시킵니다.",
        "areadata": [
          4,
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "레이더 공유",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 일정 확률로 인접한 아군에게 경보를 울리며 전황을 공유합니다. 레이더를 공유 받은 경우, AP가 증가하며 2라운드 동안 사거리와 적중률이 증가합니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "레이더 재밍",
        "img": "TeamAtkDeBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 사망하는 경우, 주변 철충의 센서에 오류를 일으킵니다. 오류가 일어난 대상들은 적중이 크게 감소하며, 적중 강화 효과가 해제됩니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickSI_TU5",
    "name": "나이트 칙 실더 개",
    "img": "NightChickSI",
    "type": "경장 보호기",
    "info": "일반 칙 실더보다 큰 방패 때문에 뒤의 대상들을 공격하기 위해서는 더 용맹한 정신이 필요하다. 나이트 칙 실더와 헷갈리지 않도록 지휘 콘솔을 반드시 확인해야 함.<br><br><br>- 마리 ",
    "HPbase": 396,
    "HPlvl": 87.4,
    "ATKbase": 60,
    "ATKlvl": 6,
    "DEFbase": 97,
    "DEFlvl": 4.12,
    "AGI": 3.8,
    "CRT": 5,
    "HIT": 185,
    "DOD": 40,
    "resist": [
      35,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "방패 강타",
        "img": "MeleeAttack",
        "range": 3,
        "AP": 4,
        "description": "방패로 강타해 $(1.1000000000000001) 피해를 줍니다. 대상이 회피 감소 상태면 일정 확률로 행동 불가로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칙 가드 올리기",
        "img": "ShieldWall",
        "range": 6,
        "AP": 3,
        "description": "3라운드 동안 같은 행의 뒤에 있는 아군을 보호합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "강화 방패",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "방패 장갑이 강화되어 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ProgramMobTS_N",
    "name": "철충 사념체 (보병)",
    "img": "ProgramMobTS",
    "type": "경장 지원기",
    "info": "<교전 기록 없음>",
    "HPbase": 331,
    "HPlvl": 77.7,
    "ATKbase": 63,
    "ATKlvl": 6.3,
    "DEFbase": 82,
    "DEFlvl": 3.37,
    "AGI": 3.95,
    "CRT": 5,
    "HIT": 200,
    "DOD": 30,
    "resist": [
      20,
      20,
      20
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "집중 견제",
        "img": "ARShot",
        "range": 4,
        "AP": 5,
        "description": "집중 견제 사격으로 $(1.1000000000000001) 피해를 주고, 대상의 공격력 / 적중 / 회피를 낮추며 받는 피해 증가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "냉각기 조준",
        "img": "ARShot",
        "range": 3,
        "AP": 7,
        "description": "조준 사격으로 $(1.5) 피해를 줍니다. 대상이 로봇인 경우, 냉각 장치를 파괴해 화염 저항과 행동력을 낮춥니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "상황 전파",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "아군 사망 시, 주변에 있는 아군에게 상황을 전파해 AP와 공격력을 상승시킵니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ProgramMobTN_N",
    "name": "철충 사념체 (저격병)",
    "img": "ProgramMobTN",
    "type": "경장 공격기",
    "info": "<교전 기록 없음>",
    "HPbase": 288,
    "HPlvl": 68.75,
    "ATKbase": 78,
    "ATKlvl": 7.8,
    "DEFbase": 52,
    "DEFlvl": 2.3375000000000004,
    "AGI": 3.9,
    "CRT": 7.5,
    "HIT": 175,
    "DOD": 15,
    "resist": [
      -20,
      0,
      30
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "표적 제거",
        "img": "Snipe",
        "range": 4,
        "AP": 6,
        "description": "저격으로 $(1.2) 피해를 줍니다. 대상이 표식 상태면 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "쇼크탄 사격",
        "img": "Shock",
        "range": 4,
        "AP": 7,
        "attr": "electric",
        "description": "쇼크탄 저격으로 $(1) 전기 속성 피해를 줍니다. 대상이 냉기 저항 감소 상태면 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "전열 지원 사격",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 자신과 같은 행 앞에 배치된 아군의 AP를 증가시키며 일정 확률로 대상의 공격을 지원합니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "대응 사격",
        "img": "DefCounter",
        "range": 0,
        "AP": 0,
        "description": "아군 사망 시, 해당 라운드 동안에는 반격합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ProgramMobMT_N",
    "name": "철충 사념체 (호위기)",
    "img": "ProgramMobMT",
    "type": "기동 보호기",
    "info": "<교전 기록 없음>",
    "HPbase": 684,
    "HPlvl": 64.8,
    "ATKbase": 60,
    "ATKlvl": 6,
    "DEFbase": 57,
    "DEFlvl": 2.1,
    "AGI": 4.2,
    "CRT": 7.5,
    "HIT": 150,
    "DOD": 20,
    "resist": [
      -20,
      0,
      30
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "냉각탄 사격",
        "img": "IceShot",
        "range": 3,
        "AP": 5,
        "attr": "ice",
        "description": "냉각탄 사격으로 $(0.7) 냉기 속성 피해를 주고, 대상의 냉기 저항을 낮춥니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "대 레이더 체프",
        "img": "MultiMissile",
        "range": 2,
        "AP": 7,
        "description": "지정 범위에 챼프를 살포해 2라운드 동안 범위 내 아군의 회피 / 행동력을 증가시키며 받는 피해를 감소시킵니다.",
        "areadata": [
          8,
          9,
          5,
          6
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "호위 대형",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시, 3라운드 동안 인접한 아군을 보호하며 적중을 증가시킵니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ProgramMobTT_N",
    "name": "철충 사념체 (장갑병)",
    "img": "ProgramMobTT",
    "type": "경장 보호기",
    "info": "<교전 기록 없음>",
    "HPbase": 540,
    "HPlvl": 93.9,
    "ATKbase": 56,
    "ATKlvl": 5.6,
    "DEFbase": 120,
    "DEFlvl": 5.25,
    "AGI": 3.85,
    "CRT": 7.5,
    "HIT": 150,
    "DOD": 15,
    "resist": [
      20,
      20,
      20
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "제압 사격",
        "img": "MultiMissile",
        "range": 3,
        "AP": 5,
        "description": "제압 사격으로 $(1.2) 피해를 주고 표식으로 설정해 받는 피해를 증가시킵니다. 대상의 AP와 행동력을 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "밀착 호위",
        "img": "Scan",
        "range": 6,
        "AP": 5,
        "description": "3라운드 동안 대상 아군을 보호하며 대상의 AP를 증가시킵니다. 자신은 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "경계 강화",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 자신의 HP가 50% 이하면 행동력이 증가하며 반격합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ProgramMobMN_N",
    "name": "철충 사념체 (폭격기)",
    "img": "ProgramMobMN",
    "type": "기동 공격기",
    "info": "<교전 기록 없음>",
    "HPbase": 489,
    "HPlvl": 45.3,
    "ATKbase": 78,
    "ATKlvl": 7.7,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.3,
    "CRT": 7.5,
    "HIT": 150,
    "DOD": 37.5,
    "resist": [
      30,
      0,
      -20
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "작열 미사일",
        "img": "Missile",
        "range": 3,
        "AP": 6,
        "description": "미사일로 $(1.1000000000000001) 피해를 줍니다. 대상의 방어력을 일정 비율 무시하며, 대상이 화염 저항 감소 상태면 일정 확률로 점화 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "소이탄 폭격",
        "img": "AirStrike",
        "range": 2,
        "AP": 9,
        "attr": "fire",
        "description": "목표 범위에 $(1) 화염 속성 피해를 줍니다. 대상이 표식 상태면 피해량이 증가합니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "정밀 레이더",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 적중 / 회피가 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "지상 감지 시스템",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 일정 확률로 경장 / 중장형 적에게 주는 피해가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ProgramMobMS_N",
    "name": "철충 사념체 (정찰기)",
    "img": "ProgramMobMS",
    "type": "기동 지원기",
    "info": "<교전 기록 없음>",
    "HPbase": 288,
    "HPlvl": 51.8,
    "ATKbase": 67,
    "ATKlvl": 6.7,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.15,
    "CRT": 5,
    "HIT": 225,
    "DOD": 45,
    "resist": [
      20,
      20,
      20
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "지향 사격",
        "img": "MultiMissile",
        "range": 3,
        "AP": 8,
        "description": "기총 난사로 $(1) 피해를 주고, 대상들을 표식으로 설정해 받는 피해를 증가시킵니다. 대상의 행동력과 회피를 감소시키며, 일정 확률로 피해 감소 효과를 해제합니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "다연장 재밍 미사일",
        "img": "Scan",
        "range": 3,
        "AP": 7,
        "description": "재밍 미사일로 $(0.9) 피해를 주고, 대상의 공격력 / 적중 / 치명타를 낮춥니다. 일정 확률로 대상에게 적용된 공격력 강화 효과를 해제합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "긴급 경보",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 주변에 HP가 33% 이하인 아군이 있으면 대상의 AP와 회피를 증가시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "공격 분석",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 공격을 분석해 해당 라운드 동안 회피가 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "경보 오작동",
        "img": "TeamAtkDeBuff",
        "range": 0,
        "AP": 0,
        "description": "사망 시, 레이더 망에 오류가 발생해 모든 아군의 적중 / 회피가 감소합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChick_TU6",
    "name": "나이트 칙",
    "img": "NightChick",
    "type": "경장 공격기",
    "info": "하아… 이 예쁜 애의 이름은 나이트 칙입니당. 예쁘지만 더 예쁜 폴른이를 잡아먹은 무서운 녀석들이에용. 쉬지않고 기관총을 난사하니 주의해 주세용~!<br><br><br>- 보고자 그렘린입니당! ",
    "HPbase": 307,
    "HPlvl": 66.825,
    "ATKbase": 70,
    "ATKlvl": 7,
    "DEFbase": 64,
    "DEFlvl": 1.89208984375,
    "AGI": 4.05,
    "CRT": 5,
    "HIT": 225,
    "DOD": 40,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "머신건 견제 사격",
        "img": "ARShot",
        "range": 3,
        "AP": 4,
        "description": "머신건 견제 사격으로 $(1) 피해를 줍니다. 일정 확률로 2라운드 동안 대상의 회피를 낮츱니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "머신건 연사",
        "img": "ARShot",
        "range": 2,
        "AP": 6,
        "description": "머신건을 조준 사격해 $(1.2) 피해를 줍니다. 대상이 회피 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "정조준",
        "img": "Snipe",
        "range": 0,
        "AP": 0,
        "description": "대기 시, 적을 조준해 2라운드 동안 적중과 사거리가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickDE_TU6",
    "name": "나이트 칙 디텍터",
    "img": "NightChickDE",
    "type": "경장 지원기",
    "info": "그 아이는 별로 위험한 아인 아니거든? 근데 자꾸 우리를 방해하는 공격을 하니까 다른 애들이랑 있으면 주의해야 하거든? 맞으면 다른 철충한테 지원 요청하는 못된 아이니까 혼내줘야행! 누나 보고 있을께~!<br><br><br>- 예쁜 누나 포츈이 보고해용~!",
    "HPbase": 360,
    "HPlvl": 80.9,
    "ATKbase": 56,
    "ATKlvl": 5.6,
    "DEFbase": 63,
    "DEFlvl": 2.55859375,
    "AGI": 4.2,
    "CRT": 5,
    "HIT": 355,
    "DOD": 92.5,
    "resist": [
      35,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "약점 포착",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "목표를 공격 대상으로 지정해 $(1) 피해를 주고, 2라운드 동안 표식 상태로 만듭니다. 표식 상태인 대상인 추가 피해를 받으며, 회피가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "섬광 탄막",
        "img": "Beam",
        "range": 4,
        "AP": 7,
        "description": "지정한 위치에 섬광탄을 발사해 2라운드 동안 적중을 낮추고, 대상의 AP를 감소시킵니다.",
        "areadata": [
          4,
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "레이더 공유",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 일정 확률로 인접한 아군에게 경보를 울리며 전황을 공유합니다. 레이더를 공유 받은 경우, AP가 증가하며 2라운드 동안 사거리와 적중률이 증가합니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "레이더 재밍",
        "img": "TeamAtkDeBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 사망하는 경우, 주변 철충의 센서에 오류를 일으킵니다. 오류가 일어난 대상들은 적중이 크게 감소하며, 적중 강화 효과가 해제됩니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Tortoise_N",
    "name": "토터스",
    "img": "Tortoise",
    "type": "중장 보호기",
    "info": "장갑이 활성화 되었을 땐 유효 피해를 주기 힘들어요! 장갑을 비활성화 시킨 후에 한 번에 해치워야 해요!<br><br><br>- 켈베로스",
    "HPbase": 2880,
    "HPlvl": 100.4,
    "ATKbase": 63,
    "ATKlvl": 6.3,
    "DEFbase": 195,
    "DEFlvl": 9.75,
    "AGI": 3.6,
    "CRT": 5,
    "HIT": 150,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "프래그 샷건",
        "img": "ShotGun",
        "range": 3,
        "AP": 6,
        "description": "샷건을 발사해 $(1.2) 피해를 줍니다. 자신이 전열이면 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "장갑 장착",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 8,
        "description": "외장형 반응 장갑을 장착해 전투 속행 효과를 얻으며, 방어력과 모든 속성 저항이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "외장형 반응 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 받는 경우, 3회까진 최소 피해만 받으며 효과 저항이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "엄폐 지원",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 같은 행의 뒤에 배치된 아군을 보호합니다. 해당 효과는 자신이 스킬을 사용하면 해제됩니다.",
        "areadata": [
          4,
          5,
          6
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickSI_TU6",
    "name": "나이트 칙 실더 개",
    "img": "NightChickSI",
    "type": "경장 보호기",
    "info": "일반 칙 실더보다 큰 방패 때문에 뒤의 대상들을 공격하기 위해서는 더 용맹한 정신이 필요하다. 나이트 칙 실더와 헷갈리지 않도록 지휘 콘솔을 반드시 확인해야 함.<br><br><br>- 마리 ",
    "HPbase": 468,
    "HPlvl": 106.8,
    "ATKbase": 63,
    "ATKlvl": 6.3,
    "DEFbase": 112,
    "DEFlvl": 4.87,
    "AGI": 3.8,
    "CRT": 5,
    "HIT": 215,
    "DOD": 47.5,
    "resist": [
      35,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "방패 강타",
        "img": "MeleeAttack",
        "range": 3,
        "AP": 4,
        "description": "방패로 강타해 $(1.1000000000000001) 피해를 줍니다. 대상이 회피 감소 상태면 일정 확률로 행동 불가로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칙 가드 올리기",
        "img": "ShieldWall",
        "range": 6,
        "AP": 3,
        "description": "3라운드 동안 같은 행의 뒤에 있는 아군을 보호합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "강화 방패",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "방패 장갑이 강화되어 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ProgramMobAS_N",
    "name": "철충 사념체 (돌격병)",
    "img": "ProgramMobAS",
    "type": "중장 지원기",
    "info": "<교전 기록 없음>",
    "HPbase": 612,
    "HPlvl": 84.2,
    "ATKbase": 65,
    "ATKlvl": 6.4,
    "DEFbase": 135,
    "DEFlvl": 5.787281249999999,
    "AGI": 3.55,
    "CRT": 5,
    "HIT": 200,
    "DOD": 22.5,
    "resist": [
      -20,
      0,
      30
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "스턴 스파이크",
        "img": "MultiMissile",
        "range": 3,
        "AP": 6,
        "attr": "electric",
        "description": "대상에게 $(0.9) 전기 속성 피해를 줍니다. 대상이 냉기 저항 감소 상태면 감전시켜 지속 전기 피해를 줍니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "파일 벙커 드라이브",
        "img": "Scan",
        "range": 2,
        "AP": 9,
        "description": "파일 벙커로 대상에게 $(1.8) 피해를 주며, 대상을 뒤로 밉니다. 대상에게 적용 중인 모든 보호효과를 해제하며, 표식 상태면 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "노즐 강화",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "경장형에게 주는 피해가 증가하며, 피해 감소 효과와 방어막을 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "전열 돌파",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 일정 확률로 같은 열에 인접한 아군의 공격을 지원합니다.",
        "areadata": [
          8,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ProgramMobTT_TU2",
    "name": "철충 사념체 (장갑병)",
    "img": "ProgramMobTT",
    "type": "경장 보호기",
    "info": "<교전 기록 없음>",
    "HPbase": 593,
    "HPlvl": 100.4,
    "ATKbase": 60,
    "ATKlvl": 6,
    "DEFbase": 142,
    "DEFlvl": 6.37,
    "AGI": 3.85,
    "CRT": 10,
    "HIT": 175,
    "DOD": 15,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "제압 사격",
        "img": "MultiMissile",
        "range": 3,
        "AP": 5,
        "description": "제압 사격으로 $(1.2) 피해를 주고 표식으로 설정해 받는 피해를 증가시킵니다. 대상의 AP와 행동력을 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "밀착 호위",
        "img": "Scan",
        "range": 6,
        "AP": 5,
        "description": "3라운드 동안 대상 아군을 보호하며 대상의 AP를 증가시킵니다. 자신은 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "경계 강화",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 자신의 HP가 50% 이하면 행동력이 증가하며 반격합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ProgramMobMN_TU2",
    "name": "철충 사념체 (폭격기)",
    "img": "ProgramMobMN",
    "type": "기동 공격기",
    "info": "<교전 기록 없음>",
    "HPbase": 518,
    "HPlvl": 51.8,
    "ATKbase": 84,
    "ATKlvl": 8.3,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.3,
    "CRT": 10,
    "HIT": 175,
    "DOD": 50,
    "resist": [
      50,
      0,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "작열 미사일",
        "img": "Missile",
        "range": 3,
        "AP": 6,
        "description": "미사일로 $(1.1000000000000001) 피해를 줍니다. 대상의 방어력을 일정 비율 무시하며, 대상이 화염 저항 감소 상태면 일정 확률로 점화 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "소이탄 폭격",
        "img": "AirStrike",
        "range": 2,
        "AP": 9,
        "attr": "fire",
        "description": "목표 범위에 $(1) 화염 속성 피해를 줍니다. 대상이 표식 상태면 피해량이 증가합니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "정밀 레이더",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 적중 / 회피가 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "지상 감지 시스템",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 일정 확률로 경장 / 중장형 적에게 주는 피해가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ProgramMobMS_TU2",
    "name": "철충 사념체 (정찰기)",
    "img": "ProgramMobMS",
    "type": "기동 지원기",
    "info": "<교전 기록 없음>",
    "HPbase": 324,
    "HPlvl": 58.3,
    "ATKbase": 70,
    "ATKlvl": 7,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.15,
    "CRT": 5,
    "HIT": 250,
    "DOD": 60,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "지향 사격",
        "img": "MultiMissile",
        "range": 3,
        "AP": 8,
        "description": "기총 난사로 $(1) 피해를 주고, 대상들을 표식으로 설정해 받는 피해를 증가시킵니다. 대상의 행동력과 회피를 감소시키며, 일정 확률로 피해 감소 효과를 해제합니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "다연장 재밍 미사일",
        "img": "Scan",
        "range": 3,
        "AP": 7,
        "description": "재밍 미사일로 $(0.9) 피해를 주고, 대상의 공격력 / 적중 / 치명타를 낮춥니다. 일정 확률로 대상에게 적용된 공격력 강화 효과를 해제합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "긴급 경보",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 주변에 HP가 33% 이하인 아군이 있으면 대상의 AP와 회피를 증가시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "공격 분석",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 공격을 분석해 해당 라운드 동안 회피가 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "경보 오작동",
        "img": "TeamAtkDeBuff",
        "range": 0,
        "AP": 0,
        "description": "사망 시, 레이더 망에 오류가 발생해 모든 아군의 적중 / 회피가 감소합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ProgramMobAN_TU2",
    "name": "철충 사념체 (포병)",
    "img": "ProgramMobAN",
    "type": "중장 공격기",
    "info": "<교전 기록 없음>",
    "HPbase": 619,
    "HPlvl": 97.2,
    "ATKbase": 104,
    "ATKlvl": 10.4,
    "DEFbase": 168,
    "DEFlvl": 7.87,
    "AGI": 3.55,
    "CRT": 15,
    "HIT": 200,
    "DOD": 10,
    "resist": [
      50,
      0,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "122mm APFSDS",
        "img": "CannonShot",
        "range": 5,
        "AP": 10,
        "description": "포격으로 $(1.8) 피해를 줍니다. 대상의 방어력을 일정 비율 무시하며, 공격기인 경우 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "확산형 고폭탄",
        "img": "CannonShotWide",
        "range": 4,
        "AP": 9,
        "attr": "fire",
        "description": "확산 포격으로 무시하고 $(1) 화염 속성 피해를 줍니다. 대상이 표식 상태면 피해 감소 효과를 해제합니다.",
        "areadata": [
          7,
          4,
          5,
          1
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "연계 포격",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "적 처치 시, AP가 증가하며 다음 공격까지 공격력이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "핀 포인트 포격",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 전열에 있으면 적의 방어막과 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "집중 포격 대열",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 같은 열에 인접한 아군의 공격력 / 치명타를 상승시킵니다.",
        "areadata": [
          8,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ProgramMobMT_TU2",
    "name": "철충 사념체 (호위기)",
    "img": "ProgramMobMT",
    "type": "기동 보호기",
    "info": "<교전 기록 없음>",
    "HPbase": 756,
    "HPlvl": 77.7,
    "ATKbase": 63,
    "ATKlvl": 6.3,
    "DEFbase": 60,
    "DEFlvl": 2.4,
    "AGI": 4.2,
    "CRT": 10,
    "HIT": 175,
    "DOD": 25,
    "resist": [
      -25,
      0,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "냉각탄 사격",
        "img": "IceShot",
        "range": 3,
        "AP": 5,
        "attr": "ice",
        "description": "냉각탄 사격으로 $(0.7) 냉기 속성 피해를 주고, 대상의 냉기 저항을 낮춥니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "대 레이더 체프",
        "img": "MultiMissile",
        "range": 2,
        "AP": 7,
        "description": "지정 범위에 챼프를 살포해 2라운드 동안 범위 내 아군의 회피 / 행동력을 증가시키며 받는 피해를 감소시킵니다.",
        "areadata": [
          8,
          9,
          5,
          6
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "호위 대형",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시, 3라운드 동안 인접한 아군을 보호하며 적중을 증가시킵니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ProgramMobTS_TU2",
    "name": "철충 사념체 (보병)",
    "img": "ProgramMobTS",
    "type": "경장 지원기",
    "info": "<교전 기록 없음>",
    "HPbase": 345,
    "HPlvl": 84.2,
    "ATKbase": 67,
    "ATKlvl": 6.7,
    "DEFbase": 86,
    "DEFlvl": 3.56,
    "AGI": 3.95,
    "CRT": 5,
    "HIT": 225,
    "DOD": 30,
    "resist": [
      30,
      30,
      30
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "집중 견제",
        "img": "ARShot",
        "range": 4,
        "AP": 5,
        "description": "집중 견제 사격으로 $(1.1000000000000001) 피해를 주고, 대상의 공격력 / 적중 / 회피를 낮추며 받는 피해 증가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "냉각기 조준",
        "img": "ARShot",
        "range": 3,
        "AP": 7,
        "description": "조준 사격으로 $(1.5) 피해를 줍니다. 대상이 로봇인 경우, 냉각 장치를 파괴해 화염 저항과 행동력을 낮춥니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "상황 전파",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "아군 사망 시, 주변에 있는 아군에게 상황을 전파해 AP와 공격력을 상승시킵니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ProgramMobAS_TU2",
    "name": "철충 사념체 (돌격병)",
    "img": "ProgramMobAS",
    "type": "중장 지원기",
    "info": "<교전 기록 없음>",
    "HPbase": 648,
    "HPlvl": 90.7,
    "ATKbase": 69,
    "ATKlvl": 6.9,
    "DEFbase": 142,
    "DEFlvl": 6.1045099999999985,
    "AGI": 3.55,
    "CRT": 5,
    "HIT": 225,
    "DOD": 27.5,
    "resist": [
      -25,
      0,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "스턴 스파이크",
        "img": "MultiMissile",
        "range": 3,
        "AP": 6,
        "attr": "electric",
        "description": "대상에게 $(0.9) 전기 속성 피해를 줍니다. 대상이 냉기 저항 감소 상태면 감전시켜 지속 전기 피해를 줍니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "파일 벙커 드라이브",
        "img": "Scan",
        "range": 2,
        "AP": 9,
        "description": "파일 벙커로 대상에게 $(1.8) 피해를 주며, 대상을 뒤로 밉니다. 대상에게 적용 중인 모든 보호효과를 해제하며, 표식 상태면 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "노즐 강화",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "경장형에게 주는 피해가 증가하며, 피해 감소 효과와 방어막을 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "전열 돌파",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 일정 확률로 같은 열에 인접한 아군의 공격을 지원합니다.",
        "areadata": [
          8,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ProgramMobTN_TU2",
    "name": "철충 사념체 (저격병)",
    "img": "ProgramMobTN",
    "type": "경장 공격기",
    "info": "<교전 기록 없음>",
    "HPbase": 324,
    "HPlvl": 76.875,
    "ATKbase": 84,
    "ATKlvl": 8.4,
    "DEFbase": 56,
    "DEFlvl": 2.575,
    "AGI": 3.9,
    "CRT": 10,
    "HIT": 200,
    "DOD": 15,
    "resist": [
      -25,
      0,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "표적 제거",
        "img": "Snipe",
        "range": 4,
        "AP": 6,
        "description": "저격으로 $(1.2) 피해를 줍니다. 대상이 표식 상태면 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "쇼크탄 사격",
        "img": "Shock",
        "range": 4,
        "AP": 7,
        "attr": "electric",
        "description": "쇼크탄 저격으로 $(1) 전기 속성 피해를 줍니다. 대상이 냉기 저항 감소 상태면 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "전열 지원 사격",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 자신과 같은 행 앞에 배치된 아군의 AP를 증가시키며 일정 확률로 대상의 공격을 지원합니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "대응 사격",
        "img": "DefCounter",
        "range": 0,
        "AP": 0,
        "description": "아군 사망 시, 해당 라운드 동안에는 반격합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ProgramMobAT_TU2",
    "name": "철충 사념체 (중장갑병)",
    "img": "ProgramMobAT",
    "type": "중장 보호기",
    "info": "<교전 기록 없음>",
    "HPbase": 5400,
    "HPlvl": 126.3,
    "ATKbase": 73,
    "ATKlvl": 7.3,
    "DEFbase": 262,
    "DEFlvl": 11.62,
    "AGI": 3.5,
    "CRT": 10,
    "HIT": 175,
    "DOD": 0,
    "resist": [
      30,
      30,
      30
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "2연장 속사포",
        "img": "MGShot",
        "range": 3,
        "AP": 6,
        "description": "기관포로 $(1.2) 피해를 주고, 대상이 표식 상태인 경우 일정 확률로 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "충격탄 발사",
        "img": "CannonShot",
        "range": 4,
        "AP": 9,
        "description": "충격탄을 발사해 $(1.8) 피해를 주고, 대상의 행동력을 감소시킵니다. 일정 확률로 대상에게 걸려있는 강화 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "내성 처리",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 모든 속성 저항과 상태 이상 저항이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "특수 반응 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "HP가 50% 이하인 경우, 피격 시 일정 확률로 방어력이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "공격 대열 보호",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "같은 열의 아군을 보호하며, 자신과 같은 행의 뒤에 배치된 아군이 받는 피해를 감소시킵니다.",
        "areadata": [
          4,
          5,
          6
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ProgramMobAN_N",
    "name": "철충 사념체 (포병)",
    "img": "ProgramMobAN",
    "type": "중장 공격기",
    "info": "<교전 기록 없음>",
    "HPbase": 590,
    "HPlvl": 90.7,
    "ATKbase": 97,
    "ATKlvl": 9.7,
    "DEFbase": 150,
    "DEFlvl": 7.5,
    "AGI": 3.55,
    "CRT": 12.5,
    "HIT": 175,
    "DOD": 10,
    "resist": [
      30,
      0,
      -20
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "122mm APFSDS",
        "img": "CannonShot",
        "range": 5,
        "AP": 10,
        "description": "포격으로 $(1.8) 피해를 줍니다. 대상의 방어력을 일정 비율 무시하며, 공격기인 경우 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "확산형 고폭탄",
        "img": "CannonShotWide",
        "range": 4,
        "AP": 9,
        "attr": "fire",
        "description": "확산 포격으로 무시하고 $(1) 화염 속성 피해를 줍니다. 대상이 표식 상태면 피해 감소 효과를 해제합니다.",
        "areadata": [
          7,
          4,
          5,
          1
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "연계 포격",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "적 처치 시, AP가 증가하며 다음 공격까지 공격력이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "핀 포인트 포격",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 전열에 있으면 적의 방어막과 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "집중 포격 대열",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 같은 열에 인접한 아군의 공격력 / 치명타를 상승시킵니다.",
        "areadata": [
          8,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ProgramMobAT_N",
    "name": "철충 사념체 (중장갑병)",
    "img": "ProgramMobAT",
    "type": "중장 보호기",
    "info": "<교전 기록 없음>",
    "HPbase": 4680,
    "HPlvl": 119.8,
    "ATKbase": 67,
    "ATKlvl": 6.7,
    "DEFbase": 225,
    "DEFlvl": 11.25,
    "AGI": 3.5,
    "CRT": 7.5,
    "HIT": 150,
    "DOD": 0,
    "resist": [
      20,
      20,
      20
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "2연장 속사포",
        "img": "MGShot",
        "range": 3,
        "AP": 6,
        "description": "기관포로 $(1.2) 피해를 주고, 대상이 표식 상태인 경우 일정 확률로 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "충격탄 발사",
        "img": "CannonShot",
        "range": 4,
        "AP": 9,
        "description": "충격탄을 발사해 $(1.8) 피해를 주고, 대상의 행동력을 감소시킵니다. 일정 확률로 대상에게 걸려있는 강화 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "내성 처리",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 모든 속성 저항과 상태 이상 저항이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "특수 반응 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "HP가 50% 이하인 경우, 피격 시 일정 확률로 방어력이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "공격 대열 보호",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "같은 열의 아군을 보호하며, 자신과 같은 행의 뒤에 배치된 아군이 받는 피해를 감소시킵니다.",
        "areadata": [
          4,
          5,
          6
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_LegionSP_TU2",
    "name": "레기온 스나이퍼",
    "img": "LegionSP",
    "type": "경장 공격기",
    "info": "적의 빈틈을 노리는 용의주도한 개체입니다. 대물 저격총을 가지고 있으니 중장갑 전투원을 운용할 때는 주의해주세요.<br><br><br>- 팬텀",
    "HPbase": 288,
    "HPlvl": 74.75,
    "ATKbase": 81,
    "ATKlvl": 8.1,
    "DEFbase": 53,
    "DEFlvl": 2.1,
    "AGI": 3.9,
    "CRT": 10,
    "HIT": 200,
    "DOD": 25,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "점착탄 난사",
        "img": "TeamSpdDeBuff",
        "range": 4,
        "AP": 5,
        "description": "점착탄을 난사해 $(0.01) 피해를 주고, 대상들의 회피를 낮추며 회피 강화 효과를 해제합니다. 적중 대상은 이동 불가 상태가 되며, 자신은 적중과 치명타가 증가합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "대장갑 정밀 저격",
        "img": "Snipe",
        "range": 5,
        "AP": 7,
        "description": "대장갑 정밀 저격으로 $(1.5) 방어 관통 피해를 줍니다. 대상이 중장형인 경우, 피해량이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "위장 홀로그램 발산",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "위장 홀로그램을 발산해, 적 진영과 멀수록 회피가 증가합니다. 해당 효과는 공격 시, 해당 라운드에는 일시적으로 해제됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickQM_TU2",
    "name": "칙 쿼터마스터",
    "img": "NightChickQM",
    "type": "경장 지원기",
    "info": "철충의 보급 기체네요. 공격 저지 능력이 뛰어나니 주력 공격기를 잘 보호해야 장기전을 방지할 수 있어요.<br><br><br>- 실키",
    "HPbase": 360,
    "HPlvl": 87.4,
    "ATKbase": 63,
    "ATKlvl": 6.3,
    "DEFbase": 77,
    "DEFlvl": 3.37,
    "AGI": 4,
    "CRT": 5,
    "HIT": 300,
    "DOD": 25,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "공격 방해",
        "img": "Shot",
        "range": 4,
        "AP": 5,
        "description": "대상에게 $(1.2) 피해를 주며, 2라운드 동안 대상의 공격력 / 적중 / 치명타를 낮춥니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "출력 강화",
        "img": "TeamAtkBuff",
        "range": 3,
        "AP": 7,
        "description": "주변 아군의 출력을 강화해 공격력 / 적중 / 치명타를 높입니다. 자신은 행동력이 증가합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "일제 공격 지원",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 일정 확률로 무장 보급을 받은 아군의 공격을 지원합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "숙련된 칙 웅크리기",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "HP가 50% 이하가 되면 받는 피해가 감소하며 회피가 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "과전류 방출",
        "img": "TeamAtkDeBuff",
        "range": 0,
        "AP": 0,
        "description": "사망 시, 모든 아군의 행동력 / 공격력이 감소합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Tortoise_TU2",
    "name": "토터스",
    "img": "Tortoise",
    "type": "중장 보호기",
    "info": "장갑이 활성화 되었을 땐 유효 피해를 주기 힘들어요! 장갑을 비활성화 시킨 후에 한 번에 해치워야 해요!<br><br><br>- 켈베로스",
    "HPbase": 4320,
    "HPlvl": 113.3,
    "ATKbase": 67,
    "ATKlvl": 6.7,
    "DEFbase": 210,
    "DEFlvl": 10.5,
    "AGI": 3.6,
    "CRT": 5,
    "HIT": 200,
    "DOD": 0,
    "resist": [
      30,
      30,
      30
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "프래그 샷건",
        "img": "ShotGun",
        "range": 3,
        "AP": 6,
        "description": "샷건을 발사해 $(1.2) 피해를 줍니다. 자신이 전열이면 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "장갑 장착",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 8,
        "description": "외장형 반응 장갑을 장착해 전투 속행 효과를 얻으며, 방어력과 모든 속성 저항이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "외장형 반응 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 받는 경우, 3회까진 최소 피해만 받으며 효과 저항이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "엄폐 지원",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 같은 행의 뒤에 배치된 아군을 보호합니다. 해당 효과는 자신이 스킬을 사용하면 해제됩니다.",
        "areadata": [
          4,
          5,
          6
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Spector_TU2",
    "name": "스펙터",
    "img": "Spector",
    "type": "기동 지원기",
    "info": "방어막을 걷어내지 않으면 격추하기 힘든 개체야. 유령같은 움직임 때문에 맞추기 힘들테니 주의해.<br><br><br>- 네오딤",
    "HPbase": 269,
    "HPlvl": 103.125,
    "ATKbase": 60,
    "ATKlvl": 6,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.2,
    "CRT": 5,
    "HIT": 275,
    "DOD": 47.5,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "전자기장 미사일",
        "img": "MultiMissile",
        "range": 4,
        "AP": 6,
        "description": "전자기장 미사일로 $(1.1000000000000001) 피해를 주고, 대상의 적중 / 치명타 / 효과 발동을 낮춥니다.",
        "areadata": [
          8,
          9,
          5,
          6
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "반물질 역장 전개",
        "img": "TeamDefBuff",
        "range": 6,
        "AP": 7,
        "description": "반물질 역장을 넓게 전개해 주변 아군이 받는 피해를 일정 횟수 무효화합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "반물질 역장",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 반물질 역장을 전개해 자신이 받는 피해를 일정 횟수 무효화합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "행동 예측",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "스킬 사용 시, 주변 아군에게 적 분석 결과를 발신해 적중 / 회피 / AP를 올려줍니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "은폐장",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시, 은폐장을 전개해 회피가 대폭 증가합니다. 해당 효과는 전투가 진행될수록 점감됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ExpGoblinT_N",
    "name": "실험체 고블린",
    "img": "ExpGoblinT",
    "type": "중장 공격기",
    "info": "고블린이었던 것으로 보인다. 더 이상 생물체라고 할 수 있을지는 모르겠다…",
    "HPbase": 360,
    "HPlvl": 85.9375,
    "ATKbase": 87,
    "ATKlvl": 8.7,
    "DEFbase": 71,
    "DEFlvl": 4.390625,
    "AGI": 3.95,
    "CRT": 10,
    "HIT": 175,
    "DOD": 45,
    "resist": [
      20,
      20,
      20
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "부식탄 사격",
        "img": "MGShot",
        "range": 3,
        "AP": 5,
        "description": "대상에게 $(1) 피해를 주고, 대상이 표식 상태인 경우 일정 확률로 부식 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "기관총 난사",
        "img": "MGWideShot",
        "range": 3,
        "AP": 8,
        "description": "목표 범위에 $(1) 피해를 주고, 대상이 표식 상태인 경우 일정 확률로 강화 효과를 해제합니다.",
        "areadata": [
          0,
          0.5,
          0,
          0,
          1,
          0,
          0,
          0.5,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "격분",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, AP / 공격력 / 치명타가 증가하며 방어력이 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "재생 기능",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 불능 시, 1회에 한해 HP를 회복하고 전투를 속행합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ExpGoblinA_N",
    "name": "실험체 고블린 파쇄병",
    "img": "ExpGoblinA",
    "type": "중장 지원기",
    "info": "고블린이었던 것으로 보인다. 더 이상 생물체라고 할 수 있을지는 모르겠다…",
    "HPbase": 684,
    "HPlvl": 90.7,
    "ATKbase": 81,
    "ATKlvl": 8.1,
    "DEFbase": 150,
    "DEFlvl": 6.1087968749999995,
    "AGI": 3.45,
    "CRT": 5,
    "HIT": 200,
    "DOD": 20,
    "resist": [
      20,
      20,
      20
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "목표 파쇄",
        "img": "MeleeAttack",
        "range": 3,
        "AP": 7,
        "description": "대상에게 $(1.5) 피해를 주고, 표식으로 설정해 받는 피해를 증가시킵니다. 대상의 적중과 치명타가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "벙커 사출",
        "img": "WideSwordAttk",
        "range": 4,
        "AP": 8,
        "description": "목표 범위에 $(1) 피해를 주고, 대상의 회피율과 효과 저항을 낮춥니다.",
        "areadata": [
          0,
          0,
          0,
          0.75,
          1,
          0,
          0,
          0,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "전투 본능",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 자신에게 무작위 강화 효과가 적용됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "공격 경계",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "사망 시, 인접한 아군의 받는 피해와 행동력을 감소키시고 효과 저항을 증가시킵니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ExpGenerator2_N",
    "name": "수상한 실험체",
    "img": "ExpGenerator2",
    "type": "중장 보호기",
    "info": "<교전 기록 없음>",
    "HPbase": 10800,
    "HPlvl": 145.7,
    "ATKbase": 56,
    "ATKlvl": 5.6,
    "DEFbase": 240,
    "DEFlvl": 12,
    "AGI": 3.8,
    "CRT": 0,
    "HIT": 999,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "출력 제한 해제",
        "img": "TeamAtkBuff",
        "range": 6,
        "AP": 6,
        "description": "범위 내 아군의 출력 제한을 해제해, 공격력을 크게 올리며 적중을 감소시킵니다. 모든 해로운 효과를 해제합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "외피 강화 처리",
        "img": "TeamDefBuff",
        "range": 6,
        "AP": 9,
        "description": "범위 내 아군의 AP를 올려주며, 받는 피해를 감소시킵니다. 효과를 받는 대상들은 전투 속행 효과가 적용됩니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "고출력 방어막",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 일정 수치의 방어막을 얻습니다. HP가 50% 이하가 되면 방어막 수치가 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "방어막 출력 상승",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 방어막 출력을 올려 자신과 인접 아군이 받는 피해를 감소시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "에너지 역류",
        "img": "TeamDefDeBuff",
        "range": 0,
        "AP": 0,
        "description": "아군 사망 시, HP가 감소합니다. 파괴될 경우에는, 모든 아군을 행동 불능으로 만들며 강화 효과를 해제합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ExecutionerRB_B06",
    "name": "익스큐셔너 실드 블레이드",
    "img": "ExecutionerLB_B06",
    "type": "기동 보호기",
    "info": "<교전 기록 없음>",
    "HPbase": 19000,
    "HPlvl": 200,
    "ATKbase": 75,
    "ATKlvl": 10,
    "DEFbase": 300,
    "DEFlvl": 20,
    "AGI": 4.25,
    "CRT": 10,
    "HIT": 250,
    "DOD": 60,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "장갑 해제",
        "img": "SwordAttk",
        "range": 4,
        "AP": 5,
        "description": "지정 대상에게 $(1) 피해를 주고, 대상의 장갑을 해제해 방어력을 낮추고 받는 피해를 증가시킵니다. 대상이 해당 효과를 다시 받는 경우, 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "무장 해제",
        "img": "WideSwordAttk",
        "range": 5,
        "AP": 8,
        "description": "지정 범위에 $(0.75) 피해를 주고, 대상의 무장을 해제해 공격력과 치명타를 낮춥니다. 대상이 해당 효과를 다시 받는 경우, 행동 불가 상태로 만듭니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "공격 차단",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, HP가 50% 이상이면 본체와 다른 파츠를 보호합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "자동 방어 시스템",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "HP가 50% 이상이면 모든 피해를 최소화하며 효과 저항이 증가합니다. 활성화 된 상태에서 피격 시, 오버플로우 중첩이 쌓입니다. 중첩 4 이상 상태로 라운드 개시 시, 해당 상태가 해제되며 행동 불능이 됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "다중 장갑 구조",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "HP가 일정 이하가 되면 방어력이 대폭 감소하며 받는 피해가 증가합니다. 해당 상태에선 회피와 행동력이 크게 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Executioner_B06",
    "name": "익스큐셔너",
    "img": "Executioner_B06",
    "type": "기동 공격기",
    "info": "<교전 기록 없음>",
    "HPbase": 9775,
    "HPlvl": 175,
    "ATKbase": 45,
    "ATKlvl": 15,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.5,
    "CRT": 15,
    "HIT": 350,
    "DOD": 120,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "처형 개시",
        "img": "SwordAttk",
        "range": 5,
        "AP": 4,
        "description": "지정 대상에게 $(1) 피해를 줍니다. 대상이 행동 불가 상태면 피해량이 크게 증가하며, 해제 불가 행동 불능 효과를 부여합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "학살",
        "img": "WideSwordAttk",
        "range": 4,
        "AP": 8,
        "description": "지정 범위에 $(1.25) 보호 무시 피해를 줍니다. 처형자 중첩이 5 이상이면 추가 화염 피해를 주며, 대상에게 걸려있는 강화 효과를 해제합니다. 처형자 중첩을 5 소모합니다.",
        "areadata": [
          7,
          9,
          5,
          1,
          3
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "처형자",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 공격력이 영구적으로 증가합니다. 자신이 <공격 연계> 효과를 받는 상태면 공격 대상의 방어막과 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "왜곡장",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "모든 피해를 최소 피해만 받습니다. 처형자 중첩이 5 이상인 상태로 피격 시, 오버플로우로 인한 고정 물리 피해를 받으며 모든 강화 효과가 해제됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "고속 복원",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "<공격 차단> 효과를 받는 상태인 경우, 행동 불능이 되면 일정 HP를 회복하고 전투를 속행합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ExecutionerLB_B06",
    "name": "익스큐셔너 롱 블레이드",
    "img": "ExecutionerRB_B06",
    "type": "기동 지원기",
    "info": "<교전 기록 없음>",
    "HPbase": 19250,
    "HPlvl": 150,
    "ATKbase": 62,
    "ATKlvl": 12.5,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.6,
    "CRT": 12.5,
    "HIT": 175,
    "DOD": 120,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "쪼개기",
        "img": "SwordAttk",
        "range": 5,
        "AP": 5,
        "description": "지정 대상에게 $(1) 피해를 줍니다. 대상이 방어력 감소 상태면 피해량이 증가하며 피해 감소 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "꼬챙이 꿰기",
        "img": "WideSwordAttk",
        "range": 4,
        "AP": 8,
        "description": "지정 범위에 $(1.25) 보호 무시 피해를 줍니다. 대상이 공격기 또는 지원기면 피해량이 증가합니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "공격 연계",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 자신이 공격력 증가 상태면 본체와 다른 파츠의 공격을 지원합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "확인 사살",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 공격력 / 치명타가 증가합니다. 공격력 증가가 3중첩 이상인 경우, 피해 감소 효과를 무시하며 방어 관통 효과를 얻습니다. 피격 시 해제됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "경계 모드 전환",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 다음 공격을 받기 전까지 회피가 크게 증가하며 적중이 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickS_TU4",
    "name": "나이트 칙 실더",
    "img": "NightChickS",
    "type": "경장 보호기",
    "info": "이 자식들 짜증나 방패를 들고 앞을 자꾸 가로막거든? 다행히 머리가 나빠서 바로 뒤만 가로 막지만… 어쨌든 이 녀석들이 방어 자세를 취하기 전에 뒤를 정리해 두라고!<br><br><br>- 보고자 그리폰",
    "HPbase": 470,
    "HPlvl": 87.5,
    "ATKbase": 75,
    "ATKlvl": 8,
    "DEFbase": 100,
    "DEFlvl": 5.5,
    "AGI": 3.4,
    "CRT": 5,
    "HIT": 180,
    "DOD": 30,
    "resist": [
      20,
      20,
      20
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "방패 내려치기",
        "img": "MeleeAttack",
        "range": 2,
        "AP": 4,
        "description": "방패로 내리쳐 $(1) 피해를 줍니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칙 방패 방어술",
        "img": "SelfDefBuff",
        "range": 6,
        "AP": 3,
        "description": "방패를 올려 3라운드 동안 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 커버링",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 칙 방패 방어술이 적용된 상태면 바로 뒤에 있는 아군 1기를 보호합니다.",
        "areadata": [
          6
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_HarvesterEX_TU5",
    "name": "아머드 하베스터",
    "img": "Harvester",
    "type": "중장 지원기",
    "info": "<교전 기록 없음>",
    "HPbase": 1500,
    "HPlvl": 135,
    "ATKbase": 150,
    "ATKlvl": 13.75,
    "DEFbase": 200,
    "DEFlvl": 9,
    "AGI": 3.35,
    "CRT": 5,
    "HIT": 180,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "폐기물 파쇄",
        "img": "MeleeAttack",
        "range": 1,
        "AP": 9,
        "description": "근접 공격으로 $(2.6) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 대상을 강타해 피해량이 증가하며 2라운드 동안 행동 불가로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "폐기물 수집",
        "img": "Hang",
        "range": 4,
        "AP": 4,
        "description": "집게로 목표 대상을 포획해 $(0.5) 피해를 주며 2칸 앞으로 당깁니다. 적중 시, 2라운드 동안 행동력이 감소하며 이동 불가 상태가 됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "초합금 플레이팅",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "견고한 장갑으로 인해, 일정 위력 이하의 공격은 통하지 않습니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickCEX_TU5",
    "name": "개량형 칙 캐논",
    "img": "NightChickC",
    "type": "중장 공격기",
    "info": "<교전 기록 없음>",
    "HPbase": 675,
    "HPlvl": 112.5,
    "ATKbase": 120,
    "ATKlvl": 15,
    "DEFbase": 150,
    "DEFlvl": 8,
    "AGI": 3.4,
    "CRT": 10,
    "HIT": 185,
    "DOD": 0,
    "resist": [
      50,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "네이팜 분사",
        "img": "WideFireShot",
        "range": 2,
        "AP": 4,
        "attr": "fire",
        "description": "화염 방사로 $(1.1000000000000001) 화염 속성 피해를 주며, 3라운드 동안 지속 화염 피해를 입는 점화 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "강화 곡사 포격",
        "img": "CannonShotDelay",
        "range": 6,
        "AP": 7,
        "description": "1라운드 후에 착탄하는 곡사포를 발사해 목표 범위에 $(2)의 피해를 줍니다. 대상이 이동 불가 상태면 피해량이 증가합니다.",
        "areadata": [
          0,
          0.75,
          0,
          0.75,
          1,
          0.75,
          0,
          0.75,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "연료 탱크 파괴",
        "img": "SuiceideBomb",
        "range": 0,
        "AP": 0,
        "attr": "fire",
        "description": "사망 시, 연료 탱크가 유폭해 주변에 괴멸적인 피해를 주며 피해 감소 효과를 해제합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "조준 보정",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 3라운드 동안 적중이 증가합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ZapperEX_TU5",
    "name": "강화형 재퍼",
    "img": "Zapper",
    "type": "경장 지원기",
    "info": "<교전 기록 없음>",
    "HPbase": 105,
    "HPlvl": 120,
    "ATKbase": 95,
    "ATKlvl": 8,
    "DEFbase": 120,
    "DEFlvl": 3,
    "AGI": 4.15,
    "CRT": 10,
    "HIT": 225,
    "DOD": 100,
    "resist": [
      25,
      25,
      75
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "전격 체인",
        "img": "Shock",
        "range": 3,
        "AP": 4,
        "attr": "electric",
        "description": "전격을 방사해 $(0.8) 전기 속성 피해를 주고 대상의 AP와 회피를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "초고압 전류",
        "img": "Shock",
        "range": 1,
        "AP": 8,
        "attr": "electric",
        "description": "고압 전류로 $(1.2) 전기 속성 피해를 주고, 회피를 감소시킵니다. 일정 확률로 대상을 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "사주 경계",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "적을 발견하거나 적에게 공격당하기 전 까지는 경계 상태로 대기합니다. 공격당하기 전까지 받는 피해가 대폭 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickSI_TU7",
    "name": "나이트 칙 실더 개",
    "img": "NightChickSI",
    "type": "경장 보호기",
    "info": "일반 칙 실더보다 큰 방패 때문에 뒤의 대상들을 공격하기 위해서는 더 용맹한 정신이 필요하다. 나이트 칙 실더와 헷갈리지 않도록 지휘 콘솔을 반드시 확인해야 함.<br><br><br>- 마리 ",
    "HPbase": 540,
    "HPlvl": 130,
    "ATKbase": 66,
    "ATKlvl": 6.6,
    "DEFbase": 127,
    "DEFlvl": 5.8,
    "AGI": 3.8,
    "CRT": 5,
    "HIT": 245,
    "DOD": 55,
    "resist": [
      35,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "방패 강타",
        "img": "MeleeAttack",
        "range": 3,
        "AP": 4,
        "description": "방패로 강타해 $(1.1000000000000001) 피해를 줍니다. 대상이 회피 감소 상태면 일정 확률로 행동 불가로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칙 가드 올리기",
        "img": "ShieldWall",
        "range": 6,
        "AP": 3,
        "description": "3라운드 동안 같은 행의 뒤에 있는 아군을 보호합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "강화 방패",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "방패 장갑이 강화되어 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_BigChickSP_TU2",
    "name": "강화형 빅 칙",
    "img": "BigChick",
    "type": "경장 공격기",
    "info": "<교전 기록 없음>",
    "HPbase": 5500,
    "HPlvl": 120,
    "ATKbase": 175,
    "ATKlvl": 17,
    "DEFbase": 75,
    "DEFlvl": 7.5,
    "AGI": 3.5,
    "CRT": 5,
    "HIT": 190,
    "DOD": 5,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "돌격 난사",
        "img": "Shot",
        "range": 3,
        "AP": 6,
        "description": "기관포를 발사해 목표 적에게 $(0.5) 피해를 줍니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "기관포 난사",
        "img": "Shot",
        "range": 1,
        "AP": 8,
        "description": "기관포를 난사해 목표 적들에게 $(1) 피해를 줍니다.",
        "areadata": [
          7,
          4,
          5,
          1
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "과출력 상태",
        "img": "Shock",
        "range": 0,
        "AP": 0,
        "description": "자신의 HP가 50% 이상인 경우, 과출력 상태가 되어 공격력이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_HeavyScout_TU5",
    "name": "헤비 스카우트",
    "img": "Scout",
    "type": "기동 공격기",
    "info": "스카우트와 비슷해요. 탄종은 좀 다른 것 같지만. 뭘 쏘길래 모두 피해냈어요. 별로 정확하진 않은 것 같군요. 주변 철충들과 대열을 갖추려고 하면 주의해 주세요.<br><br><br>- 페로 드림",
    "HPbase": 750,
    "HPlvl": 92.5,
    "ATKbase": 135,
    "ATKlvl": 14.5,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.25,
    "CRT": 25,
    "HIT": 200,
    "DOD": 90,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "대 장갑 기관포",
        "img": "AntiArmorShot",
        "range": 2,
        "AP": 6,
        "description": "대 장갑 기관포를 발사해 $(1.2) 피해를 줍니다. 대상의 방어력을 일정 비율 무시하며, 방어 감소 상태인 경우 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "공습 준비",
        "img": "SelfSpdBuff",
        "range": 6,
        "AP": 5,
        "description": "3라운드 동안 회피 / 치명타 / 행동력이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "공격 포메이션",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "대기 시, 같은 열에 인접한 공격기의 AP / 치명타 / 사거리 / 방어 관통을 증가시킵니다.",
        "areadata": [
          8,
          5,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_WaspEX_TU5",
    "name": "와습 HM",
    "img": "Wasp",
    "type": "기동 공격기",
    "info": "<교전 기록 없음>",
    "HPbase": 700,
    "HPlvl": 85,
    "ATKbase": 150,
    "ATKlvl": 15,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.45,
    "CRT": 20,
    "HIT": 195,
    "DOD": 120,
    "resist": [
      75,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "화염 작렬",
        "img": "WideFireShot",
        "range": 3,
        "AP": 6,
        "attr": "fire",
        "description": "화염 방사로 대상에게 $(0.8) 피해를 주고, 대상 뒤에 50% 감소한 피해를 줍니다. 대상을 점화 상태로 만들어 2라운드 동안 지속 화염 피해를 줍니다.",
        "areadata": [
          0,
          0,
          0,
          0.5,
          1,
          0,
          0,
          0,
          0
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "자폭 돌진",
        "img": "SuiceideBomb",
        "range": 7,
        "AP": 10,
        "description": "공격 대상에게 돌격 후, 자폭해 $(6) 피해를 줍니다. 대상의 방어력을 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "고속 기동",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 사망한 경우, 2라운드 동안 회피가 증가하며 행동력 / 적중이 감소합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Mammoth_TU5",
    "name": "매머드",
    "img": "Mammoth",
    "type": "중장 공격기",
    "info": "한 방이 엄청나게 무서운데다 장갑도 두꺼워서 장갑 사이에 치명타를 먹이거나 아니면 관통할 수 있는 무기가 좋아 보이네. 뭐, 못 피하면 죽으니까 조심하라고.<br><br><br>- 보고자 샌드걸",
    "HPbase": 2750,
    "HPlvl": 200,
    "ATKbase": 140,
    "ATKlvl": 16.5,
    "DEFbase": 230,
    "DEFlvl": 11.5,
    "AGI": 3.25,
    "CRT": 10,
    "HIT": 165,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "직사 포격",
        "img": "CannonShotWide",
        "range": 2,
        "AP": 7,
        "description": "직사 포격으로 목표 대상이 있는 열에 $(1.35) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "2연장 곡사포",
        "img": "CannonShotDelay",
        "range": 6,
        "AP": 9,
        "description": "1라운드 뒤에 착탄하는 곡사 포격으로 목표 지점에 $(2.5) 보호 무시 피해를 줍니다. 목표 지점 주변에는 피해가 50% 감소합니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          0,
          0.75,
          0,
          0.75,
          1,
          0.75,
          0,
          0.75,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "고폭 충격탄",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 적의 방어막과 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Juggernaut_TU5",
    "name": "저거너트",
    "img": "Juggernaut",
    "type": "중장 보호기",
    "info": "성격이 나빠 보이는 철충인 거예요. 공격을 시작하면 끝까지 공격하거든요. 그래서 공중 부대로 유인을 하는 게 좋을 것 같아요. 그 덩치로 다른 철충들을 보호하지 못하게요.<br><br><br>- 블랙 하운드",
    "HPbase": 6250,
    "HPlvl": 230,
    "ATKbase": 110,
    "ATKlvl": 11.5,
    "DEFbase": 400,
    "DEFlvl": 17,
    "AGI": 3.3,
    "CRT": 10,
    "HIT": 165,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "스턴 펀치",
        "img": "MeleeAttack",
        "range": 1,
        "AP": 10,
        "description": "대상을 강타해 $(2.4) 피해를 주고, 일정 확률로 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "몸통 박치기",
        "img": "AssaultAttack",
        "range": 2,
        "AP": 9,
        "description": "대상에게 돌진해 $(1.6) 피해를 주고, 뒤로 1칸 밀어냅니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "방벽 전환",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 사망한 경우, 방어 태세로 전환해 2라운드 동안 행 보호와 열 보호 효과를 활성화합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "방어 프로토콜",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 일정 확률로 방어력이 대폭 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_BigChickM_TU5",
    "name": "빅 칙 런쳐",
    "img": "BigChickM",
    "type": "중장 공격기",
    "info": "엄청나게 피하기 힘든 미사일을 마구 쏴댐. 멀리서 처리하는 게 제일 좋을 것 같아.<br><br><br>- 핀토가 정찰 중 보고",
    "HPbase": 4500,
    "HPlvl": 165,
    "ATKbase": 135,
    "ATKlvl": 15.5,
    "DEFbase": 225,
    "DEFlvl": 7.5,
    "AGI": 3.35,
    "CRT": 10,
    "HIT": 200,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "고폭 미사일",
        "img": "CruiseMissile",
        "range": 5,
        "AP": 7,
        "description": "1라운드 후 착탄하며 $(3) 피해를 주는 미사일을 발사합니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "마이크로 미사일",
        "img": "MultiMissile",
        "range": 1,
        "AP": 3,
        "description": "지정 범위에 $(0.5) 피해를 주는 마이크로 미사일을 발사합니다. 보호 효과를 무시하며 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다. 200%의 적중 보정이 적용됩니다.",
        "areadata": [
          7,
          4,
          5,
          1
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "유도 미사일",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 대상이 기동형인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ScoutEX_TU5",
    "name": "강습형 스카우트",
    "img": "Scout",
    "type": "기동 지원기",
    "info": "<교전 기록 없음>",
    "HPbase": 5000,
    "HPlvl": 67.5,
    "ATKbase": 120,
    "ATKlvl": 12,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.65,
    "CRT": 10,
    "HIT": 200,
    "DOD": 120,
    "resist": [
      15,
      15,
      15
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "강화 충격탄",
        "img": "Missile",
        "range": 2,
        "AP": 6,
        "description": "충격 미사일을 발사해 $(1.2) 피해를 주고 대상의 AP를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "색적 경보",
        "img": "Scan",
        "range": 6,
        "AP": 6,
        "description": "목표 아군에게 적 발견 경보를 울려 대상의 AP와 사거리를 증가시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "강습 대열",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "이동 시, 3라운드 동안 인접한 공격기의 공격을 지원하며 AP를 증가시킵니다.",
        "areadata": [
          8,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickCM_TU5",
    "name": "케미컬 칙",
    "img": "NightChickCM",
    "type": "경장 지원기",
    "info": "냄새 나고 이상한 액체를 뿌려. 더럽고 음란해. 그 이상한 액을 뒤집어 쓴 애들은 한 동안 근처에 못 오게 했어. 특히 스틸 드라코는…<br><br><br>- 보고자 미호",
    "HPbase": 600,
    "HPlvl": 107.5,
    "ATKbase": 110,
    "ATKlvl": 9,
    "DEFbase": 40,
    "DEFlvl": 2,
    "AGI": 4.2,
    "CRT": 10,
    "HIT": 250,
    "DOD": 80,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "화학탄 발사",
        "img": "Missile",
        "range": 4,
        "AP": 4,
        "description": "화학 탄두를 발사해 $(0.8) 피해를 줍니다. 3라운드 동안 대상을 부식 상태로 만듭니다. 부식 상태가 된 대상은 방어력 / 행동력이 감소하며 매 라운드 지속 피해를 입습니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "화학탄 난사",
        "img": "MultiMissile",
        "range": 2,
        "AP": 6,
        "description": "화학 탄두를 난사해 지정 범위에 $(0.5) 피해를 줍니다. 3라운드 동안 대상을 부식 상태로 만듭니다. 부식 상태가 된 대상은 방어력 / 행동력이 감소하며 매 라운드 지속 피해를 입습니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "적응 시스템",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 자신과 인접한 아군에게 걸린 방해 효과를 해제합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_CenturionEX_TU5",
    "name": "엘리트 센츄리온",
    "img": "Centurion",
    "type": "경장 공격기",
    "info": "<교전 기록 없음>",
    "HPbase": 5500,
    "HPlvl": 155,
    "ATKbase": 160,
    "ATKlvl": 16,
    "DEFbase": 280,
    "DEFlvl": 8.5,
    "AGI": 4.1,
    "CRT": 15,
    "HIT": 215,
    "DOD": 55,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "XM 로켓 런쳐",
        "img": "GrenadeAttack_2",
        "range": 4,
        "AP": 6,
        "description": "유탄을 발사해 목표 대상들에게 $(1) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "일제 공격 표식",
        "img": "Scan",
        "range": 5,
        "AP": 3,
        "description": "2라운드 동안 대상을 목표로 지정해 $(0.3) 피해를 주고 표식을 남기며, 받는 피해가 증가하는 상태로 만듭니다. 보호 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "역습 태세",
        "img": "DefCounter",
        "range": 0,
        "AP": 0,
        "description": "아군 사망 시, 3라운드 동안 공격력과 치명타가 증가하며 반격합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "부대 재 정비",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시 역습 태세인 경우, 인접한 아군들의 행동력과 적중을 증가시킵니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Centurion_TU7",
    "name": "센츄리온",
    "img": "Centurion",
    "type": "경장 공격기",
    "info": "작은 부대의 지휘관 역할을 하는 철충으로 보입니다. 주변 철충에게 일제 공격을 지시하는 정황이 포착되었군요. 부하들이 파괴되면 경계를 하는 것 같아요. 먼저 처리하는 게 좋을 것으로 보입니다.<br><br><br>- 37식 다이카",
    "HPbase": 5250,
    "HPlvl": 130,
    "ATKbase": 150,
    "ATKlvl": 15,
    "DEFbase": 145,
    "DEFlvl": 7.5,
    "AGI": 4,
    "CRT": 10,
    "HIT": 200,
    "DOD": 35,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "XM 유탄 발사기",
        "img": "GrenadeAttack_2",
        "range": 4,
        "AP": 6,
        "description": "유탄을 발사해 목표 행에 $(1) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "일제 공격 개시",
        "img": "Snipe",
        "range": 5,
        "AP": 4,
        "description": "2라운드 동안 대상을 목표로 지정해 $(0.25) 피해를 주고 표식을 남기며, 받는 피해가 증가하는 상태로 만듭니다. 보호 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "반격 태세",
        "img": "DefCounter",
        "range": 0,
        "AP": 0,
        "description": "아군 사망 시, 3라운드 동안 공격력과 치명타가 증가하며 반격합니다. 공격력과 치명타 증가 효과는 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickQMEX_N",
    "name": "개량형 칙 쿼터마스터",
    "img": "NightChickQM",
    "type": "경장 지원기",
    "info": "<교전 기록 없음>",
    "HPbase": 10000,
    "HPlvl": 120,
    "ATKbase": 60,
    "ATKlvl": 6,
    "DEFbase": 75,
    "DEFlvl": 7.5,
    "AGI": 4.2,
    "CRT": 5,
    "HIT": 250,
    "DOD": 15,
    "resist": [
      30,
      30,
      30
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "공격 훼방",
        "img": "Shot",
        "range": 4,
        "AP": 5,
        "description": "대상에게 $(1.2) 피해를 주며, 2라운드 동안 대상의 공격력 / 적중 / 치명타를 낮춥니다. 해당 효과는 2회까지 중첩됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "전무장 보급",
        "img": "TeamAtkBuff",
        "range": 3,
        "AP": 7,
        "description": "주변 아군의 출력을 강화해 공격력 / 적중 / 치명타를 높입니다. 자신은 행동력이 증가합니다.  해당 효과는 2회까지 중첩됩니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 약진하기",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 일정 확률로 무장 보급을 받은 아군의 공격을 지원하며, 피격 시 회피율이 증가합니다. 회피율 증가 효과는 최대 2회 중첩됩니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "전황 판단",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 배치된 열에 따라 아군 또는 자신에게 추가 효과가 부여됩니다. 전열에 배치된 경우 아군 전체의 방어력 / 모든 저항을 올려주고, 중열에 배치된 경우 자신의 행동력 / 방어력 / 피해 감소가 증가하며, 후열에 배치된 경우 아군 전체의 공격력 / 적중을 올려줍합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "배수진",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "사망 시, 모든 아군의 행동력이 감소하고, 받는 피해 / 공격력 / 적중이 증가합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_SpectorBS_N",
    "name": "스펙터 BS",
    "img": "Spector",
    "type": "기동 지원기",
    "info": "<교전 기록 없음>",
    "HPbase": 200,
    "HPlvl": 150,
    "ATKbase": 80,
    "ATKlvl": 8,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.2,
    "CRT": 5,
    "HIT": 350,
    "DOD": 45,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "전자기장 미사일 난사",
        "img": "MultiMissile",
        "range": 4,
        "AP": 6,
        "description": "전자기장 미사일을 난사해 $(1.2) 피해를 주고, 대상의 치명타 / 효과 발동/ 사거리를 낮춥니다. 해당 효과는 2회까지 중첩됩니다.",
        "areadata": [
          8,
          9,
          5,
          6
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "강화 역장 전개",
        "img": "TeamDefBuff",
        "range": 6,
        "AP": 7,
        "description": "반물질 역장을 넓게 전개해 주변 아군이 받는 피해를 일정 횟수 무효화하고, 자신과 주변 아군의 효과 저항을 올려줍니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "강화 반물질 역장",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 반물질 역장을 전개해 자신이 받는 피해를 일정 횟수 무효화하고, 받는 피해를 낮춥니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "전황 예측",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "스킬 사용 시, 주변 아군에게 적 분석 결과를 발신해 적중 / 회피 / AP를 올려줍니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "강화 은폐장",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시, 은폐장을 전개해 회피가 대폭 증가합니다. 해당 효과는 전투가 진행될수록 점감됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ScarabEX_TU5",
    "name": "스캐럽 HC",
    "img": "Scarab",
    "type": "기동 보호기",
    "info": "<교전 기록 없음>",
    "HPbase": 1100,
    "HPlvl": 111.25,
    "ATKbase": 110,
    "ATKlvl": 9.125,
    "DEFbase": 160,
    "DEFlvl": 3,
    "AGI": 4.55,
    "CRT": 15,
    "HIT": 225,
    "DOD": 165,
    "resist": [
      50,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "실드 돌진",
        "img": "AssaultAttack",
        "range": 3,
        "AP": 6,
        "description": "대상에게 돌격해 $(1.5) 피해를 주고, 대상의 행 / 열 보호 효과와 피해 감소 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "호위 기동",
        "img": "SelfDefBuff",
        "range": 6,
        "AP": 4,
        "description": "3라운드 동안 지정한 아군을 보호하며, 대상의 행동력과 적중을 증가시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "경계 기동",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시 HP가 50% 이하인 경우, 받는 피해와 회피가 감소하고 방어력이 대폭 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Tortoise_TU3",
    "name": "토터스",
    "img": "Tortoise",
    "type": "중장 보호기",
    "info": "장갑이 활성화 되었을 땐 유효 피해를 주기 힘들어요! 장갑을 비활성화 시킨 후에 한 번에 해치워야 해요!<br><br><br>- 켈베로스",
    "HPbase": 4000,
    "HPlvl": 175,
    "ATKbase": 80,
    "ATKlvl": 8,
    "DEFbase": 225,
    "DEFlvl": 12.5,
    "AGI": 3.6,
    "CRT": 5,
    "HIT": 200,
    "DOD": 0,
    "resist": [
      40,
      25,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "프래그 샷건",
        "img": "ShotGun",
        "range": 3,
        "AP": 6,
        "description": "샷건을 발사해 $(1.2) 피해를 줍니다. 자신이 전열이면 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "장갑 장착",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 8,
        "description": "외장형 반응 장갑을 장착해 전투 속행 효과를 얻으며, 방어력과 모든 속성 저항이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "외장형 반응 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 받는 경우, 3회까진 최소 피해만 받으며 효과 저항이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "엄폐 지원",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 같은 행의 뒤에 배치된 아군을 보호합니다. 해당 효과는 자신이 스킬을 사용하면 해제됩니다.",
        "areadata": [
          4,
          5,
          6
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_BigChickSP_TU3",
    "name": "강화형 빅 칙",
    "img": "BigChick",
    "type": "경장 공격기",
    "info": "<교전 기록 없음>",
    "HPbase": 25000,
    "HPlvl": 130,
    "ATKbase": 200,
    "ATKlvl": 18.5,
    "DEFbase": 80,
    "DEFlvl": 8,
    "AGI": 3.5,
    "CRT": 5,
    "HIT": 195,
    "DOD": 5,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "돌격 난사",
        "img": "Shot",
        "range": 3,
        "AP": 6,
        "description": "기관포를 발사해 목표 적에게 $(0.5) 피해를 줍니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "기관포 난사",
        "img": "Shot",
        "range": 1,
        "AP": 8,
        "description": "기관포를 난사해 목표 적들에게 $(1) 피해를 줍니다.",
        "areadata": [
          7,
          4,
          5,
          1
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "과출력 상태",
        "img": "Shock",
        "range": 0,
        "AP": 0,
        "description": "자신의 HP가 50% 이상인 경우, 과출력 상태가 되어 공격력이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Mammoth_TU6",
    "name": "매머드",
    "img": "Mammoth",
    "type": "중장 공격기",
    "info": "한 방이 엄청나게 무서운데다 장갑도 두꺼워서 장갑 사이에 치명타를 먹이거나 아니면 관통할 수 있는 무기가 좋아 보이네. 뭐, 못 피하면 죽으니까 조심하라고.<br><br><br>- 보고자 샌드걸",
    "HPbase": 25000,
    "HPlvl": 225,
    "ATKbase": 150,
    "ATKlvl": 17.5,
    "DEFbase": 240,
    "DEFlvl": 12,
    "AGI": 3.25,
    "CRT": 10,
    "HIT": 180,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "직사 포격",
        "img": "CannonShotWide",
        "range": 2,
        "AP": 7,
        "description": "직사 포격으로 목표 대상이 있는 열에 $(1.35) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "2연장 곡사포",
        "img": "CannonShotDelay",
        "range": 6,
        "AP": 9,
        "description": "1라운드 뒤에 착탄하는 곡사 포격으로 목표 지점에 $(2.5) 보호 무시 피해를 줍니다. 목표 지점 주변에는 피해가 50% 감소합니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          0,
          0.75,
          0,
          0.75,
          1,
          0.75,
          0,
          0.75,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "고폭 충격탄",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 적의 방어막과 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Phalangites_TU6",
    "name": "팔랑스",
    "img": "Phalangites",
    "type": "경장 보호기",
    "info": "각이 잡힌 대열로 행군하는 철충입니다. 철충 놈들 중엔 드물게 군기가 들어있지 말입니다. 딱 밀착해서 서로서로를 보호하는 녀석들이니 진형을 아작내는 게 중요하지 말임다.<br><br><br>- 블러디팬서",
    "HPbase": 20000,
    "HPlvl": 137.5,
    "ATKbase": 110,
    "ATKlvl": 9.25,
    "DEFbase": 225,
    "DEFlvl": 10.5,
    "AGI": 4.05,
    "CRT": 10,
    "HIT": 229,
    "DOD": 75,
    "resist": [
      40,
      40,
      40
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "머신건 속사",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "머신건을 발사해 $(1) 피해를 줍니다. 대상이 기동형인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "대열 방어",
        "img": "TeamDefBuff",
        "range": 6,
        "AP": 4,
        "description": "3라운드 동안 같은 열의 아군을 보호하며, 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "밀집 대형",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 같은 열에 인접한 아군에게 피해 감소 효과를 부여합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          8,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickQM_TU3",
    "name": "칙 쿼터마스터",
    "img": "NightChickQM",
    "type": "경장 지원기",
    "info": "철충의 보급 기체네요. 공격 저지 능력이 뛰어나니 주력 공격기를 잘 보호해야 장기전을 방지할 수 있어요.<br><br><br>- 실키",
    "HPbase": 432,
    "HPlvl": 100.4,
    "ATKbase": 66,
    "ATKlvl": 6.6,
    "DEFbase": 84,
    "DEFlvl": 3.74,
    "AGI": 4,
    "CRT": 5,
    "HIT": 350,
    "DOD": 30,
    "resist": [
      30,
      30,
      30
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "공격 방해",
        "img": "Shot",
        "range": 4,
        "AP": 5,
        "description": "대상에게 $(1.2) 피해를 주며, 2라운드 동안 대상의 공격력 / 적중 / 치명타를 낮춥니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "출력 강화",
        "img": "TeamAtkBuff",
        "range": 3,
        "AP": 7,
        "description": "주변 아군의 출력을 강화해 공격력 / 적중 / 치명타를 높입니다. 자신은 행동력이 증가합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "일제 공격 지원",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 일정 확률로 무장 보급을 받은 아군의 공격을 지원합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "숙련된 칙 웅크리기",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "HP가 50% 이하가 되면 받는 피해가 감소하며 회피가 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "과전류 방출",
        "img": "TeamAtkDeBuff",
        "range": 0,
        "AP": 0,
        "description": "사망 시, 모든 아군의 행동력 / 공격력이 감소합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_BigChickEX_TU5",
    "name": "시작형 빅 칙",
    "img": "BigChick",
    "type": "중장 공격기",
    "info": "<교전 기록 없음>",
    "HPbase": 7500,
    "HPlvl": 190,
    "ATKbase": 95,
    "ATKlvl": 9.5,
    "DEFbase": 250,
    "DEFlvl": 6.5,
    "AGI": 3.3,
    "CRT": 17.5,
    "HIT": 300,
    "DOD": 0,
    "resist": [
      40,
      25,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "칙 중 기관포 발사",
        "img": "MGShot",
        "range": 4,
        "AP": 5,
        "description": "중 기관총으로 $(1.5) 피해를 줍니다. 대상이 방어력 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "영거리 중 기관포",
        "img": "MGShot",
        "range": 1,
        "AP": 8,
        "description": "중 기관총 근접 사격으로 방어력을 일정 비율 무시하고 $(2.4) 피해를 줍니다. 대상이 방어력 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "근접 조준 사격",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "적 진영에 가까울수록, 라운드 개시 시 적중이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickDE_TU7",
    "name": "나이트 칙 디텍터",
    "img": "NightChickDE",
    "type": "경장 지원기",
    "info": "그 아이는 별로 위험한 아인 아니거든? 근데 자꾸 우리를 방해하는 공격을 하니까 다른 애들이랑 있으면 주의해야 하거든? 맞으면 다른 철충한테 지원 요청하는 못된 아이니까 혼내줘야행! 누나 보고 있을께~!<br><br><br>- 예쁜 누나 포츈이 보고해용~!",
    "HPbase": 1000,
    "HPlvl": 110,
    "ATKbase": 65,
    "ATKlvl": 6.32,
    "DEFbase": 75,
    "DEFlvl": 2.861,
    "AGI": 4.25,
    "CRT": 5,
    "HIT": 360,
    "DOD": 105,
    "resist": [
      40,
      40,
      40
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "약점 포착",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "목표를 공격 대상으로 지정해 $(1) 피해를 주고, 2라운드 동안 표식 상태로 만듭니다. 표식 상태인 대상인 추가 피해를 받으며, 회피가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "섬광 탄막",
        "img": "Beam",
        "range": 4,
        "AP": 7,
        "description": "지정한 위치에 섬광탄을 발사해 2라운드 동안 적중을 낮추고, 대상의 AP를 감소시킵니다.",
        "areadata": [
          4,
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "레이더 공유",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 일정 확률로 인접한 아군에게 경보를 울리며 전황을 공유합니다. 레이더를 공유 받은 경우, AP가 증가하며 2라운드 동안 사거리와 적중률이 증가합니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "레이더 재밍",
        "img": "TeamAtkDeBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 사망하는 경우, 주변 철충의 센서에 오류를 일으킵니다. 오류가 일어난 대상들은 적중이 크게 감소하며, 적중 강화 효과가 해제됩니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_LegionSPEX_N",
    "name": "개량형 레기온 스나이퍼",
    "img": "LegionSP",
    "type": "경장 공격기",
    "info": "<교전 기록 없음>",
    "HPbase": 10000,
    "HPlvl": 120,
    "ATKbase": 90,
    "ATKlvl": 9,
    "DEFbase": 70,
    "DEFlvl": 7,
    "AGI": 4.1,
    "CRT": 10,
    "HIT": 350,
    "DOD": 30,
    "resist": [
      30,
      30,
      30
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "점착탄 연사",
        "img": "TeamSpdDeBuff",
        "range": 4,
        "AP": 5,
        "description": "점착탄을 연사해 $(0.01) 피해를 주고, 대상들의 회피를 낮추며 회피 강화 효과를 해제합니다. 적중 대상은 행동력이 감소하며, 자신은 적중과 사거리가 증가합니다. 해당 효과는 2회까지 중첩됩니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "정밀 선도 사격",
        "img": "Snipe",
        "range": 5,
        "AP": 7,
        "description": "정밀 선도 사격으로 $(1.5) 방어 관통 피해를 줍니다. 대상이 기동형인 경우, 피해량이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "위장 홀로그램 투영",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "위장 홀로그램을 투영해, 적 진영과 멀수록 회피가 증가합니다. 해당 효과는 공격 시, 해당 라운드에는 일시적으로 해제됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "저격 대응",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 재빠르게 대응해 행동력이 증가하며 반격합니다. 행동력 증가 효과는 3회까지 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickMEX_TU5",
    "name": "강화형 칙 런쳐",
    "img": "NightChickM",
    "type": "경장 공격기",
    "info": "<교전 기록 없음>",
    "HPbase": 457.5,
    "HPlvl": 101.25,
    "ATKbase": 110,
    "ATKlvl": 11.5,
    "DEFbase": 65,
    "DEFlvl": 2.75,
    "AGI": 4,
    "CRT": 16.25,
    "HIT": 305,
    "DOD": 80,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "강화 미사일 공격",
        "img": "Missile",
        "range": 2,
        "AP": 4,
        "description": "미사일을 발사해 $(1.2) 피해를 줍니다. 대상이 이동 불가 상태면 직격으로 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "강화 미사일 난사",
        "img": "Missile",
        "range": 1,
        "AP": 6,
        "description": "미사일 근접 사격으로 $(1.6) 피해를 줍니다. 대상이 이동 불가 상태면 직격으로 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "기동 사격",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "이동 시, 4라운드 동안 사거리 / 공격력 / 행동력이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Phalangites_TU5",
    "name": "팔랑스",
    "img": "Phalangites",
    "type": "경장 보호기",
    "info": "각이 잡힌 대열로 행군하는 철충입니다. 철충 놈들 중엔 드물게 군기가 들어있지 말입니다. 딱 밀착해서 서로서로를 보호하는 녀석들이니 진형을 아작내는 게 중요하지 말임다.<br><br><br>- 블러디팬서",
    "HPbase": 1200,
    "HPlvl": 125,
    "ATKbase": 97.5,
    "ATKlvl": 8.5,
    "DEFbase": 190,
    "DEFlvl": 9,
    "AGI": 4.05,
    "CRT": 10,
    "HIT": 235,
    "DOD": 70,
    "resist": [
      40,
      40,
      40
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "머신건 속사",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "머신건을 발사해 $(1) 피해를 줍니다. 대상이 기동형인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "대열 방어",
        "img": "TeamDefBuff",
        "range": 6,
        "AP": 4,
        "description": "3라운드 동안 같은 열의 아군을 보호하며, 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "밀집 대형",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 같은 열에 인접한 아군에게 피해 감소 효과를 부여합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          8,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_FABigChick_TU5",
    "name": "풀아머 빅 칙",
    "img": "FABigChick",
    "type": "중장 공격기",
    "info": "빅 칙과는 달라! 빅 칙과는! 뭐로 만든지는 몰라도 장갑이 차원이 다르니 나 같은 대 장갑 요원이 없으면 꽤나 곤란할걸?<br><br><br> - 불가사리 보고함",
    "HPbase": 20000,
    "HPlvl": 125,
    "ATKbase": 90,
    "ATKlvl": 8.5,
    "DEFbase": 225,
    "DEFlvl": 7.5,
    "AGI": 3.3,
    "CRT": 5,
    "HIT": 160,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "칙 중 기관포",
        "img": "MGShot",
        "range": 4,
        "AP": 4,
        "description": "기관포로 $(1.5) 피해를 줍니다. 대상의 방어력을 일정 비율 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "듀얼 칙 캐논",
        "img": "CannonShot",
        "range": 2,
        "AP": 7,
        "description": "캐논포를 연사해 목표 열에 $(1.25) 피해를 줍니다. 피해 감소 효과를 무효화합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 반응 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "반응 장갑으로 인해 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_CenturionCF_TU3",
    "name": "센츄리온 치프틴",
    "img": "CenturionCF",
    "type": "경장 공격기",
    "info": "센츄리온에서 지휘 능력이 더 강화된 기종입니다. 포착 당한 후에는 공격을 피하기 힘드니 주의하셔야 합니다. 본 기종에도 안테나 도입을 검토하면 감사하겠습니다.<br><br><br>- 램파트",
    "HPbase": 7200,
    "HPlvl": 129.6,
    "ATKbase": 100,
    "ATKlvl": 10.25,
    "DEFbase": 85,
    "DEFlvl": 9,
    "AGI": 4.18,
    "CRT": 10,
    "HIT": 250,
    "DOD": 30,
    "resist": [
      0,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "정밀 유도 미사일",
        "img": "MultiMissile",
        "range": 4,
        "AP": 7,
        "description": "정밀 유도 미사일로 $(1) 피해를 줍니다. 대상이 표식 상태면 피해량이 크게 증가합니다.",
        "areadata": [
          8,
          9,
          5,
          6
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "멀티 록 온",
        "img": "Scan",
        "range": 4,
        "AP": 6,
        "description": "목표 범위 대상들을 표식으로 설정하고, 회피 강화 효과를 해제하며 회피가 낮춥니다. 자신은 적중이 증가하며, 대상들은 받는 피해 증가 상태가 됩니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "대열 정비",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "아군 사망 시, 대열을 정비해 인접한 아군들과 자신의 행동력 / 적중 / 회피가 증가합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "위기 극복",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 받을 때, 자신에게 능력치 감소 효과가 적용되어 있으면 반격하며, 일정 확률로 해당 효과를 해제합니다..",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_BigChickEX_TU6",
    "name": "시작형 빅 칙",
    "img": "BigChick",
    "type": "중장 공격기",
    "info": "<교전 기록 없음>",
    "HPbase": 25000,
    "HPlvl": 225,
    "ATKbase": 100,
    "ATKlvl": 10,
    "DEFbase": 300,
    "DEFlvl": 7,
    "AGI": 3.3,
    "CRT": 17.5,
    "HIT": 325,
    "DOD": 0,
    "resist": [
      40,
      25,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "칙 중 기관포 발사",
        "img": "MGShot",
        "range": 4,
        "AP": 5,
        "description": "중 기관총으로 $(1.5) 피해를 줍니다. 대상이 방어력 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "영거리 중 기관포",
        "img": "MGShot",
        "range": 1,
        "AP": 8,
        "description": "중 기관총 근접 사격으로 방어력을 일정 비율 무시하고 $(2.4) 피해를 줍니다. 대상이 방어력 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "근접 조준 사격",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "적 진영에 가까울수록, 라운드 개시 시 적중이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_FABigChick_TU6",
    "name": "풀아머 빅 칙",
    "img": "FABigChick",
    "type": "중장 공격기",
    "info": "빅 칙과는 달라! 빅 칙과는! 뭐로 만든지는 몰라도 장갑이 차원이 다르니 나 같은 대 장갑 요원이 없으면 꽤나 곤란할걸?<br><br><br> - 불가사리 보고함",
    "HPbase": 40000,
    "HPlvl": 155,
    "ATKbase": 95,
    "ATKlvl": 9,
    "DEFbase": 300,
    "DEFlvl": 8,
    "AGI": 3.35,
    "CRT": 5,
    "HIT": 185,
    "DOD": 0,
    "resist": [
      40,
      25,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "칙 중 기관포",
        "img": "MGShot",
        "range": 4,
        "AP": 4,
        "description": "기관포로 $(1.5) 피해를 줍니다. 대상의 방어력을 일정 비율 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "듀얼 칙 캐논",
        "img": "CannonShot",
        "range": 2,
        "AP": 7,
        "description": "캐논포를 연사해 목표 열에 $(1.25) 피해를 줍니다. 피해 감소 효과를 무효화합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 반응 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "반응 장갑으로 인해 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ScarabEX_TU6",
    "name": "스캐럽 HC",
    "img": "Scarab",
    "type": "기동 보호기",
    "info": "<교전 기록 없음>",
    "HPbase": 11250,
    "HPlvl": 123,
    "ATKbase": 120,
    "ATKlvl": 9.8,
    "DEFbase": 175,
    "DEFlvl": 3.25,
    "AGI": 4.55,
    "CRT": 15,
    "HIT": 250,
    "DOD": 180,
    "resist": [
      50,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "실드 돌진",
        "img": "AssaultAttack",
        "range": 3,
        "AP": 6,
        "description": "대상에게 돌격해 $(1.5) 피해를 주고, 대상의 행 / 열 보호 효과와 피해 감소 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "호위 기동",
        "img": "SelfDefBuff",
        "range": 6,
        "AP": 4,
        "description": "3라운드 동안 지정한 아군을 보호하며, 대상의 행동력과 적중을 증가시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "경계 기동",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시 HP가 50% 이하인 경우, 받는 피해와 회피가 감소하고 방어력이 대폭 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ZapperEX_TU6",
    "name": "강화형 재퍼",
    "img": "Zapper",
    "type": "경장 지원기",
    "info": "<교전 기록 없음>",
    "HPbase": 10000,
    "HPlvl": 135,
    "ATKbase": 105,
    "ATKlvl": 8.5,
    "DEFbase": 140,
    "DEFlvl": 3.5,
    "AGI": 4.15,
    "CRT": 10,
    "HIT": 400,
    "DOD": 120,
    "resist": [
      25,
      25,
      75
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "전격 체인",
        "img": "Shock",
        "range": 3,
        "AP": 4,
        "attr": "electric",
        "description": "전격을 방사해 $(0.8) 전기 속성 피해를 주고 대상의 AP와 회피를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "초고압 전류",
        "img": "Shock",
        "range": 1,
        "AP": 8,
        "attr": "electric",
        "description": "고압 전류로 $(1.2) 전기 속성 피해를 주고, 회피를 감소시킵니다. 일정 확률로 대상을 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "사주 경계",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "적을 발견하거나 적에게 공격당하기 전 까지는 경계 상태로 대기합니다. 공격당하기 전까지 받는 피해가 대폭 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickSP_TU9",
    "name": "칙 스나이퍼",
    "img": "NightChickSP",
    "type": "경장 공격기",
    "info": "엄폐와 위장 능력이 좋음. 빠르게 한 방으로 처치하는 게 좋을 것 같음.<br><br><br>- 발키리",
    "HPbase": 350,
    "HPlvl": 97,
    "ATKbase": 135,
    "ATKlvl": 16,
    "DEFbase": 35,
    "DEFlvl": 1.75,
    "AGI": 4,
    "CRT": 12.5,
    "HIT": 420,
    "DOD": 62.5,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "정조준 저격",
        "img": "Snipe",
        "range": 4,
        "AP": 7,
        "description": "보호 효과를 무시하는 저격으로 $(1.5) 피해를 줍니다. 대상이 이동 불가 상태면 정밀 사격으로 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "위장",
        "img": "SelfSpdBuff",
        "range": 6,
        "AP": 4,
        "description": "위장 파장을 발산해 3라운드 동안 회피 / 치명타가 증가하며 받는 피해가 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "대응 저격",
        "img": "DefCounter",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 위장 상태인 경우 반격을 활성화합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickDE_TU8",
    "name": "나이트 칙 디텍터",
    "img": "NightChickDE",
    "type": "경장 지원기",
    "info": "그 아이는 별로 위험한 아인 아니거든? 근데 자꾸 우리를 방해하는 공격을 하니까 다른 애들이랑 있으면 주의해야 하거든? 맞으면 다른 철충한테 지원 요청하는 못된 아이니까 혼내줘야행! 누나 보고 있을께~!<br><br><br>- 예쁜 누나 포츈이 보고해용~!",
    "HPbase": 1500,
    "HPlvl": 120,
    "ATKbase": 70,
    "ATKlvl": 6.625,
    "DEFbase": 85,
    "DEFlvl": 3.286,
    "AGI": 4.25,
    "CRT": 5,
    "HIT": 360,
    "DOD": 110,
    "resist": [
      45,
      45,
      45
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "약점 포착",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "목표를 공격 대상으로 지정해 $(1) 피해를 주고, 2라운드 동안 표식 상태로 만듭니다. 표식 상태인 대상인 추가 피해를 받으며, 회피가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "섬광 탄막",
        "img": "Beam",
        "range": 4,
        "AP": 7,
        "description": "지정한 위치에 섬광탄을 발사해 2라운드 동안 적중을 낮추고, 대상의 AP를 감소시킵니다.",
        "areadata": [
          4,
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "레이더 공유",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 일정 확률로 인접한 아군에게 경보를 울리며 전황을 공유합니다. 레이더를 공유 받은 경우, AP가 증가하며 2라운드 동안 사거리와 적중률이 증가합니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "레이더 재밍",
        "img": "TeamAtkDeBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 사망하는 경우, 주변 철충의 센서에 오류를 일으킵니다. 오류가 일어난 대상들은 적중이 크게 감소하며, 적중 강화 효과가 해제됩니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_FABigChickEX_TU5",
    "name": "FA 빅 칙 II",
    "img": "FABigChick",
    "type": "중장 공격기",
    "info": "빅 칙과는 달라! 빅 칙과는! 뭐로 만든지는 몰라도 장갑이 차원이 다르니 나 같은 대 장갑 요원이 없으면 꽤나 곤란할걸?<br><br><br> - 불가사리 보고함",
    "HPbase": 10000,
    "HPlvl": 181.25,
    "ATKbase": 165,
    "ATKlvl": 16.5,
    "DEFbase": 300,
    "DEFlvl": 10.5,
    "AGI": 3.375,
    "CRT": 10,
    "HIT": 195,
    "DOD": 0,
    "resist": [
      0,
      25,
      30
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "강화 중 기관포",
        "img": "MGShot",
        "range": 4,
        "AP": 4,
        "description": "중 기관포로 $(1.6) 피해를 줍니다. 대상의 방어력을 일정 비율 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "듀얼 칙 캐논포",
        "img": "CannonShotWide",
        "range": 2,
        "AP": 6,
        "description": "캐논포를 연사해 목표 열에 $(1.35) 피해를 줍니다. 대상의 피해 감소 효과를 해제합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "빅 칙 반응 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "반응 장갑으로 인해 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "작열탄두",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "작열탄두를 장비해 경장형에게 주는 피해가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_EmperorChick_TU3",
    "name": "칙 엠페러",
    "img": "EmperorChick",
    "type": "중장 공격기",
    "info": "<교전 기록 없음>",
    "HPbase": 17500,
    "HPlvl": 200,
    "ATKbase": 190,
    "ATKlvl": 19,
    "DEFbase": 160,
    "DEFlvl": 16,
    "AGI": 3.75,
    "CRT": 15,
    "HIT": 300,
    "DOD": 25,
    "resist": [
      0,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "칙 머신캐논",
        "img": "MGShot",
        "range": 4,
        "AP": 5,
        "description": "대구경 기관포로 $(1.8) 피해를 주고, 대상에게 무작위 방해 효과를 부여합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칙 파이널 어택",
        "img": "WideBeamShot",
        "range": 3,
        "AP": 10,
        "description": "전 무장을 발사해 목표 범위에 $(2) 피해를 줍니다. 목표 중심점 밖일수록 피해가 감소하며, <광분> 상태면 피해량이 크게 증가합니다.",
        "areadata": [
          0.5,
          0.75,
          0.5,
          0.75,
          1,
          0.75,
          0.5,
          0.75,
          0.5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "전투 프로그램 설정",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 자신의 HP가 50% 이하면 전투 프로그램을 갱신해 자신과 주변 아군에게 무작위 강화 효과를 부여합니다. 낮은 확률로 치명적 오류가 발생해 행동 불가가 되거나 받는 피해 증가 효과가 발생합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "칙 철벽 방어술",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "공격한 후, 방어 태세를 취해 해당 라운드 동안에는 최소 피해만 받습니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "앵그리 칙",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 처치되면 3라운드 동안 공격력이 증가합니다. 라운드 개시 시, <앵그리 칙>이 3 중첩 이상이면 <광분> 상태가 되어 공격력 / 적중 / 치명타 / 행동력이 증가하며 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_CenturionCF_TU4",
    "name": "센츄리온 치프틴",
    "img": "CenturionCF",
    "type": "경장 공격기",
    "info": "센츄리온에서 지휘 능력이 더 강화된 기종입니다. 포착 당한 후에는 공격을 피하기 힘드니 주의하셔야 합니다. 본 기종에도 안테나 도입을 검토하면 감사하겠습니다.<br><br><br>- 램파트",
    "HPbase": 10680,
    "HPlvl": 136.8,
    "ATKbase": 140,
    "ATKlvl": 14,
    "DEFbase": 95,
    "DEFlvl": 10,
    "AGI": 4.18,
    "CRT": 12.5,
    "HIT": 325,
    "DOD": 35,
    "resist": [
      0,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "정밀 유도 미사일",
        "img": "MultiMissile",
        "range": 4,
        "AP": 7,
        "description": "정밀 유도 미사일로 $(1) 피해를 줍니다. 대상이 표식 상태면 피해량이 크게 증가합니다.",
        "areadata": [
          8,
          9,
          5,
          6
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "멀티 록 온",
        "img": "Scan",
        "range": 4,
        "AP": 6,
        "description": "목표 범위 대상들을 표식으로 설정하고, 회피 강화 효과를 해제하며 회피가 낮춥니다. 자신은 적중이 증가하며, 대상들은 받는 피해 증가 상태가 됩니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "대열 정비",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "아군 사망 시, 대열을 정비해 인접한 아군들과 자신의 행동력 / 적중 / 회피가 증가합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "위기 극복",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 받을 때, 자신에게 능력치 감소 효과가 적용되어 있으면 반격하며, 일정 확률로 해당 효과를 해제합니다..",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickC_EV5",
    "name": "나이트 칙 캐논",
    "img": "NightChickC",
    "type": "중장 공격기",
    "info": "<교전 기록 없음>",
    "HPbase": 440,
    "HPlvl": 40,
    "ATKbase": 80,
    "ATKlvl": 5,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 3.3,
    "CRT": 5,
    "HIT": 250,
    "DOD": 0,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "플레임 버너",
        "img": "WideFireShot",
        "range": 2,
        "AP": 4,
        "attr": "fire",
        "description": "화염 방사로 $(0.8) 화염 속성 피해를 주며, 일정 확률로 3라운드 동안 지속 화염 피해를 입는 점화 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "곡사포",
        "img": "CannonShotDelay",
        "range": 5,
        "AP": 8,
        "description": "1라운드 후에 착탄하는 곡사포를 발사해 목표 범위에 $(1.75)의 피해를 줍니다. 대상이 이동 불가 상태면 피해량이 증가합니다.",
        "areadata": [
          0,
          0.5,
          0,
          0.5,
          1,
          0.5,
          0,
          0.5,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "연료 탱크 유폭",
        "img": "SuiceideBomb",
        "range": 0,
        "AP": 0,
        "attr": "fire",
        "description": "사망 시, 연료 탱크가 유폭해 주변에 괴멸적인 피해를 주고 피해 감소 효과를 해제합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Tortoise_TU4",
    "name": "토터스",
    "img": "Tortoise",
    "type": "중장 보호기",
    "info": "장갑이 활성화 되었을 땐 유효 피해를 주기 힘들어요! 장갑을 비활성화 시킨 후에 한 번에 해치워야 해요!<br><br><br>- 켈베로스",
    "HPbase": 15000,
    "HPlvl": 185,
    "ATKbase": 90,
    "ATKlvl": 9,
    "DEFbase": 250,
    "DEFlvl": 13,
    "AGI": 3.6,
    "CRT": 5,
    "HIT": 200,
    "DOD": 0,
    "resist": [
      40,
      25,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "프래그 샷건",
        "img": "ShotGun",
        "range": 3,
        "AP": 6,
        "description": "샷건을 발사해 $(1.2) 피해를 줍니다. 자신이 전열이면 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "장갑 장착",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 8,
        "description": "외장형 반응 장갑을 장착해 전투 속행 효과를 얻으며, 방어력과 모든 속성 저항이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "외장형 반응 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 받는 경우, 3회까진 최소 피해만 받으며 효과 저항이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "엄폐 지원",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 같은 행의 뒤에 배치된 아군을 보호합니다. 해당 효과는 자신이 스킬을 사용하면 해제됩니다.",
        "areadata": [
          4,
          5,
          6
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_LegionSPEX_TU2",
    "name": "개량형 레기온 스나이퍼",
    "img": "LegionSP",
    "type": "경장 공격기",
    "info": "<교전 기록 없음>",
    "HPbase": 20000,
    "HPlvl": 135,
    "ATKbase": 105,
    "ATKlvl": 12,
    "DEFbase": 80,
    "DEFlvl": 8,
    "AGI": 4.1,
    "CRT": 10,
    "HIT": 400,
    "DOD": 35,
    "resist": [
      35,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "점착탄 연사",
        "img": "TeamSpdDeBuff",
        "range": 4,
        "AP": 5,
        "description": "점착탄을 연사해 $(0.01) 피해를 주고, 대상들의 회피를 낮추며 회피 강화 효과를 해제합니다. 적중 대상은 행동력이 감소하며, 자신은 적중과 사거리가 증가합니다. 해당 효과는 2회까지 중첩됩니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "정밀 선도 사격",
        "img": "Snipe",
        "range": 5,
        "AP": 7,
        "description": "정밀 선도 사격으로 $(1.5) 방어 관통 피해를 줍니다. 대상이 기동형인 경우, 피해량이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "위장 홀로그램 투영",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "위장 홀로그램을 투영해, 적 진영과 멀수록 회피가 증가합니다. 해당 효과는 공격 시, 해당 라운드에는 일시적으로 해제됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "저격 대응",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 재빠르게 대응해 행동력이 증가하며 반격합니다. 행동력 증가 효과는 3회까지 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickQMEX_TU2",
    "name": "개량형 칙 쿼터마스터",
    "img": "NightChickQM",
    "type": "경장 지원기",
    "info": "<교전 기록 없음>",
    "HPbase": 19500,
    "HPlvl": 125,
    "ATKbase": 75,
    "ATKlvl": 7.5,
    "DEFbase": 85,
    "DEFlvl": 8.5,
    "AGI": 4.2,
    "CRT": 5,
    "HIT": 400,
    "DOD": 15,
    "resist": [
      30,
      30,
      30
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "공격 훼방",
        "img": "Shot",
        "range": 4,
        "AP": 5,
        "description": "대상에게 $(1.2) 피해를 주며, 2라운드 동안 대상의 공격력 / 적중 / 치명타를 낮춥니다. 해당 효과는 2회까지 중첩됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "전무장 보급",
        "img": "TeamAtkBuff",
        "range": 3,
        "AP": 7,
        "description": "주변 아군의 출력을 강화해 공격력 / 적중 / 치명타를 높입니다. 자신은 행동력이 증가합니다.  해당 효과는 2회까지 중첩됩니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 약진하기",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 일정 확률로 무장 보급을 받은 아군의 공격을 지원하며, 피격 시 회피율이 증가합니다. 회피율 증가 효과는 최대 2회 중첩됩니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "전황 판단",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 배치된 열에 따라 아군 또는 자신에게 추가 효과가 부여됩니다. 전열에 배치된 경우 아군 전체의 방어력 / 모든 저항을 올려주고, 중열에 배치된 경우 자신의 행동력 / 방어력 / 피해 감소가 증가하며, 후열에 배치된 경우 아군 전체의 공격력 / 적중을 올려줍합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "배수진",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "사망 시, 모든 아군의 행동력이 감소하고, 받는 피해 / 공격력 / 적중이 증가합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ScoutSP_TU2",
    "name": "지원형 스카우트",
    "img": "Scout",
    "type": "기동 지원기",
    "info": "<교전 기록 없음>",
    "HPbase": 25000,
    "HPlvl": 125,
    "ATKbase": 70,
    "ATKlvl": 7,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.2,
    "CRT": 10,
    "HIT": 280,
    "DOD": 120,
    "resist": [
      15,
      15,
      15
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "충격탄 투하",
        "img": "Missile",
        "range": 2,
        "AP": 6,
        "description": "충격 미사일을 투하해 $(1.2) 피해를 주고 대상의 AP를 감소시킵니다.",
        "areadata": [
          7,
          4,
          5,
          1
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "경보 발령",
        "img": "Scan",
        "range": 6,
        "AP": 6,
        "description": "목표 아군에게 적 발견 경보를 울려 대상의 AP / 사거리 / 치명타를 증가시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "기습 편제",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "이동 시, 인접한 아군의 공격을 지원합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "지원 대열",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 자신의 HP가 50% 이상인 경우 인접 아군의 공격력 / 방어력 / 효과 저항이 증가합니다. HP가 25% 미만인 경우, 인접 아군의 공격력 / 방어력/ 행동력이 감소합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_CenturionCF_TU5",
    "name": "센츄리온 치프틴",
    "img": "CenturionCF",
    "type": "경장 공격기",
    "info": "센츄리온에서 지휘 능력이 더 강화된 기종입니다. 포착 당한 후에는 공격을 피하기 힘드니 주의하셔야 합니다. 본 기종에도 안테나 도입을 검토하면 감사하겠습니다.<br><br><br>- 램파트",
    "HPbase": 20000,
    "HPlvl": 136.8,
    "ATKbase": 160,
    "ATKlvl": 16,
    "DEFbase": 105,
    "DEFlvl": 11,
    "AGI": 4.18,
    "CRT": 12.5,
    "HIT": 350,
    "DOD": 35,
    "resist": [
      0,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "정밀 유도 미사일",
        "img": "MultiMissile",
        "range": 4,
        "AP": 7,
        "description": "정밀 유도 미사일로 $(1) 피해를 줍니다. 대상이 표식 상태면 피해량이 크게 증가합니다.",
        "areadata": [
          8,
          9,
          5,
          6
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "멀티 록 온",
        "img": "Scan",
        "range": 4,
        "AP": 6,
        "description": "목표 범위 대상들을 표식으로 설정하고, 회피 강화 효과를 해제하며 회피가 낮춥니다. 자신은 적중이 증가하며, 대상들은 받는 피해 증가 상태가 됩니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "대열 정비",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "아군 사망 시, 대열을 정비해 인접한 아군들과 자신의 행동력 / 적중 / 회피가 증가합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "위기 극복",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 받을 때, 자신에게 능력치 감소 효과가 적용되어 있으면 반격하며, 일정 확률로 해당 효과를 해제합니다..",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_SpectorMS_N",
    "name": "스펙터 MS",
    "img": "Spector",
    "type": "기동 지원기",
    "info": "<교전 기록 없음>",
    "HPbase": 18000,
    "HPlvl": 200,
    "ATKbase": 90,
    "ATKlvl": 9,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.2,
    "CRT": 5,
    "HIT": 350,
    "DOD": 45,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "교란용 전자기장 미사일",
        "img": "MultiMissile",
        "range": 4,
        "AP": 6,
        "description": "전자기장 미사일로 대상들을 교란해 $(1.2) 피해를 주고, 대상의 효과 저항 / 사거리를 낮춥니다. 해당 효과는 2회까지 중첩됩니다.",
        "areadata": [
          7,
          4,
          5,
          1
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "모드 변경",
        "img": "TeamDefBuff",
        "range": 6,
        "AP": 7,
        "description": "전투 모드로 전환해 공격력 / 치명타가 증가하지만 받는 피해도 증가하며, 행동력이 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "이동형 반물질 역장",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 반물질 역장을 전개해 자신과 인접 아군이 받는 피해를 일정 횟수 무효화합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "전투 패턴 분석",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 주변 아군에게 전투 패턴 분석 결과를 발신해 적중 / 치명타 / 효과 저항을 올려줍니다. 해당 효과는 3회까지 중첩됩니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "은폐장 전개",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시, 은폐장을 전개해 회피가 대폭 증가합니다. 해당 효과는 전투가 진행될수록 점감됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_EmperorChick_TU4",
    "name": "칙 엠페러",
    "img": "EmperorChick",
    "type": "중장 공격기",
    "info": "<교전 기록 없음>",
    "HPbase": 62500,
    "HPlvl": 225,
    "ATKbase": 200,
    "ATKlvl": 20,
    "DEFbase": 165,
    "DEFlvl": 16.5,
    "AGI": 3.75,
    "CRT": 15,
    "HIT": 325,
    "DOD": 25,
    "resist": [
      0,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "칙 머신캐논",
        "img": "MGShot",
        "range": 4,
        "AP": 5,
        "description": "대구경 기관포로 $(1.8) 피해를 주고, 대상에게 무작위 방해 효과를 부여합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칙 파이널 어택",
        "img": "WideBeamShot",
        "range": 3,
        "AP": 10,
        "description": "전 무장을 발사해 목표 범위에 $(2) 피해를 줍니다. 목표 중심점 밖일수록 피해가 감소하며, <광분> 상태면 피해량이 크게 증가합니다.",
        "areadata": [
          0.5,
          0.75,
          0.5,
          0.75,
          1,
          0.75,
          0.5,
          0.75,
          0.5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "전투 프로그램 설정",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 자신의 HP가 50% 이하면 전투 프로그램을 갱신해 자신과 주변 아군에게 무작위 강화 효과를 부여합니다. 낮은 확률로 치명적 오류가 발생해 행동 불가가 되거나 받는 피해 증가 효과가 발생합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "칙 철벽 방어술",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "공격한 후, 방어 태세를 취해 해당 라운드 동안에는 최소 피해만 받습니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "앵그리 칙",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 처치되면 3라운드 동안 공격력이 증가합니다. 라운드 개시 시, <앵그리 칙>이 3 중첩 이상이면 <광분> 상태가 되어 공격력 / 적중 / 치명타 / 행동력이 증가하며 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickAQ_TU",
    "name": "아쿠아 칙",
    "img": "NightChickAQ",
    "type": "경장 지원기",
    "info": "물을 운반하는 철충인가봐. 철충들은 주변에 물이 새면 안절부절못하니 이걸 이용하면 좋을 것 같아!<br><br><br> - 아쿠아 보고함",
    "HPbase": 250,
    "HPlvl": 45,
    "ATKbase": 35,
    "ATKlvl": 4,
    "DEFbase": 25,
    "DEFlvl": 1.5,
    "AGI": 4,
    "CRT": 5,
    "HIT": 200,
    "DOD": 15,
    "resist": [
      50,
      99,
      -50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "액체 분사",
        "img": "BeamShot",
        "range": 4,
        "AP": 7,
        "attr": "ice",
        "description": "지정 범위에 $(1) 냉기 속성 피해를 줍니다. 적중 대상은 침수 상태가 됩니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "재 정비 프로토콜",
        "img": "TeamDefBuff",
        "range": 6,
        "AP": 5,
        "description": "지정 범위의 아군을 재 정비해, 해로운 효과를 해제하며 AP / 적중 / 효과 저항을 올려줍니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "방수 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "냉기 / 효과 저항이 증가하며, 받는 피해가 감소합니다. 침수 상태인 경우, 제어를 상실해 회피 / 행동력이 크게 증가하지만 적중이 크게 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "누수",
        "img": "TeamSpdDeBuff",
        "range": 0,
        "AP": 0,
        "description": "처치될 경우, 범위 내에 있는 대상들을 침수 상태로 만들며 행동력과 AP를 감소시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickTD_TU",
    "name": "썬더 칙",
    "img": "NightChickTD",
    "type": "경장 공격기",
    "info": "으아~ 촙 메이커로 때리니 갑자기 날뛰어서 큰일 날 뻔 했어요! 전기에 반응하는 것 같던데...아 참! 서펀트씨가 물을 뿌린 녀석은 갑자기 자폭해버리더라구요.<br><br><br> - 켈베로스 보고함",
    "HPbase": 200,
    "HPlvl": 40,
    "ATKbase": 50,
    "ATKlvl": 6.5,
    "DEFbase": 10,
    "DEFlvl": 0.5,
    "AGI": 4.05,
    "CRT": 10,
    "HIT": 150,
    "DOD": 40,
    "resist": [
      -25,
      -25,
      99
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "스턴 샷",
        "img": "Shock",
        "range": 4,
        "AP": 4,
        "attr": "electric",
        "description": "지정 대상에게 $(1) 전기 속성 피해를 줍니다. 적중 대상은 높은 확률로 AP / 회피 / 전기 저항이 감소합니다. 대상이 침수 상태면 피해량이 크게 증가하며, 일정 확률로 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "일렉트릭 쇼크",
        "img": "WideLightning",
        "range": 1,
        "AP": 8,
        "attr": "electric",
        "description": "지정 범위에 $(1) 보호 무시 전기 속성 피해를 줍니다. 적중 대상은 높은 확률로 AP / 회피가 감소합니다. 대상이 침수 상태면 피해량이 크게 증가하며, 받는 피해 감소 상태를 해제합니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "과충전",
        "img": "Shock",
        "range": 0,
        "AP": 0,
        "description": "전기 속성 공격을 맞을 경우, 과충전 상태가 되어 공격력 / 적중 / 회피 / AP / 행동력이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "방전",
        "img": "Shock",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 자신이 침수 상태인 경우 방전으로 인한 고정 피해를 입습니다. 침수 상태로 처치될 경우, 범위 내 대상들에게 전기 피해를 줍니다. 해당 효과가 적용되는 대상이 침수 상태인 경우, 행동 불가가 됩니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickDEG_TU",
    "name": "나이트 칙 디텍터 G",
    "img": "NightChickDEG",
    "type": "경장 지원기",
    "info": "지상전용 레이더 철충이네요. 공중 공격엔 취약하니 기동 부대를 동원해 처리하는 것을 추천드려요.<br><br><br> - 다이카 보고함",
    "HPbase": 250,
    "HPlvl": 45,
    "ATKbase": 10,
    "ATKlvl": 2,
    "DEFbase": 50,
    "DEFlvl": 2,
    "AGI": 4.3,
    "CRT": 1,
    "HIT": 200,
    "DOD": 55,
    "resist": [
      -25,
      -25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "지면 교란 파장",
        "img": "TeamDefDeBuff",
        "range": 5,
        "AP": 9,
        "description": "교란 파장을 발산해 $(0.1) 보호 무시 피해를 주고, 3라운드 동안 표식 / 받는 피해 증가 / 적중 / 회피 감소 효과를 줍니다. 스킬 사용 시, 회피가 증가합니다. 해당 스킬은 반드시 적중하지만, 기동형 적에게는 부가 효과가 적용되지 않습니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "개량형 섬광탄",
        "img": "Beam",
        "range": 4,
        "AP": 8,
        "description": "지정 범위에 섬광탄을 발사해 $(0.1) 피해를 주고, 대상의 AP를 감소시키며 적중 / 치명타 증가 효과를 해제합니다. 적중한 대상은 2라운드 동안 적중과 치명타가 감소합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "정밀 지상 레이더",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "인접 아군들에게 보호막 / 피해 감소 무시 효과와 대 경장 / 중장형 피해 증가 효과를 부여합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "정보 발신 오류",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 침수 상태로 라운드 개시 시, 오류가 발생해 아군의 적중 / 치명타 / 행동력이 감소합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_BigChickS_TU",
    "name": "빅 칙 실더",
    "img": "BigChickS",
    "type": "중장 보호기",
    "info": "제법 근성이 있는 녀석이야! 아무리 때려도 잘 쓰러지지 않던데 미호는 잘 처리하더라구. 쓸데 없이 계속 치치말라나 뭐라나…하지만 한 번 붙으면 물러날 내가 아니지~!<br><br><br> - 스틸 드라코 보고함",
    "HPbase": 1000,
    "HPlvl": 80,
    "ATKbase": 50,
    "ATKlvl": 6,
    "DEFbase": 100,
    "DEFlvl": 5,
    "AGI": 3.15,
    "CRT": 5,
    "HIT": 75,
    "DOD": 1,
    "resist": [
      25,
      25,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "방패 연타",
        "img": "ShieldWall",
        "range": 3,
        "AP": 5,
        "description": "방패 연타로 대상에게 $(1.3) 피해를 줍니다. 대상이 이동 불가 상태면 피해량이 증가하며, 높은 확률로 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칙 블로킹",
        "img": "ShieldWall",
        "range": 6,
        "AP": 6,
        "description": "방어 태세를 취해, 3라운드 동안 행 보호 / 열 보호 / 받는 피해 감소 / 효과 저항 증가 효과가 발생합니다. 자신의 HP가 25% 이하인 경우, 반격 효과가 추가됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 방어 지휘",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "<칙 블로킹> 상태로 라운드 개시 시, 주변 아군에게 방어력 증가 / 받는 피해 감소 효과를 줍니다.",
        "areadata": [
          8,
          9,
          6,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "칙 근성 발동",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 2라운드 동안 방어력 / 행동력이 증가합니다. 라운드 개시 시, <칙 근성 발동> 방어 증가 효과가 5회 이상이면 전투 속행 효과가 추가됩니다. 전투 속행 발동 시, 2라운드 동안 최소 피해만 받지만 지속 고정 피해를 입으며 방어막과 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Drone_TU2",
    "name": "경비용 드론",
    "img": "Drone",
    "type": "기동 지원기",
    "info": "드론의 자율 경비용 기종이다.",
    "HPbase": 150,
    "HPlvl": 25,
    "ATKbase": 50,
    "ATKlvl": 5,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.35,
    "CRT": 5,
    "HIT": 100,
    "DOD": 60,
    "resist": [
      0,
      0,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "충격파 미사일",
        "img": "Missile",
        "range": 3,
        "AP": 5,
        "description": "충격파 미사일을 발사해 $(1.1000000000000001) 피해를 주고, 대상을 뒤로 1칸 밀어내며 AP를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "정밀 스캔",
        "img": "Scan",
        "range": 1,
        "AP": 7,
        "description": "목표 지점에 있는 대상들의 약점을 분석해, 3라운드 동안 받는 피해를 증가시키며 효과 저항과 회피를 감소시킵니다.",
        "areadata": [
          8,
          5,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Fallen_TU2",
    "name": "경비용 폴른",
    "img": "Fallen",
    "type": "경장 지원기",
    "info": "폴른의 자율 경비용 기종이다.",
    "HPbase": 200,
    "HPlvl": 35,
    "ATKbase": 55,
    "ATKlvl": 6,
    "DEFbase": 20,
    "DEFlvl": 1,
    "AGI": 3.9,
    "CRT": 5,
    "HIT": 155,
    "DOD": 15,
    "resist": [
      0,
      0,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "머신건 사격",
        "img": "MGShot",
        "range": 4,
        "AP": 4,
        "description": "머신건을 발사해 목표 적에게 $(1)의 피해를 줍니다. 대상이 방어력 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "대 장갑 진동탄",
        "img": "SelfDefDeBuff",
        "range": 4,
        "AP": 6,
        "description": "대 장갑 진동탄을 발사해 $(0.25) 피해를 주고, 목표 대상의 방어력을 낮춥니다. 대상에게 피해 감소 효과가 있는 경우, 해당 효과를 무효화합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Rampart_TU2",
    "name": "경비용 램파트",
    "img": "Rampart",
    "type": "경장 보호기",
    "info": "램파트의 자율 경비용 기종이다.",
    "HPbase": 250,
    "HPlvl": 40,
    "ATKbase": 50,
    "ATKlvl": 5.5,
    "DEFbase": 35,
    "DEFlvl": 1.5,
    "AGI": 3.8,
    "CRT": 5,
    "HIT": 140,
    "DOD": 10,
    "resist": [
      40,
      40,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "목표 견제",
        "img": "ARShot",
        "range": 3,
        "AP": 4,
        "description": "위협 사격으로 $(1) 피해를 주고, 2라운드 동안 대상의 공격력과 적중을 낮춥니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "목표 호위",
        "img": "ShieldWall",
        "range": 6,
        "AP": 6,
        "description": "3라운드 동안 지정한 아군을 보호하며, 대상의 AP를 증가시킵니다. 해당 스킬 사용 시, 자신이 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_PuppHead_TU2",
    "name": "경비용 펍 헤드",
    "img": "PuppHead",
    "type": "경장 지원기",
    "info": "펍 헤드의 자율 경비용 기종이다.",
    "HPbase": 200,
    "HPlvl": 32.5,
    "ATKbase": 45,
    "ATKlvl": 4.5,
    "DEFbase": 15,
    "DEFlvl": 0.75,
    "AGI": 3.95,
    "CRT": 5,
    "HIT": 150,
    "DOD": 30,
    "resist": [
      0,
      0,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "테이저 발사",
        "img": "Shock",
        "range": 2,
        "AP": 4,
        "attr": "electric",
        "description": "목표 적을 감전시켜 $(0.75)의 전기 속성 피해를 주고 AP와 회피를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "체포 사슬",
        "img": "Hang",
        "range": 4,
        "AP": 4,
        "description": "목표 대상을 체포해 $(0.01) 피해를 주면서 최대 2칸까지 앞으로 당기고, 3라운드 동안 이동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_AMG11_TU2",
    "name": "경비용 AMG-11",
    "img": "AMG11",
    "type": "경장 지원기",
    "info": "AMG-11의 자율 경비용 기종이다.",
    "HPbase": 175,
    "HPlvl": 30,
    "ATKbase": 55,
    "ATKlvl": 5.75,
    "DEFbase": 10,
    "DEFlvl": 0.75,
    "AGI": 4,
    "CRT": 5,
    "HIT": 175,
    "DOD": 0,
    "resist": [
      0,
      0,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "목표 경보",
        "img": "ARShot",
        "range": 5,
        "AP": 4,
        "description": "대상을 표식 설정하며 $(1) 피해를 줍니다. 3라운드 동안 대상은 받는 피해가 증가하며, 회피가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "지원 개시",
        "img": "SelfAtkBuff",
        "range": 6,
        "AP": 6,
        "description": "3라운드 동안 지정한 아군의 공격을 지원하며, 대상의 행동력을 높입니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_FallenC_EV1",
    "name": "폴른 커스텀",
    "img": "FallenC",
    "type": "경장 공격기",
    "info": "조준은 엉망이지만 화력은 강력하니 주의해 주세요. 제 풀에 지쳐 가동을 멈추니 잘 피하기만 해도 될 거에요.<br><br><br> - 블랙 하운드 보고함",
    "HPbase": 240,
    "HPlvl": 40,
    "ATKbase": 60,
    "ATKlvl": 6.5,
    "DEFbase": 15,
    "DEFlvl": 1,
    "AGI": 4.05,
    "CRT": 10,
    "HIT": 140,
    "DOD": 45,
    "resist": [
      -25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "개조 머신건",
        "img": "MGShot",
        "range": 4,
        "AP": 4,
        "description": "머신건 사격으로 $(1.1000000000000001) 피해를 줍니다. 대상이 경장형이거나 회피 / 방어력 감소 상태면 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "진동 분쇄탄",
        "img": "SelfDefDeBuff",
        "range": 4,
        "AP": 6,
        "description": "진동 분쇄탄으로 지정 범위에 $(1) 피해를 주고, 방어력 증가와 받는 피해 감소 효과를 해제합니다. 대상이 방어력 감소 상태면 피해량이 크게 증가합니다.",
        "areadata": [
          4,
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "출력 한계 해제",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "적을 공격할 때마다 공격력과 행동력이 증가하지만 적중이 감소하며, 지속 물리 피해를 입습니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "과출력 유폭",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "<출력 증폭>이 3중첩 이상인 상태에서 사망 시, 주변에 고정 피해를 주며 강화 효과를 해제합니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_PuppHeadC_EV1",
    "name": "펍 헤드 커스텀",
    "img": "PuppHeadC",
    "type": "경장 지원기",
    "info": "이 녀석과 같이 다니는 적들은 신속하게 움직이는 것 같군. 신속히 처리하는 것이 좋겠어.<br><br><br> - 칸 보고함",
    "HPbase": 210,
    "HPlvl": 37.5,
    "ATKbase": 55,
    "ATKlvl": 5.5,
    "DEFbase": 10,
    "DEFlvl": 0.5,
    "AGI": 4.2,
    "CRT": 5,
    "HIT": 145,
    "DOD": 50,
    "resist": [
      25,
      25,
      99
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "고전압 스턴건",
        "img": "Shock",
        "range": 3,
        "AP": 5,
        "attr": "electric",
        "description": "대상에게 $(1) 전기 속성 피해를 주고, AP / 회피 / 행동력을 낮춥니다. 대상이 경장 / 중장형인 경우, 일정 확률로 행동 불가로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칩입자 포획",
        "img": "Hang",
        "range": 4,
        "AP": 4,
        "description": "적중 대상을 앞으로 당겨 이동 불가 상태로 만들며, 높은 확률로 대상에게 걸린 강화 효과를 해제합니다. 스킬 사용 시, 3라운드 동안 행동력이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "연산 병렬처리",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "인접 아군들의 연산을 보조해, 전투 개시 시 대상들의 AP / 치명타 / 행동력 / 효과 저항을 높입니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "네트워크 오류",
        "img": "TeamAtkDeBuff",
        "range": 0,
        "AP": 0,
        "description": "사망 시, 2라운드 동안 인접한 아군들의 적중과 사거리가 크게 감소합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_RampartC_EV1",
    "name": "램파트 커스텀",
    "img": "RampartC",
    "type": "경장 보호기",
    "info": "불리해지면 동료에게 지원 요청을 하는 약삭빠른 녀석이야. 방어하기 시작하면 반격하니 주의해.<br><br><br> - 칼리스타 보고함",
    "HPbase": 400,
    "HPlvl": 47.5,
    "ATKbase": 50,
    "ATKlvl": 5,
    "DEFbase": 40,
    "DEFlvl": 2.5,
    "AGI": 4,
    "CRT": 10,
    "HIT": 150,
    "DOD": 20,
    "resist": [
      50,
      50,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "개조 기총 견제",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "견제 사격으로 대상에게 $(1.1000000000000001) 피해를 주고, 2라운드 동안 공격력 / 치명타 / 적중 / 행동력을 낮춥니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "요격 태세",
        "img": "DefCounter",
        "range": 6,
        "AP": 6,
        "description": "3라운드 동안 방어력이 증가하며 받는 피해가 감소합니다. 열 보호가 활성화되며, 해당 상태에서 공격받으면 반격합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "전열 방어 대형",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 전열에 있는 상태로 라운드 개시 시, 범위 내 아군을 지정 대상 보호하며 대상의 AP를 증가시킵니다.",
        "areadata": [
          8,
          6,
          2
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "긴급 지원 요청",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시 자신의 HP가 25% 이하인 경우, 아군 공격기에게 지원을 요청해 대상의 AP / 공격력 / 행동력을 증가시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Stinger_TU2",
    "name": "양산형 스팅어",
    "img": "Stinger",
    "type": "기동 공격기",
    "info": "스팅어의 양산형 기종이다.",
    "HPbase": 150,
    "HPlvl": 30,
    "ATKbase": 65,
    "ATKlvl": 7.5,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.2,
    "CRT": 10,
    "HIT": 100,
    "DOD": 50,
    "resist": [
      50,
      0,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "네이팜 버너",
        "img": "WideFireShot",
        "range": 2,
        "AP": 5,
        "attr": "fire",
        "description": "화염 방사로 $(0.75) 피해를 주고, 뒤의 대상에게는 50% 감소한 피해를 줍니다. 3라운드 동안 대상을 점화 상태로 만들어 지속 화염 피해를 줍니다.",
        "areadata": [
          0,
          0,
          0,
          0.5,
          1,
          0,
          0,
          0,
          0
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "파쇄 돌격",
        "img": "AssaultAttack",
        "range": 3,
        "AP": 7,
        "description": "목표 대상에게 돌격해 $(1.4) 피해를 줍니다. 대상의 방어력을 일정 비율 무시하며, 표식 상태인 경우 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "예열 개시",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "이동 시, 3라운드 동안 공격력 / 행동력 / 회피가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Rampart_TU3",
    "name": "경비용 램파트",
    "img": "Rampart",
    "type": "경장 보호기",
    "info": "램파트의 자율 경비용 기종이다.",
    "HPbase": 500,
    "HPlvl": 65,
    "ATKbase": 60,
    "ATKlvl": 6.5,
    "DEFbase": 70,
    "DEFlvl": 3,
    "AGI": 3.8,
    "CRT": 5,
    "HIT": 180,
    "DOD": 20,
    "resist": [
      40,
      40,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "목표 견제",
        "img": "ARShot",
        "range": 3,
        "AP": 4,
        "description": "위협 사격으로 $(1) 피해를 주고, 2라운드 동안 대상의 공격력과 적중을 낮춥니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "목표 호위",
        "img": "ShieldWall",
        "range": 6,
        "AP": 6,
        "description": "3라운드 동안 지정한 아군을 보호하며, 대상의 AP를 증가시킵니다. 해당 스킬 사용 시, 자신이 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_AMG11_TU3",
    "name": "경비용 AMG-11",
    "img": "AMG11",
    "type": "경장 지원기",
    "info": "AMG-11의 자율 경비용 기종이다.",
    "HPbase": 300,
    "HPlvl": 42.75,
    "ATKbase": 65,
    "ATKlvl": 6.5,
    "DEFbase": 20,
    "DEFlvl": 1.25,
    "AGI": 4.05,
    "CRT": 5,
    "HIT": 204,
    "DOD": 0,
    "resist": [
      0,
      0,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "목표 경보",
        "img": "ARShot",
        "range": 5,
        "AP": 4,
        "description": "대상을 표식 설정하며 $(1) 피해를 줍니다. 3라운드 동안 대상은 받는 피해가 증가하며, 회피가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "지원 개시",
        "img": "SelfAtkBuff",
        "range": 6,
        "AP": 6,
        "description": "3라운드 동안 지정한 아군의 공격을 지원하며, 대상의 행동력을 높입니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_DroneM_EV1",
    "name": "드론 커스텀",
    "img": "DroneM",
    "type": "기동 공격기",
    "info": "지상군 대응용으로 개조된 드론인거 같아. 대공 능력은 없는 것 같네. 그나저나 폭탄 배송이라니… 캐치 프레이즈로 적합한거 같기도…<br><br><br> - 익스프레스 76 보고함",
    "HPbase": 240,
    "HPlvl": 32.5,
    "ATKbase": 100,
    "ATKlvl": 10,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.5,
    "CRT": 15,
    "HIT": 100,
    "DOD": 60,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "폭뢰 발사",
        "img": "Missile",
        "range": 3,
        "AP": 5,
        "attr": "fire",
        "description": "폭뢰를 발사해 $(1) 화염 속성 피해를 줍니다. 치명타 시, 추가 화염 피해를 주며 대상이 경장형 / 중장형인 경우 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "지상 분석 레이더",
        "img": "Scan",
        "range": 5,
        "AP": 9,
        "description": "경장형 / 중장형 적을 분석해 3라운드 동안 대상의 공격력 / 방어력 / 치명타 / 적중 / 회피를 낮춥니다. 스킬 사용 시, 3라운드 동안 행동력이 증가합니다. 기동형 적에게는 효과가 없습니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "방어 대열 지원",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 지정 대상 보호를 받고 있는 상태에서 아군 사망 시, 아군 보호기의 공격을 지원하며 대상의 AP를 상승시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "핀 포인트 폭격",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 전열일 경우, 방어막 / 피해 감소 효과를 무시하며 방어 관통이 크게 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_PuppHead_TU3",
    "name": "경비용 펍 헤드",
    "img": "PuppHead",
    "type": "경장 지원기",
    "info": "펍 헤드의 자율 경비용 기종이다.",
    "HPbase": 375,
    "HPlvl": 50,
    "ATKbase": 55,
    "ATKlvl": 5.5,
    "DEFbase": 30,
    "DEFlvl": 1.5,
    "AGI": 4,
    "CRT": 5,
    "HIT": 185,
    "DOD": 45,
    "resist": [
      0,
      0,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "테이저 발사",
        "img": "Shock",
        "range": 2,
        "AP": 4,
        "attr": "electric",
        "description": "목표 적을 감전시켜 $(0.75)의 전기 속성 피해를 주고 AP와 회피를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "체포 사슬",
        "img": "Hang",
        "range": 4,
        "AP": 4,
        "description": "목표 대상을 체포해 $(0.01) 피해를 주면서 최대 2칸까지 앞으로 당기고, 3라운드 동안 이동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Seljuq_TU2",
    "name": "양산형 셀주크",
    "img": "Seljuq",
    "type": "중장 공격기",
    "info": "셀주크의 양산형 기종이다.",
    "HPbase": 300,
    "HPlvl": 52.5,
    "ATKbase": 75,
    "ATKlvl": 8.5,
    "DEFbase": 50,
    "DEFlvl": 2,
    "AGI": 3,
    "CRT": 5,
    "HIT": 100,
    "DOD": 0,
    "resist": [
      0,
      0,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "175mm 직사포",
        "img": "CannonShotWide",
        "range": 2,
        "AP": 7,
        "description": "직사 포격으로 목표 대상이 있는 열에 $(1) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "175mm 곡사포",
        "img": "CannonShotDelay",
        "range": 6,
        "AP": 10,
        "description": "2라운드 뒤에 착탄하는 곡사 포격으로 목표 지점에 $(2) 보호 무시 피해를 줍니다. 목표 지점 주변에는 피해가 50% 감소합니다. 표식 상태인 대상에게는 피해량이 증가합니다.",
        "areadata": [
          0,
          0.5,
          0,
          0.5,
          1,
          0.5,
          0,
          0.5,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "대 보병 고폭탄",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "대 보병 고폭탄을 장전해, 경장형에게 주는 피해가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_AMG11AA_EV1",
    "name": "대공용 AMG-11",
    "img": "AMG11AA",
    "type": "경장 지원기",
    "info": "오~ 이 녀석들 왠지 마음에 드는데? 몇 대 가져가서 네리의 부하로 쓰면 되겠어! 네리 대신 일하게 해야지!<br><br><br> - 네레이드 보고함",
    "HPbase": 300,
    "HPlvl": 42.5,
    "ATKbase": 55,
    "ATKlvl": 5.5,
    "DEFbase": 35,
    "DEFlvl": 2,
    "AGI": 3.95,
    "CRT": 10,
    "HIT": 325,
    "DOD": 3,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "회피 견제 사격",
        "img": "ARShot",
        "range": 5,
        "AP": 4,
        "description": "기총 사격으로 $(1.1000000000000001) 피해를 주고, 대상을 표식으로 설정해 회피를 낮추고 받는 피해를 증가시킵니다. 회피 감소 효과는 기동형에게 2배로 적용됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "대공 기총 난사",
        "img": "WideBeamShot",
        "range": 3,
        "AP": 7,
        "description": "기총을 난사해 $(1) 피해를 주고, 대상들의 회피를 낮춥니다. 대상이 기동형인 경우 피해량이 증가하고, 회피 감소 효과가 2배로 적용되며 회피 증가 효과를 해제합니다.",
        "areadata": [
          7,
          4,
          5,
          1
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "대공 레이더 시스템",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 인접 아군의 적중 / 치명타 / 대 기동형 피해량을 증가시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "목표 설정 오류",
        "img": "TeamAtkDeBuff",
        "range": 0,
        "AP": 0,
        "description": "사망 시, 2라운드 동안 인접 아군의 행동력이 감소하며 해당 라운드 동안에는 스킬을 사용할 수 없게 됩니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Fallen_TU3",
    "name": "경비용 폴른",
    "img": "Fallen",
    "type": "경장 지원기",
    "info": "폴른의 자율 경비용 기종이다.",
    "HPbase": 400,
    "HPlvl": 55,
    "ATKbase": 65,
    "ATKlvl": 7,
    "DEFbase": 40,
    "DEFlvl": 2,
    "AGI": 3.9,
    "CRT": 5,
    "HIT": 195,
    "DOD": 20,
    "resist": [
      0,
      0,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "머신건 사격",
        "img": "MGShot",
        "range": 4,
        "AP": 4,
        "description": "머신건을 발사해 목표 적에게 $(1)의 피해를 줍니다. 대상이 방어력 감소 상태인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "대 장갑 진동탄",
        "img": "SelfDefDeBuff",
        "range": 4,
        "AP": 6,
        "description": "대 장갑 진동탄을 발사해 $(0.25) 피해를 주고, 목표 대상의 방어력을 낮춥니다. 대상에게 피해 감소 효과가 있는 경우, 해당 효과를 무효화합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Drone_TU3",
    "name": "경비용 드론",
    "img": "Drone",
    "type": "기동 지원기",
    "info": "드론의 자율 경비용 기종이다.",
    "HPbase": 275,
    "HPlvl": 37.5,
    "ATKbase": 60,
    "ATKlvl": 5.5,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.4,
    "CRT": 5,
    "HIT": 130,
    "DOD": 90,
    "resist": [
      0,
      0,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "충격파 미사일",
        "img": "Missile",
        "range": 3,
        "AP": 5,
        "description": "충격파 미사일을 발사해 $(1.1000000000000001) 피해를 주고, 대상을 뒤로 1칸 밀어내며 AP를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "정밀 스캔",
        "img": "Scan",
        "range": 1,
        "AP": 7,
        "description": "목표 지점에 있는 대상들의 약점을 분석해, 3라운드 동안 받는 피해를 증가시키며 효과 저항과 회피를 감소시킵니다.",
        "areadata": [
          8,
          5,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_DroneM_EV2",
    "name": "드론 커스텀",
    "img": "DroneM",
    "type": "기동 공격기",
    "info": "지상군 대응용으로 개조된 드론인거 같아. 대공 능력은 없는 것 같네. 그나저나 폭탄 배송이라니… 캐치 프레이즈로 적합한거 같기도…<br><br><br> - 익스프레스 76 보고함",
    "HPbase": 560,
    "HPlvl": 50,
    "ATKbase": 120,
    "ATKlvl": 12,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.55,
    "CRT": 15,
    "HIT": 120,
    "DOD": 85,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "폭뢰 발사",
        "img": "Missile",
        "range": 3,
        "AP": 5,
        "attr": "fire",
        "description": "폭뢰를 발사해 $(1) 화염 속성 피해를 줍니다. 치명타 시, 추가 화염 피해를 주며 대상이 경장형 / 중장형인 경우 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "지상 분석 레이더",
        "img": "Scan",
        "range": 5,
        "AP": 9,
        "description": "경장형 / 중장형 적을 분석해 3라운드 동안 대상의 공격력 / 방어력 / 치명타 / 적중 / 회피를 낮춥니다. 스킬 사용 시, 3라운드 동안 행동력이 증가합니다. 기동형 적에게는 효과가 없습니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "방어 대열 지원",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 지정 대상 보호를 받고 있는 상태에서 아군 사망 시, 아군 보호기의 공격을 지원하며 대상의 AP를 상승시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "핀 포인트 폭격",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 전열일 경우, 방어막 / 피해 감소 효과를 무시하며 방어 관통이 크게 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_RampartC_EV2",
    "name": "램파트 커스텀",
    "img": "RampartC",
    "type": "경장 보호기",
    "info": "불리해지면 동료에게 지원 요청을 하는 약삭빠른 녀석이야. 방어하기 시작하면 반격하니 주의해.<br><br><br> - 칼리스타 보고함",
    "HPbase": 800,
    "HPlvl": 70,
    "ATKbase": 60,
    "ATKlvl": 5.75,
    "DEFbase": 80,
    "DEFlvl": 5,
    "AGI": 4.05,
    "CRT": 10,
    "HIT": 190,
    "DOD": 40,
    "resist": [
      50,
      50,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "개조 기총 견제",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "견제 사격으로 대상에게 $(1.1000000000000001) 피해를 주고, 2라운드 동안 공격력 / 치명타 / 적중 / 행동력을 낮춥니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "요격 태세",
        "img": "DefCounter",
        "range": 6,
        "AP": 6,
        "description": "3라운드 동안 방어력이 증가하며 받는 피해가 감소합니다. 열 보호가 활성화되며, 해당 상태에서 공격받으면 반격합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "전열 방어 대형",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 전열에 있는 상태로 라운드 개시 시, 범위 내 아군을 지정 대상 보호하며 대상의 AP를 증가시킵니다.",
        "areadata": [
          8,
          6,
          2
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "긴급 지원 요청",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시 자신의 HP가 25% 이하인 경우, 아군 공격기에게 지원을 요청해 대상의 AP / 공격력 / 행동력을 증가시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_FallenC_EV2",
    "name": "폴른 커스텀",
    "img": "FallenC",
    "type": "경장 공격기",
    "info": "조준은 엉망이지만 화력은 강력하니 주의해 주세요. 제 풀에 지쳐 가동을 멈추니 잘 피하기만 해도 될 거에요.<br><br><br> - 블랙 하운드 보고함",
    "HPbase": 540,
    "HPlvl": 60,
    "ATKbase": 85,
    "ATKlvl": 7.5,
    "DEFbase": 30,
    "DEFlvl": 2,
    "AGI": 4.1,
    "CRT": 15,
    "HIT": 165,
    "DOD": 60,
    "resist": [
      -25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "개조 머신건",
        "img": "MGShot",
        "range": 4,
        "AP": 4,
        "description": "머신건 사격으로 $(1.1000000000000001) 피해를 줍니다. 대상이 경장형이거나 회피 / 방어력 감소 상태면 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "진동 분쇄탄",
        "img": "SelfDefDeBuff",
        "range": 4,
        "AP": 6,
        "description": "진동 분쇄탄으로 지정 범위에 $(1) 피해를 주고, 방어력 증가와 받는 피해 감소 효과를 해제합니다. 대상이 방어력 감소 상태면 피해량이 크게 증가합니다.",
        "areadata": [
          4,
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "출력 한계 해제",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "적을 공격할 때마다 공격력과 행동력이 증가하지만 적중이 감소하며, 지속 물리 피해를 입습니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "과출력 유폭",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "<출력 증폭>이 3중첩 이상인 상태에서 사망 시, 주변에 고정 피해를 주며 강화 효과를 해제합니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Gigantes_TU3",
    "name": "양산형 기간테스",
    "img": "Gigantes",
    "type": "중장 보호기",
    "info": "기간테스의 양산형 기종이다.",
    "HPbase": 1500,
    "HPlvl": 90,
    "ATKbase": 80,
    "ATKlvl": 8,
    "DEFbase": 150,
    "DEFlvl": 7.5,
    "AGI": 3.15,
    "CRT": 5,
    "HIT": 100,
    "DOD": 0,
    "resist": [
      0,
      0,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "로켓 배쉬",
        "img": "MeleeAttack",
        "range": 1,
        "AP": 9,
        "description": "대상을 강타해 $(1.8) 피해를 주고, 일정 확률로 해당 라운드 동안 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "실드 차지",
        "img": "AssaultAttack",
        "range": 2,
        "AP": 7,
        "description": "대상에게 돌진해 $(1.3) 피해를 주고, 뒤로 1칸 밀며 대상에게 걸린 행 보호 또는 열 보호 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "거점 방어 모드",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시, 3라운드 동안 행 보호 효과를 활성화하며 방어력이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_StingerC_EV2",
    "name": "스팅어 커스텀",
    "img": "StingerC",
    "type": "기동 공격기",
    "info": "극지용 스팅어? 묘한 친근감이 느껴지네요. 적이 보호하기 전에 빠르게 처치하는게 좋을거에요. 견딜만하다고 방심하다간 큰일날 수 있어요.<br><br><br> - 님프 보고함",
    "HPbase": 475,
    "HPlvl": 45,
    "ATKbase": 80,
    "ATKlvl": 7,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.45,
    "CRT": 10,
    "HIT": 175,
    "DOD": 100,
    "resist": [
      -75,
      99,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "냉동 가스 분사",
        "img": "Beam",
        "range": 3,
        "AP": 6,
        "attr": "ice",
        "description": "대상에게 냉동 가스를 분사해 $(1.2) 냉기 속성 피해를 주고, 일정 확률로 3라운드 동안 냉기 / 전기 저항을 낮춥니다. 대상에게 냉기 저항 감소 효과가 이미 적용되어 있는 경우, 일정 확률로 행동 불가 / 받는 피해 증가 / 강화 해제 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "일점 돌파",
        "img": "AssaultAttack",
        "range": 4,
        "AP": 8,
        "description": "대상에게 돌격해 $(2) 피해를 줍니다. 대상이 빙결 상태인 경우, 피해량이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "침입자 경계",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 공격한 적에게만 집중해 회피가 크게 증가하지만 받는 피해도 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "강습 준비",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "지정 대상 보호를 받는 상태로 라운드 개시 시, 공격력과 치명타가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Seljuq_TU3",
    "name": "양산형 셀주크",
    "img": "Seljuq",
    "type": "중장 공격기",
    "info": "셀주크의 양산형 기종이다.",
    "HPbase": 800,
    "HPlvl": 70,
    "ATKbase": 100,
    "ATKlvl": 10,
    "DEFbase": 90,
    "DEFlvl": 3.5,
    "AGI": 3.05,
    "CRT": 5,
    "HIT": 120,
    "DOD": 0,
    "resist": [
      0,
      0,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "175mm 직사포",
        "img": "CannonShotWide",
        "range": 2,
        "AP": 7,
        "description": "직사 포격으로 목표 대상이 있는 열에 $(1) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "175mm 곡사포",
        "img": "CannonShotDelay",
        "range": 6,
        "AP": 10,
        "description": "2라운드 뒤에 착탄하는 곡사 포격으로 목표 지점에 $(2) 보호 무시 피해를 줍니다. 목표 지점 주변에는 피해가 50% 감소합니다. 표식 상태인 대상에게는 피해량이 증가합니다.",
        "areadata": [
          0,
          0.5,
          0,
          0.5,
          1,
          0.5,
          0,
          0.5,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "대 보병 고폭탄",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "대 보병 고폭탄을 장전해, 경장형에게 주는 피해가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_AMG11_TU5",
    "name": "경비용 AMG-11",
    "img": "AMG11",
    "type": "경장 지원기",
    "info": "AMG-11의 자율 경비용 기종이다.",
    "HPbase": 575,
    "HPlvl": 73.5,
    "ATKbase": 90,
    "ATKlvl": 7.5,
    "DEFbase": 45,
    "DEFlvl": 2.25,
    "AGI": 4.1,
    "CRT": 5,
    "HIT": 265,
    "DOD": 0,
    "resist": [
      0,
      0,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "목표 경보",
        "img": "ARShot",
        "range": 5,
        "AP": 4,
        "description": "대상을 표식 설정하며 $(1) 피해를 줍니다. 3라운드 동안 대상은 받는 피해가 증가하며, 회피가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "지원 개시",
        "img": "SelfAtkBuff",
        "range": 6,
        "AP": 6,
        "description": "3라운드 동안 지정한 아군의 공격을 지원하며, 대상의 행동력을 높입니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_PuppHead_TU5",
    "name": "경비용 펍 헤드",
    "img": "PuppHead",
    "type": "경장 지원기",
    "info": "펍 헤드의 자율 경비용 기종이다.",
    "HPbase": 625,
    "HPlvl": 81,
    "ATKbase": 80,
    "ATKlvl": 6.5,
    "DEFbase": 60,
    "DEFlvl": 3,
    "AGI": 4,
    "CRT": 5,
    "HIT": 225,
    "DOD": 75,
    "resist": [
      0,
      0,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "테이저 발사",
        "img": "Shock",
        "range": 2,
        "AP": 4,
        "attr": "electric",
        "description": "목표 적을 감전시켜 $(0.75)의 전기 속성 피해를 주고 AP와 회피를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "체포 사슬",
        "img": "Hang",
        "range": 4,
        "AP": 4,
        "description": "목표 대상을 체포해 $(0.01) 피해를 주면서 최대 2칸까지 앞으로 당기고, 3라운드 동안 이동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_RampartC_EV3",
    "name": "램파트 커스텀",
    "img": "RampartC",
    "type": "경장 보호기",
    "info": "불리해지면 동료에게 지원 요청을 하는 약삭빠른 녀석이야. 방어하기 시작하면 반격하니 주의해.<br><br><br> - 칼리스타 보고함",
    "HPbase": 2400,
    "HPlvl": 100,
    "ATKbase": 75,
    "ATKlvl": 6.5,
    "DEFbase": 120,
    "DEFlvl": 7.5,
    "AGI": 4.1,
    "CRT": 10,
    "HIT": 229,
    "DOD": 60,
    "resist": [
      50,
      50,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "개조 기총 견제",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "견제 사격으로 대상에게 $(1.1000000000000001) 피해를 주고, 2라운드 동안 공격력 / 치명타 / 적중 / 행동력을 낮춥니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "요격 태세",
        "img": "DefCounter",
        "range": 6,
        "AP": 6,
        "description": "3라운드 동안 방어력이 증가하며 받는 피해가 감소합니다. 열 보호가 활성화되며, 해당 상태에서 공격받으면 반격합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "전열 방어 대형",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 전열에 있는 상태로 라운드 개시 시, 범위 내 아군을 지정 대상 보호하며 대상의 AP를 증가시킵니다.",
        "areadata": [
          8,
          6,
          2
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "긴급 지원 요청",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시 자신의 HP가 25% 이하인 경우, 아군 공격기에게 지원을 요청해 대상의 AP / 공격력 / 행동력을 증가시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_AMG11AA_EV3",
    "name": "대공용 AMG-11",
    "img": "AMG11AA",
    "type": "경장 지원기",
    "info": "오~ 이 녀석들 왠지 마음에 드는데? 몇 대 가져가서 네리의 부하로 쓰면 되겠어! 네리 대신 일하게 해야지!<br><br><br> - 네레이드 보고함",
    "HPbase": 1500,
    "HPlvl": 92.5,
    "ATKbase": 70,
    "ATKlvl": 6.5,
    "DEFbase": 105,
    "DEFlvl": 6,
    "AGI": 4.05,
    "CRT": 10,
    "HIT": 475,
    "DOD": 3,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "회피 견제 사격",
        "img": "ARShot",
        "range": 5,
        "AP": 4,
        "description": "기총 사격으로 $(1.1000000000000001) 피해를 주고, 대상을 표식으로 설정해 회피를 낮추고 받는 피해를 증가시킵니다. 회피 감소 효과는 기동형에게 2배로 적용됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "대공 기총 난사",
        "img": "WideBeamShot",
        "range": 3,
        "AP": 7,
        "description": "기총을 난사해 $(1) 피해를 주고, 대상들의 회피를 낮춥니다. 대상이 기동형인 경우 피해량이 증가하고, 회피 감소 효과가 2배로 적용되며 회피 증가 효과를 해제합니다.",
        "areadata": [
          7,
          4,
          5,
          1
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "대공 레이더 시스템",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 인접 아군의 적중 / 치명타 / 대 기동형 피해량을 증가시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "목표 설정 오류",
        "img": "TeamAtkDeBuff",
        "range": 0,
        "AP": 0,
        "description": "사망 시, 2라운드 동안 인접 아군의 행동력이 감소하며 해당 라운드 동안에는 스킬을 사용할 수 없게 됩니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Rampart_TU5",
    "name": "경비용 램파트",
    "img": "Rampart",
    "type": "경장 보호기",
    "info": "램파트의 자율 경비용 기종이다.",
    "HPbase": 1530,
    "HPlvl": 100,
    "ATKbase": 90,
    "ATKlvl": 7.5,
    "DEFbase": 140,
    "DEFlvl": 6.5,
    "AGI": 3.9,
    "CRT": 5,
    "HIT": 220,
    "DOD": 45,
    "resist": [
      40,
      40,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "목표 견제",
        "img": "ARShot",
        "range": 3,
        "AP": 4,
        "description": "위협 사격으로 $(1) 피해를 주고, 2라운드 동안 대상의 공격력과 적중을 낮춥니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "목표 호위",
        "img": "ShieldWall",
        "range": 6,
        "AP": 6,
        "description": "3라운드 동안 지정한 아군을 보호하며, 대상의 AP를 증가시킵니다. 해당 스킬 사용 시, 자신이 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_PuppHeadC_EV3",
    "name": "펍 헤드 커스텀",
    "img": "PuppHeadC",
    "type": "경장 지원기",
    "info": "이 녀석과 같이 다니는 적들은 신속하게 움직이는 것 같군. 신속히 처리하는 것이 좋겠어.<br><br><br> - 칸 보고함",
    "HPbase": 975,
    "HPlvl": 75,
    "ATKbase": 95,
    "ATKlvl": 8,
    "DEFbase": 20,
    "DEFlvl": 1.5,
    "AGI": 4.3,
    "CRT": 5,
    "HIT": 195,
    "DOD": 100,
    "resist": [
      25,
      25,
      99
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "고전압 스턴건",
        "img": "Shock",
        "range": 3,
        "AP": 5,
        "attr": "electric",
        "description": "대상에게 $(1) 전기 속성 피해를 주고, AP / 회피 / 행동력을 낮춥니다. 대상이 경장 / 중장형인 경우, 일정 확률로 행동 불가로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칩입자 포획",
        "img": "Hang",
        "range": 4,
        "AP": 4,
        "description": "적중 대상을 앞으로 당겨 이동 불가 상태로 만들며, 높은 확률로 대상에게 걸린 강화 효과를 해제합니다. 스킬 사용 시, 3라운드 동안 행동력이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "연산 병렬처리",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "인접 아군들의 연산을 보조해, 전투 개시 시 대상들의 AP / 치명타 / 행동력 / 효과 저항을 높입니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "네트워크 오류",
        "img": "TeamAtkDeBuff",
        "range": 0,
        "AP": 0,
        "description": "사망 시, 2라운드 동안 인접한 아군들의 적중과 사거리가 크게 감소합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Chiller_TU",
    "name": "칠러",
    "img": "Chiller",
    "type": "기동 공격기",
    "info": "물… 절대 뿌리지 말것…<br><br><br> - 서펀트 보고함",
    "HPbase": 325,
    "HPlvl": 40,
    "ATKbase": 60,
    "ATKlvl": 7.5,
    "DEFbase": 50,
    "DEFlvl": 1.75,
    "AGI": 4.25,
    "CRT": 15,
    "HIT": 130,
    "DOD": 75,
    "resist": [
      -99,
      99,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "동결 가스",
        "img": "BeamShot",
        "range": 3,
        "AP": 6,
        "attr": "ice",
        "description": "지정 범위에 $(1) 냉기 속성 피해를 주고 대상을 이동 불가 상태로 만듭니다. 대상이 침수 상태인 경우, 행동 불가 / 받는 피해 증가 상태로 만들고 강화 효과를 해제합니다.",
        "areadata": [
          0,
          0,
          0,
          0.5,
          1,
          0,
          0,
          0,
          0
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "빙결 코팅",
        "img": "TeamDefBuff",
        "range": 6,
        "AP": 5,
        "description": "지정 아군과 자신에게 방어막을 부여하며, 방어력 증가 / 받는 피해와 화염 저항 감소 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "급속 냉각",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 침수 상태로 라운드 개시 시, 공격력 / 회피 / 행동력이 크게 증가하며 최소 피해만 입습니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "과열",
        "img": "TeamSpdDeBuff",
        "range": 0,
        "AP": 0,
        "description": "화염 속성 공격을 맞는 경우, 공격력 / 방어력 / 회피 / 행동력이 크게 감소하며 피해 최소화 상태가 해제됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickAQ_TU2",
    "name": "아쿠아 칙",
    "img": "NightChickAQ",
    "type": "경장 지원기",
    "info": "물을 운반하는 철충인가봐. 철충들은 주변에 물이 새면 안절부절못하니 이걸 이용하면 좋을 것 같아!<br><br><br> - 아쿠아 보고함",
    "HPbase": 500,
    "HPlvl": 75,
    "ATKbase": 50,
    "ATKlvl": 4.75,
    "DEFbase": 50,
    "DEFlvl": 2.5,
    "AGI": 4,
    "CRT": 5,
    "HIT": 275,
    "DOD": 30,
    "resist": [
      50,
      99,
      -50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "액체 분사",
        "img": "BeamShot",
        "range": 4,
        "AP": 7,
        "attr": "ice",
        "description": "지정 범위에 $(1) 냉기 속성 피해를 줍니다. 적중 대상은 침수 상태가 됩니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "재 정비 프로토콜",
        "img": "TeamDefBuff",
        "range": 6,
        "AP": 5,
        "description": "지정 범위의 아군을 재 정비해, 해로운 효과를 해제하며 AP / 적중 / 효과 저항을 올려줍니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "방수 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "냉기 / 효과 저항이 증가하며, 받는 피해가 감소합니다. 침수 상태인 경우, 제어를 상실해 회피 / 행동력이 크게 증가하지만 적중이 크게 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "누수",
        "img": "TeamSpdDeBuff",
        "range": 0,
        "AP": 0,
        "description": "처치될 경우, 범위 내에 있는 대상들을 침수 상태로 만들며 행동력과 AP를 감소시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_LegionElite_TU2",
    "name": "엘리트 레기온",
    "img": "Legion",
    "type": "경장 지원기",
    "info": "화력이 좀 더 강한 레기온이야. 난 전혀 구분이 안 가는데 에밀리는 잘 구분하더라구. 이상한 데서 재주가 좋다니까...아! 지휘관 철충과의 연계 공격은 특히 주의해야 해!<br><br><br>- 파니 보고함",
    "HPbase": 3000,
    "HPlvl": 120,
    "ATKbase": 100,
    "ATKlvl": 10,
    "DEFbase": 75,
    "DEFlvl": 3,
    "AGI": 4.35,
    "CRT": 2,
    "HIT": 425,
    "DOD": 80,
    "resist": [
      35,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "파쇄 미니건",
        "img": "MGShot",
        "range": 5,
        "AP": 5,
        "description": "미니건을 발사해 $(1.2) 피해를 줍니다. 대상이 표식 / 이동 불가 상태면 피해량이 증가하며, 대상의 피해 감소 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "포획탄 발사",
        "img": "SelfSpdDeBuff",
        "range": 5,
        "AP": 4,
        "description": "포획탄을 발사해 $(0.3) 피해를 주고, 3라운드 동안 대상을 이동 불가 / 행동력 감소 / 회피 감소 상태로 만듭니다. 대상이 표식 상태면 일정 확률로 강화 효과를 해제합니다. 스킬 사용 시, 3라운드 동안 자신의 행동력이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "상황 대응",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "아군 중 HP가 25% 이하인 대상이 있는 경우, 대상의 행동력을 증가시키며 대상의 공격을 지원합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "조준 공유 시스템",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "인접 아군의 적중이 증가합니다. 자신이 처치될 경우, 해당 효과를 받는 아군들의 적증 증가 효과를 해제하고 적중을 감소시킵니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_CenturionCF_N",
    "name": "센츄리온 치프틴",
    "img": "CenturionCF",
    "type": "경장 공격기",
    "info": "센츄리온에서 지휘 능력이 더 강화된 기종입니다. 포착 당한 후에는 공격을 피하기 힘드니 주의하셔야 합니다. 본 기종에도 안테나 도입을 검토하면 감사하겠습니다.<br><br><br>- 램파트",
    "HPbase": 6240,
    "HPlvl": 115.2,
    "ATKbase": 108,
    "ATKlvl": 10.8,
    "DEFbase": 75,
    "DEFlvl": 8,
    "AGI": 4.18,
    "CRT": 5,
    "HIT": 175,
    "DOD": 20,
    "resist": [
      20,
      20,
      20
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "정밀 유도 미사일",
        "img": "MultiMissile",
        "range": 4,
        "AP": 7,
        "description": "정밀 유도 미사일로 $(1) 피해를 줍니다. 대상이 표식 상태면 피해량이 크게 증가합니다.",
        "areadata": [
          8,
          9,
          5,
          6
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "멀티 록 온",
        "img": "Scan",
        "range": 4,
        "AP": 6,
        "description": "목표 범위 대상들을 표식으로 설정하고, 회피 강화 효과를 해제하며 회피가 낮춥니다. 자신은 적중이 증가하며, 대상들은 받는 피해 증가 상태가 됩니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "대열 정비",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "아군 사망 시, 대열을 정비해 인접한 아군들과 자신의 행동력 / 적중 / 회피가 증가합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "위기 극복",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 받을 때, 자신에게 능력치 감소 효과가 적용되어 있으면 반격하며, 일정 확률로 해당 효과를 해제합니다..",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Chiller_TU3",
    "name": "칠러",
    "img": "Chiller",
    "type": "기동 공격기",
    "info": "물… 절대 뿌리지 말것…<br><br><br> - 서펀트 보고함",
    "HPbase": 675,
    "HPlvl": 65,
    "ATKbase": 100,
    "ATKlvl": 10.5,
    "DEFbase": 100,
    "DEFlvl": 3.25,
    "AGI": 4.35,
    "CRT": 15,
    "HIT": 190,
    "DOD": 135,
    "resist": [
      -99,
      99,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "동결 가스",
        "img": "BeamShot",
        "range": 3,
        "AP": 6,
        "attr": "ice",
        "description": "지정 범위에 $(1) 냉기 속성 피해를 주고 대상을 이동 불가 상태로 만듭니다. 대상이 침수 상태인 경우, 행동 불가 / 받는 피해 증가 상태로 만들고 강화 효과를 해제합니다.",
        "areadata": [
          0,
          0,
          0,
          0.5,
          1,
          0,
          0,
          0,
          0
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "빙결 코팅",
        "img": "TeamDefBuff",
        "range": 6,
        "AP": 5,
        "description": "지정 아군과 자신에게 방어막을 부여하며, 방어력 증가 / 받는 피해와 화염 저항 감소 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "급속 냉각",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 침수 상태로 라운드 개시 시, 공격력 / 회피 / 행동력이 크게 증가하며 최소 피해만 입습니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "과열",
        "img": "TeamSpdDeBuff",
        "range": 0,
        "AP": 0,
        "description": "화염 속성 공격을 맞는 경우, 공격력 / 방어력 / 회피 / 행동력이 크게 감소하며 피해 최소화 상태가 해제됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickDEG_TU3",
    "name": "나이트 칙 디텍터 G",
    "img": "NightChickDEG",
    "type": "경장 지원기",
    "info": "지상전용 레이더 철충이네요. 공중 공격엔 취약하니 기동 부대를 동원해 처리하는 것을 추천드려요.<br><br><br> - 다이카 보고함",
    "HPbase": 1800,
    "HPlvl": 100,
    "ATKbase": 20,
    "ATKlvl": 4,
    "DEFbase": 150,
    "DEFlvl": 8,
    "AGI": 4.4,
    "CRT": 1,
    "HIT": 280,
    "DOD": 75,
    "resist": [
      -25,
      -25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "지면 교란 파장",
        "img": "TeamDefDeBuff",
        "range": 5,
        "AP": 9,
        "description": "교란 파장을 발산해 $(0.1) 보호 무시 피해를 주고, 3라운드 동안 표식 / 받는 피해 증가 / 적중 / 회피 감소 효과를 줍니다. 스킬 사용 시, 회피가 증가합니다. 해당 스킬은 반드시 적중하지만, 기동형 적에게는 부가 효과가 적용되지 않습니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "개량형 섬광탄",
        "img": "Beam",
        "range": 4,
        "AP": 8,
        "description": "지정 범위에 섬광탄을 발사해 $(0.1) 피해를 주고, 대상의 AP를 감소시키며 적중 / 치명타 증가 효과를 해제합니다. 적중한 대상은 2라운드 동안 적중과 치명타가 감소합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "정밀 지상 레이더",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "인접 아군들에게 보호막 / 피해 감소 무시 효과와 대 경장 / 중장형 피해 증가 효과를 부여합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "정보 발신 오류",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 침수 상태로 라운드 개시 시, 오류가 발생해 아군의 적중 / 치명타 / 행동력이 감소합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_BigChickS_TU3",
    "name": "빅 칙 실더",
    "img": "BigChickS",
    "type": "중장 보호기",
    "info": "제법 근성이 있는 녀석이야! 아무리 때려도 잘 쓰러지지 않던데 미호는 잘 처리하더라구. 쓸데 없이 계속 치치말라나 뭐라나…하지만 한 번 붙으면 물러날 내가 아니지~!<br><br><br> - 스틸 드라코 보고함",
    "HPbase": 12000,
    "HPlvl": 130,
    "ATKbase": 100,
    "ATKlvl": 10,
    "DEFbase": 500,
    "DEFlvl": 20,
    "AGI": 3.35,
    "CRT": 10,
    "HIT": 105,
    "DOD": 1,
    "resist": [
      25,
      25,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "방패 연타",
        "img": "ShieldWall",
        "range": 3,
        "AP": 5,
        "description": "방패 연타로 대상에게 $(1.3) 피해를 줍니다. 대상이 이동 불가 상태면 피해량이 증가하며, 높은 확률로 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칙 블로킹",
        "img": "ShieldWall",
        "range": 6,
        "AP": 6,
        "description": "방어 태세를 취해, 3라운드 동안 행 보호 / 열 보호 / 받는 피해 감소 / 효과 저항 증가 효과가 발생합니다. 자신의 HP가 25% 이하인 경우, 반격 효과가 추가됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 방어 지휘",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "<칙 블로킹> 상태로 라운드 개시 시, 주변 아군에게 방어력 증가 / 받는 피해 감소 효과를 줍니다.",
        "areadata": [
          8,
          9,
          6,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "칙 근성 발동",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 2라운드 동안 방어력 / 행동력이 증가합니다. 라운드 개시 시, <칙 근성 발동> 방어 증가 효과가 5회 이상이면 전투 속행 효과가 추가됩니다. 전투 속행 발동 시, 2라운드 동안 최소 피해만 받지만 지속 고정 피해를 입으며 방어막과 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickAQ_TU3",
    "name": "아쿠아 칙",
    "img": "NightChickAQ",
    "type": "경장 지원기",
    "info": "물을 운반하는 철충인가봐. 철충들은 주변에 물이 새면 안절부절못하니 이걸 이용하면 좋을 것 같아!<br><br><br> - 아쿠아 보고함",
    "HPbase": 2000,
    "HPlvl": 105,
    "ATKbase": 30,
    "ATKlvl": 3,
    "DEFbase": 75,
    "DEFlvl": 5,
    "AGI": 4.15,
    "CRT": 5,
    "HIT": 300,
    "DOD": 45,
    "resist": [
      50,
      99,
      -50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "액체 분사",
        "img": "BeamShot",
        "range": 4,
        "AP": 7,
        "attr": "ice",
        "description": "지정 범위에 $(1) 냉기 속성 피해를 줍니다. 적중 대상은 침수 상태가 됩니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "재 정비 프로토콜",
        "img": "TeamDefBuff",
        "range": 6,
        "AP": 5,
        "description": "지정 범위의 아군을 재 정비해, 해로운 효과를 해제하며 AP / 적중 / 효과 저항을 올려줍니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "방수 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "냉기 / 효과 저항이 증가하며, 받는 피해가 감소합니다. 침수 상태인 경우, 제어를 상실해 회피 / 행동력이 크게 증가하지만 적중이 크게 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "누수",
        "img": "TeamSpdDeBuff",
        "range": 0,
        "AP": 0,
        "description": "처치될 경우, 범위 내에 있는 대상들을 침수 상태로 만들며 행동력과 AP를 감소시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickTD_TU3",
    "name": "썬더 칙",
    "img": "NightChickTD",
    "type": "경장 공격기",
    "info": "으아~ 촙 메이커로 때리니 갑자기 날뛰어서 큰일 날 뻔 했어요! 전기에 반응하는 것 같던데...아 참! 서펀트씨가 물을 뿌린 녀석은 갑자기 자폭해버리더라구요.<br><br><br> - 켈베로스 보고함",
    "HPbase": 1200,
    "HPlvl": 90,
    "ATKbase": 125,
    "ATKlvl": 12.5,
    "DEFbase": 20,
    "DEFlvl": 1,
    "AGI": 4.2,
    "CRT": 10,
    "HIT": 210,
    "DOD": 80,
    "resist": [
      -25,
      -25,
      99
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "스턴 샷",
        "img": "Shock",
        "range": 4,
        "AP": 4,
        "attr": "electric",
        "description": "지정 대상에게 $(1) 전기 속성 피해를 줍니다. 적중 대상은 높은 확률로 AP / 회피 / 전기 저항이 감소합니다. 대상이 침수 상태면 피해량이 크게 증가하며, 일정 확률로 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "일렉트릭 쇼크",
        "img": "WideLightning",
        "range": 1,
        "AP": 8,
        "attr": "electric",
        "description": "지정 범위에 $(1) 보호 무시 전기 속성 피해를 줍니다. 적중 대상은 높은 확률로 AP / 회피가 감소합니다. 대상이 침수 상태면 피해량이 크게 증가하며, 받는 피해 감소 상태를 해제합니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "과충전",
        "img": "Shock",
        "range": 0,
        "AP": 0,
        "description": "전기 속성 공격을 맞을 경우, 과충전 상태가 되어 공격력 / 적중 / 회피 / AP / 행동력이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "방전",
        "img": "Shock",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 자신이 침수 상태인 경우 방전으로 인한 고정 피해를 입습니다. 침수 상태로 처치될 경우, 범위 내 대상들에게 괴멸적인 전기 피해를 줍니다. 해당 효과가 적용되는 대상이 침수 상태인 경우, 행동 불가가 됩니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Juggernaut_TU6",
    "name": "저거너트",
    "img": "Juggernaut",
    "type": "중장 보호기",
    "info": "성격이 나빠 보이는 철충인 거예요. 공격을 시작하면 끝까지 공격하거든요. 그래서 공중 부대로 유인을 하는 게 좋을 것 같아요. 그 덩치로 다른 철충들을 보호하지 못하게요.<br><br><br>- 블랙 하운드",
    "HPbase": 7500,
    "HPlvl": 255,
    "ATKbase": 120,
    "ATKlvl": 12.5,
    "DEFbase": 475,
    "DEFlvl": 18,
    "AGI": 3.3,
    "CRT": 10,
    "HIT": 180,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "스턴 펀치",
        "img": "MeleeAttack",
        "range": 1,
        "AP": 10,
        "description": "대상을 강타해 $(2.4) 피해를 주고, 일정 확률로 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "몸통 박치기",
        "img": "AssaultAttack",
        "range": 2,
        "AP": 9,
        "description": "대상에게 돌진해 $(1.6) 피해를 주고, 뒤로 1칸 밀어냅니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "방벽 전환",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 사망한 경우, 방어 태세로 전환해 2라운드 동안 행 보호와 열 보호 효과를 활성화합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "방어 프로토콜",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 일정 확률로 방어력이 대폭 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_BigChickS_TU4",
    "name": "빅 칙 실더",
    "img": "BigChickS",
    "type": "중장 보호기",
    "info": "제법 근성이 있는 녀석이야! 아무리 때려도 잘 쓰러지지 않던데 미호는 잘 처리하더라구. 쓸데 없이 계속 치치말라나 뭐라나…하지만 한 번 붙으면 물러날 내가 아니지~!<br><br><br> - 스틸 드라코 보고함",
    "HPbase": 25000,
    "HPlvl": 250,
    "ATKbase": 125,
    "ATKlvl": 12,
    "DEFbase": 750,
    "DEFlvl": 40,
    "AGI": 3.45,
    "CRT": 12.5,
    "HIT": 120,
    "DOD": 1,
    "resist": [
      25,
      25,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "방패 연타",
        "img": "ShieldWall",
        "range": 3,
        "AP": 5,
        "description": "방패 연타로 대상에게 $(1.3) 피해를 줍니다. 대상이 이동 불가 상태면 피해량이 증가하며, 높은 확률로 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칙 블로킹",
        "img": "ShieldWall",
        "range": 6,
        "AP": 6,
        "description": "방어 태세를 취해, 3라운드 동안 행 보호 / 열 보호 / 받는 피해 감소 / 효과 저항 증가 효과가 발생합니다. 자신의 HP가 25% 이하인 경우, 반격 효과가 추가됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 방어 지휘",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "<칙 블로킹> 상태로 라운드 개시 시, 주변 아군에게 방어력 증가 / 받는 피해 감소 효과를 줍니다.",
        "areadata": [
          8,
          9,
          6,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "칙 근성 발동",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 2라운드 동안 방어력 / 행동력이 증가합니다. 라운드 개시 시, <칙 근성 발동> 방어 증가 효과가 5회 이상이면 전투 속행 효과가 추가됩니다. 전투 속행 발동 시, 2라운드 동안 최소 피해만 받지만 지속 고정 피해를 입으며 방어막과 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_FallenC_EV3",
    "name": "폴른 커스텀",
    "img": "FallenC",
    "type": "경장 공격기",
    "info": "조준은 엉망이지만 화력은 강력하니 주의해 주세요. 제 풀에 지쳐 가동을 멈추니 잘 피하기만 해도 될 거에요.<br><br><br> - 블랙 하운드 보고함",
    "HPbase": 1080,
    "HPlvl": 90,
    "ATKbase": 110,
    "ATKlvl": 9.5,
    "DEFbase": 45,
    "DEFlvl": 3,
    "AGI": 4.15,
    "CRT": 15,
    "HIT": 190,
    "DOD": 75,
    "resist": [
      -25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "개조 머신건",
        "img": "MGShot",
        "range": 4,
        "AP": 4,
        "description": "머신건 사격으로 $(1.1000000000000001) 피해를 줍니다. 대상이 경장형이거나 회피 / 방어력 감소 상태면 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "진동 분쇄탄",
        "img": "SelfDefDeBuff",
        "range": 4,
        "AP": 6,
        "description": "진동 분쇄탄으로 지정 범위에 $(1) 피해를 주고, 방어력 증가와 받는 피해 감소 효과를 해제합니다. 대상이 방어력 감소 상태면 피해량이 크게 증가합니다.",
        "areadata": [
          4,
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "출력 한계 해제",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "적을 공격할 때마다 공격력과 행동력이 증가하지만 적중이 감소하며, 지속 물리 피해를 입습니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "과출력 유폭",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "<출력 증폭>이 3중첩 이상인 상태에서 사망 시, 주변에 고정 피해를 주며 강화 효과를 해제합니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_DroneM_EV3",
    "name": "드론 커스텀",
    "img": "DroneM",
    "type": "기동 공격기",
    "info": "지상군 대응용으로 개조된 드론인거 같아. 대공 능력은 없는 것 같네. 그나저나 폭탄 배송이라니… 캐치 프레이즈로 적합한거 같기도…<br><br><br> - 익스프레스 76 보고함",
    "HPbase": 900,
    "HPlvl": 67.5,
    "ATKbase": 140,
    "ATKlvl": 14,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.6,
    "CRT": 15,
    "HIT": 140,
    "DOD": 110,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "폭뢰 발사",
        "img": "Missile",
        "range": 3,
        "AP": 5,
        "attr": "fire",
        "description": "폭뢰를 발사해 $(1) 화염 속성 피해를 줍니다. 치명타 시, 추가 화염 피해를 주며 대상이 경장형 / 중장형인 경우 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "지상 분석 레이더",
        "img": "Scan",
        "range": 5,
        "AP": 9,
        "description": "경장형 / 중장형 적을 분석해 3라운드 동안 대상의 공격력 / 방어력 / 치명타 / 적중 / 회피를 낮춥니다. 스킬 사용 시, 3라운드 동안 행동력이 증가합니다. 기동형 적에게는 효과가 없습니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "방어 대열 지원",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 지정 대상 보호를 받고 있는 상태에서 아군 사망 시, 아군 보호기의 공격을 지원하며 대상의 AP를 상승시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "핀 포인트 폭격",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 전열일 경우, 방어막 / 피해 감소 효과를 무시하며 방어 관통이 크게 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_AMG11AA_EV4",
    "name": "대공용 AMG-11",
    "img": "AMG11AA",
    "type": "경장 지원기",
    "info": "오~ 이 녀석들 왠지 마음에 드는데? 몇 대 가져가서 네리의 부하로 쓰면 되겠어! 네리 대신 일하게 해야지!<br><br><br> - 네레이드 보고함",
    "HPbase": 7500,
    "HPlvl": 125,
    "ATKbase": 80,
    "ATKlvl": 7.5,
    "DEFbase": 175,
    "DEFlvl": 10,
    "AGI": 4.1,
    "CRT": 10,
    "HIT": 484,
    "DOD": 3,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "회피 견제 사격",
        "img": "ARShot",
        "range": 5,
        "AP": 4,
        "description": "기총 사격으로 $(1.1000000000000001) 피해를 주고, 대상을 표식으로 설정해 회피를 낮추고 받는 피해를 증가시킵니다. 회피 감소 효과는 기동형에게 2배로 적용됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "대공 기총 난사",
        "img": "WideBeamShot",
        "range": 3,
        "AP": 7,
        "description": "기총을 난사해 $(1) 피해를 주고, 대상들의 회피를 낮춥니다. 대상이 기동형인 경우 피해량이 증가하고, 회피 감소 효과가 2배로 적용되며 회피 증가 효과를 해제합니다.",
        "areadata": [
          7,
          4,
          5,
          1
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "대공 레이더 시스템",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 인접 아군의 적중 / 치명타 / 대 기동형 피해량을 증가시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "목표 설정 오류",
        "img": "TeamAtkDeBuff",
        "range": 0,
        "AP": 0,
        "description": "사망 시, 2라운드 동안 인접 아군의 행동력이 감소하며 해당 라운드 동안에는 스킬을 사용할 수 없게 됩니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_RampartC_EV4",
    "name": "램파트 커스텀",
    "img": "RampartC",
    "type": "경장 보호기",
    "info": "불리해지면 동료에게 지원 요청을 하는 약삭빠른 녀석이야. 방어하기 시작하면 반격하니 주의해.<br><br><br> - 칼리스타 보고함",
    "HPbase": 12000,
    "HPlvl": 160,
    "ATKbase": 90,
    "ATKlvl": 7.25,
    "DEFbase": 200,
    "DEFlvl": 12.5,
    "AGI": 4.15,
    "CRT": 10,
    "HIT": 270,
    "DOD": 80,
    "resist": [
      50,
      50,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "개조 기총 견제",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "견제 사격으로 대상에게 $(1.1000000000000001) 피해를 주고, 2라운드 동안 공격력 / 치명타 / 적중 / 행동력을 낮춥니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "요격 태세",
        "img": "DefCounter",
        "range": 6,
        "AP": 6,
        "description": "3라운드 동안 방어력이 증가하며 받는 피해가 감소합니다. 열 보호가 활성화되며, 해당 상태에서 공격받으면 반격합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "전열 방어 대형",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 전열에 있는 상태로 라운드 개시 시, 범위 내 아군을 지정 대상 보호하며 대상의 AP를 증가시킵니다.",
        "areadata": [
          8,
          6,
          2
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "긴급 지원 요청",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시 자신의 HP가 25% 이하인 경우, 아군 공격기에게 지원을 요청해 대상의 AP / 공격력 / 행동력을 증가시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_FallenC_EV4",
    "name": "폴른 커스텀",
    "img": "FallenC",
    "type": "경장 공격기",
    "info": "조준은 엉망이지만 화력은 강력하니 주의해 주세요. 제 풀에 지쳐 가동을 멈추니 잘 피하기만 해도 될 거에요.<br><br><br> - 블랙 하운드 보고함",
    "HPbase": 3240,
    "HPlvl": 120,
    "ATKbase": 145,
    "ATKlvl": 13.5,
    "DEFbase": 90,
    "DEFlvl": 5,
    "AGI": 4.2,
    "CRT": 15,
    "HIT": 235,
    "DOD": 97.5,
    "resist": [
      -25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "개조 머신건",
        "img": "MGShot",
        "range": 4,
        "AP": 4,
        "description": "머신건 사격으로 $(1.1000000000000001) 피해를 줍니다. 대상이 경장형이거나 회피 / 방어력 감소 상태면 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "진동 분쇄탄",
        "img": "SelfDefDeBuff",
        "range": 4,
        "AP": 6,
        "description": "진동 분쇄탄으로 지정 범위에 $(1) 피해를 주고, 방어력 증가와 받는 피해 감소 효과를 해제합니다. 대상이 방어력 감소 상태면 피해량이 크게 증가합니다.",
        "areadata": [
          4,
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "출력 한계 해제",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "적을 공격할 때마다 공격력과 행동력이 증가하지만 적중이 감소하며, 지속 물리 피해를 입습니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "과출력 유폭",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "<출력 증폭>이 3중첩 이상인 상태에서 사망 시, 주변에 고정 피해를 주며 강화 효과를 해제합니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_LegionElite_TU3",
    "name": "엘리트 레기온",
    "img": "Legion",
    "type": "경장 지원기",
    "info": "화력이 좀 더 강한 레기온이야. 난 전혀 구분이 안 가는데 에밀리는 잘 구분하더라구. 이상한 데서 재주가 좋다니까...아! 지휘관 철충과의 연계 공격은 특히 주의해야 해!<br><br><br>- 파니 보고함",
    "HPbase": 6500,
    "HPlvl": 160,
    "ATKbase": 109,
    "ATKlvl": 11,
    "DEFbase": 101,
    "DEFlvl": 4,
    "AGI": 4.35,
    "CRT": 2,
    "HIT": 425,
    "DOD": 80,
    "resist": [
      35,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "파쇄 미니건",
        "img": "MGShot",
        "range": 5,
        "AP": 5,
        "description": "미니건을 발사해 $(1.2) 피해를 줍니다. 대상이 표식 / 이동 불가 상태면 피해량이 증가하며, 대상의 피해 감소 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "포획탄 발사",
        "img": "SelfSpdDeBuff",
        "range": 5,
        "AP": 4,
        "description": "포획탄을 발사해 $(0.3) 피해를 주고, 3라운드 동안 대상을 이동 불가 / 행동력 감소 / 회피 감소 상태로 만듭니다. 대상이 표식 상태면 일정 확률로 강화 효과를 해제합니다. 스킬 사용 시, 3라운드 동안 자신의 행동력이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "상황 대응",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "아군 중 HP가 25% 이하인 대상이 있는 경우, 대상의 행동력을 증가시키며 대상의 공격을 지원합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "조준 공유 시스템",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "인접 아군의 적중이 증가합니다. 자신이 처치될 경우, 해당 효과를 받는 아군들의 적증 증가 효과를 해제하고 적중을 감소시킵니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Testudo_TU3",
    "name": "테스투도",
    "img": "Testudo",
    "type": "경장 보호기",
    "info": "트레비앙~한 방어 능력을 가진 적이에요. 보통은 중화기로 제압해야 하지만 제 정교한 검술로도 해결할 수 있으니 맡겨주세요!<br><br><br>- 샬럿 보고함",
    "HPbase": 10000,
    "HPlvl": 180,
    "ATKbase": 40,
    "ATKlvl": 5.5,
    "DEFbase": 540,
    "DEFlvl": 10,
    "AGI": 4.1,
    "CRT": 2,
    "HIT": 345,
    "DOD": 40,
    "resist": [
      70,
      70,
      70
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "무장 파괴",
        "img": "ARShot",
        "range": 4,
        "AP": 3,
        "description": "대상에게 $(1) 피해를 주고, 일정 확률로 3라운드 동안 공격력 / 치명타 / 적중을 낮춥니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "진형 사수",
        "img": "DefCounter",
        "range": 6,
        "AP": 7,
        "description": "3라운드 동안 방어막 / 행 보호가 적용되며 받는 피해가 감소합니다. 해당 상태에서 공격받으면 반격합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "방진 전개",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시 열 보호 효과가 적용되며, 3라운드 동안 범위 내 아군이 받는 피해가 크게 감소합니다.",
        "areadata": [
          8,
          9,
          5,
          6,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "출력 오버로드",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 처치될 때마다 방어력이 증가합니다. 아군이 5기 이상 처치되면 공격 능력이 대폭 증가하며, 방어막과 피해 감소 효과를 무시하지만 지속 고정 피해를 입습니다. 해당 상태에서 처치될 경우, <방진 전개> 범위 안에 있는 아군에게 괴멸적인 고정 피해를 줍니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Centurion_EV1",
    "name": "센츄리온",
    "img": "Centurion",
    "type": "경장 공격기",
    "info": "작은 부대의 지휘관 역할을 하는 철충으로 보입니다. 주변 철충에게 일제 공격을 지시하는 정황이 포착되었군요. 부하들이 파괴되면 경계를 하는 것 같아요. 먼저 처리하는 게 좋을 것으로 보입니다.<br><br><br>- 37식 다이카",
    "HPbase": 17560,
    "HPlvl": 180,
    "ATKbase": 27,
    "ATKlvl": 4.5,
    "DEFbase": 485,
    "DEFlvl": 5,
    "AGI": 4.25,
    "CRT": 3,
    "HIT": 375,
    "DOD": 60,
    "resist": [
      35,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "XM 유탄 발사기",
        "img": "GrenadeAttack_2",
        "range": 4,
        "AP": 6,
        "description": "유탄을 발사해 목표 행에 $(1) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "일제 공격 개시",
        "img": "Snipe",
        "range": 5,
        "AP": 4,
        "description": "2라운드 동안 대상을 목표로 지정해 $(0.25) 피해를 주고 표식을 남기며, 받는 피해가 증가하는 상태로 만듭니다. 보호 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "반격 태세",
        "img": "DefCounter",
        "range": 0,
        "AP": 0,
        "description": "아군 사망 시, 3라운드 동안 공격력과 치명타가 증가하며 반격합니다. 공격력과 치명타 증가 효과는 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_CenturionG_TU3",
    "name": "센츄리온 제네럴",
    "img": "CenturionG",
    "type": "경장 지원기",
    "info": "지휘관 역할을 하는 철충인가 보네… 저렇게 무리하게 부하들을 다루면 안 좋을 것 같은데… 역시 적당히 하는 게 최고야...<br><br><br>- 이프리트 보고함",
    "HPbase": 26500,
    "HPlvl": 350,
    "ATKbase": 22,
    "ATKlvl": 4.25,
    "DEFbase": 333,
    "DEFlvl": 7.5,
    "AGI": 4.2,
    "CRT": 1,
    "HIT": 445,
    "DOD": 45,
    "resist": [
      35,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "집속 연장 미사일",
        "img": "MultiMissile",
        "range": 6,
        "AP": 4,
        "description": "지정 범위에 $(1) 피해를 주고, 3라운드 동안 대상을 표식 / 받는 피해 증가 상태로 만들고 AP를 감소시킵니다. 일정 확률로 적중 대상의 강화 효과를 해제합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "출력 한도 해제",
        "img": "TeamAtkBuff",
        "range": 6,
        "AP": 8,
        "description": "주변 아군의 공격력 / 치명타 / 행동력을 증가시키고 방어막과 받는 피해 감소 무시 효과를 부여합니다. 해당 효과를 받은 대상은 지속 고정 피해를 입습니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "전황 분석",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 모든 아군의 AP가 증가하며 2라운드 동안 효과 저항이 대폭 증가합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "현장 수습",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 처치될 경우, 일정 라운드 동안 반격하며 주변 아군과 자신이 받는 피해가 감소하고 행동력이 증가합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "지휘 중추 상실",
        "img": "TeamSpdDeBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 처치될 경우, 모든 아군의 공격력 / 치명타 / 적중 /행동력이 크게 감소하며 받는 피해가 증가합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_StingerC_EV4",
    "name": "스팅어 커스텀",
    "img": "StingerC",
    "type": "기동 공격기",
    "info": "극지용 스팅어? 묘한 친근감이 느껴지네요. 적이 보호하기 전에 빠르게 처치하는게 좋을거에요. 견딜만하다고 방심하다간 큰일날 수 있어요.<br><br><br> - 님프 보고함",
    "HPbase": 2400,
    "HPlvl": 75,
    "ATKbase": 120,
    "ATKlvl": 10,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.55,
    "CRT": 10,
    "HIT": 215,
    "DOD": 125,
    "resist": [
      -75,
      99,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "냉동 가스 분사",
        "img": "Beam",
        "range": 3,
        "AP": 6,
        "attr": "ice",
        "description": "대상에게 냉동 가스를 분사해 $(1.2) 냉기 속성 피해를 주고, 일정 확률로 3라운드 동안 냉기 / 전기 저항을 낮춥니다. 대상에게 냉기 저항 감소 효과가 이미 적용되어 있는 경우, 일정 확률로 행동 불가 / 받는 피해 증가 / 강화 해제 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "일점 돌파",
        "img": "AssaultAttack",
        "range": 4,
        "AP": 8,
        "description": "대상에게 돌격해 $(2) 피해를 줍니다. 대상이 빙결 상태인 경우, 피해량이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "침입자 경계",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 공격한 적에게만 집중해 회피가 크게 증가하지만 받는 피해도 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "강습 준비",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "지정 대상 보호를 받는 상태로 라운드 개시 시, 공격력과 치명타가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_SeljuqA_EV3",
    "name": "셀주크 커스텀",
    "img": "SeljuqA",
    "type": "중장 공격기",
    "info": "화력은 일반형 셀주크보다 떨어지지만 장갑은 더 향상된 것 같아요. 공격을 계속 허용하면 이쪽 움직임에 적응하니 방어 능력이 좋은 소대로 제압하는게 좋을 것 같네요.<br><br><br> - 세이렌 보고함",
    "HPbase": 10000,
    "HPlvl": 150,
    "ATKbase": 80,
    "ATKlvl": 9,
    "DEFbase": 500,
    "DEFlvl": 25,
    "AGI": 3.35,
    "CRT": 10,
    "HIT": 135,
    "DOD": 0,
    "resist": [
      25,
      25,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "산탄 포격",
        "img": "CannonShotWide",
        "range": 4,
        "AP": 4,
        "description": "지정 범위에 $(0.8) 피해를 줍니다. 대상이 방어 감소 또는 이동 불가 상태면 피해량이 크게 증가합니다.",
        "areadata": [
          7,
          4,
          5,
          1
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "확산형 곡사포",
        "img": "CannonShotDelay",
        "range": 5,
        "AP": 6,
        "description": "지정 범위에 $(1.2) 보호 무시 피해를 줍니다. 목표 지점 주변은 피해가 75%만 적용되며, 대상이 경장형 또는 기동형이면 피해량이 크게 증가합니다.",
        "areadata": [
          0,
          0.75,
          0,
          0.75,
          1,
          0.75,
          0,
          0.75,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "포격 보정",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 적의 움직임을 분석해 적중과 치명타가 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "증가 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시, 방어력이 크게 증가합니다. 해당 효과는 5회 피격되거나 전기 속성 공격을 맞으면 해제됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_GigantesC_EV3",
    "name": "기간테스 커스텀",
    "img": "GigantesC",
    "type": "중장 보호기",
    "info": "거점 방어에 특화된 모델인건가? 행동은 굼떠보이지만 좀처럼 빈틈이 안보여. 하지만 내 소우 피쉬라면 해결할 수 있을걸?<br><br><br> - 트리아이나 보고함",
    "HPbase": 20000,
    "HPlvl": 225,
    "ATKbase": 140,
    "ATKlvl": 13,
    "DEFbase": 800,
    "DEFlvl": 30,
    "AGI": 3.1,
    "CRT": 10,
    "HIT": 140,
    "DOD": 0,
    "resist": [
      25,
      25,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "너클 버스터",
        "img": "MeleeAttack",
        "range": 1,
        "AP": 8,
        "description": "대상을 강타해 $(2.4) 피해를 주고 뒤로 한 칸 밉니다. 자신의 HP %가 낮을수록 피해량이 증가하며, 25% 이하인 경우 방어막과 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "차지 스매시",
        "img": "AssaultAttack",
        "range": 2,
        "AP": 4,
        "description": "대상을 밀쳐 $(1) 피해를 주고 2칸 뒤로 날립니다. 피격 대상은 AP가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "개량형 방어 OS",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 공격하기 전까지는 방어력과 효과 저항이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "거점 순찰",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "인접한 보호기 제외 아군을 보호하며 대상의 행동력을 증가시킵니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_DroneM_EV4",
    "name": "드론 커스텀",
    "img": "DroneM",
    "type": "기동 공격기",
    "info": "지상군 대응용으로 개조된 드론인거 같아. 대공 능력은 없는 것 같네. 그나저나 폭탄 배송이라니… 캐치 프레이즈로 적합한거 같기도…<br><br><br> - 익스프레스 76 보고함",
    "HPbase": 1750,
    "HPlvl": 70,
    "ATKbase": 160,
    "ATKlvl": 16,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.65,
    "CRT": 15,
    "HIT": 160,
    "DOD": 135,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "폭뢰 발사",
        "img": "Missile",
        "range": 3,
        "AP": 5,
        "attr": "fire",
        "description": "폭뢰를 발사해 $(1) 화염 속성 피해를 줍니다. 치명타 시, 추가 화염 피해를 주며 대상이 경장형 / 중장형인 경우 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "지상 분석 레이더",
        "img": "Scan",
        "range": 5,
        "AP": 9,
        "description": "경장형 / 중장형 적을 분석해 3라운드 동안 대상의 공격력 / 방어력 / 치명타 / 적중 / 회피를 낮춥니다. 스킬 사용 시, 3라운드 동안 행동력이 증가합니다. 기동형 적에게는 효과가 없습니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "방어 대열 지원",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 지정 대상 보호를 받고 있는 상태에서 아군 사망 시, 아군 보호기의 공격을 지원하며 대상의 AP를 상승시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "핀 포인트 폭격",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 전열일 경우, 방어막 / 피해 감소 효과를 무시하며 방어 관통이 크게 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_StingerC_EV1",
    "name": "스팅어 커스텀",
    "img": "StingerC",
    "type": "기동 공격기",
    "info": "극지용 스팅어? 묘한 친근감이 느껴지네요. 적이 보호하기 전에 빠르게 처치하는게 좋을거에요. 견딜만하다고 방심하다간 큰일날 수 있어요.<br><br><br> - 님프 보고함",
    "HPbase": 220,
    "HPlvl": 30,
    "ATKbase": 55,
    "ATKlvl": 6,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.4,
    "CRT": 10,
    "HIT": 150,
    "DOD": 75,
    "resist": [
      -75,
      99,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "냉동 가스 분사",
        "img": "Beam",
        "range": 3,
        "AP": 6,
        "attr": "ice",
        "description": "대상에게 냉동 가스를 분사해 $(1.2) 냉기 속성 피해를 주고, 일정 확률로 3라운드 동안 냉기 / 전기 저항을 낮춥니다. 대상에게 냉기 저항 감소 효과가 이미 적용되어 있는 경우, 일정 확률로 행동 불가 / 받는 피해 증가 / 강화 해제 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "일점 돌파",
        "img": "AssaultAttack",
        "range": 4,
        "AP": 8,
        "description": "대상에게 돌격해 $(2) 피해를 줍니다. 대상이 빙결 상태인 경우, 피해량이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "침입자 경계",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 공격한 적에게만 집중해 회피가 크게 증가하지만 받는 피해도 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "강습 준비",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "지정 대상 보호를 받는 상태로 라운드 개시 시, 공격력과 치명타가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Stinger_TU3",
    "name": "양산형 스팅어",
    "img": "Stinger",
    "type": "기동 공격기",
    "info": "스팅어의 양산형 기종이다.",
    "HPbase": 300,
    "HPlvl": 37.5,
    "ATKbase": 80,
    "ATKlvl": 8.5,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.25,
    "CRT": 10,
    "HIT": 120,
    "DOD": 75,
    "resist": [
      50,
      0,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "네이팜 버너",
        "img": "WideFireShot",
        "range": 2,
        "AP": 5,
        "attr": "fire",
        "description": "화염 방사로 $(0.75) 피해를 주고, 뒤의 대상에게는 50% 감소한 피해를 줍니다. 3라운드 동안 대상을 점화 상태로 만들어 지속 화염 피해를 줍니다.",
        "areadata": [
          0,
          0,
          0,
          0.5,
          1,
          0,
          0,
          0,
          0
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "파쇄 돌격",
        "img": "AssaultAttack",
        "range": 3,
        "AP": 7,
        "description": "목표 대상에게 돌격해 $(1.4) 피해를 줍니다. 대상의 방어력을 일정 비율 무시하며, 표식 상태인 경우 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "예열 개시",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "이동 시, 3라운드 동안 공격력 / 행동력 / 회피가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_PuppHeadC_EV2",
    "name": "펍 헤드 커스텀",
    "img": "PuppHeadC",
    "type": "경장 지원기",
    "info": "이 녀석과 같이 다니는 적들은 신속하게 움직이는 것 같군. 신속히 처리하는 것이 좋겠어.<br><br><br> - 칸 보고함",
    "HPbase": 500,
    "HPlvl": 55,
    "ATKbase": 75,
    "ATKlvl": 6.5,
    "DEFbase": 15,
    "DEFlvl": 1,
    "AGI": 4.25,
    "CRT": 5,
    "HIT": 170,
    "DOD": 75,
    "resist": [
      25,
      25,
      99
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "고전압 스턴건",
        "img": "Shock",
        "range": 3,
        "AP": 5,
        "attr": "electric",
        "description": "대상에게 $(1) 전기 속성 피해를 주고, AP / 회피 / 행동력을 낮춥니다. 대상이 경장 / 중장형인 경우, 일정 확률로 행동 불가로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칩입자 포획",
        "img": "Hang",
        "range": 4,
        "AP": 4,
        "description": "적중 대상을 앞으로 당겨 이동 불가 상태로 만들며, 높은 확률로 대상에게 걸린 강화 효과를 해제합니다. 스킬 사용 시, 3라운드 동안 행동력이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "연산 병렬처리",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "인접 아군들의 연산을 보조해, 전투 개시 시 대상들의 AP / 치명타 / 행동력 / 효과 저항을 높입니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "네트워크 오류",
        "img": "TeamAtkDeBuff",
        "range": 0,
        "AP": 0,
        "description": "사망 시, 2라운드 동안 인접한 아군들의 적중과 사거리가 크게 감소합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_SeljuqA_EV2",
    "name": "셀주크 커스텀",
    "img": "SeljuqA",
    "type": "중장 공격기",
    "info": "화력은 일반형 셀주크보다 떨어지지만 장갑은 더 향상된 것 같아요. 공격을 계속 허용하면 이쪽 움직임에 적응하니 방어 능력이 좋은 소대로 제압하는게 좋을 것 같네요.<br><br><br> - 세이렌 보고함",
    "HPbase": 1500,
    "HPlvl": 100,
    "ATKbase": 75,
    "ATKlvl": 8,
    "DEFbase": 200,
    "DEFlvl": 10,
    "AGI": 3.3,
    "CRT": 7.5,
    "HIT": 120,
    "DOD": 0,
    "resist": [
      25,
      25,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "산탄 포격",
        "img": "CannonShotWide",
        "range": 4,
        "AP": 4,
        "description": "지정 범위에 $(0.8) 피해를 줍니다. 대상이 방어 감소 또는 이동 불가 상태면 피해량이 크게 증가합니다.",
        "areadata": [
          7,
          4,
          5,
          1
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "확산형 곡사포",
        "img": "CannonShotDelay",
        "range": 5,
        "AP": 6,
        "description": "지정 범위에 $(1.2) 보호 무시 피해를 줍니다. 목표 지점 주변은 피해가 75%만 적용되며, 대상이 경장형 또는 기동형이면 피해량이 크게 증가합니다.",
        "areadata": [
          0,
          0.75,
          0,
          0.75,
          1,
          0.75,
          0,
          0.75,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "포격 보정",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 적의 움직임을 분석해 적중과 치명타가 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "증가 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시, 방어력이 크게 증가합니다. 해당 효과는 5회 피격되거나 전기 속성 공격을 맞으면 해제됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_RocCGenerator_EV1",
    "name": "에너지 컨덴서",
    "img": "RocCGenerator",
    "type": "중장 보호기",
    "info": "전력을 공급하기 위한 장치네요. 웬만한 충격으론 금방 복원되니 무력화되었을 때 본체를 노리는게 좋을 것 같아요.<br><br><br>- 세이렌 보고함",
    "HPbase": 200,
    "HPlvl": 200,
    "ATKbase": 0,
    "ATKlvl": 0,
    "DEFbase": 255,
    "DEFlvl": 5,
    "AGI": 4.25,
    "CRT": 0,
    "HIT": 999,
    "DOD": -999,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "전하 충전",
        "img": "SelfAtkBuff",
        "range": 6,
        "AP": 4,
        "description": "로크 (최대 충전)에게 에너지를 충전해 공격력과 AP를 높입니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "실드 충전",
        "img": "SelfDefBuff",
        "range": 6,
        "AP": 7,
        "description": "모든 아군에게 방어막을 부여합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "복원 시스템",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 전투 속행 효과가 적용됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "복원 대기",
        "img": "SelfSpdDeBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 속행 효과 발동 시, 3라운드 동안 행동 불가 상태가 됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_RocCGenerator_EV2",
    "name": "에너지 컨덴서",
    "img": "RocCGenerator",
    "type": "중장 보호기",
    "info": "전력을 공급하기 위한 장치네요. 웬만한 충격으론 금방 복원되니 무력화되었을 때 본체를 노리는게 좋을 것 같아요.<br><br><br>- 세이렌 보고함",
    "HPbase": 200,
    "HPlvl": 200,
    "ATKbase": 0,
    "ATKlvl": 0,
    "DEFbase": 255,
    "DEFlvl": 5,
    "AGI": 3.3,
    "CRT": 0,
    "HIT": 999,
    "DOD": -999,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "전하 충전",
        "img": "SelfAtkBuff",
        "range": 6,
        "AP": 4,
        "description": "로크 (최대 충전)에게 에너지를 충전해 공격력과 AP를 높입니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "실드 충전",
        "img": "SelfDefBuff",
        "range": 6,
        "AP": 7,
        "description": "모든 아군에게 방어막을 부여합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "복원 시스템",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 전투 속행 효과가 적용됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "복원 대기",
        "img": "SelfSpdDeBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 속행 효과 발동 시, 3라운드 동안 행동 불가 상태가 됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_RocC_EV1",
    "name": "로크 (최대 충전)",
    "img": "RocC",
    "type": "기동 공격기",
    "info": "큿… 제 레이더로도 포착하기 어려운 상대네요. 최대 충전 상태가 되면 강력한 공격을 하니 주의하시길. 상태를 보니 큰 피해를 입으면 어떤 꼬맹이처럼 성대하게 폭발할 것 같군요.<br><br><br>- 나이트 앤젤 보고함",
    "HPbase": 3300,
    "HPlvl": 300,
    "ATKbase": 183,
    "ATKlvl": 7.5,
    "DEFbase": 78,
    "DEFlvl": 2.5,
    "AGI": 5,
    "CRT": 5,
    "HIT": 200,
    "DOD": 100,
    "resist": [
      25,
      -50,
      250
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "S. 블리츠 스톰",
        "img": "WideLightning",
        "range": 6,
        "AP": 8,
        "attr": "electric",
        "description": "지정 범위에 $(1) 보호 무시 전기 속성 피해를 주고 AP / 회피 / 행동력 / 전기 저항을 낮춥니다. 목표 지점 주변은 피해량이 50% 감소합니다. <전하 충전> 중첩을 2 사용합니다.",
        "areadata": [
          0,
          0.5,
          0,
          0.5,
          1,
          0.5,
          0,
          0.5,
          0
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "H. 유피텔 스트라이크",
        "img": "AssaultAttack",
        "range": 6,
        "AP": 9,
        "attr": "electric",
        "description": "지정 대상에게 $(2) 보호 무시 전기 속성 피해를 주고 일정 확률로 행동 불가 상태로 만들며 강화 효과를 해제합니다. <전하 충전> 중첩을 5 사용하며, 치명타 시 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "전자기파 파장",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, <전하 충전> 중첩 수에 비례해 회피가 증가합니다. 적 공격 회피 시, 반격합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "전하 최대 충전",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "<전하 충전> 중첩이 5 이상인 경우, 방어막 / 피해 감소 효과를 무시하며 적중과 치명타가 증가합니다. 해당 상태에서 냉기 속성 공격을 맞으면 강화 효과가 해제되며, 행동 불가 상태가 됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "과충전 폭발",
        "img": "SuiceideBomb",
        "range": 0,
        "AP": 0,
        "description": "처치될 경우, 주변에 괴멸적인 고정 피해를 줍니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_FABigChick_TU4",
    "name": "풀아머 빅 칙",
    "img": "FABigChick",
    "type": "중장 공격기",
    "info": "빅 칙과는 달라! 빅 칙과는! 뭐로 만든지는 몰라도 장갑이 차원이 다르니 나 같은 대 장갑 요원이 없으면 꽤나 곤란할걸?<br><br><br> - 불가사리 보고함",
    "HPbase": 1750,
    "HPlvl": 95,
    "ATKbase": 100,
    "ATKlvl": 12.5,
    "DEFbase": 150,
    "DEFlvl": 5.75,
    "AGI": 3.3,
    "CRT": 5,
    "HIT": 135,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "칙 중 기관포",
        "img": "MGShot",
        "range": 4,
        "AP": 4,
        "description": "기관포로 $(1.5) 피해를 줍니다. 대상의 방어력을 일정 비율 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "듀얼 칙 캐논",
        "img": "CannonShot",
        "range": 2,
        "AP": 7,
        "description": "캐논포를 연사해 목표 열에 $(1.25) 피해를 줍니다. 피해 감소 효과를 무효화합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 반응 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "반응 장갑으로 인해 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Chiller_TU2",
    "name": "칠러",
    "img": "Chiller",
    "type": "기동 공격기",
    "info": "물… 절대 뿌리지 말것…<br><br><br> - 서펀트 보고함",
    "HPbase": 500,
    "HPlvl": 52.5,
    "ATKbase": 80,
    "ATKlvl": 9,
    "DEFbase": 75,
    "DEFlvl": 2.5,
    "AGI": 4.3,
    "CRT": 15,
    "HIT": 160,
    "DOD": 105,
    "resist": [
      -99,
      99,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "동결 가스",
        "img": "BeamShot",
        "range": 3,
        "AP": 6,
        "attr": "ice",
        "description": "지정 범위에 $(1) 냉기 속성 피해를 주고 대상을 이동 불가 상태로 만듭니다. 대상이 침수 상태인 경우, 행동 불가 / 받는 피해 증가 상태로 만들고 강화 효과를 해제합니다.",
        "areadata": [
          0,
          0,
          0,
          0.5,
          1,
          0,
          0,
          0,
          0
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "빙결 코팅",
        "img": "TeamDefBuff",
        "range": 6,
        "AP": 5,
        "description": "지정 아군과 자신에게 방어막을 부여하며, 방어력 증가 / 받는 피해와 화염 저항 감소 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "급속 냉각",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 침수 상태로 라운드 개시 시, 공격력 / 회피 / 행동력이 크게 증가하며 최소 피해만 입습니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "과열",
        "img": "TeamSpdDeBuff",
        "range": 0,
        "AP": 0,
        "description": "화염 속성 공격을 맞는 경우, 공격력 / 방어력 / 회피 / 행동력이 크게 감소하며 피해 최소화 상태가 해제됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Centurion_TU4",
    "name": "센츄리온",
    "img": "Centurion",
    "type": "경장 공격기",
    "info": "작은 부대의 지휘관 역할을 하는 철충으로 보입니다. 주변 철충에게 일제 공격을 지시하는 정황이 포착되었군요. 부하들이 파괴되면 경계를 하는 것 같아요. 먼저 처리하는 게 좋을 것으로 보입니다.<br><br><br>- 37식 다이카",
    "HPbase": 3000,
    "HPlvl": 72.5,
    "ATKbase": 80,
    "ATKlvl": 9.25,
    "DEFbase": 30,
    "DEFlvl": 2,
    "AGI": 4,
    "CRT": 10,
    "HIT": 175,
    "DOD": 20,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "XM 유탄 발사기",
        "img": "GrenadeAttack_2",
        "range": 4,
        "AP": 6,
        "description": "유탄을 발사해 목표 행에 $(1) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "일제 공격 개시",
        "img": "Snipe",
        "range": 5,
        "AP": 4,
        "description": "2라운드 동안 대상을 목표로 지정해 $(0.25) 피해를 주고 표식을 남기며, 받는 피해가 증가하는 상태로 만듭니다. 보호 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "반격 태세",
        "img": "DefCounter",
        "range": 0,
        "AP": 0,
        "description": "아군 사망 시, 3라운드 동안 공격력과 치명타가 증가하며 반격합니다. 공격력과 치명타 증가 효과는 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickC_EV9",
    "name": "나이트 칙 캐논",
    "img": "NightChickC",
    "type": "중장 공격기",
    "info": "박격포로 무장한 나이트 칙인데... 별 거 아닌 폭죽이나 쏴대는 벌레야. 아, 약한 애들한텐 무서우려나?<br><br><br>- 메이 보고함",
    "HPbase": 247.5,
    "HPlvl": 60.75,
    "ATKbase": 90,
    "ATKlvl": 10.5,
    "DEFbase": 67.5,
    "DEFlvl": 3.15,
    "AGI": 3.35,
    "CRT": 5,
    "HIT": 135,
    "DOD": 0,
    "resist": [
      25,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "플레임 버너",
        "img": "WideFireShot",
        "range": 2,
        "AP": 4,
        "attr": "fire",
        "description": "화염 방사로 $(0.8) 화염 속성 피해를 주며, 일정 확률로 3라운드 동안 지속 화염 피해를 입는 점화 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "곡사포",
        "img": "CannonShotDelay",
        "range": 5,
        "AP": 8,
        "description": "1라운드 후에 착탄하는 곡사포를 발사해 목표 범위에 $(1.75)의 피해를 줍니다. 대상이 이동 불가 상태면 피해량이 증가합니다.",
        "areadata": [
          0,
          0.5,
          0,
          0.5,
          1,
          0.5,
          0,
          0.5,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "연료 탱크 유폭",
        "img": "SuiceideBomb",
        "range": 0,
        "AP": 0,
        "attr": "fire",
        "description": "사망 시, 연료 탱크가 유폭해 주변에 괴멸적인 피해를 주고 피해 감소 효과를 해제합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_BigChickS_TU2",
    "name": "빅 칙 실더",
    "img": "BigChickS",
    "type": "중장 보호기",
    "info": "제법 근성이 있는 녀석이야! 아무리 때려도 잘 쓰러지지 않던데 미호는 잘 처리하더라구. 쓸데 없이 계속 치치말라나 뭐라나…하지만 한 번 붙으면 물러날 내가 아니지~!<br><br><br> - 스틸 드라코 보고함",
    "HPbase": 4000,
    "HPlvl": 110,
    "ATKbase": 75,
    "ATKlvl": 8,
    "DEFbase": 250,
    "DEFlvl": 10,
    "AGI": 3.25,
    "CRT": 7.5,
    "HIT": 90,
    "DOD": 1,
    "resist": [
      25,
      25,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "방패 연타",
        "img": "ShieldWall",
        "range": 3,
        "AP": 5,
        "description": "방패 연타로 대상에게 $(1.3) 피해를 줍니다. 대상이 이동 불가 상태면 피해량이 증가하며, 높은 확률로 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칙 블로킹",
        "img": "ShieldWall",
        "range": 6,
        "AP": 6,
        "description": "방어 태세를 취해, 3라운드 동안 행 보호 / 열 보호 / 받는 피해 감소 / 효과 저항 증가 효과가 발생합니다. 자신의 HP가 25% 이하인 경우, 반격 효과가 추가됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 방어 지휘",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "<칙 블로킹> 상태로 라운드 개시 시, 주변 아군에게 방어력 증가 / 받는 피해 감소 효과를 줍니다.",
        "areadata": [
          8,
          9,
          6,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "칙 근성 발동",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "피격 시, 2라운드 동안 방어력 / 행동력이 증가합니다. 라운드 개시 시, <칙 근성 발동> 방어 증가 효과가 5회 이상이면 전투 속행 효과가 추가됩니다. 전투 속행 발동 시, 2라운드 동안 최소 피해만 받지만 지속 고정 피해를 입으며 방어막과 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_GigantesC_EV2",
    "name": "기간테스 커스텀",
    "img": "GigantesC",
    "type": "중장 보호기",
    "info": "거점 방어에 특화된 모델인건가? 행동은 굼떠보이지만 좀처럼 빈틈이 안보여. 하지만 내 소우 피쉬라면 해결할 수 있을걸?<br><br><br> - 트리아이나 보고함",
    "HPbase": 3000,
    "HPlvl": 150,
    "ATKbase": 120,
    "ATKlvl": 11,
    "DEFbase": 400,
    "DEFlvl": 20,
    "AGI": 3.05,
    "CRT": 10,
    "HIT": 120,
    "DOD": 0,
    "resist": [
      25,
      25,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "너클 버스터",
        "img": "MeleeAttack",
        "range": 1,
        "AP": 8,
        "description": "대상을 강타해 $(2.4) 피해를 주고 뒤로 한 칸 밉니다. 자신의 HP %가 낮을수록 피해량이 증가하며, 25% 이하인 경우 방어막과 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "차지 스매시",
        "img": "AssaultAttack",
        "range": 2,
        "AP": 4,
        "description": "대상을 밀쳐 $(1) 피해를 주고 2칸 뒤로 날립니다. 피격 대상은 AP가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "개량형 방어 OS",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 공격하기 전까지는 방어력과 효과 저항이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "거점 순찰",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "인접한 보호기 제외 아군을 보호하며 대상의 행동력을 증가시킵니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_RocCGeneratorA_EV1",
    "name": "강화 에너지 컨덴서",
    "img": "RocCGenerator",
    "type": "중장 보호기",
    "info": "전력을 공급하기 위한 장치네요. 웬만한 충격으론 금방 복원되니 무력화되었을 때 본체를 노리는게 좋을 것 같아요.<br><br><br>- 세이렌 보고함",
    "HPbase": 21600,
    "HPlvl": 600,
    "ATKbase": 0,
    "ATKlvl": 0,
    "DEFbase": 1555,
    "DEFlvl": 5,
    "AGI": 7.5,
    "CRT": 0,
    "HIT": 999,
    "DOD": -999,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "전하 충전",
        "img": "SelfAtkBuff",
        "range": 6,
        "AP": 10,
        "description": "로크 (최대 충전)에게 에너지를 충전해 공격력과 AP를 높입니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "실드 충전",
        "img": "SelfDefBuff",
        "range": 6,
        "AP": 10,
        "description": "모든 아군에게 방어막을 부여하고 해로운 효과를 해제합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "복원 시스템",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 전투 속행 효과가 적용됩니다. 해당 효과는 해제할 수 없습니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "복원 대기",
        "img": "SelfSpdDeBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 속행 효과 발동 시, 4라운드 동안 행동 불가 상태가 되며 받는 피해가 최소화됩니다. 해당 효과는 해제할 수 없습니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_RocCGeneratorA_EV2",
    "name": "강화 에너지 컨덴서",
    "img": "RocCGenerator",
    "type": "중장 보호기",
    "info": "전력을 공급하기 위한 장치네요. 웬만한 충격으론 금방 복원되니 무력화되었을 때 본체를 노리는게 좋을 것 같아요.<br><br><br>- 세이렌 보고함",
    "HPbase": 21600,
    "HPlvl": 600,
    "ATKbase": 0,
    "ATKlvl": 0,
    "DEFbase": 1555,
    "DEFlvl": 5,
    "AGI": 6.5,
    "CRT": 0,
    "HIT": 999,
    "DOD": -999,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "전하 충전",
        "img": "SelfAtkBuff",
        "range": 6,
        "AP": 10,
        "description": "로크 (최대 충전)에게 에너지를 충전해 공격력과 AP를 높입니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "실드 충전",
        "img": "SelfDefBuff",
        "range": 6,
        "AP": 10,
        "description": "모든 아군에게 방어막을 부여하고 해로운 효과를 해제합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "복원 시스템",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 전투 속행 효과가 적용됩니다. 해당 효과는 해제할 수 없습니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "복원 대기",
        "img": "SelfSpdDeBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 속행 효과 발동 시, 4라운드 동안 행동 불가 상태가 되며 받는 피해가 최소화됩니다. 해당 효과는 해제할 수 없습니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_RocC_EV2",
    "name": "로크 (최대 충전)",
    "img": "RocC",
    "type": "기동 공격기",
    "info": "큿… 제 레이더로도 포착하기 어려운 상대네요. 최대 충전 상태가 되면 강력한 공격을 하니 주의하시길. 상태를 보니 큰 피해를 입으면 어떤 꼬맹이처럼 성대하게 폭발할 것 같군요.<br><br><br>- 나이트 앤젤 보고함",
    "HPbase": 174350,
    "HPlvl": 850,
    "ATKbase": 271,
    "ATKlvl": 11,
    "DEFbase": 466,
    "DEFlvl": 6,
    "AGI": 5,
    "CRT": 10,
    "HIT": 300,
    "DOD": 150,
    "resist": [
      25,
      -50,
      500
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "S. 블리츠 스톰",
        "img": "WideLightning",
        "range": 6,
        "AP": 8,
        "attr": "electric",
        "description": "지정 범위에 $(1) 보호 무시 전기 속성 피해를 주고 AP / 회피 / 행동력 / 전기 저항을 낮춥니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "H. 유피텔 스트라이크",
        "img": "AssaultAttack",
        "range": 6,
        "AP": 9,
        "attr": "electric",
        "description": "지정 대상에게 $(2) 보호 무시 전기 속성 피해를 주고, 행동 불가 상태로 만들며 전기 저항을 감소시킵니다. 일정 확률로 강화 효과를 해제합니다. <전하 충전> 중첩을 3 사용하며, 치명타 시 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "전자기파 파장",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "<전하 충전> 중첩 수에 비례해 회피가 증가하며, 회피 시 반격합니다. 자신의 HP가 25% 이하인 상태로 적을 공격할 때, 회피가 추가로 증가합니다. 냉기 속성 공격 피격 시, 회피 강화 효과가 해제됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "전하 최대 충전",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "<전하 충전> 중첩이 5 이상인 경우, 2라운드 동안 방어막 / 피해 감소 효과를 무시하며 공격력 / 적중 / 치명타 / 효과 저항이 증가합니다. 해당 상태에서 냉기 속성 공격을 맞으면 강화 효과가 해제되며, 행동 불가 / 받는 피해 증가 상태가 됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "과충전 폭발",
        "img": "SuiceideBomb",
        "range": 0,
        "AP": 0,
        "description": "처치될 경우, 주변에 괴멸적인 고정 피해를 줍니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Undine_EV1",
    "name": "까망베르",
    "img": "Undine",
    "type": "기동 보호기",
    "info": "치즈는 역시 프랑스 산이 최고에요!<br><br><br>- 운디네",
    "HPbase": 30500,
    "HPlvl": 500,
    "ATKbase": 110,
    "ATKlvl": 10,
    "DEFbase": 11,
    "DEFlvl": 1,
    "AGI": 4.4,
    "CRT": 10,
    "HIT": 350,
    "DOD": 150,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "2연장 리볼버 캐논",
        "img": "MGShot",
        "range": 3,
        "AP": 5,
        "description": "리볼버 캐논으로 단일 대상에게 $(1.2) 피해를 주고, 대상을 도발하며 적중을 감소시킵니다. 대상이 방어력 감소 상태면 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "F.F 미사일",
        "img": "Missile",
        "range": 4,
        "AP": 8,
        "description": "날치 미사일로 $(1.8) 피해를 줍니다. 대상의 받는 피해 감소 효과를 무시하며, 대상이 방어력 감소 상태이거나 경장형이면 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "우향선회",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 회피가 증가하며 회피 감소 효과가 해제됩니다. 같은 열의 아래에 배치된 아군들에게 공격 지원 / 지정 대상 보호 / 회피 증가 해제 효과를 부여합니다. 자신의 회피 증가 효과는 최대 2번까지 중첩됩니다.",
        "areadata": [
          5,
          2
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "오만과 분노",
        "img": "TeamSpdDeBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 회피 시, 공격력 / 치명타 / 적중 / 행동력이 무작위로 증가합니다. 자신이 적 처치 시, 모든 아군의 회피 증가 효과를 해제하며 회피가 감소하고 받는 피해가 증가합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Undine_EV2",
    "name": "퐁 레베크",
    "img": "Undine",
    "type": "기동 보호기",
    "info": "치즈는 역시 프랑스 산이 최고에요!<br><br><br>- 운디네",
    "HPbase": 30500,
    "HPlvl": 500,
    "ATKbase": 110,
    "ATKlvl": 10,
    "DEFbase": 11,
    "DEFlvl": 1,
    "AGI": 4.2,
    "CRT": 10,
    "HIT": 175,
    "DOD": 150,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "2연장 리볼버 캐논",
        "img": "MGShot",
        "range": 3,
        "AP": 6,
        "description": "리볼버 캐논으로 단일 대상에게 $(1.4) 피해를 주고, 대상을 방어력과 적중을 감소시킵니다. 대상이 도발 상태면 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "F.F 미사일",
        "img": "Missile",
        "range": 4,
        "AP": 9,
        "description": "날치 미사일로 $(2.1) 피해를 줍니다. 대상의 방어력을 무시하며, 대상이 도발 상태 또는 중장형이면 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "우향선회?",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 회피가 증가하며 회피 감소 효과가 해제됩니다. 양 옆에 배치된 아군들에게 공격 지원 / 지정 대상 보호 / 회피 증가 해제 효과를 부여합니다. 자신의 회피 증가 효과는 최대 2번까지 중첩됩니다.",
        "areadata": [
          8,
          2
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "오만과 분노",
        "img": "TeamSpdDeBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 회피 시, 공격력 / 치명타 / 적중 / 행동력이 무작위로 증가합니다. 자신이 적 처치 시, 모든 아군의 회피 증가 효과를 해제하며 회피가 감소하고 받는 피해가 증가합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Undine_EV3",
    "name": "브리 드 모",
    "img": "Undine",
    "type": "기동 보호기",
    "info": "치즈는 역시 프랑스 산이 최고에요!<br><br><br>- 운디네",
    "HPbase": 30500,
    "HPlvl": 500,
    "ATKbase": 110,
    "ATKlvl": 10,
    "DEFbase": 11,
    "DEFlvl": 1,
    "AGI": 4.8,
    "CRT": 10,
    "HIT": 525,
    "DOD": 150,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "2연장 리볼버 캐논",
        "img": "MGShot",
        "range": 3,
        "AP": 4,
        "description": "리볼버 캐논으로 단일 대상에게 $(1) 피해를 주고, 대상을 회피와 적중을 감소시킵니다. 대상이 도발 상태면 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "F.F 미사일",
        "img": "Missile",
        "range": 4,
        "AP": 7,
        "description": "날치 미사일로 $(1.5) 피해를 줍니다. 대상의 회피 강화 효과를 해제하며, 대상이 도발 상태 또는 기동형이면 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "우향선회???",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 회피가 증가하며 회피 감소 효과가 해제됩니다. 같은 열 위에 배치된 아군들에게 공격 지원 / 지정 대상 보호 / 회피 증가 해제 효과를 부여합니다. 자신의 회피 증가 효과는 최대 2번까지 중첩됩니다.",
        "areadata": [
          8,
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "오만과 분노",
        "img": "TeamSpdDeBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 회피 시, 공격력 / 치명타 / 적중 / 행동력이 무작위로 증가합니다. 자신이 적 처치 시, 모든 아군의 회피 증가 효과를 해제하며 회피가 감소하고 받는 피해가 증가합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_AMG11AA_EV5",
    "name": "네리의 부하",
    "img": "AMG11AA",
    "type": "경장 지원기",
    "info": "결국 부하가 되어버린 불쌍한 기계들이다.",
    "HPbase": 6200,
    "HPlvl": 200,
    "ATKbase": 455,
    "ATKlvl": 5,
    "DEFbase": 310,
    "DEFlvl": 10,
    "AGI": 4,
    "CRT": 5,
    "HIT": 350,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "공격 개시",
        "img": "ARShot",
        "range": 5,
        "AP": 4,
        "description": "기총 사격으로 $(1) 피해를 줍니다. 대상이 표식 상태면 피해량이 증가하고, 회피를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "대공 기총 난사",
        "img": "WideBeamShot",
        "range": 1,
        "AP": 6,
        "description": "기총을 난사해 $(1) 피해를 줍니다. 대상이 회피 감소 상태면 피해량이 증가하며, 강화 효과를 해제합니다.",
        "areadata": [
          7,
          4,
          5,
          1
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "대공 레이더 시스템",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 인접 아군에게 적중 / 치명타 / 대 기동형 피해량 증가 효과를 부여합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "시스템 과부하",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "파괴되면 주변 아군에게 걸려있는 강화 효과를 해제합니다. 슈퍼 네리(?)의 재촉으로 인한 공격력 증가 효과가 3 중첩 이상인 경우, 라운드 개시 시 방어막 / 피해 감소 무시 효과가 부여됩니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Nereid_EV1",
    "name": "슈퍼 네리다!",
    "img": "Nereid",
    "type": "중장 공격기",
    "info": "슈~퍼한 네리네리를 이길 수 있을까!?<br><br><br>- 네레이드",
    "HPbase": 17600,
    "HPlvl": 1600,
    "ATKbase": 310,
    "ATKlvl": 10,
    "DEFbase": 2710,
    "DEFlvl": 10,
    "AGI": 3.75,
    "CRT": 10,
    "HIT": 250,
    "DOD": 75,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "벌집 만들기",
        "img": "MGShot",
        "range": 4,
        "AP": 3,
        "description": "미니건을 발사해 $(1.5) 피해를 줍니다. 대상을 표식으로 설정하고 받는 피해를 증가시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "무차별 난사",
        "img": "MGWideShot",
        "range": 4,
        "AP": 6,
        "description": "미니건을 난사해 대상에게 $(2) 보호 무시 피해를 줍니다. 대상의 강화 효과를 해제하며, 치명타 시 피해량이 증가합니다.",
        "areadata": [
          7,
          4,
          5,
          1
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "덤벼덤벼!",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "자신의 남은 HP 비율이 적을수록 적에게 주는 피해가 증가하며, 받는 피해가 감소합니다. 효과 저항이 증가하며, HP 10% 이하 상태로 피격 시 반격합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "전투 과몰입",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 불능이 될 경우, HP를 회복하고 전투를 속행합니다. 전투 속행 효과 발동 시, 공격력 / 적중 / 치명타 / 행동력이 증가하며 방어막과 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "네리와 부하들",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "적 공격 시, 부하들에게 명령을 내려 대상의 공격력 / 적중 / AP를 증가시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Undine_EV4",
    "name": "그럼…요?",
    "img": "Undine",
    "type": "기동 보호기",
    "info": "그럼요…? 오늘의 암구호인 건가요?<br><br><br>- 운디네",
    "HPbase": 30500,
    "HPlvl": 500,
    "ATKbase": 110,
    "ATKlvl": 10,
    "DEFbase": 11,
    "DEFlvl": 1,
    "AGI": 4.5,
    "CRT": 10,
    "HIT": 250,
    "DOD": 175,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "2연장 리볼버 캐논",
        "img": "MGShot",
        "range": 3,
        "AP": 5,
        "description": "리볼버 캐논으로 단일 대상에게 $(1.2) 피해를 주고, 대상을 도발하며 공격력 / 치명타를 감소시킵니다. 대상이 표식 상태면 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "F.F 미사일",
        "img": "Missile",
        "range": 4,
        "AP": 8,
        "description": "날치 미사일로 $(1.8) 방어 관통 피해를 줍니다. 대상이 표식 상태면 피해량이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "우향선회?!",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 회피가 증가하며 회피 감소 효과가 해제됩니다. 같은 열에 인접한 보호기 제외 아군을 보호하며, 대상에게 공격 지원 / 적중 / 치명타 증가 효과를 부여합니다. 회피 증가 효과는 3회까지 중첩됩니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "오만과 분노",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "회피 시, 반격하며 회피 증가 효과가 해제됩니다. 회피 시, 주변에 있는 아군을 도발해 공격력 / 치명타를 증가시키지만 적중 감소 / 지정 보호 해제 / 받는 피해 증가 효과를 부여합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Nereid_EV2",
    "name": "그럼~요!",
    "img": "Nereid",
    "type": "중장 공격기",
    "info": "얼른 처리하고 놀러 가야지!<br><br><br>- 네레이드",
    "HPbase": 8800,
    "HPlvl": 800,
    "ATKbase": 110,
    "ATKlvl": 10,
    "DEFbase": 2110,
    "DEFlvl": 10,
    "AGI": 3.75,
    "CRT": 5,
    "HIT": 350,
    "DOD": 1,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "벌집 만들기",
        "img": "MGShot",
        "range": 4,
        "AP": 5,
        "description": "미니건을 발사해 $(1.5) 피해를 줍니다. 대상이 표식 상태인 경우, 피해량이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "무차별 난사",
        "img": "MGWideShot",
        "range": 3,
        "AP": 8,
        "description": "미니건을 난사해 대상에게 $(1.25) 피해를 줍니다. 목표 대상들의 적중 / 회피 / 행동력을 감소시킵니다.",
        "areadata": [
          7,
          4,
          5,
          1
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "덤벼덤벼!",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "자신의 남은 HP 비율이 적을수록 적에게 주는 피해가 증가하며, 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "전투 과몰입",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 불능이 될 경우, 1회에 한해 HP를 회복하고 전투를 속행합니다. 전투 속행 효과 발동 시, 해당 전투 동안 피해 감소 효과를 무시하며 공격력이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_GigantesDagon_N",
    "name": "다곤씨 (대여 중)",
    "img": "GigantesDagon",
    "type": "중장 보호기",
    "info": "아르바이트 중인 기간테스인 듯하다...",
    "HPbase": 16500,
    "HPlvl": 1500,
    "ATKbase": 220,
    "ATKlvl": 20,
    "DEFbase": 440,
    "DEFlvl": 40,
    "AGI": 3.3,
    "CRT": 50,
    "HIT": 125,
    "DOD": 0,
    "resist": [
      25,
      99,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "심해의 분노",
        "img": "MeleeAttack",
        "range": 1,
        "AP": 8,
        "description": "대상을 강타해 $(3) 보호 무시 피해를 줍니다. 대상의 방어력 / 방어막 / 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "타이달 어썰트",
        "img": "AssaultAttack",
        "range": 2,
        "AP": 6,
        "description": "대상에게 돌격해 $(1.5) 피해를 줍니다. 대상이 표식 상태면 강화 효과를 해제하고 행동 불가 상태로 만든 후, 뒤로 1칸 밀어냅니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "심해의 거신",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시 방어력 / 냉기 / 효과 저항이 크게 증가하며, 5라운드 동안 행 보호 / 받는 피해 감소 효과가 적용됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "보호 전환",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 2라운드 동안 범위 내에 있는 아군에게 지정 대상 보호 효과를 부여합니다.",
        "areadata": [
          8,
          9,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Sirene_EV1",
    "name": "문제아반 반장",
    "img": "Sirene",
    "type": "중장 공격기",
    "info": "속이 아파오기 시작했어요… 제가 안 보면 대체 무슨 일을 할지...<br><br><br>- 세이렌",
    "HPbase": 36000,
    "HPlvl": 1000,
    "ATKbase": 110,
    "ATKlvl": 10,
    "DEFbase": 1610,
    "DEFlvl": 10,
    "AGI": 4,
    "CRT": 5,
    "HIT": 375,
    "DOD": 3,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "57mm 대공포",
        "img": "MGShot",
        "range": 5,
        "AP": 5,
        "description": "대공포를 발사해 $(1.35) 피해를 주고, 대상을 표식으로 설정해 받는 피해를 증가시키고 회피를 감소시킵니다. 대상이 기동형인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "포격 지휘",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 8,
        "description": "범위 내 아군의 AP / 행동력 / 효과 저항을 증가시키고, 대상에게 걸려있는 해로운 효과를 해제합니다. 추가로, 대상들의 공격을 지원합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "협차 사격",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 범위 내 아군들의 적중 / 치명타 / 방어 관통을 증가시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "요격 모드",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시, AP가 증가하며 받는 피해가 감소합니다. 아군이 처치될 경우, AP가 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "관측 포격",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 공격 지원을 받는 상태면 적중 / 치명타가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Sirene_EV2",
    "name": "그럼요~",
    "img": "SireneC",
    "type": "중장 공격기",
    "info": "사실 세이렌도 놀고 싶어 하는 걸지도.",
    "HPbase": 11000,
    "HPlvl": 1000,
    "ATKbase": 360,
    "ATKlvl": 10,
    "DEFbase": 1610,
    "DEFlvl": 10,
    "AGI": 3,
    "CRT": 5,
    "HIT": 150,
    "DOD": 2,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "203mm 연장포",
        "img": "CannonShot",
        "range": 5,
        "AP": 10,
        "description": "직사 포격으로 지정 범위에 $(2) 피해를 줍니다. 대상이 표식 / 이동 불가 상태면 피해량이 증가합니다.",
        "areadata": [
          8,
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "초토화 포격",
        "img": "AirStrike",
        "range": 5,
        "AP": 10,
        "description": "포격 연사로 지정 범위에 $(1.5) 보호 무시 피해를 줍니다. 목표 지점 주변은 피해량이 25% 감소하며, 대상이 경장 / 중장형이면 피해량 증가하며 1칸 뒤로 밉니다. 스킬 사용 시, 2라운드 동안 행동 불가가 됩니다.",
        "areadata": [
          0.75,
          0.75,
          0.75,
          0.75,
          1,
          0.75,
          0.75,
          0.75,
          0.75
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "협차 사격",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 범위 내 아군들의 적중 / 치명타 / 방어 관통을 증가시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "포격 모드",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 공격력 / 방어 관통이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "관측 포격",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 공격 지원을 받는 상태면 적중 / 치명타가 증가하며, 방어막 / 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickCMP_EV1",
    "name": "케미컬 칙 Type-X",
    "img": "NightChickCMP",
    "type": "경장 공격기",
    "info": "히익… 다신 보기 싫을 정도로 징그러웠어요…... 불에는 약한지 불을 붙이니 폭발해서 깜짝 놀랐네요.<br><br><br> - 뽀끄루 보고함",
    "HPbase": 1,
    "HPlvl": 1,
    "ATKbase": 20,
    "ATKlvl": 20,
    "DEFbase": 52,
    "DEFlvl": 2,
    "AGI": 4.5,
    "CRT": 5,
    "HIT": 350,
    "DOD": 100,
    "resist": [
      0,
      99,
      99
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "급속 부식탄",
        "img": "Missile",
        "range": 5,
        "AP": 4,
        "description": "급속 부식탄을 발사해 $(0.33) 피해를 줍니다. 2라운드 동안 대상을 급속 부식 상태로 만들어 효과 저항 / 방어력 / 행동력을 감소시키고 매 라운드 지속 피해를 입힙니다. 대상이 이미 부식 상태면 일정 확률로 강화 효과를 해제합니다. ",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "급속 부식탄 난사",
        "img": "MultiMissile",
        "range": 4,
        "AP": 7,
        "description": "급속 부식탄을 발사해 지정 범위에 $(0.33) 피해를 줍니다. 2라운드 동안 대상을 급속 부식 상태로 만들어 효과 저항 / 방어력 / 행동력을 감소시키고 매 라운드 지속 피해를 입힙니다. 대상이 이미 부식 상태면 일정 확률로 강화 효과를 해제합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "부식액 누출",
        "img": "TeamDefDeBuff",
        "range": 0,
        "AP": 0,
        "description": "적 공격 시, 주변에 부식액이 누출되어 지속 고정 피해를 주며 방어력을 감소시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "내성 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 당할 경우, 상대의 스킬이 최소 피해로 적용됩니다. 라운드 개시 시, 자신과 인접한 아군에게 걸린 방해 효과를 해제합니다.",
        "areadata": [
          7,
          9,
          5,
          1,
          3
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "부식액 폭발",
        "img": "SuiceideBomb",
        "range": 0,
        "AP": 0,
        "description": "화염 속성 액티브 스킬 공격 피격 시, 부식액에 불이 붙어 점화 상태가 됩니다. 점화 상태로 처치되면 부식액 폭발로 범위 내 아군에게 괴멸적인 고정 피해를 입힙니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ZapperEX_TU3",
    "name": "강화형 재퍼",
    "img": "Zapper",
    "type": "경장 지원기",
    "info": "호전성이 낮은 개체예요. 건드리지만 않으면 공격하지 않으니 주의해 주세요. 고압 전류 공격을 하니까요. 설마 제가 대신 맞아서 찌릿찌릿에 눈 뜨는 걸 바라는 건 아니겠죠?<br><br><br>- 보고자 블랙 리리스",
    "HPbase": 700,
    "HPlvl": 87.5,
    "ATKbase": 75,
    "ATKlvl": 7,
    "DEFbase": 80,
    "DEFlvl": 2,
    "AGI": 4.1,
    "CRT": 10,
    "HIT": 254,
    "DOD": 60,
    "resist": [
      25,
      25,
      75
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "전격 체인",
        "img": "Shock",
        "range": 3,
        "AP": 4,
        "attr": "electric",
        "description": "전격을 방사해 $(0.8) 전기 속성 피해를 주고 대상의 AP와 회피를 감소시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "초고압 전류",
        "img": "Shock",
        "range": 1,
        "AP": 8,
        "attr": "electric",
        "description": "고압 전류로 $(1.2) 전기 속성 피해를 주고, 회피를 감소시킵니다. 일정 확률로 대상을 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "사주 경계",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "적을 발견하거나 적에게 공격당하기 전 까지는 경계 상태로 대기합니다. 공격당하기 전까지 받는 피해가 대폭 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_BigChickMG_EV1",
    "name": "빅 칙 런쳐 G",
    "img": "BigChickMG",
    "type": "중장 공격기",
    "info": "화력이 뛰어나지만 전기로 센서를 일시적으로 고장낼 수 있는거 같아요. 보조 무장은 약하지만 정밀하니 주의하세요.<br><br><br>- 레아 보고함",
    "HPbase": 10750,
    "HPlvl": 125,
    "ATKbase": 125,
    "ATKlvl": 12.5,
    "DEFbase": 390,
    "DEFlvl": 15,
    "AGI": 3.5,
    "CRT": 10,
    "HIT": 200,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "파쇄 미사일",
        "img": "CruiseMissile",
        "range": 6,
        "AP": 7,
        "description": "1라운드 후 착탄하며, $(3) 보호 무시 피해를 주는 미사일을 발사합니다. 대상이 경장형 또는 중장형인 경우, 피해량이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "집속 마이크로 미사일",
        "img": "MultiMissile",
        "range": 4,
        "AP": 3,
        "description": "지정 범위에 $(0.25) 보호 무시 피해를 주는 집속 마이크로 미사일을 발사합니다. 3라운드 동안 공격 대상들의 회피를 감소시킵니다. 200%의 추가 적중 보정이 적용됩니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "고속 장전 장치",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 후, 3라운드 동안 행동력이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "MOP 탄두",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "방어 관통이 크게 증가하며, 공격 대상의 방어막과 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "레이더 오류",
        "img": "SelfAtkDeBuff",
        "range": 0,
        "AP": 0,
        "description": "전기 속성 피격 시, 2라운드 동안 적중이 대폭 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Testudo_TU2",
    "name": "테스투도",
    "img": "Testudo",
    "type": "경장 보호기",
    "info": "트레비앙~한 방어 능력을 가진 적이에요. 보통은 중화기로 제압해야 하지만 제 정교한 검술로도 해결할 수 있으니 맡겨주세요!<br><br><br>- 샬럿 보고함",
    "HPbase": 4000,
    "HPlvl": 150,
    "ATKbase": 35,
    "ATKlvl": 4.5,
    "DEFbase": 250,
    "DEFlvl": 7.5,
    "AGI": 4.05,
    "CRT": 2,
    "HIT": 280,
    "DOD": 30,
    "resist": [
      70,
      70,
      70
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "무장 파괴",
        "img": "ARShot",
        "range": 4,
        "AP": 3,
        "description": "대상에게 $(1) 피해를 주고, 일정 확률로 3라운드 동안 공격력 / 치명타 / 적중을 낮춥니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "진형 사수",
        "img": "DefCounter",
        "range": 6,
        "AP": 7,
        "description": "3라운드 동안 방어막 / 행 보호가 적용되며 받는 피해가 감소합니다. 해당 상태에서 공격받으면 반격합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "방진 전개",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시 열 보호 효과가 적용되며, 3라운드 동안 범위 내 아군이 받는 피해가 크게 감소합니다.",
        "areadata": [
          8,
          9,
          5,
          6,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "출력 오버로드",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 처치될 때마다 방어력이 증가합니다. 아군이 5기 이상 처치되면 공격 능력이 대폭 증가하며, 방어막과 피해 감소 효과를 무시하지만 지속 고정 피해를 입습니다. 해당 상태에서 처치될 경우, <방진 전개> 범위 안에 있는 아군에게 괴멸적인 고정 피해를 줍니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickTD_TU2",
    "name": "썬더 칙",
    "img": "NightChickTD",
    "type": "경장 공격기",
    "info": "으아~ 촙 메이커로 때리니 갑자기 날뛰어서 큰일 날 뻔 했어요! 전기에 반응하는 것 같던데...아 참! 서펀트씨가 물을 뿌린 녀석은 갑자기 자폭해버리더라구요.<br><br><br> - 켈베로스 보고함",
    "HPbase": 400,
    "HPlvl": 65,
    "ATKbase": 75,
    "ATKlvl": 9,
    "DEFbase": 15,
    "DEFlvl": 0.75,
    "AGI": 4.1,
    "CRT": 10,
    "HIT": 180,
    "DOD": 60,
    "resist": [
      -25,
      -25,
      99
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "스턴 샷",
        "img": "Shock",
        "range": 4,
        "AP": 4,
        "attr": "electric",
        "description": "지정 대상에게 $(1) 전기 속성 피해를 줍니다. 적중 대상은 높은 확률로 AP / 회피 / 전기 저항이 감소합니다. 대상이 침수 상태면 피해량이 크게 증가하며, 일정 확률로 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "일렉트릭 쇼크",
        "img": "WideLightning",
        "range": 1,
        "AP": 8,
        "attr": "electric",
        "description": "지정 범위에 $(1) 보호 무시 전기 속성 피해를 줍니다. 적중 대상은 높은 확률로 AP / 회피가 감소합니다. 대상이 침수 상태면 피해량이 크게 증가하며, 받는 피해 감소 상태를 해제합니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "과충전",
        "img": "Shock",
        "range": 0,
        "AP": 0,
        "description": "전기 속성 공격을 맞을 경우, 과충전 상태가 되어 공격력 / 적중 / 회피 / AP / 행동력이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "방전",
        "img": "Shock",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 자신이 침수 상태인 경우 방전으로 인한 고정 피해를 입습니다. 침수 상태로 처치될 경우, 범위 내 대상들에게 전기 피해를 줍니다. 해당 효과가 적용되는 대상이 침수 상태인 경우, 행동 불가가 됩니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_LegionElite_TU",
    "name": "엘리트 레기온",
    "img": "Legion",
    "type": "경장 지원기",
    "info": "화력이 좀 더 강한 레기온이야. 난 전혀 구분이 안 가는데 에밀리는 잘 구분하더라구. 이상한 데서 재주가 좋다니까...아! 지휘관 철충과의 연계 공격은 특히 주의해야 해!<br><br><br>- 파니 보고함",
    "HPbase": 600,
    "HPlvl": 70,
    "ATKbase": 70,
    "ATKlvl": 7,
    "DEFbase": 50,
    "DEFlvl": 2,
    "AGI": 4.25,
    "CRT": 2,
    "HIT": 325,
    "DOD": 40,
    "resist": [
      35,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "파쇄 미니건",
        "img": "MGShot",
        "range": 5,
        "AP": 5,
        "description": "미니건을 발사해 $(1.2) 피해를 줍니다. 대상이 표식 / 이동 불가 상태면 피해량이 증가하며, 대상의 피해 감소 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "포획탄 발사",
        "img": "SelfSpdDeBuff",
        "range": 5,
        "AP": 4,
        "description": "포획탄을 발사해 $(0.3) 피해를 주고, 3라운드 동안 대상을 이동 불가 / 행동력 감소 / 회피 감소 상태로 만듭니다. 대상이 표식 상태면 일정 확률로 강화 효과를 해제합니다. 스킬 사용 시, 3라운드 동안 자신의 행동력이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "상황 대응",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "아군 중 HP가 25% 이하인 대상이 있는 경우, 대상의 행동력을 증가시키며 대상의 공격을 지원합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "조준 공유 시스템",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "인접 아군의 적중이 증가합니다. 자신이 처치될 경우, 해당 효과를 받는 아군들의 적증 증가 효과를 해제하고 적중을 감소시킵니다.",
        "areadata": [
          8,
          4,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_BigChickMG_N",
    "name": "빅 칙 런쳐 G",
    "img": "BigChickMG",
    "type": "중장 공격기",
    "info": "화력이 뛰어나지만 전기로 센서를 일시적으로 고장낼 수 있는거 같아요. 보조 무장은 약하지만 정밀하니 주의하세요.<br><br><br>- 레아 보고함",
    "HPbase": 1750,
    "HPlvl": 90,
    "ATKbase": 90,
    "ATKlvl": 11,
    "DEFbase": 100,
    "DEFlvl": 4,
    "AGI": 3.5,
    "CRT": 10,
    "HIT": 200,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "파쇄 미사일",
        "img": "CruiseMissile",
        "range": 6,
        "AP": 7,
        "description": "1라운드 후 착탄하며, $(3) 보호 무시 피해를 주는 미사일을 발사합니다. 대상이 경장형 또는 중장형인 경우, 피해량이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "집속 마이크로 미사일",
        "img": "MultiMissile",
        "range": 4,
        "AP": 3,
        "description": "지정 범위에 $(0.25) 보호 무시 피해를 주는 집속 마이크로 미사일을 발사합니다. 3라운드 동안 공격 대상들의 회피를 감소시킵니다. 200%의 추가 적중 보정이 적용됩니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "고속 장전 장치",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 후, 3라운드 동안 행동력이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "MOP 탄두",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "방어 관통이 크게 증가하며, 공격 대상의 방어막과 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "레이더 오류",
        "img": "SelfAtkDeBuff",
        "range": 0,
        "AP": 0,
        "description": "전기 속성 피격 시, 2라운드 동안 적중이 대폭 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickCMS_EV1",
    "name": "강화형 케미컬 칙",
    "img": "NightChickCM",
    "type": "경장 지원기",
    "info": "냄새 나고 이상한 액체를 뿌려. 더럽고 음란해. 그 이상한 액을 뒤집어 쓴 애들은 한 동안 근처에 못 오게 했어. 특히 스틸 드라코는…<br><br><br>- 보고자 미호",
    "HPbase": 1425,
    "HPlvl": 120,
    "ATKbase": 155,
    "ATKlvl": 5,
    "DEFbase": 155,
    "DEFlvl": 5,
    "AGI": 4.35,
    "CRT": 5,
    "HIT": 200,
    "DOD": 120,
    "resist": [
      75,
      75,
      75
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "강화 화학탄 발사",
        "img": "Missile",
        "range": 4,
        "AP": 4,
        "description": "강화 화학탄을 발사해 $(0.75) 피해를 줍니다. 3라운드 동안 대상에게 지속 고정 피해를 주고, 일정 확률로 모든 속성 저항과 행동력을 감소시킵니다. ",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "집속 화학탄 발사",
        "img": "Missile",
        "range": 4,
        "AP": 8,
        "description": "집속 화학탄을 발사해 $(2) 피해를 줍니다. 3라운드 동안 대상에게 지속 고정 피해를 주고, 일정 확률로 강화 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "환경 적응 시스템",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 자신과 인접한 아군의 모든 저항력을 올립니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Stalker_EV2",
    "name": "스토커",
    "img": "Stalker_B0108",
    "type": "경장 공격기",
    "info": "철충 연결체입니다. 힘을 모아서 엄청난 한 방을 노리는 비열한 타입의 적입니다. 하지만 힘을 모으고 있는 시간은 짧으니 최대한 공격을 늦춰서 제 포를 이용해 처리하는 게 가장 좋아 보이는군요.<br><br><br>- 보고자 비스트 헌터",
    "HPbase": 12200,
    "HPlvl": 200,
    "ATKbase": 220,
    "ATKlvl": 20,
    "DEFbase": 1055,
    "DEFlvl": 5,
    "AGI": 4.15,
    "CRT": 10,
    "HIT": 350,
    "DOD": 75,
    "resist": [
      35,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "초정밀 저격",
        "img": "Chargeshot",
        "range": 6,
        "AP": 4,
        "description": "레일건 저격으로 $(0.8) 보호 / 방어막 / 피해 감소 무시 피해를 줍니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "조준 개시",
        "img": "SelfAtkBuff",
        "range": 6,
        "AP": 4,
        "description": "레일건을 조준해, 다음 공격이 치명타로 적용되며 일정 라운드 동안 적중이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "매복 공격",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "후열에 있는 경우, 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "영거리 저격",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "전열에 있는 경우, 공격력이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "리액터 대폭발",
        "img": "SuiceideBomb",
        "range": 0,
        "AP": 0,
        "description": "사망 시, 리액터가 폭발에 주변에 매우 높은 고정 피해를 줍니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickDEG_TU4",
    "name": "나이트 칙 디텍터 G",
    "img": "NightChickDEG",
    "type": "경장 지원기",
    "info": "지상전용 레이더 철충이네요. 공중 공격엔 취약하니 기동 부대를 동원해 처리하는 것을 추천드려요.<br><br><br> - 다이카 보고함",
    "HPbase": 5400,
    "HPlvl": 125,
    "ATKbase": 25,
    "ATKlvl": 5,
    "DEFbase": 200,
    "DEFlvl": 11,
    "AGI": 4.45,
    "CRT": 1,
    "HIT": 320,
    "DOD": 85,
    "resist": [
      -25,
      -25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "지면 교란 파장",
        "img": "TeamDefDeBuff",
        "range": 5,
        "AP": 9,
        "description": "교란 파장을 발산해 $(0.1) 보호 무시 피해를 주고, 3라운드 동안 표식 / 받는 피해 증가 / 적중 / 회피 감소 효과를 줍니다. 스킬 사용 시, 회피가 증가합니다. 해당 스킬은 반드시 적중하지만, 기동형 적에게는 부가 효과가 적용되지 않습니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "개량형 섬광탄",
        "img": "Beam",
        "range": 4,
        "AP": 8,
        "description": "지정 범위에 섬광탄을 발사해 $(0.1) 피해를 주고, 대상의 AP를 감소시키며 적중 / 치명타 증가 효과를 해제합니다. 적중한 대상은 2라운드 동안 적중과 치명타가 감소합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "정밀 지상 레이더",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "인접 아군들에게 보호막 / 피해 감소 무시 효과와 대 경장 / 중장형 피해 증가 효과를 부여합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "정보 발신 오류",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 침수 상태로 라운드 개시 시, 오류가 발생해 아군의 적중 / 치명타 / 행동력이 감소합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_JuggernautP_N",
    "name": "강화형 저거너트",
    "img": "Juggernaut",
    "type": "중장 보호기",
    "info": "성격이 나빠 보이는 철충인 거예요. 공격을 시작하면 끝까지 공격하거든요. 그래서 공중 부대로 유인을 하는 게 좋을 것 같아요. 그 덩치로 다른 철충들을 보호하지 못하게요.<br><br><br>- 블랙 하운드",
    "HPbase": 9000,
    "HPlvl": 250,
    "ATKbase": 125,
    "ATKlvl": 13,
    "DEFbase": 1000,
    "DEFlvl": 30,
    "AGI": 3.35,
    "CRT": 10,
    "HIT": 150,
    "DOD": 0,
    "resist": [
      35,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "스매셔 펀치",
        "img": "MeleeAttack",
        "range": 1,
        "AP": 10,
        "description": "대상을 강타해 $(3) 피해를 주고, 일정 확률로 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "방벽 무너뜨리기",
        "img": "AssaultAttack",
        "range": 2,
        "AP": 9,
        "description": "대상에게 돌진해 $(2) 피해를 주고, 피해 감소 효과를 해제하며 뒤로 1칸 밀어냅니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "호위 경보",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 사망한 경우, 방어 태세로 전환해 행 보호와 열 보호 효과를 활성화합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "고밀도 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 방어력이 증가합니다. HP 25% 이하가 될 경우, 방어력이 추가로 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Mammoth_TU4",
    "name": "매머드",
    "img": "Mammoth",
    "type": "중장 공격기",
    "info": "한 방이 엄청나게 무서운데다 장갑도 두꺼워서 장갑 사이에 치명타를 먹이거나 아니면 관통할 수 있는 무기가 좋아 보이네. 뭐, 못 피하면 죽으니까 조심하라고.<br><br><br>- 보고자 샌드걸",
    "HPbase": 2500,
    "HPlvl": 185,
    "ATKbase": 130,
    "ATKlvl": 15.5,
    "DEFbase": 225,
    "DEFlvl": 11,
    "AGI": 3.2,
    "CRT": 7.5,
    "HIT": 150,
    "DOD": 0,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "직사 포격",
        "img": "CannonShotWide",
        "range": 2,
        "AP": 7,
        "description": "직사 포격으로 목표 대상이 있는 열에 $(1.35) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "2연장 곡사포",
        "img": "CannonShotDelay",
        "range": 6,
        "AP": 9,
        "description": "1라운드 뒤에 착탄하는 곡사 포격으로 목표 지점에 $(2.5) 보호 무시 피해를 줍니다. 목표 지점 주변에는 피해가 50% 감소합니다. 대상이 이동 불가 상태인 경우, 직격해 피해량이 증가합니다.",
        "areadata": [
          0,
          0.75,
          0,
          0.75,
          1,
          0.75,
          0,
          0.75,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "고폭 충격탄",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 적의 방어막과 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickCMP_EV2",
    "name": "케미컬 칙 Type-X",
    "img": "NightChickCMP",
    "type": "경장 공격기",
    "info": "히익… 다신 보기 싫을 정도로 징그러웠어요…... 불에는 약한지 불을 붙이니 폭발해서 깜짝 놀랐네요.<br><br><br> - 뽀끄루 보고함",
    "HPbase": 1,
    "HPlvl": 1,
    "ATKbase": 20,
    "ATKlvl": 20,
    "DEFbase": 52,
    "DEFlvl": 2,
    "AGI": 4.5,
    "CRT": 5,
    "HIT": 375,
    "DOD": 125,
    "resist": [
      0,
      99,
      99
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "급속 부식탄",
        "img": "Missile",
        "range": 5,
        "AP": 4,
        "description": "급속 부식탄을 발사해 $(0.33) 피해를 줍니다. 2라운드 동안 대상을 급속 부식 상태로 만들어 효과 저항 / 방어력 / 행동력을 감소시키고 매 라운드 지속 피해를 입힙니다. 대상이 이미 부식 상태면 일정 확률로 강화 효과를 해제합니다. ",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "급속 부식탄 난사",
        "img": "MultiMissile",
        "range": 4,
        "AP": 7,
        "description": "급속 부식탄을 발사해 지정 범위에 $(0.33) 피해를 줍니다. 2라운드 동안 대상을 급속 부식 상태로 만들어 효과 저항 / 방어력 / 행동력을 감소시키고 매 라운드 지속 피해를 입힙니다. 대상이 이미 부식 상태면 일정 확률로 강화 효과를 해제합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "부식액 누출",
        "img": "TeamDefDeBuff",
        "range": 0,
        "AP": 0,
        "description": "적 공격 시, 주변에 부식액이 누출되어 지속 고정 피해를 주며 방어력을 감소시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "내성 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 당할 경우, 상대의 스킬이 최소 피해로 적용됩니다. 라운드 개시 시, 자신과 인접한 아군에게 걸린 방해 효과를 해제합니다.",
        "areadata": [
          7,
          9,
          5,
          1,
          3
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "부식액 폭발",
        "img": "SuiceideBomb",
        "range": 0,
        "AP": 0,
        "description": "화염 속성 액티브 스킬 공격 피격 시, 부식액에 불이 붙어 점화 상태가 됩니다. 점화 상태로 처치되면 부식액 폭발로 범위 내 아군에게 괴멸적인 고정 피해를 입힙니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_JuggernautP_EV1",
    "name": "강화형 저거너트",
    "img": "Juggernaut",
    "type": "중장 보호기",
    "info": "성격이 나빠 보이는 철충인 거예요. 공격을 시작하면 끝까지 공격하거든요. 그래서 공중 부대로 유인을 하는 게 좋을 것 같아요. 그 덩치로 다른 철충들을 보호하지 못하게요.<br><br><br>- 블랙 하운드",
    "HPbase": 15000,
    "HPlvl": 375,
    "ATKbase": 150,
    "ATKlvl": 15,
    "DEFbase": 1250,
    "DEFlvl": 37.5,
    "AGI": 3.35,
    "CRT": 10,
    "HIT": 165,
    "DOD": 0,
    "resist": [
      35,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "스매셔 펀치",
        "img": "MeleeAttack",
        "range": 1,
        "AP": 10,
        "description": "대상을 강타해 $(3) 피해를 주고, 일정 확률로 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "방벽 무너뜨리기",
        "img": "AssaultAttack",
        "range": 2,
        "AP": 9,
        "description": "대상에게 돌진해 $(2) 피해를 주고, 피해 감소 효과를 해제하며 뒤로 1칸 밀어냅니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "호위 경보",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 사망한 경우, 방어 태세로 전환해 행 보호와 열 보호 효과를 활성화합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "고밀도 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 방어력이 증가합니다. HP 25% 이하가 될 경우, 방어력이 추가로 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_BigChickMG_EV2",
    "name": "빅 칙 런쳐 G",
    "img": "BigChickMG",
    "type": "중장 공격기",
    "info": "화력이 뛰어나지만 전기로 센서를 일시적으로 고장낼 수 있는거 같아요. 보조 무장은 약하지만 정밀하니 주의하세요.<br><br><br>- 레아 보고함",
    "HPbase": 29150,
    "HPlvl": 150,
    "ATKbase": 138,
    "ATKlvl": 12.5,
    "DEFbase": 830,
    "DEFlvl": 30,
    "AGI": 3.55,
    "CRT": 10,
    "HIT": 215,
    "DOD": 0,
    "resist": [
      35,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "파쇄 미사일",
        "img": "CruiseMissile",
        "range": 6,
        "AP": 7,
        "description": "1라운드 후 착탄하며, $(3) 보호 무시 피해를 주는 미사일을 발사합니다. 대상이 경장형 또는 중장형인 경우, 피해량이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "집속 마이크로 미사일",
        "img": "MultiMissile",
        "range": 4,
        "AP": 3,
        "description": "지정 범위에 $(0.25) 보호 무시 피해를 주는 집속 마이크로 미사일을 발사합니다. 3라운드 동안 공격 대상들의 회피를 감소시킵니다. 200%의 추가 적중 보정이 적용됩니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "고속 장전 장치",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 후, 3라운드 동안 행동력이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "MOP 탄두",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "방어 관통이 크게 증가하며, 공격 대상의 방어막과 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "레이더 오류",
        "img": "SelfAtkDeBuff",
        "range": 0,
        "AP": 0,
        "description": "전기 속성 피격 시, 2라운드 동안 적중이 대폭 감소합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickShEx_N",
    "name": "강화형 칙 실더",
    "img": "NightChickS",
    "type": "경장 보호기",
    "info": "일반적인 칙 실더랑 다르게 어디에서나 방어하네? 대열을 짜기 시작하면 귀찮아질 거 같으니 빨리 처리하는 게 좋을 것 같아.<br><br><br>- 피닉스 보고함",
    "HPbase": 400,
    "HPlvl": 60,
    "ATKbase": 50,
    "ATKlvl": 5.25,
    "DEFbase": 40,
    "DEFlvl": 2.5,
    "AGI": 4.05,
    "CRT": 5,
    "HIT": 135,
    "DOD": 20,
    "resist": [
      35,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "칙 방패 강타",
        "img": "MeleeAttack",
        "range": 3,
        "AP": 4,
        "description": "대상에게 $(1.1000000000000001) 피해를 주고, 2라운드 동안 도발 / 공격력 / 치명타 감소 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칙 보호 개시",
        "img": "SelfDefBuff",
        "range": 6,
        "AP": 6,
        "description": "지정 아군의 AP를 상승시키고, 3라운드 동안 대상을 지정 보호합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 방어 대형",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 받는 피해가 감소하며 속성 저항력이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickShEx_TU2",
    "name": "강화형 칙 실더",
    "img": "NightChickS",
    "type": "경장 보호기",
    "info": "일반적인 칙 실더랑 다르게 어디에서나 방어하네? 대열을 짜기 시작하면 귀찮아질 거 같으니 빨리 처리하는 게 좋을 것 같아.<br><br><br>- 피닉스 보고함",
    "HPbase": 550,
    "HPlvl": 75,
    "ATKbase": 60,
    "ATKlvl": 6,
    "DEFbase": 60,
    "DEFlvl": 4,
    "AGI": 4.1,
    "CRT": 5,
    "HIT": 160,
    "DOD": 40,
    "resist": [
      35,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "칙 방패 강타",
        "img": "MeleeAttack",
        "range": 3,
        "AP": 4,
        "description": "대상에게 $(1.1000000000000001) 피해를 주고, 2라운드 동안 도발 / 공격력 / 치명타 감소 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칙 보호 개시",
        "img": "SelfDefBuff",
        "range": 6,
        "AP": 6,
        "description": "지정 아군의 AP를 상승시키고, 3라운드 동안 대상을 지정 보호합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 방어 대형",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 받는 피해가 감소하며 속성 저항력이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickCEX_TU2",
    "name": "개량형 칙 캐논",
    "img": "NightChickC",
    "type": "중장 공격기",
    "info": "박격포로 무장한 나이트 칙인데... 별 거 아닌 폭죽이나 쏴대는 벌레야. 아, 약한 애들한텐 무서우려나?<br><br><br>- 메이 보고함",
    "HPbase": 345,
    "HPlvl": 70,
    "ATKbase": 75,
    "ATKlvl": 11.25,
    "DEFbase": 75,
    "DEFlvl": 3.5,
    "AGI": 3.3,
    "CRT": 10,
    "HIT": 125,
    "DOD": 0,
    "resist": [
      50,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "네이팜 분사",
        "img": "WideFireShot",
        "range": 2,
        "AP": 4,
        "attr": "fire",
        "description": "화염 방사로 $(1.1000000000000001) 화염 속성 피해를 주며, 3라운드 동안 지속 화염 피해를 입는 점화 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "강화 곡사 포격",
        "img": "CannonShotDelay",
        "range": 6,
        "AP": 7,
        "description": "1라운드 후에 착탄하는 곡사포를 발사해 목표 범위에 $(2)의 피해를 줍니다. 대상이 이동 불가 상태면 피해량이 증가합니다.",
        "areadata": [
          0,
          0.75,
          0,
          0.75,
          1,
          0.75,
          0,
          0.75,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "연료 탱크 파괴",
        "img": "SuiceideBomb",
        "range": 0,
        "AP": 0,
        "attr": "fire",
        "description": "사망 시, 연료 탱크가 유폭해 주변에 괴멸적인 피해를 주며 피해 감소 효과를 해제합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "조준 보정",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 3라운드 동안 적중이 증가합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickShEx_TU3",
    "name": "강화형 칙 실더",
    "img": "NightChickS",
    "type": "경장 보호기",
    "info": "일반적인 칙 실더랑 다르게 어디에서나 방어하네? 대열을 짜기 시작하면 귀찮아질 거 같으니 빨리 처리하는 게 좋을 것 같아.<br><br><br>- 피닉스 보고함",
    "HPbase": 1500,
    "HPlvl": 150,
    "ATKbase": 70,
    "ATKlvl": 6.75,
    "DEFbase": 500,
    "DEFlvl": 15,
    "AGI": 4.15,
    "CRT": 5,
    "HIT": 200,
    "DOD": 60,
    "resist": [
      35,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "칙 방패 강타",
        "img": "MeleeAttack",
        "range": 3,
        "AP": 4,
        "description": "대상에게 $(1.1000000000000001) 피해를 주고, 2라운드 동안 도발 / 공격력 / 치명타 감소 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칙 보호 개시",
        "img": "SelfDefBuff",
        "range": 6,
        "AP": 6,
        "description": "지정 아군의 AP를 상승시키고, 3라운드 동안 대상을 지정 보호합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 방어 대형",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 받는 피해가 감소하며 속성 저항력이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_CenturionCF_TU2",
    "name": "센츄리온 치프틴",
    "img": "CenturionCF",
    "type": "경장 공격기",
    "info": "센츄리온에서 지휘 능력이 더 강화된 기종입니다. 포착 당한 후에는 공격을 피하기 힘드니 주의하셔야 합니다. 본 기종에도 안테나 도입을 검토하면 감사하겠습니다.<br><br><br>- 램파트",
    "HPbase": 6720,
    "HPlvl": 122.4,
    "ATKbase": 113,
    "ATKlvl": 11.3,
    "DEFbase": 80,
    "DEFlvl": 8.5,
    "AGI": 4.18,
    "CRT": 7.5,
    "HIT": 200,
    "DOD": 25,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "정밀 유도 미사일",
        "img": "MultiMissile",
        "range": 4,
        "AP": 7,
        "description": "정밀 유도 미사일로 $(1) 피해를 줍니다. 대상이 표식 상태면 피해량이 크게 증가합니다.",
        "areadata": [
          8,
          9,
          5,
          6
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "멀티 록 온",
        "img": "Scan",
        "range": 4,
        "AP": 6,
        "description": "목표 범위 대상들을 표식으로 설정하고, 회피 강화 효과를 해제하며 회피가 낮춥니다. 자신은 적중이 증가하며, 대상들은 받는 피해 증가 상태가 됩니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "대열 정비",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "아군 사망 시, 대열을 정비해 인접한 아군들과 자신의 행동력 / 적중 / 회피가 증가합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "위기 극복",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 받을 때, 자신에게 능력치 감소 효과가 적용되어 있으면 반격하며, 일정 확률로 해당 효과를 해제합니다..",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_WaspEX_TU4",
    "name": "와습 HM",
    "img": "Wasp",
    "type": "기동 공격기",
    "info": "누가 이 자식한테 이 뿔침을 달아준 거야? 물론 나처럼 빠르진 않지만 나보다 느린 애들은 전부 조심하도록 해. 제법 빠른 속도로 돌격을 하니 말이야.<br><br><br>- 슬레이프니르",
    "HPbase": 600,
    "HPlvl": 72.5,
    "ATKbase": 135,
    "ATKlvl": 14.25,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.4,
    "CRT": 20,
    "HIT": 180,
    "DOD": 120,
    "resist": [
      75,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "화염 작렬",
        "img": "WideFireShot",
        "range": 3,
        "AP": 6,
        "attr": "fire",
        "description": "화염 방사로 대상에게 $(0.8) 피해를 주고, 대상 뒤에 50% 감소한 피해를 줍니다. 대상을 점화 상태로 만들어 2라운드 동안 지속 화염 피해를 줍니다.",
        "areadata": [
          0,
          0,
          0,
          0.5,
          1,
          0,
          0,
          0,
          0
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "자폭 돌진",
        "img": "SuiceideBomb",
        "range": 7,
        "AP": 10,
        "description": "공격 대상에게 돌격 후, 자폭해 $(6) 피해를 줍니다. 대상의 방어력을 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "고속 기동",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 사망한 경우, 2라운드 동안 회피가 증가하며 행동력 / 적중이 감소합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_ScarabEX_TU4",
    "name": "스캐럽 HC",
    "img": "Scarab",
    "type": "기동 보호기",
    "info": "이상한 구조인데 잘도 나는 거 있지? 나 저거 꼭 분해하고 싶으니까 잡히면 나한테 보내 줘야 해! 겁쟁이라 무서우면 방어를 하니까 빨리 해치우는 게 좋아.<br><br><br>- 보고자 닥터",
    "HPbase": 950,
    "HPlvl": 100,
    "ATKbase": 100,
    "ATKlvl": 8.5,
    "DEFbase": 145,
    "DEFlvl": 2.75,
    "AGI": 4.55,
    "CRT": 15,
    "HIT": 200,
    "DOD": 150,
    "resist": [
      50,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "실드 돌진",
        "img": "AssaultAttack",
        "range": 3,
        "AP": 6,
        "description": "대상에게 돌격해 $(1.5) 피해를 주고, 대상의 행 / 열 보호 효과와 피해 감소 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "호위 기동",
        "img": "SelfDefBuff",
        "range": 6,
        "AP": 4,
        "description": "3라운드 동안 지정한 아군을 보호하며, 대상의 행동력과 적중을 증가시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "경계 기동",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시 HP가 50% 이하인 경우, 받는 피해와 회피가 감소하고 방어력이 대폭 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_FABigChickEX_TU3",
    "name": "FA 빅 칙 II",
    "img": "FABigChick",
    "type": "중장 공격기",
    "info": "빅 칙과는 달라! 빅 칙과는! 뭐로 만든지는 몰라도 장갑이 차원이 다르니 나 같은 대 장갑 요원이 없으면 꽤나 곤란할걸?<br><br><br> - 불가사리 보고함",
    "HPbase": 3250,
    "HPlvl": 125,
    "ATKbase": 125,
    "ATKlvl": 14,
    "DEFbase": 180,
    "DEFlvl": 7,
    "AGI": 3.35,
    "CRT": 10,
    "HIT": 145,
    "DOD": 0,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "강화 중 기관포",
        "img": "MGShot",
        "range": 4,
        "AP": 4,
        "description": "중 기관포로 $(1.6) 피해를 줍니다. 대상의 방어력을 일정 비율 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "듀얼 칙 캐논포",
        "img": "CannonShotWide",
        "range": 2,
        "AP": 6,
        "description": "캐논포를 연사해 목표 열에 $(1.35) 피해를 줍니다. 대상의 피해 감소 효과를 해제합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "빅 칙 반응 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "반응 장갑으로 인해 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "작열탄두",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "작열탄두를 장비해 경장형에게 주는 피해가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickDEX_TU2",
    "name": "강화형 칙 디텍터",
    "img": "NightChickDE",
    "type": "경장 지원기",
    "info": "강한 방패 전파를 쏴서 귀찮긴 한데, 냉기에 약한지 기온이 내려가면 이상을 일으켜 오히려 도움이 되는 것 같아.<br><br><br>- 엠프리스 보고함",
    "HPbase": 1000,
    "HPlvl": 135,
    "ATKbase": 65,
    "ATKlvl": 5.5,
    "DEFbase": 1250,
    "DEFlvl": 15,
    "AGI": 4.25,
    "CRT": 5,
    "HIT": 475,
    "DOD": 50,
    "resist": [
      50,
      -35,
      75
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "약점 스캔",
        "img": "Scan",
        "range": 5,
        "AP": 4,
        "description": "목표를 공격 대상으로 지정해 $(1) 피해를 주고, 2라운드 동안 표식 / 받는 피해 증가 / 회피 감소 상태로 만듭니다. 적중 대상은 회피 강화 효과가 해제됩니다. 자신은 3라운드 동안 회피가 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "강화 섬광탄",
        "img": "Beam",
        "range": 4,
        "AP": 8,
        "description": "지정한 위치에 섬광탄을 발사해 $(0.5) 피해를 주고, 2라운드 동안 적중 / 치명타를 낮춥니다. 적중 대상은 AP가 감소합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "경보 레이더",
        "img": "TeamSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시, 모든 아군의 AP / 적중 / 치명타 / 사거리가 증가합니다. 냉기 속성 액티브 스킬 피격 시 아군의 적중 / 치명타 / 사거리 증가 효과가 해제되며, 2라운드 동안 아군들의 적중 / 치명타가 감소합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "레이더 교란",
        "img": "TeamSpdDeBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시, 모든 적군의 AP / 적중 / 치명타 / 사거리가 감소합니다. 냉기 속성 액티브 스킬 피격 시 적에게 건 적중 / 치명타 / 사거리 감소 효과가 해제되며, 9라운드 동안 적들의 적중 / 치명타가 증가합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Tarantula_N",
    "name": "타란튤라",
    "img": "Tarantula",
    "type": "경장 공격기",
    "info": "가까이 오면 자폭해서 접근하기 전에 처리해야 하는데... 엄청나게 잽싸서 조준 보조 없이는 맞추기 힘들어요. 과열 상태가 되면 큰 폭발을 일으키니 이걸 노려보는 게 어떨까요?<br><br><br> - 베라 보고함",
    "HPbase": 800,
    "HPlvl": 50,
    "ATKbase": 160,
    "ATKlvl": 10,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.45,
    "CRT": 10,
    "HIT": 350,
    "DOD": 200,
    "resist": [
      95,
      -25,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "히트 머신건",
        "img": "MeleeAttack",
        "range": 4,
        "AP": 4,
        "attr": "fire",
        "description": "대상에게 $(0.8) 화염 속성 피해를 주고, 50% 확률로 최대 3회까지 화염 저항을 감소시킵니다. 치명타 시, 대상의 피해 감소 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "자폭 개시",
        "img": "SelfDefBuff",
        "range": 3,
        "AP": 10,
        "attr": "fire",
        "description": "자폭해 지정 범위에 $(4) 화염 속성 피해를 줍니다. 대상의 방어막 / 피해 감소 효과를 무시합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "내부 과열",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 과열 상태가 되어 공격력이 증가합니다. 3중첩 이상 시, 회피가 증가하지만 지속 고정 피해를 입습니다. 적의 공격을 회피하면 2라운드 동안 적중이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "과열 폭발",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "<내부 과열> 3중첩 이상 상태에서 사망 시, 주변에 괴멸적인 고정 피해를 줍니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickShEx_TU4",
    "name": "강화형 칙 실더",
    "img": "NightChickS",
    "type": "경장 보호기",
    "info": "일반적인 칙 실더랑 다르게 어디에서나 방어하네? 대열을 짜기 시작하면 귀찮아질 거 같으니 빨리 처리하는 게 좋을 것 같아.<br><br><br>- 피닉스 보고함",
    "HPbase": 2500,
    "HPlvl": 175,
    "ATKbase": 80,
    "ATKlvl": 7.5,
    "DEFbase": 1000,
    "DEFlvl": 20,
    "AGI": 4.2,
    "CRT": 5,
    "HIT": 250,
    "DOD": 80,
    "resist": [
      35,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "칙 방패 강타",
        "img": "MeleeAttack",
        "range": 3,
        "AP": 4,
        "description": "대상에게 $(1.1000000000000001) 피해를 주고, 2라운드 동안 도발 / 공격력 / 치명타 감소 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칙 보호 개시",
        "img": "SelfDefBuff",
        "range": 6,
        "AP": 6,
        "description": "지정 아군의 AP를 상승시키고, 3라운드 동안 대상을 지정 보호합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 방어 대형",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 받는 피해가 감소하며 속성 저항력이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Tarantula_TU2",
    "name": "타란튤라",
    "img": "Tarantula",
    "type": "경장 공격기",
    "info": "가까이 오면 자폭해서 접근하기 전에 처리해야 하는데... 엄청나게 잽싸서 조준 보조 없이는 맞추기 힘들어요. 과열 상태가 되면 큰 폭발을 일으키니 이걸 노려보는 게 어떨까요?<br><br><br> - 베라 보고함",
    "HPbase": 1200,
    "HPlvl": 60,
    "ATKbase": 170,
    "ATKlvl": 11.5,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.5,
    "CRT": 10,
    "HIT": 350,
    "DOD": 220,
    "resist": [
      95,
      -25,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "히트 머신건",
        "img": "MeleeAttack",
        "range": 4,
        "AP": 4,
        "attr": "fire",
        "description": "대상에게 $(0.8) 화염 속성 피해를 주고, 50% 확률로 최대 3회까지 화염 저항을 감소시킵니다. 치명타 시, 대상의 피해 감소 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "자폭 개시",
        "img": "SelfDefBuff",
        "range": 3,
        "AP": 10,
        "attr": "fire",
        "description": "자폭해 지정 범위에 $(4) 화염 속성 피해를 줍니다. 대상의 방어막 / 피해 감소 효과를 무시합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "내부 과열",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 시, 과열 상태가 되어 공격력이 증가합니다. 3중첩 이상 시, 회피가 증가하지만 지속 고정 피해를 입습니다. 적의 공격을 회피하면 2라운드 동안 적중이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "과열 폭발",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "<내부 과열> 3중첩 이상 상태에서 사망 시, 주변에 괴멸적인 고정 피해를 줍니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickCM_N",
    "name": "케미컬 칙",
    "img": "NightChickCM",
    "type": "경장 지원기",
    "info": "냄새 나고 이상한 액체를 뿌려. 더럽고 음란해. 그 이상한 액을 뒤집어 쓴 애들은 한 동안 근처에 못 오게 했어. 특히 스틸 드라코는…<br><br><br>- 보고자 미호",
    "HPbase": 250,
    "HPlvl": 45,
    "ATKbase": 50,
    "ATKlvl": 6,
    "DEFbase": 20,
    "DEFlvl": 0.5,
    "AGI": 4.1,
    "CRT": 10,
    "HIT": 160,
    "DOD": 40,
    "resist": [
      50,
      50,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "화학탄 발사",
        "img": "Missile",
        "range": 4,
        "AP": 4,
        "description": "화학 탄두를 발사해 $(0.8) 피해를 줍니다. 3라운드 동안 대상을 부식 상태로 만듭니다. 부식 상태가 된 대상은 방어력 / 행동력이 감소하며 매 라운드 지속 피해를 입습니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "화학탄 난사",
        "img": "MultiMissile",
        "range": 2,
        "AP": 6,
        "description": "화학 탄두를 난사해 지정 범위에 $(0.5) 피해를 줍니다. 3라운드 동안 대상을 부식 상태로 만듭니다. 부식 상태가 된 대상은 방어력 / 행동력이 감소하며 매 라운드 지속 피해를 입습니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "적응 시스템",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 자신과 인접한 아군에게 걸린 방해 효과를 해제합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Phalangites_N",
    "name": "팔랑스",
    "img": "Phalangites",
    "type": "경장 보호기",
    "info": "각이 잡힌 대열로 행군하는 철충입니다. 철충 놈들 중엔 드물게 군기가 들어있지 말입니다. 딱 밀착해서 서로서로를 보호하는 녀석들이니 진형을 아작내는 게 중요하지 말임다.<br><br><br>- 블러디팬서",
    "HPbase": 400,
    "HPlvl": 72.5,
    "ATKbase": 55,
    "ATKlvl": 5.75,
    "DEFbase": 50,
    "DEFlvl": 3,
    "AGI": 3.95,
    "CRT": 10,
    "HIT": 150,
    "DOD": 25,
    "resist": [
      40,
      40,
      40
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "머신건 속사",
        "img": "ARShot",
        "range": 4,
        "AP": 4,
        "description": "머신건을 발사해 $(1) 피해를 줍니다. 대상이 기동형인 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "대열 방어",
        "img": "TeamDefBuff",
        "range": 6,
        "AP": 4,
        "description": "3라운드 동안 같은 열의 아군을 보호하며, 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "밀집 대형",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 같은 열에 인접한 아군에게 피해 감소 효과를 부여합니다. 해당 효과는 중첩됩니다.",
        "areadata": [
          8,
          2
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickSPW_N",
    "name": "한랭지형 칙 스나이퍼",
    "img": "NightChickSPW",
    "type": "경장 공격기",
    "info": "보기보다 잽싼 녀석이야! 발키리 언니처럼 가까운 거리에선 사격이 더 정밀해지니 주의해야 해. 설원에선 찾기 힘드니 베라 언니한테 도와달라고 하는 게 좋을 거야.<br><br><br>- 알비스 보고함",
    "HPbase": 250,
    "HPlvl": 45,
    "ATKbase": 60,
    "ATKlvl": 7,
    "DEFbase": 80,
    "DEFlvl": 3,
    "AGI": 4.35,
    "CRT": 5,
    "HIT": 375,
    "DOD": 55,
    "resist": [
      -50,
      75,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "약점 저격",
        "img": "Snipe",
        "range": 5,
        "AP": 4,
        "description": "대상에게 $(1.1000000000000001) 보호 무시 피해를 줍니다. 치명타 시 피해량이 증가하며, 자신이 전열일 경우 대상의 방어막 / 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "저격 목표 포착",
        "img": "Scan",
        "range": 4,
        "AP": 5,
        "description": "대상에게 $(0.05) 피해를 주고, 2라운드 동안 대상을 표식으로 지정해 받는 피해 증가 / 회피 감소 상태로 만듭니다. 자신은 3라운드 동안 적중 / 회피 / 행동력이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "설원 매복",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "냉기 속성 저항이 증가하며, <혹한> 효과를 받는 상태에선 회피가 증가하며 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "역공 준비",
        "img": "DefCounter",
        "range": 0,
        "AP": 0,
        "description": "공격 회피 시, 반격합니다. 해당 효과 발동 시, 3라운드 동안 치명타가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_MammothW_N",
    "name": "한랭지형 매머드",
    "img": "MammothW",
    "type": "중장 공격기",
    "info": "일반 매머드보다 포격의 위력은 줄었지만, 장전 속도가 빨라진 것 같아요. 설원에서는 방호력이 증가하는 특성이 있으니 촬영 자료를 참조해 주세요.<br><br><br>- 탈론페더 보고함",
    "HPbase": 2000,
    "HPlvl": 120,
    "ATKbase": 100,
    "ATKlvl": 8,
    "DEFbase": 200,
    "DEFlvl": 12,
    "AGI": 3.75,
    "CRT": 2.5,
    "HIT": 130,
    "DOD": 0,
    "resist": [
      -50,
      75,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "확산 포격",
        "img": "CannonShotWide",
        "range": 2,
        "AP": 6,
        "description": "포격으로 지정 범위에 $(1) 피해를 줍니다. 대상이 회피 / 방어력 감소 상태면 피해량이 증가합니다.",
        "areadata": [
          7,
          4,
          5,
          1
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "클러스터 캐논",
        "img": "CannonShotDelay",
        "range": 6,
        "AP": 6,
        "description": "1라운드 뒤에 착탄하는 포격으로 지정 범위에 $(1.35) 보호 무시 피해를 줍니다. 목표 지점은 50% 피해만 줍니다. 대상이 표식 / 이동 불가 상태면 피해량이 증가합니다.",
        "areadata": [
          0,
          1,
          0,
          1,
          0.5,
          1,
          0,
          1,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "설원 위장",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "냉기 속성 저항이 증가하며, <혹한> 효과를 받는 상태에선 방어력 / 효과 저항이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "포신 급속 냉각",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 후, 포신을 냉각해 3라운드 동안 행동력이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_LegionMk2_N",
    "name": "레기온 Mk.II",
    "img": "LegionMk2",
    "type": "경장 공격기",
    "info": "레기온의 개량형인 것 같군요. 적의 움직임을 예측해 공격하니 대응할 장비가 필요해 보이네요. 공격 연계 능력도 높아졌으니 먼저 처리해 변수를 줄이는 게 좋겠습니다.<br><br><br>- 아르망 보고함",
    "HPbase": 1000,
    "HPlvl": 100,
    "ATKbase": 80,
    "ATKlvl": 7,
    "DEFbase": 100,
    "DEFlvl": 4,
    "AGI": 4.3,
    "CRT": 5,
    "HIT": 360,
    "DOD": 50,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "개량형 미니건",
        "img": "MGShot",
        "range": 5,
        "AP": 4,
        "description": "미니건을 발사해 $(1.1000000000000001) 피해를 줍니다. 치명타 시, 2라운드 동안 대상이 받는 피해가 증가하며 50% 확률로 강화 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "재밍 포획탄",
        "img": "SelfSpdDeBuff",
        "range": 4,
        "AP": 6,
        "description": "포획탄을 발사해 $(0.8) 피해를 주고, 50% 확률로 3라운드 동안 대상을 이동 불가 / 공격력 / 치명타 / 회피 / 행동력 감소 상태로 만듭니다. 스킬 사용 시, 3라운드 동안 자신의 적중이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "요격 포메이션",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시, 범위 내 아군의 AP가 증가합니다. 라운드 개시 시, 대상의 공격을 지원하며 치명타 / 적중을 증가시킵니다.",
        "areadata": [
          8,
          2
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "회피 패턴 분석",
        "img": "TeamSpdDeBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 25% 확률로 적의 회피가 감소하며 받는 피해가 증가합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Frostbite_TU",
    "name": "프로스트바이트",
    "img": "Frostbite",
    "type": "중장 지원기",
    "info": "유기 생명체, 기온 하락 시 작전 능력 저하. 특수재질 장갑, 열 병기 지원 필요.<br><br><br>- 기간테스 보고함",
    "HPbase": 5000,
    "HPlvl": 180,
    "ATKbase": 80,
    "ATKlvl": 7.5,
    "DEFbase": 500,
    "DEFlvl": 20,
    "AGI": 3.7,
    "CRT": 5,
    "HIT": 175,
    "DOD": 0,
    "resist": [
      -50,
      95,
      75
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "파쇄탄 발사",
        "img": "ShotGun",
        "range": 4,
        "AP": 5,
        "description": "지정 대상에게 $(1.2) 피해를 줍니다. 대상의 방어막 / 피해 감소 효과를 무시합니다. 대상이 빙결 상태일 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "냉각제 분사",
        "img": "WideIceShot",
        "range": 4,
        "AP": 7,
        "attr": "ice",
        "description": "지정 범위에 $(0.5) 보호 무시 냉기 피해를 줍니다. 3라운드 동안 대상들은 지속 냉기 피해를 입으며, 50% 확률로 회피 / 행동력이 감소합니다. 125%의 적중 보정이 적용됩니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "기온 저하",
        "img": "TeamSpdDeBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, <침수> 상태인 바이오로이드들에게 50% 확률로 받는 피해 증가 / 효과 저항 / AP / 회피 감소 상태가 적용됩니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "혹한",
        "img": "WideIceShot",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 범위 내 아군에게 <한랭지 적응> 효과가 있으면 대상의 공격력 / 적중 / 회피 / 행동력이 증가합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "강화 빙결 코팅",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시, 방어력이 대폭 증가합니다. 해당 효과는 강화 효과 해제로 해제할 수 없으며, 화염 속성 공격 피격 시 해제됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Chiller_TU4",
    "name": "칠러",
    "img": "Chiller",
    "type": "기동 공격기",
    "info": "물… 절대 뿌리지 말것…<br><br><br> - 서펀트 보고함",
    "HPbase": 850,
    "HPlvl": 77.5,
    "ATKbase": 120,
    "ATKlvl": 12,
    "DEFbase": 150,
    "DEFlvl": 4,
    "AGI": 4.4,
    "CRT": 15,
    "HIT": 220,
    "DOD": 165,
    "resist": [
      -99,
      99,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "동결 가스",
        "img": "BeamShot",
        "range": 3,
        "AP": 6,
        "attr": "ice",
        "description": "지정 범위에 $(1) 냉기 속성 피해를 주고 대상을 이동 불가 상태로 만듭니다. 대상이 침수 상태인 경우, 행동 불가 / 받는 피해 증가 상태로 만들고 강화 효과를 해제합니다.",
        "areadata": [
          0,
          0,
          0,
          0.5,
          1,
          0,
          0,
          0,
          0
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "빙결 코팅",
        "img": "TeamDefBuff",
        "range": 6,
        "AP": 5,
        "description": "지정 아군과 자신에게 방어막을 부여하며, 방어력 증가 / 받는 피해와 화염 저항 감소 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "급속 냉각",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "자신이 침수 상태로 라운드 개시 시, 공격력 / 회피 / 행동력이 크게 증가하며 최소 피해만 입습니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "과열",
        "img": "TeamSpdDeBuff",
        "range": 0,
        "AP": 0,
        "description": "화염 속성 공격을 맞는 경우, 공격력 / 방어력 / 회피 / 행동력이 크게 감소하며 피해 최소화 상태가 해제됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_MammothW_TU",
    "name": "한랭지형 매머드",
    "img": "MammothW",
    "type": "중장 공격기",
    "info": "일반 매머드보다 포격의 위력은 줄었지만, 장전 속도가 빨라진 것 같아요. 설원에서는 방호력이 증가하는 특성이 있으니 촬영 자료를 참조해 주세요.<br><br><br>- 탈론페더 보고함",
    "HPbase": 4000,
    "HPlvl": 160,
    "ATKbase": 125,
    "ATKlvl": 10,
    "DEFbase": 400,
    "DEFlvl": 16,
    "AGI": 3.75,
    "CRT": 2.5,
    "HIT": 150,
    "DOD": 0,
    "resist": [
      -50,
      75,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "확산 포격",
        "img": "CannonShotWide",
        "range": 2,
        "AP": 6,
        "description": "포격으로 지정 범위에 $(1) 피해를 줍니다. 대상이 회피 / 방어력 감소 상태면 피해량이 증가합니다.",
        "areadata": [
          7,
          4,
          5,
          1
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "클러스터 캐논",
        "img": "CannonShotDelay",
        "range": 6,
        "AP": 6,
        "description": "1라운드 뒤에 착탄하는 포격으로 지정 범위에 $(1.35) 보호 무시 피해를 줍니다. 목표 지점은 50% 피해만 줍니다. 대상이 표식 / 이동 불가 상태면 피해량이 증가합니다.",
        "areadata": [
          0,
          1,
          0,
          1,
          0.5,
          1,
          0,
          1,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "설원 위장",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "냉기 속성 저항이 증가하며, <혹한> 효과를 받는 상태에선 방어력 / 효과 저항이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "포신 급속 냉각",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 후, 포신을 냉각해 3라운드 동안 행동력이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickAQ_TU4",
    "name": "아쿠아 칙",
    "img": "NightChickAQ",
    "type": "경장 지원기",
    "info": "물을 운반하는 철충인가봐. 철충들은 주변에 물이 새면 안절부절못하니 이걸 이용하면 좋을 것 같아!<br><br><br> - 아쿠아 보고함",
    "HPbase": 3000,
    "HPlvl": 150,
    "ATKbase": 35,
    "ATKlvl": 3.25,
    "DEFbase": 300,
    "DEFlvl": 15,
    "AGI": 4.2,
    "CRT": 5,
    "HIT": 375,
    "DOD": 75,
    "resist": [
      50,
      99,
      -50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "액체 분사",
        "img": "BeamShot",
        "range": 4,
        "AP": 7,
        "attr": "ice",
        "description": "지정 범위에 $(1) 냉기 속성 피해를 줍니다. 적중 대상은 침수 상태가 됩니다.",
        "areadata": [
          4,
          5,
          6
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "재 정비 프로토콜",
        "img": "TeamDefBuff",
        "range": 6,
        "AP": 5,
        "description": "지정 범위의 아군을 재 정비해, 해로운 효과를 해제하며 AP / 적중 / 효과 저항을 올려줍니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "방수 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "냉기 / 효과 저항이 증가하며, 받는 피해가 감소합니다. 침수 상태인 경우, 제어를 상실해 회피 / 행동력이 크게 증가하지만 적중이 크게 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "누수",
        "img": "TeamSpdDeBuff",
        "range": 0,
        "AP": 0,
        "description": "처치될 경우, 범위 내에 있는 대상들을 침수 상태로 만들며 행동력과 AP를 감소시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_LegionMk2_TU2",
    "name": "레기온 Mk.II",
    "img": "LegionMk2",
    "type": "경장 공격기",
    "info": "레기온의 개량형인 것 같군요. 적의 움직임을 예측해 공격하니 대응할 장비가 필요해 보이네요. 공격 연계 능력도 높아졌으니 먼저 처리해 변수를 줄이는 게 좋겠습니다.<br><br><br>- 아르망 보고함",
    "HPbase": 4500,
    "HPlvl": 150,
    "ATKbase": 100,
    "ATKlvl": 10,
    "DEFbase": 320,
    "DEFlvl": 8,
    "AGI": 4.4,
    "CRT": 10,
    "HIT": 440,
    "DOD": 100,
    "resist": [
      25,
      25,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "개량형 미니건",
        "img": "MGShot",
        "range": 5,
        "AP": 4,
        "description": "미니건을 발사해 $(1.1000000000000001) 피해를 줍니다. 치명타 시, 2라운드 동안 대상이 받는 피해가 증가하며 50% 확률로 강화 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "재밍 포획탄",
        "img": "SelfSpdDeBuff",
        "range": 4,
        "AP": 6,
        "description": "포획탄을 발사해 $(0.8) 피해를 주고, 50% 확률로 3라운드 동안 대상을 이동 불가 / 공격력 / 치명타 / 회피 / 행동력 감소 상태로 만듭니다. 스킬 사용 시, 3라운드 동안 자신의 적중이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "요격 포메이션",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시, 범위 내 아군의 AP가 증가합니다. 라운드 개시 시, 대상의 공격을 지원하며 치명타 / 적중을 증가시킵니다.",
        "areadata": [
          8,
          2
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "회피 패턴 분석",
        "img": "TeamSpdDeBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 25% 확률로 적의 회피가 감소하며 받는 피해가 증가합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickDEAA_TU2",
    "name": "나이트 칙 디텍터 AA",
    "img": "NightChickDEAA",
    "type": "경장 지원기",
    "info": "대공 교란용 적인가? 상관없다! 선제 공격을 맞아도 버티고 섬멸하면 그만이다! 돌격!!!<br><br><br>- 레드후드의 명령을 브라우니가 기록함",
    "HPbase": 2400,
    "HPlvl": 115,
    "ATKbase": 50,
    "ATKlvl": 5,
    "DEFbase": 400,
    "DEFlvl": 12,
    "AGI": 4.6,
    "CRT": 5,
    "HIT": 575,
    "DOD": 80,
    "resist": [
      -50,
      25,
      75
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "레이더 교란 파장",
        "img": "Scan",
        "range": 5,
        "AP": 8,
        "description": "교란 파장으로 $(0.1) 보호 무시 피해를 줍니다. 범위 내 대상들은 2라운드 동안 회피 감소 / 받는 피해 증가 상태가 됩니다. 대상이 기동형일 경우, 효과가 2배가 되며 회피 증가 효과를 해제합니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "조준 방해",
        "img": "GrenadeAttack_1",
        "range": 5,
        "AP": 8,
        "description": "섬광탄으로 지정 범위에 $(0.2) 보호 무시 피해를 줍니다. 적중 대상은 3라운드 동안 치명타 / 적중 / 방어 관통 감소 상태가 됩니다. 3라운드 동안 자신의 행동력이 증가합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "대공 레이더망",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시, 범위 내 아군의 AP가 증가합니다. 라운드 개시 시, 범위 내 아군의 적중 / 대 기동형 피해량이 증가하며 적중 감소 효과가 해제됩니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "통신 오류",
        "img": "TeamAtkDeBuff",
        "range": 0,
        "AP": 0,
        "description": "침수 상태로 라운드 개시 시, 자신과 주변 아군의 행동력이 감소하며 10% 확률로 행동 불가 상태가 됩니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickSPW_TU2",
    "name": "한랭지형 칙 스나이퍼",
    "img": "NightChickSPW",
    "type": "경장 공격기",
    "info": "보기보다 잽싼 녀석이야! 발키리 언니처럼 가까운 거리에선 사격이 더 정밀해지니 주의해야 해. 설원에선 찾기 힘드니 베라 언니한테 도와달라고 하는 게 좋을 거야.<br><br><br>- 알비스 보고함",
    "HPbase": 2000,
    "HPlvl": 105,
    "ATKbase": 90,
    "ATKlvl": 9,
    "DEFbase": 320,
    "DEFlvl": 7,
    "AGI": 4.45,
    "CRT": 10,
    "HIT": 475,
    "DOD": 110,
    "resist": [
      -50,
      75,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "약점 저격",
        "img": "Snipe",
        "range": 5,
        "AP": 4,
        "description": "대상에게 $(1.1000000000000001) 보호 무시 피해를 줍니다. 치명타 시 피해량이 증가하며, 자신이 전열일 경우 대상의 방어막 / 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "저격 목표 포착",
        "img": "Scan",
        "range": 4,
        "AP": 5,
        "description": "대상에게 $(0.05) 피해를 주고, 2라운드 동안 대상을 표식으로 지정해 받는 피해 증가 / 회피 감소 상태로 만듭니다. 자신은 3라운드 동안 적중 / 회피 / 행동력이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "설원 매복",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "냉기 속성 저항이 증가하며, <혹한> 효과를 받는 상태에선 회피가 증가하며 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "역공 준비",
        "img": "DefCounter",
        "range": 0,
        "AP": 0,
        "description": "공격 회피 시, 반격합니다. 해당 효과 발동 시, 3라운드 동안 치명타가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Frostbite_TU3",
    "name": "프로스트바이트",
    "img": "Frostbite",
    "type": "중장 지원기",
    "info": "유기 생명체, 기온 하락 시 작전 능력 저하. 특수재질 장갑, 열 병기 지원 필요.<br><br><br>- 기간테스 보고함",
    "HPbase": 15000,
    "HPlvl": 280,
    "ATKbase": 120,
    "ATKlvl": 10.5,
    "DEFbase": 1500,
    "DEFlvl": 30,
    "AGI": 3.8,
    "CRT": 10,
    "HIT": 225,
    "DOD": 0,
    "resist": [
      -50,
      95,
      75
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "파쇄탄 발사",
        "img": "ShotGun",
        "range": 4,
        "AP": 5,
        "description": "지정 대상에게 $(1.2) 피해를 줍니다. 대상의 방어막 / 피해 감소 효과를 무시합니다. 대상이 빙결 상태일 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "냉각제 분사",
        "img": "WideIceShot",
        "range": 4,
        "AP": 7,
        "attr": "ice",
        "description": "지정 범위에 $(0.5) 보호 무시 냉기 피해를 줍니다. 3라운드 동안 대상들은 지속 냉기 피해를 입으며, 50% 확률로 회피 / 행동력이 감소합니다. 125%의 적중 보정이 적용됩니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "기온 저하",
        "img": "TeamSpdDeBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, <침수> 상태인 바이오로이드들에게 50% 확률로 받는 피해 증가 / 효과 저항 / AP / 회피 감소 상태가 적용됩니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "혹한",
        "img": "WideIceShot",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 범위 내 아군에게 <한랭지 적응> 효과가 있으면 대상의 공격력 / 적중 / 회피 / 행동력이 증가합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "강화 빙결 코팅",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시, 방어력이 대폭 증가합니다. 해당 효과는 강화 효과 해제로 해제할 수 없으며, 화염 속성 공격 피격 시 해제됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_MammothW_TU2",
    "name": "한랭지형 매머드",
    "img": "MammothW",
    "type": "중장 공격기",
    "info": "일반 매머드보다 포격의 위력은 줄었지만, 장전 속도가 빨라진 것 같아요. 설원에서는 방호력이 증가하는 특성이 있으니 촬영 자료를 참조해 주세요.<br><br><br>- 탈론페더 보고함",
    "HPbase": 6000,
    "HPlvl": 200,
    "ATKbase": 150,
    "ATKlvl": 12,
    "DEFbase": 800,
    "DEFlvl": 20,
    "AGI": 3.8,
    "CRT": 5,
    "HIT": 175,
    "DOD": 0,
    "resist": [
      -50,
      75,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "확산 포격",
        "img": "CannonShotWide",
        "range": 2,
        "AP": 6,
        "description": "포격으로 지정 범위에 $(1) 피해를 줍니다. 대상이 회피 / 방어력 감소 상태면 피해량이 증가합니다.",
        "areadata": [
          7,
          4,
          5,
          1
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "클러스터 캐논",
        "img": "CannonShotDelay",
        "range": 6,
        "AP": 6,
        "description": "1라운드 뒤에 착탄하는 포격으로 지정 범위에 $(1.35) 보호 무시 피해를 줍니다. 목표 지점은 50% 피해만 줍니다. 대상이 표식 / 이동 불가 상태면 피해량이 증가합니다.",
        "areadata": [
          0,
          1,
          0,
          1,
          0.5,
          1,
          0,
          1,
          0
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "설원 위장",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "냉기 속성 저항이 증가하며, <혹한> 효과를 받는 상태에선 방어력 / 효과 저항이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "포신 급속 냉각",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 후, 포신을 냉각해 3라운드 동안 행동력이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickSPW_TU3",
    "name": "한랭지형 칙 스나이퍼",
    "img": "NightChickSPW",
    "type": "경장 공격기",
    "info": "보기보다 잽싼 녀석이야! 발키리 언니처럼 가까운 거리에선 사격이 더 정밀해지니 주의해야 해. 설원에선 찾기 힘드니 베라 언니한테 도와달라고 하는 게 좋을 거야.<br><br><br>- 알비스 보고함",
    "HPbase": 4500,
    "HPlvl": 135,
    "ATKbase": 105,
    "ATKlvl": 10,
    "DEFbase": 560,
    "DEFlvl": 9,
    "AGI": 4.5,
    "CRT": 12.5,
    "HIT": 525,
    "DOD": 145,
    "resist": [
      -50,
      75,
      25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "약점 저격",
        "img": "Snipe",
        "range": 5,
        "AP": 4,
        "description": "대상에게 $(1.1000000000000001) 보호 무시 피해를 줍니다. 치명타 시 피해량이 증가하며, 자신이 전열일 경우 대상의 방어막 / 피해 감소 효과를 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "저격 목표 포착",
        "img": "Scan",
        "range": 4,
        "AP": 5,
        "description": "대상에게 $(0.05) 피해를 주고, 2라운드 동안 대상을 표식으로 지정해 받는 피해 증가 / 회피 감소 상태로 만듭니다. 자신은 3라운드 동안 적중 / 회피 / 행동력이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "설원 매복",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "냉기 속성 저항이 증가하며, <혹한> 효과를 받는 상태에선 회피가 증가하며 받는 피해가 감소합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "역공 준비",
        "img": "DefCounter",
        "range": 0,
        "AP": 0,
        "description": "공격 회피 시, 반격합니다. 해당 효과 발동 시, 3라운드 동안 치명타가 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_HarvesterEX_N",
    "name": "아머드 하베스터",
    "img": "Harvester",
    "type": "중장 지원기",
    "info": "얘는 원래는 나처럼 일하던 애였던 것 같아. 멀리 있는 적을 갈고리로 당겨오니 주의하는 게 좋아. 나처럼 힘들게 사는 애니 편히 보내 주는 게 좋을 지도…<br><br><br>- 더치걸",
    "HPbase": 14500,
    "HPlvl": 335,
    "ATKbase": 200,
    "ATKlvl": 15,
    "DEFbase": 3500,
    "DEFlvl": 30,
    "AGI": 3.6,
    "CRT": 10,
    "HIT": 200,
    "DOD": 0,
    "resist": [
      35,
      35,
      35
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "폐기물 파쇄",
        "img": "MeleeAttack",
        "range": 1,
        "AP": 9,
        "description": "근접 공격으로 $(2.6) 피해를 줍니다. 대상이 이동 불가 상태인 경우, 대상을 강타해 피해량이 증가하며 2라운드 동안 행동 불가로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "폐기물 수집",
        "img": "Hang",
        "range": 4,
        "AP": 4,
        "description": "집게로 목표 대상을 포획해 $(0.5) 피해를 주며 2칸 앞으로 당깁니다. 적중 시, 2라운드 동안 행동력이 감소하며 이동 불가 상태가 됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "초합금 플레이팅",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "견고한 장갑으로 인해, 일정 위력 이하의 공격은 통하지 않습니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Wasp_TU",
    "name": "와습",
    "img": "Wasp",
    "type": "기동 공격기",
    "info": "누가 이 자식한테 이 뿔침을 달아준 거야? 물론 나처럼 빠르진 않지만 나보다 느린 애들은 전부 조심하도록 해. 제법 빠른 속도로 돌격을 하니 말이야.<br><br><br>- 슬레이프니르",
    "HPbase": 130,
    "HPlvl": 26.25,
    "ATKbase": 65,
    "ATKlvl": 8.8,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 4.25,
    "CRT": 10,
    "HIT": 105,
    "DOD": 45,
    "resist": [
      25,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "화염 방사",
        "img": "WideFireShot",
        "range": 3,
        "AP": 6,
        "attr": "fire",
        "description": "화염 방사로 대상에게 $(0.75) 피해를 주고, 대상 뒤에 50% 감소한 피해를 줍니다. 일정 확률로 대상을 점화 상태로 만들어 3라운드 동안 지속 화염 피해를 줍니다.",
        "areadata": [
          0,
          0,
          0,
          0.5,
          1,
          0,
          0,
          0,
          0
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "자폭 돌격",
        "img": "SuiceideBomb",
        "range": 6,
        "AP": 10,
        "description": "공격 대상에게 자폭해 $(5) 피해를 줍니다. 대상의 방어력을 무시합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "회피 기동",
        "img": "SelfSpdBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 사망한 경우, 2라운드 동안 회피가 증가하며 행동력과 적중이 감소합니다. 해당 효과는 최대 3번까지 중첩됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Frostbite_N",
    "name": "프로스트바이트",
    "img": "Frostbite",
    "type": "중장 지원기",
    "info": "유기 생명체, 기온 하락 시 작전 능력 저하. 특수재질 장갑, 열 병기 지원 필요.<br><br><br>- 기간테스 보고함",
    "HPbase": 2500,
    "HPlvl": 135,
    "ATKbase": 60,
    "ATKlvl": 6,
    "DEFbase": 250,
    "DEFlvl": 15,
    "AGI": 3.7,
    "CRT": 5,
    "HIT": 150,
    "DOD": 0,
    "resist": [
      -50,
      95,
      75
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "파쇄탄 발사",
        "img": "ShotGun",
        "range": 4,
        "AP": 5,
        "description": "지정 대상에게 $(1.2) 피해를 줍니다. 대상의 방어막 / 피해 감소 효과를 무시합니다. 대상이 빙결 상태일 경우, 피해량이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "냉각제 분사",
        "img": "WideIceShot",
        "range": 4,
        "AP": 7,
        "attr": "ice",
        "description": "지정 범위에 $(0.5) 보호 무시 냉기 피해를 줍니다. 3라운드 동안 대상들은 지속 냉기 피해를 입으며, 50% 확률로 회피 / 행동력이 감소합니다. 125%의 적중 보정이 적용됩니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "기온 저하",
        "img": "TeamSpdDeBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, <침수> 상태인 바이오로이드들에게 50% 확률로 받는 피해 증가 / 효과 저항 / AP / 회피 감소 상태가 적용됩니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "혹한",
        "img": "WideIceShot",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 범위 내 아군에게 <한랭지 적응> 효과가 있으면 대상의 공격력 / 적중 / 회피 / 행동력이 증가합니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "강화 빙결 코팅",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시, 방어력이 대폭 증가합니다. 해당 효과는 강화 효과 해제로 해제할 수 없으며, 화염 속성 공격 피격 시 해제됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Gigantes_TU2",
    "name": "양산형 기간테스",
    "img": "Gigantes",
    "type": "중장 보호기",
    "info": "기간테스의 양산형 기종이다.",
    "HPbase": 1000,
    "HPlvl": 75,
    "ATKbase": 70,
    "ATKlvl": 7,
    "DEFbase": 100,
    "DEFlvl": 5,
    "AGI": 3.1,
    "CRT": 5,
    "HIT": 80,
    "DOD": 0,
    "resist": [
      0,
      0,
      -25
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "로켓 배쉬",
        "img": "MeleeAttack",
        "range": 1,
        "AP": 9,
        "description": "대상을 강타해 $(1.8) 피해를 주고, 일정 확률로 해당 라운드 동안 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "실드 차지",
        "img": "AssaultAttack",
        "range": 2,
        "AP": 7,
        "description": "대상에게 돌진해 $(1.3) 피해를 주고, 뒤로 1칸 밀며 대상에게 걸린 행 보호 또는 열 보호 효과를 해제합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "거점 방어 모드",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시, 3라운드 동안 행 보호 효과를 활성화하며 방어력이 증가합니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChick_C",
    "name": "나이트 칙?",
    "img": "NightChick",
    "type": "경장 지원기",
    "info": "기동형을 상대하기 위해 반만년 동안 패스트 드로우를 수련한 나이트 칙이라는 것 같다. 이 녀석들도 영화를 보는 건가…?",
    "HPbase": 120000,
    "HPlvl": 0,
    "ATKbase": 1000,
    "ATKlvl": 0,
    "DEFbase": 2000,
    "DEFlvl": 0,
    "AGI": 4.25,
    "CRT": 10,
    "HIT": 480,
    "DOD": 60,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "칙 머신건",
        "img": "Shot",
        "range": 5,
        "AP": 4,
        "description": "대상에게 $(1.1000000000000001) 피해를 줍니다. 치명타 시, 75% 확률로 대상의 강화 효과를 해제하며 5라운드 동안 회피를 감소시키고 받는 피해를 증가시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칙 머신건 속사",
        "img": "Snipe",
        "range": 6,
        "AP": 3,
        "description": "대상에게 $(0.75) 보호 무시 피해를 줍니다. 대상이 기동형인 경우 강화 효과를 해제하며 피해량이 증가하고, 2라운드 동안 행동 불가 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 포메이션",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "자신과 같은 열에 인접한 아군의 대 기동형 피해량 / 적중 / 회피 / 행동력을 증가시킵니다.",
        "areadata": [
          8,
          2
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "칙 복원 시스템",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 나이트 칙 실더???의 <복원 시스템 제어> 효과를 받는 상태면 효과 저항이 증가하며, 전투 속행 효과가 적용됩니다. <복원 시스템 제어> 상태에서 전투 속행 시, 영구 적용되는 전투 속행인  <칙 영구 복원> 상태가 됩니다. <칙 영구 복원> 상태로 라운드 개시 시, 공격력 / 적중 / 치명타 / 회피 / 행동력이 증가합니다. 해당 효과들은 강화 해제로 효과로는 해제되지 않습니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "칙 복원 시스템 오류",
        "img": "SelfDefDeBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, <복원 시스템 오류> 상태면 받는 피해가 증가하며 전투 속행 효과가 제거됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickM_C",
    "name": "나이트 칙 런처??",
    "img": "NightChickM",
    "type": "기동 공격기",
    "info": "중장형을 상대하기 위해 반만년 동안 수련해 기동 공격기가 된 나이트 칙 런처라는 것 같다. 어떤 바이오로이드가 부러워 할 것 같다…",
    "HPbase": 100000,
    "HPlvl": 0,
    "ATKbase": 1250,
    "ATKlvl": 0,
    "DEFbase": 1200,
    "DEFlvl": 0,
    "AGI": 4.5,
    "CRT": 15,
    "HIT": 160,
    "DOD": 120,
    "resist": [
      0,
      0,
      0
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "칙 미사일",
        "img": "Missile",
        "range": 4,
        "AP": 5,
        "description": "대상에게 $(1.2) 피해를 줍니다. 치명타 시, 75% 확률로 대상의 강화 효과를 해제하며 5라운드 동안 방어력을 감소시키고 받는 피해를 증가시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "풀 오픈 칙 미사일",
        "img": "MultiMissile",
        "range": 5,
        "AP": 8,
        "description": "대상에게 $(1.2) 보호 무시 피해를 줍니다. 대상이 중장형일 경우 강화 효과를 해제하며 피해량이 증가하고, 2라운드 동안 방어력 감소 / 행동 불가 상태로 만듭니다.",
        "areadata": [
          8,
          4,
          5,
          6,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 포메이션 (런쳐)",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "자신 앞 / 뒤에 인접한 아군의 공격력 / 치명타 / 행동력을 증가시킵니다.",
        "areadata": [
          4,
          6
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "칙 복원 시스템",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 나이트 칙 실더???의 <복원 시스템 제어> 효과를 받는 상태면 효과 저항이 증가하며, 전투 속행 효과가 적용됩니다. <복원 시스템 제어> 상태에서 전투 속행 시, 영구 적용되는 전투 속행인  <칙 영구 복원> 상태가 됩니다. <칙 영구 복원> 상태로 라운드 개시 시, 공격력 / 적중 / 치명타 / 회피 / 행동력이 증가합니다. 해당 효과들은 강화 해제로 효과로는 해제되지 않습니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "칙 복원 시스템 오류",
        "img": "SelfDefDeBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, <복원 시스템 오류> 상태면 받는 피해가 증가하며 전투 속행 효과가 제거됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickS_C",
    "name": "나이트 칙 실더???",
    "img": "NightChickS",
    "type": "중장 보호기",
    "info": "진정한 보호기가 되기 위해 반만년 동안 수련하여 중장형으로 체급을 올린 나이트 칙 실더라는 것 같다. 누구의 장난인지는 몰라도 찾으면 혼내줘야겠다…",
    "HPbase": 240000,
    "HPlvl": 0,
    "ATKbase": 750,
    "ATKlvl": 0,
    "DEFbase": 3000,
    "DEFlvl": 0,
    "AGI": 4,
    "CRT": 10,
    "HIT": 960,
    "DOD": 40,
    "resist": [
      75,
      75,
      75
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "칙 마무리 강타",
        "img": "MeleeAttack",
        "range": 5,
        "AP": 4,
        "description": "대상에게 $(1.5) 보호 무시 피해를 줍니다. 대상이 <나이트 칙?> 또는 <나이트 칙 런쳐??>의 해로운 효과가 적용된 상태면 강화 효과를 해제하며 피해량이 크게 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "칙 업그레이드 준비",
        "img": "ShieldWall",
        "range": 6,
        "AP": 8,
        "description": "5라운드 동안 대상을 지정 보호하며 <칙 업그레이드 준비> 효과가 적용됩니다. <칙 업그레이드 준비> 상태인 대상은 다음 라운드부터 <칙 업그레이드> 효과를 받아 공격력 / 적중 / 치명타 / 회피 / 행동력이 증가합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "칙 방패 방어술 (고급)",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, 모든 저항이 증가하며 해로운 효과를 해제합니다. 피격 시, <칙 방패 올리기> 효과가 발동해 2라운드 동안 방어력이 증가합니다. <칙 방패 올리기> 방어력 중첩이 7 이상인 상태에서 추가 피격 시, 해당 효과를 해제하고 해당 라운드 동안 해제 불가능한 피해 최소화 / 반격 효과가 적용됩니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "칙 복원 시스템 제어",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시, 주변 아군들에게 <칙 복원 시스템> 효과가 적용됩니다. 라운드 개시 시, <칙 방패 올리기>중첩이 7 이면 <복원 시스템 오류> 상태가 되어 주변 아군의 <칙 복원 시스템>을 해제합니다. <칙 복원 시스템>은 자신이 <복원 시스템 오류> 상태가 아니면 라운드 개시 시, 다시 활성화됩니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "칙 업그레이드",
        "img": "SelfDefDeBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시, <칙 업그레이드 준비> 상태인 공격기와 지원기의 공격력 / 적중 / 회피 / 치명타 / 행동력이 증가합니다. 공격력 업그레이드가 4단계 이상인 경우, 대상의 공격은 방어력 / 방어막 / 피해 감소 효과를 무시합니다. 대상이 보호기일 경우, 강화 효과가 적용되지 않고 받는 피해가 크게 증가하며 강화 효과가 해제됩니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_EmperorChickSpCH_N",
    "name": "칙 커맨더",
    "img": "EmperorChickSpCH",
    "type": "중장 공격기",
    "info": "주위 철충들에게 명령을 내리는 칙 커맨더는 마치 훈련 교관처럼 느껴집니다. 철충들이 쓰러질 때마다 분노가 끓어올라 강해지고 쓰러진 철충들을 다시 일으켜 세울 수 있는 막강한 능력이 있습니다. 하지만 적군이 쓰러졌을 시 분노는 가라 않고 약해지는 것으로 보아 어쩌면... 아군의 희생이 필요할지도 모릅니다.<br><br><br>보고자 ???",
    "HPbase": 250000,
    "HPlvl": 0,
    "ATKbase": 1800,
    "ATKlvl": 0,
    "DEFbase": 1800,
    "DEFlvl": 0,
    "AGI": 3.75,
    "CRT": 15,
    "HIT": 250,
    "DOD": 25,
    "resist": [
      70,
      70,
      70
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "칙 머신캐논",
        "img": "MGShot",
        "range": 5,
        "AP": 5,
        "description": "대구경 기관포로 $(1) 피해를 주고, 대상에게 무작위 방해 효과를 부여합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "분노의 칙 파이널 어택",
        "img": "WideBeamShot",
        "range": 6,
        "AP": 10,
        "description": "끓어오르는 분노를 소모하여 중장형을 선 타겟으로 전 무장을 발사해 목표 범위에 $(1.5) 피해를 줍니다. 목표 중심점 밖일수록 피해가 감소합니다.",
        "areadata": [
          0.5,
          0.75,
          0.5,
          0.75,
          1,
          0.75,
          0.5,
          0.75,
          0.5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "낙오자",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "철충들이 낙오(파괴)될 때마다 <복수심>이 적용 되고 낙오한 철충이 10마리가 될 시 <끓어오르는 분노> 상태로 <분노의 칙 파이널 어택> 스킬을 사용합니다. 적 군이 사망 시 <사라진 분노>가 적용 되고 3라운드 동안 철충들이 낙오(파괴)되더라도 <복수심>이 발동되지 않습니다.<br><br>복수심 : 공격력 / 방어력 / 적중률 증가<br>끓어오르는 분노 : 해당 상태가 적용 되있을 시 <분노의 칙 파이널 어택> 스킬 사용<br>사라진 분노 : 공격력 / 방어력 감소       낙오자 발생 : 철충들이 낙오(파괴) 된 상태",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "지휘 집중",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시 철충들을 일사불란하게 지휘하기 위해<br><지휘 집중>이 적용 됩니다.<br><br>지휘 집중 : 해제 불가의 해로운 효과 저항 적용",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "명령",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시 주위의 모든 철충들에게 쓰러져도 다시 일어날 수 있도록 <근성>을 부여하고 일정 확률로 <공격 명령>을 내립니다.<br><br>근성 : 해제 불가의 전투 속행 효과<br>공격 명령 : 높은 확률로 방어 관통 / 보호막 무시 / 피해 감소 무시 효과 적용",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_Testudo_TU4",
    "name": "테스투도",
    "img": "Testudo",
    "type": "경장 보호기",
    "info": "트레비앙~한 방어 능력을 가진 적이에요. 보통은 중화기로 제압해야 하지만 제 정교한 검술로도 해결할 수 있으니 맡겨주세요!<br><br><br>- 샬럿 보고함",
    "HPbase": 15000,
    "HPlvl": 300,
    "ATKbase": 45,
    "ATKlvl": 6.5,
    "DEFbase": 1000,
    "DEFlvl": 15,
    "AGI": 4.15,
    "CRT": 2,
    "HIT": 409,
    "DOD": 50,
    "resist": [
      70,
      70,
      70
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "무장 파괴",
        "img": "ARShot",
        "range": 4,
        "AP": 3,
        "description": "대상에게 $(1) 피해를 주고, 일정 확률로 3라운드 동안 공격력 / 치명타 / 적중을 낮춥니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "진형 사수",
        "img": "DefCounter",
        "range": 6,
        "AP": 7,
        "description": "3라운드 동안 방어막 / 행 보호가 적용되며 받는 피해가 감소합니다. 해당 상태에서 공격받으면 반격합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "방진 전개",
        "img": "TeamDefBuff",
        "range": 0,
        "AP": 0,
        "description": "전투 개시 시 열 보호 효과가 적용되며, 3라운드 동안 범위 내 아군이 받는 피해가 크게 감소합니다.",
        "areadata": [
          8,
          9,
          5,
          6,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "출력 오버로드",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "아군이 처치될 때마다 방어력이 증가합니다. 아군이 5기 이상 처치되면 공격 능력이 대폭 증가하며, 방어막과 피해 감소 효과를 무시하지만 지속 고정 피해를 입습니다. 해당 상태에서 처치될 경우, <방진 전개> 범위 안에 있는 아군에게 괴멸적인 고정 피해를 줍니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickCMP_N",
    "name": "케미컬 칙 Type-X",
    "img": "NightChickCMP",
    "type": "경장 공격기",
    "info": "히익… 다신 보기 싫을 정도로 징그러웠어요…... 불에는 약한지 불을 붙이니 폭발해서 깜짝 놀랐네요.<br><br><br> - 뽀끄루 보고함",
    "HPbase": 1,
    "HPlvl": 1,
    "ATKbase": 20,
    "ATKlvl": 20,
    "DEFbase": 52,
    "DEFlvl": 2,
    "AGI": 4.5,
    "CRT": 5,
    "HIT": 350,
    "DOD": 100,
    "resist": [
      0,
      99,
      99
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "급속 부식탄",
        "img": "Missile",
        "range": 5,
        "AP": 4,
        "description": "급속 부식탄을 발사해 $(0.33) 피해를 줍니다. 2라운드 동안 대상을 급속 부식 상태로 만들어 효과 저항 / 방어력 / 행동력을 감소시키고 매 라운드 지속 피해를 입힙니다. 대상이 이미 부식 상태면 일정 확률로 강화 효과를 해제합니다. ",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "급속 부식탄 난사",
        "img": "MultiMissile",
        "range": 4,
        "AP": 7,
        "description": "급속 부식탄을 발사해 지정 범위에 $(0.33) 피해를 줍니다. 2라운드 동안 대상을 급속 부식 상태로 만들어 효과 저항 / 방어력 / 행동력을 감소시키고 매 라운드 지속 피해를 입힙니다. 대상이 이미 부식 상태면 일정 확률로 강화 효과를 해제합니다.",
        "areadata": [
          8,
          5,
          2
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "부식액 누출",
        "img": "TeamDefDeBuff",
        "range": 0,
        "AP": 0,
        "description": "적 공격 시, 주변에 부식액이 누출되어 지속 고정 피해를 주며 방어력을 감소시킵니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "내성 장갑",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "공격 당할 경우, 상대의 스킬이 최소 피해로 적용됩니다. 라운드 개시 시, 자신과 인접한 아군에게 걸린 방해 효과를 해제합니다.",
        "areadata": [
          7,
          9,
          5,
          1,
          3
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "부식액 폭발",
        "img": "SuiceideBomb",
        "range": 0,
        "AP": 0,
        "description": "화염 속성 액티브 스킬 공격 피격 시, 부식액에 불이 붙어 점화 상태가 됩니다. 점화 상태로 처치되면 부식액 폭발로 범위 내 아군에게 괴멸적인 고정 피해를 입힙니다.",
        "areadata": [
          7,
          8,
          9,
          4,
          5,
          6,
          1,
          2,
          3
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_NightChickSpCH_N",
    "name": "솔져 칙",
    "img": "NightChickSpCH",
    "type": "경장 공격기",
    "info": "솔져 칙은 칙 커맨더의 명령에 따라 움직이며 자신의 몸체를 던져 칙 커맨더를 보호하기도 합니다. 그리고 칙 커맨더가 있는 한 쓰러지지 않고 근성으로 일어나 다시 싸웁니다.<br><br><br>보고자 ???",
    "HPbase": 100,
    "HPlvl": 0,
    "ATKbase": 100,
    "ATKlvl": 9,
    "DEFbase": 0,
    "DEFlvl": 0,
    "AGI": 5,
    "CRT": 2.5,
    "HIT": 250,
    "DOD": 0,
    "resist": [
      -50,
      75,
      50
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "머신건 견제 사격",
        "img": "ARShot",
        "range": 6,
        "AP": 4,
        "description": "머신건 견제 사격으로 $(1) 피해를 주며 방어력을 3라운드 동안 감소 시킵니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "머신건 연사",
        "img": "ARShot",
        "range": 1,
        "AP": 6,
        "description": "머신건을 조준 사격해 $(1.2) 피해를 줍니다. 3라운드 동안 받는 피해가 증가하는 상태로 만듭니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "근성",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "솔져 칙들은 낙오(파괴) 되더라도 칙 커맨더가 존재한다면 <근성>으로 다시 일어나 싸웁니다.<br><br>근성 : 해제 불가의 전투 속행 효과",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "호위",
        "img": "Move",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시 칙 커맨더의 명령을 따르기 위해 <명령 집중>이 적용 되고 <공격 명령>을 받기 전까지 칙 커맨더를 호위하기 위해 주위를 돌아다니다가 간혹 <과부하>에 걸립니다.<br><br>명령 집중 : 해제 불가의 해로운 효과 저항 적용<br>과부하 : 스스로에게 일정량 피해",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "희생",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "전열에 있는 경우 자신의 몸을 바쳐 칙 커맨더를 보호할 수 있도록 행 보호가 적용 됩니다.",
        "areadata": [
          5
        ]
      }
    ]
  },
  {
    "index": "MOB_MP_EmperorChickSpCH_C",
    "name": "칙 커맨더",
    "img": "EmperorChickSpCH",
    "type": "중장 공격기",
    "info": "주위 철충들에게 명령을 내리는 칙 커맨더는 마치 훈련 교관처럼 느껴집니다. 철충들이 쓰러질 때마다 분노가 끓어올라 강해지고 쓰러진 철충들을 다시 일으켜 세울 수 있는 막강한 능력이 있습니다. 하지만 적군이 쓰러졌을 시 분노는 가라 않고 약해지는 것으로 보아 어쩌면... 아군의 희생이 필요할지도 모릅니다.<br><br><br>보고자 ???",
    "HPbase": 400000,
    "HPlvl": 0,
    "ATKbase": 2000,
    "ATKlvl": 0,
    "DEFbase": 2000,
    "DEFlvl": 0,
    "AGI": 3.75,
    "CRT": 15,
    "HIT": 250,
    "DOD": 25,
    "resist": [
      70,
      70,
      70
    ],
    "skills": [
      {
        "title": "askill1",
        "type": "active",
        "name": "칙 머신캐논",
        "img": "MGShot",
        "range": 5,
        "AP": 5,
        "description": "대구경 기관포로 $(1) 피해를 주고, 대상에게 무작위 방해 효과를 부여합니다.",
        "areadata": [
          5
        ]
      },
      {
        "title": "askill2",
        "type": "active",
        "name": "분노의 칙 파이널 어택",
        "img": "WideBeamShot",
        "range": 6,
        "AP": 10,
        "description": "끓어오르는 분노를 소모하여 중장형을 선 타겟으로 전 무장을 발사해 목표 범위에 $(1.5) 피해를 줍니다. 목표 중심점 밖일수록 피해가 감소합니다.",
        "areadata": [
          0.5,
          0.75,
          0.5,
          0.75,
          1,
          0.75,
          0.5,
          0.75,
          0.5
        ]
      },
      {
        "title": "pskill1",
        "type": "passive",
        "name": "낙오자",
        "img": "SelfAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "철충들이 낙오(파괴)될 때마다 <복수심>이 적용 되고 낙오한 철충이 10마리가 될 시 <끓어오르는 분노> 상태로 <분노의 칙 파이널 어택> 스킬을 사용합니다. 적 군이 사망 시 <사라진 분노>가 적용 되고 3라운드 동안 철충들이 낙오(파괴)되더라도 <복수심>이 발동되지 않습니다.<br><br>복수심 : 공격력 / 방어력 / 적중률 증가<br>끓어오르는 분노 : 해당 상태가 적용 되있을 시 <분노의 칙 파이널 어택> 스킬 사용<br>사라진 분노 : 공격력 / 방어력 감소       낙오자 발생 : 철충들이 낙오(파괴) 된 상태",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill2",
        "type": "passive",
        "name": "지휘 집중",
        "img": "SelfDefBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시 철충들을 일사불란하게 지휘하기 위해<br><지휘 집중>이 적용 됩니다.<br><br>지휘 집중 : 해제 불가의 해로운 효과 저항 적용",
        "areadata": [
          5
        ]
      },
      {
        "title": "pskill3",
        "type": "passive",
        "name": "명령",
        "img": "TeamAtkBuff",
        "range": 0,
        "AP": 0,
        "description": "라운드 개시 시 주위의 모든 철충들에게 쓰러져도 다시 일어날 수 있도록 <근성>을 부여하고 일정 확률로 <공격 명령>을 내립니다.<br><br>근성 : 해제 불가의 전투 속행 효과<br>공격 명령 : 높은 확률로 방어 관통 / 보호막 무시 / 피해 감소 무시 효과 적용",
        "areadata": [
          7,
          8,
          9,
          4,
          6,
          1,
          2,
          3
        ]
      }
    ]
  }
];
