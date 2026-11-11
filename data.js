var DB = [
// ── доступ ──
{m:"IDS3530-24T-6X", cls:"sw", ge:24, sfp:0, up:10, poeW:0, lvl:2, tmin:0, res:0, sw:168,
 why:"база: 24 меди, 6×10G, стек 8 юнитов"},
{m:"IDS3530-48T-6X", cls:"sw", ge:48, sfp:0, up:10, poeW:0, lvl:2, tmin:0, res:0, sw:216,
 why:"48 меди, 6×10G"},
{m:"IDS3530-24P-6X", cls:"sw", ge:24, sfp:0, up:10, poeW:380, lvl:2, tmin:0, res:0, sw:168,
 why:"24 меди + PoE+ 380W"},
{m:"IDS3530-48P-6X", cls:"sw", ge:48, sfp:0, up:10, poeW:760, lvl:2, tmin:0, res:0, sw:216,
 why:"48 меди + PoE+ 760Вт (даташет 11.2026), OOB-порт GE"},
{m:"IDS3530-24S-8T-6X", cls:"sw", ge:8, sfp:24, up:10, poeW:0, lvl:2, tmin:0, res:0, sw:184,
 why:"24 оптики + 8 меди"},
{m:"IDS3730-24T-6X", cls:"sw", ge:24, sfp:0, up:10, poeW:0, lvl:2, tmin:0, res:1, sw:168,
 why:"24 меди, 6×10G, активное охлаждение (3530-24T — пассив!)"},
{m:"IDS3730-48T-6X", cls:"sw", ge:48, sfp:0, up:10, poeW:0, lvl:2, tmin:0, res:1, sw:216,
 why:"48 меди, 6×10G"},
{m:"IDS3730-24P-6X", cls:"sw", ge:24, sfp:0, up:10, poeW:380, lvl:2, tmin:0, res:1, sw:168,
 why:"24 меди + PoE+ 380W, hot-swap PSU"},
{m:"IDS3730-48P-6X", cls:"sw", ge:48, sfp:0, up:10, poeW:1440, lvl:2, tmin:0, res:1, sw:216,
 why:"48 меди + PoE до 720W (IDP880) / 1440W заявлено, hot-swap PSU"},
{m:"IDS3730-24S-8T-6X", cls:"sw", ge:8, sfp:24, up:10, poeW:0, lvl:2, tmin:0, res:1, sw:184,
 why:"24 оптики + 8 меди"},
{m:"IDS3730-48S-6X", cls:"sw", ge:0, sfp:48, up:10, poeW:0, lvl:2, tmin:0, res:1, sw:216,
 why:"вся оптика: 48×SFP"},
{m:"IDS4530-24T-6X", cls:"sw", ge:24, sfp:0, up:10, poeW:0, lvl:2, tmin:0, res:0, sw:328,
 why:"24 меди, 328G; слот расширения M-1Q (1×40G+1×100G!) / M-2Q (2×40G)"},
{m:"IDS4530-48T-6X", cls:"sw", ge:48, sfp:0, up:10, poeW:0, lvl:2, tmin:0, res:0, sw:376,
 why:"48 меди, 376G; слот расширения M-1Q (40G/100G) / M-2Q"},
{m:"IDS4530-24P-6X", cls:"sw", ge:24, sfp:0, up:10, poeW:760, lvl:2, tmin:0, res:0, sw:328,
 why:"24 меди + PoE+ до 760Вт (2×IDP500), 328G"},
{m:"IDS4530-48P-6X", cls:"sw", ge:48, sfp:0, up:10, poeW:1440, lvl:2, tmin:0, res:0, sw:376,
 why:"48 меди + PoE+ до 1440Вт (IDP880-AC), OOB GE"},
{m:"IDS4530-24S-4X", cls:"sw", ge:8, sfp:24, up:10, poeW:0, lvl:2, tmin:0, res:0, sw:448,
 why:"24×SFP + 8 меди + 4×SFP+, два слота расширения; новый SKU из даташета (11.11.2026)"},
{m:"IDS4530-48S-4X", cls:"sw", ge:0, sfp:48, up:10, poeW:0, lvl:2, tmin:0, res:0, sw:496,
 why:"48 оптики, 4×SFP+, 496G; два слота расширения"},
// ── агрегация / ЦОД ──
{m:"IDS6010-24T-18X-8Y", cls:"sw", ge:24, sfp:18, up:25, poeW:0, lvl:3, tmin:0, res:0, sw:808,
 why:"24 меди + 18×10G + 8×25G, 808 Гбит/с, 160.7 Mpps, M-LAG, VxLAN/EVPN"},
{m:"IDS6010-24X-2Q", cls:"sw", ge:0, sfp:24, up:40, poeW:0, lvl:3, tmin:0, res:0, sw:640,
 why:"24×SFP+ + 2×40G QSFP+, 640 Гбит/с, 125 Mpps — 40G-агрегация"},
{m:"IDS6010-24X-2C", cls:"sw", ge:0, sfp:24, up:100, poeW:0, lvl:3, tmin:0, res:0, sw:880,
 why:"24×SFP+ + 2×100G, 880 Гбит/с, 160.7 Mpps, VxLAN/EVPN"},
{m:"IDS6010-48X", cls:"sw", ge:0, sfp:48, up:100, poeW:0, lvl:3, tmin:0, res:0, sw:960,
 why:"48×SFP/SFP+ агрегация, 960 Гбит/с, 136.8 Mpps"},
{m:"IDS6012-24M-4X", cls:"sw", ge:24, sfp:4, up:10, poeW:0, lvl:3, tmin:0, res:0, sw:560,
 why:"24 mGig (100M–10G) + 4×10G, 560 Гбит/с; БП встроенный — PoE нет (даташет)"},
{m:"IDS6012-24M", cls:"sw", ge:24, sfp:0, up:10, poeW:0, lvl:3, tmin:0, res:0, sw:640,
 why:"24 mGig + слот расширения (M-4X/6X/2Q), 640 Гбит/с, 2 слота БП"},
{m:"IDS6012-24MP", cls:"sw", ge:24, sfp:0, up:10, poeW:1440, upoe:1, lvl:3, tmin:0, res:0, sw:640,
 why:"24 mGig + PoE++ 1440Вт · 90Вт/порт — единственный UPoE у iDATA; 2 слота БП (IDP880)"},
{m:"IDS6030-48X-8C", cls:"sw", ge:0, sfp:48, up:100, poeW:0, lvl:3, tmin:0, res:0, sw:2560,
 why:"48×1/10G + 8×40/100G, 2.56 Тбит/с, 1904 Mpps, VxLAN/EVPN, RoCEv2"},
{m:"IDS6030-48T-8C", cls:"sw", ge:48, sfp:0, up:100, poeW:0, lvl:3, tmin:0, res:0, sw:2160,
 why:"48 меди 1/10G + 6×40/100G (в даташите — 48XT-8C), 2.16 Тбит/с, 1607 Mpps"},
{m:"IDS6032-48X-8C", cls:"sw", ge:0, sfp:48, up:100, poeW:0, lvl:3, tmin:0, res:0, sw:2560,
 why:"новое поколение: 2.56 Тбит/с, 1904 Mpps, полный стек ЦОД, ESI Multi-Homing"},
{m:"IDS6132-48Y-8C", cls:"sw", ge:0, sfp:48, up:100, poeW:0, lvl:3, tmin:0, res:0, sw:4000,
 why:"25G-брат 6032: 4 Тбит/с, 2976 Mpps, MTBF ≥200 000 ч"},
{m:"IDS6130-48Y-8C", cls:"sw", ge:0, sfp:48, up:100, poeW:0, lvl:3, tmin:0, res:1, sw:4000,
 why:"leaf 25G; PPS не публикуется — в ТЗ только письменно через iDATA"},
{m:"IDS6150-32C", cls:"sw", ge:0, sfp:32, up:100, poeW:0, lvl:3, tmin:0, res:0, sw:4000,
 why:"32×40/100G, 4 Тбит/с, 4761 Mpps, 6 вентиляторных модулей"},
// ── ядро ──
{m:"IDS8010-32C-8E-R", cls:"sw", ge:0, sfp:32, up:400, poeW:0, lvl:3, tmin:0, res:1, sw:0,
 why:"spine: 32×100G + 8×400G; -R = реестровая модель МП РФ + MLAG/VRRP"},
{m:"IDS8030-2-8", cls:"sw", ge:0, sfp:0, up:400, poeW:0, lvl:3, tmin:0, res:0, sw:25600,
 why:"шасси: 2× MGMT (M-CC) + 8× линеек (M-4E: 4×400G/8×200G/16×100G; M-16Y: 16×10/25G), 25,6 Тбит/с"},
// ── промышленные (спеки: dynaswitch.ru, нояб 2026) ──
{m:"IDSI2500-8T-2S", cls:"sw", ge:8, sfp:2, up:1, poeW:0, lvl:1, tmin:-40, res:0, sw:0,
 why:"промышленный: 8 GE + 2×1G SFP, IP40, DIN-рейка, -40…+75°C, два резервируемых входа DC 12–55В, ERPS. L2 — маршрутизации нет"},
{m:"IDSI2500-8P-2S", cls:"sw", ge:8, sfp:2, up:1, poeW:120, lvl:1, tmin:-40, res:0, sw:0,
 why:"как 8T-2S + PoE/PoE+ (802.3af/at) на 8 портов, бюджет 120Вт, DC 48–57В, защита от перенапряжений ±6КВ"},
// ── маршрутизаторы ──
{m:"IDR2000-4G2-5T", cls:"rt", ge:5, up:1, g4:1, e1:0, tmin:-20, res:0,
 why:"мелкий филиал: 5 GE, 4G-модем 2 SIM, -20…+60°C, десктоп"},
{m:"IDR2000E-4G2-5T", cls:"rt", ge:5, up:1, g4:2, e1:0, tmin:-20, res:0,
 why:"два 4G-модема — резервирование операторов"},
{m:"IDR2100-8T-4T4S2X", cls:"rt", ge:8, up:10, g4:0, e1:1, tmin:0, res:0,
 why:"8 GE + 4GE+4SFP+2×10G, 2 слота модулей (E1/CE1/4S/4T), 1U"},
{m:"IDR3100-24T-4T2S2X", cls:"rt", ge:24, up:10, g4:0, e1:1, tmin:0, res:0,
 why:"24 GE + 4 слота расширения, dual AC"},
{m:"IDR4100-24T-8X8Y", cls:"rt", ge:24, up:25, g4:0, e1:0, tmin:0, res:0,
 why:"PE-класс: 8×10G + 8×25G, 8 ядер, 16 ГБ, SR-MPLS/SRv6"},
// ── Wi-Fi ──
{m:"iDAPI-1130i", cls:"wf", wf:"ap", ap:0,
 why:"Wi-Fi 7 2×2:2, три радио (2,4/5/6 ГГц: 688М / 2,88Г / 5,77Г), 2.5G + GE + слот 10G SFP+, PoE+ ≤25Вт, потолок"},
{m:"iDAC6800-448-12T-8Y", cls:"wf", wf:"ac", ap:448,
 why:"контроллер до 448 AP (база 64), 12 GE + 8 SFP28"},
{m:"iDAC6800-1664-12T-8Y", cls:"wf", wf:"ac", ap:1664,
 why:"до 1664 AP, лицензии шагами +32/+64/+128"},
{m:"iDAC6800-6656-24T-8X-8Y", cls:"wf", wf:"ac", ap:6656,
 why:"кампус/оператор: до 6656 AP, 40 Гбит/с"}
];

// ── PSU: 1 = один встроенный, 2 = два встроенных (резерв; IDSI2500 — два DC-входа),
// 4 = модульные (hot-swap слоты), 0 = не применим (Wi-Fi AP питается по PoE) ──
// даташеты серий 11.11.2026 + dynaswitch.ru; IDR — OCR даташетов 09.2025
(function(){
  for(var i=0;i<DB.length;i++){ var m=DB[i].m;
    if(/IDS3730|IDS6130|IDS6010|IDS6030|IDS6032|IDS6132|IDS8010|IDS4530|IDS6150|IDS8030/.test(m)) DB[i].psu=4;
    else if(m==='IDS6012-24M'||m==='IDS6012-24MP') DB[i].psu=4;
    else if(/iDAC6800|IDR4100/.test(m)) DB[i].psu=4;
    else if(/IDS3530-24T|IDS3530-48T|IDS3530-24S/.test(m)) DB[i].psu=2;
    else if(m==='IDR3100-24T-4T2S2X') DB[i].psu=2;
    else if(/IDSI2500/.test(m)) DB[i].psu=2;
    else if(/IDS3530/.test(m)) DB[i].psu=1;   // 24P/48P — одинарный встроенный
    else if(m==='IDS6012-24M-4X') DB[i].psu=1;
    else if(/IDR2000|IDR2100/.test(m)) DB[i].psu=1;
    else DB[i].psu=0;   // Wi-Fi AP — питается по PoE, БП не применим
  }
})();

// ═══════════════ РЕЕСТРОВЫЕ МОДЕЛИ (-R, реестр МП РФ) ═══════════════
// источник: даташеты IDS3730-R / IDS6130-R / IDS8010-R (выгрузка 11.11.2026)
var RRD = [
{fam:"IDS3730-R", role:"доступ · L2/L3 · PoE до 1440Вт",
 specs:["<b>24/48×</b> 10/100/1000Base-T (24 — лицензией) + <b>6× SFP/SFP+</b>",
  "PoE/PoE+ 802.3af/at: <b>380 / 760 / 1440Вт</b> — по лицензии и PSU",
  "коммутация <b>216 Гбит/с</b> · MAC 32K · ARP 8K · VLAN 4094",
  "IPv4 12K · IPv6 6K · VRRP <b>100</b> · jumbo <b>9216</b> · L3-интерфейсы 1024",
  "RAM 8 ГБ / Flash 16 ГБ · 54Вт без PoE · 7,6 кг",
  "<b>-5…+45°C</b> · 2× PSU 1+1 hot-swap · 2× вентилятора 1+1",
  "G.8032 ERPS v1&v2 · 802.1X/MAB + динамический VLAN · OSPF v2/v3 · PBR · DHCPv4 Server/Relay · QoS"],
 skus:[
  ["IDS3730-48T-6X-R/24T-1B","24 GE, 1× PSU 75Вт"],
  ["IDS3730-48T-6X-R/24T-2B","24 GE, 2× PSU 75Вт"],
  ["IDS3730-48T-6X-R/48T-1B","48 GE, 1× PSU 75Вт"],
  ["IDS3730-48T-6X-R/48T-2B","48 GE, 2× PSU 75Вт"],
  ["IDS3730-48T-6X-R/24P-1S","24 GE PoE 380Вт, 1× PSU 500Вт"],
  ["IDS3730-48T-6X-R/24P-2S","24 GE PoE 760Вт, 2× PSU 500Вт"],
  ["IDS3730-48T-6X-R/48P-1S","48 GE PoE 380Вт, 1× PSU 500Вт"],
  ["IDS3730-48T-6X-R/48P-2S","48 GE PoE 760Вт, 2× PSU 500Вт"],
  ["IDS3730-48T-6X-R/24P-1E","24 GE PoE 760Вт, 1× PSU 800Вт"],
  ["IDS3730-48T-6X-R/24P-2E","24 GE PoE 760Вт, 2× PSU 800Вт"],
  ["IDS3730-48T-6X-R/48P-1E","48 GE PoE 760Вт, 1× PSU 800Вт"],
  ["IDS3730-48T-6X-R/48P-2E","48 GE PoE 1440Вт, 2× PSU 800Вт"]],
 lic:"<b>Лицензии:</b> IDS3730-L-24 (24 порта) · IDS3730-L-24PoE (PoE на 24 портах)<br><b>PSU:</b> IDP75-AC-R 75Вт · IDP500-AC-R 500Вт/PoE 370Вт · IDP880-AC-R 880Вт/PoE 720Вт",
 warn:"цифры -R ≠ обычный IDS3730: VRRP 100 (не 255), jumbo 9216 (не 12000), PoE до 1440Вт (не 720). OOB — 10/100, не GE. в ТЗ ставить цифры -R."},
{fam:"IDS6130-R", role:"распределение / leaf · 25G · MLAG · VxLAN/BGP-EVPN",
 specs:["<b>24/48×</b> SFP/SFP+/SFP28 (1/10/25G, 24 — лицензией) + <b>8× QSFP/QSFP28</b> (40/100G)",
  "коммутация <b>4 Тбит/с</b> · MAC 229 376 · ARP 32K · ND 16K",
  "IPv4 <b>288K</b> · IPv6 8K · VRF 1024 · VRRP 128 · ECMP 64 · jumbo 9216",
  "RAM 8 ГБ / Flash 128 ГБ · 294Вт · 10,4 кг · <b>0…+45°C</b>",
  "5× вентиляторов 4+1 · 2× PSU 1+1 hot-swap · AC 110–240В / DC -40…-57В",
  "MLAG · VxLAN + BGP-EVPN · Anycast Gateway · G.8032 · OSPF v2/v3 · BGP/BGP4+ · IP-VRF"],
 skus:[
  ["IDS6130-48Y-8C-R/24-FTB-AC","24×1/10/25G, 2× AC PSU, обдув к задней панели"],
  ["IDS6130-48Y-8C-R/48-FTB-AC","48×1/10/25G, 2× AC PSU, обдув к задней панели"],
  ["IDS6130-48Y-8C-R/24-BTF-AC","24×1/10/25G, 2× AC PSU, обдув к передней"],
  ["IDS6130-48Y-8C-R/48-BTF-AC","48×1/10/25G, 2× AC PSU, обдув к передней"],
  ["IDS6130-48Y-8C-R/24-FTB-DC","24×1/10/25G, 2× DC PSU, обдув к задней панели"],
  ["IDS6130-48Y-8C-R/48-FTB-DC","48×1/10/25G, 2× DC PSU, обдув к задней панели"]],
 lic:"<b>Лицензия:</b> IDS6130-L-24 (24 слота SFP/SFP+/SFP28)",
 warn:"PPS не публикуется даже в -R даташете — в ТЗ цифру не ставить без письма iDATA. 6130 в заказе существует ТОЛЬКО как -R SKU."},
{fam:"IDS8010-R", role:"ядро / spine · 100G/400G · MLAG · VxLAN/BGP-EVPN",
 specs:["<b>32× QSFP28</b> (100G) + <b>8× QSFP112</b> (400G)",
  "коммутация <b>12,8 Тбит/с</b> · MAC 163 840 · ARP 32K · ND 16K",
  "IPv4 288K · VRF 1024 · VRRP 128 · jumbo 9216",
  "RAM 8 ГБ / Flash 128 ГБ · 784Вт · 12,3 кг · габариты 442×560×44,2",
  "<b>-5…+40°C</b> · 6× вентиляторов hot-swap · 2× PSU 1+1 · AC / DC",
  "MLAG · VxLAN + BGP-EVPN · 802.1X · OSPF v2/v3 · BGP/BGP4+ · IP-VRF"],
 skus:[
  ["IDS8010-32C-8E-R/FTB-AC","32×100G + 8×400G, 2× AC PSU, обдув к задней панели"],
  ["IDS8010-32C-8E-R/BTF-AC","32×100G + 8×400G, 2× AC PSU, обдув к передней"],
  ["IDS8010-32C-8E-R/FTB-DC","32×100G + 8×400G, 2× DC PSU, обдув к задней панели"]],
 lic:"",
 warn:"12,8 Тбит/с опубликовано только в -R даташете — у обычного 8010 ёмкость нигде не указана. для нацрежима брать -R."}
];
// ── SKU реестровых серий: каждая конфигурация — отдельная модель ──
// fam 0=3730-R 1=6130-R 2=8010-R; p — активные порты; npsu — БП в конфигурации;
// pw — ватты PSU; acdc 0=AC 1=DC; air 0=FTB (к задней) 1=BTF (к передней) 2=не опционален
var RDB = [
{m:"IDS3730-48T-6X-R/24T-1B", fam:0, pt:"GE", p:24, up:10, poeW:0, npsu:1, pw:75, acdc:0, air:2, sw:216,
 why:"24 GE (лицензией IDS3730-L-24) + 6× SFP+; 1× PSU 75Вт"},
{m:"IDS3730-48T-6X-R/24T-2B", fam:0, pt:"GE", p:24, up:10, poeW:0, npsu:2, pw:75, acdc:0, air:2, sw:216,
 why:"24 GE + 6× SFP+; 2× PSU 75Вт — резерв"},
{m:"IDS3730-48T-6X-R/48T-1B", fam:0, pt:"GE", p:48, up:10, poeW:0, npsu:1, pw:75, acdc:0, air:2, sw:216,
 why:"48 GE + 6× SFP+; 1× PSU 75Вт"},
{m:"IDS3730-48T-6X-R/48T-2B", fam:0, pt:"GE", p:48, up:10, poeW:0, npsu:2, pw:75, acdc:0, air:2, sw:216,
 why:"48 GE + 6× SFP+; 2× PSU 75Вт — резерв"},
{m:"IDS3730-48T-6X-R/24P-1S", fam:0, pt:"GE", p:24, up:10, poeW:380, npsu:1, pw:500, acdc:0, air:2, sw:216,
 why:"24 GE PoE 380Вт (лицензия -24PoE); 1× PSU 500Вт"},
{m:"IDS3730-48T-6X-R/24P-2S", fam:0, pt:"GE", p:24, up:10, poeW:760, npsu:2, pw:500, acdc:0, air:2, sw:216,
 why:"24 GE PoE 760Вт; 2× PSU 500Вт — резерв"},
{m:"IDS3730-48T-6X-R/48P-1S", fam:0, pt:"GE", p:48, up:10, poeW:380, npsu:1, pw:500, acdc:0, air:2, sw:216,
 why:"48 GE PoE 380Вт; 1× PSU 500Вт"},
{m:"IDS3730-48T-6X-R/48P-2S", fam:0, pt:"GE", p:48, up:10, poeW:760, npsu:2, pw:500, acdc:0, air:2, sw:216,
 why:"48 GE PoE 760Вт; 2× PSU 500Вт — резерв"},
{m:"IDS3730-48T-6X-R/24P-1E", fam:0, pt:"GE", p:24, up:10, poeW:760, npsu:1, pw:800, acdc:0, air:2, sw:216,
 why:"24 GE PoE 760Вт; 1× PSU 800Вт"},
{m:"IDS3730-48T-6X-R/24P-2E", fam:0, pt:"GE", p:24, up:10, poeW:760, npsu:2, pw:800, acdc:0, air:2, sw:216,
 why:"24 GE PoE 760Вт; 2× PSU 800Вт — резерв"},
{m:"IDS3730-48T-6X-R/48P-1E", fam:0, pt:"GE", p:48, up:10, poeW:760, npsu:1, pw:800, acdc:0, air:2, sw:216,
 why:"48 GE PoE 760Вт; 1× PSU 800Вт"},
{m:"IDS3730-48T-6X-R/48P-2E", fam:0, pt:"GE", p:48, up:10, poeW:1440, npsu:2, pw:800, acdc:0, air:2, sw:216,
 why:"48 GE PoE 1440Вт — максимум -R; 2× PSU 800Вт — резерв"},
{m:"IDS6130-48Y-8C-R/24-FTB-AC", fam:1, pt:"SFP28", p:24, up:100, poeW:0, npsu:2, pw:0, acdc:0, air:0, sw:4000,
 why:"24×1/10/25G (лицензией IDS6130-L-24) + 8×40/100G; 2× AC PSU, обдув к задней"},
{m:"IDS6130-48Y-8C-R/48-FTB-AC", fam:1, pt:"SFP28", p:48, up:100, poeW:0, npsu:2, pw:0, acdc:0, air:0, sw:4000,
 why:"48×1/10/25G + 8×40/100G; 2× AC PSU, обдув к задней"},
{m:"IDS6130-48Y-8C-R/24-BTF-AC", fam:1, pt:"SFP28", p:24, up:100, poeW:0, npsu:2, pw:0, acdc:0, air:1, sw:4000,
 why:"24×1/10/25G + 8×40/100G; 2× AC PSU, обдув к передней"},
{m:"IDS6130-48Y-8C-R/48-BTF-AC", fam:1, pt:"SFP28", p:48, up:100, poeW:0, npsu:2, pw:0, acdc:0, air:1, sw:4000,
 why:"48×1/10/25G + 8×40/100G; 2× AC PSU, обдув к передней"},
{m:"IDS6130-48Y-8C-R/24-FTB-DC", fam:1, pt:"SFP28", p:24, up:100, poeW:0, npsu:2, pw:0, acdc:1, air:0, sw:4000,
 why:"24×1/10/25G + 8×40/100G; 2× DC PSU, обдув к задней"},
{m:"IDS6130-48Y-8C-R/48-FTB-DC", fam:1, pt:"SFP28", p:48, up:100, poeW:0, npsu:2, pw:0, acdc:1, air:0, sw:4000,
 why:"48×1/10/25G + 8×40/100G; 2× DC PSU, обдув к задней"},
{m:"IDS8010-32C-8E-R/FTB-AC", fam:2, pt:"QSFP28", p:32, up:400, poeW:0, npsu:2, pw:1300, acdc:0, air:0, sw:12800,
 why:"32×100G + 8×400G; 2× AC PSU 1300Вт, обдув к задней"},
{m:"IDS8010-32C-8E-R/BTF-AC", fam:2, pt:"QSFP28", p:32, up:400, poeW:0, npsu:2, pw:1300, acdc:0, air:1, sw:12800,
 why:"32×100G + 8×400G; 2× AC PSU 1300Вт, обдув к передней"},
{m:"IDS8010-32C-8E-R/FTB-DC", fam:2, pt:"QSFP28", p:32, up:400, poeW:0, npsu:2, pw:1300, acdc:1, air:0, sw:12800,
 why:"32×100G + 8×400G; 2× DC PSU 1300Вт, обдув к задней"}
];

var REF = {
sw: [
{fam:"IDS3530", role:"доступ · L3", specs:[
 "24/48 GE или 24×SFP + 8 GE (24S-8T); аплинк 6× SFP/SFP+ · <b>168/216/184 Гбит/с</b> · 125/160.7/136.8 Mpps (даташет 11.2026)",
 "PoE: 24P — <b>380Вт</b>, 48P — <b>760Вт</b> · OOB GE · 0…+45°C",
 "БП встроенный: двойной у 24T/48T/24S, одинарный у 24P/48P · вентиляторы: 24T — пассив, остальные — двойной встроенный",
 "для ТЗ с hot-swap БП на доступе — брать 3730"]},
{fam:"IDS3730", role:"доступ · L3+ · лицензируемые порты", specs:[
 "24/48 GE (24 — лицензией IDS3730-L-24) + 6× SFP/SFP+ · PoE до <b>720Вт</b> (IDP880-AC); PoE на 24 — лицензия -24PoE",
 "2× PSU hot-swap: IDP75/500/880-AC · jumbo 12000 · VRRP 255 · OOB <b>100 Мбит</b>",
 "⚠️ -R: PoE до 1440Вт, но VRRP 100, jumbo 9216, OOB 10/100 — в ТЗ цифры только одной версии",
 "для ТЗ с GE-менеджментом — 3530/4530"]},
{fam:"IDS4530", role:"доступ · L3 enhanced · VxLAN на доступе", specs:[
 "24T/48T/24P/48P: 24/48 GE + 6× SFP+; 24S-4X: 24×SFP + 8 GE + 4×SFP+; 48S-4X: 48×SFP + 4×SFP+",
 "PoE: 24P — 380/760Вт; 48P — 760/1440Вт (по PSU) · коммутация <b>328–496 Гбит/с</b> · 244–369 Mpps",
 "VxLAN/BGP-EVPN + MPLS (LDP, TE, Option-A/B) — подтверждено даташетом 11.2026",
 "слот расширения: M-1Q (1×40G + 1×100G!), M-2Q (2×40G); у S-моделей — два слота",
 "2 слота БП 1+1 (IDP120/120M/250/500/500M/880 AC/DC) · OOB GE"]},
{fam:"IDS6010", role:"агрегация", specs:[
 "24T-18X-8Y: 24 GE + 18×10G + 8×25G — <b>808 Гбит/с</b>/160.7 Mpps; 24X-2Q: + 2×40G — <b>640</b>/125",
 "24X-2C: 24×SFP+ + 2×100G — <b>880</b>/160.7; 48X: 48×SFP+ — <b>960 Гбит/с</b>/136.8 Mpps (даташет 11.2026)",
 "MAC 384K · jumbo 12K · RAM 2 ГБ · M-LAG · VxLAN/BGP-EVPN · RoCEv2",
 "2 слота БП hot-swap: IDP120-AC/DC (24T), IDP120M-AC/DC (2Q/2C), IDP250-AC/IDP500M-DC (48X)",
 "вентиляторы: 24T — встроенный; остальные — 2 слота модулей IDF-01C-FTB"]},
{fam:"IDS6012", role:"PoE-агрегация · единственный UPoE у iDATA", specs:[
 "24 mGig (100M–10G): 24M-4X + 4×SFP+ — <b>560 Гбит/с</b>/416.6 Mpps, БП встроенный, <b>без PoE</b>",
 "24M: слот расширения — <b>640</b>/595.2 Mpps, 2 слота БП · 24MP: PoE++ <b>1440Вт</b>, <b>90Вт/порт</b> (UPoE), 2 слота БП (IDP880)",
 "модули расширения (для слота 24M/24MP): IDS6012-M-4X (4×10G), M-6X (6×10G), M-2Q (2×40G) — <b>это карты, не коммутаторы</b>"]},
{fam:"IDS6030", role:"агрегация ЦОД", specs:[
 "48X-8C: 48×1/10G SFP+ + 8×40/100G · <b>2.56 Тбит/с</b> · 1904 Mpps",
 "48T-8C (в даташете — 48XT-8C): 48 меди 1/10G + <b>6×</b>40/100G · 2.16 Тбит/с · 1607 Mpps",
 "2 слота БП hot-swap: IDP550M-01-FTB-AC 550Вт / IDP800M-01-FTB-DC 800Вт / IDP550M-01-BTF-AC · 5 вентиляторных слотов"]},
{fam:"IDS6032", role:"агрегация · новое поколение", specs:[
 "48×1/10G + 8×40/100G · <b>2.56 Тбит/с</b> · 1904 Mpps · ESI Multi-Homing",
 "GVRP / sFlow / Private VLAN подтверждены (окт 2026) · полный стек ЦОД",
 "2× PSU hot-swap: IDP550M-01-FTB/BTF-AC / IDP1300M-01-FTB-DC · 5 вентиляторов"]},
{fam:"IDS6132", role:"leaf 25G", specs:[
 "48×1/10/25G SFP28 + 8×40/100G · <b>4 Тбит/с</b> · 2976 Mpps · MTBF ≥200 000 ч",
 "MLAG · VxLAN/BGP-EVPN · RoCEv2 · 2× PSU hot-swap"]},
{fam:"IDS6130", role:"leaf 25G · в заказе только как -R", specs:[
 "48×1/10/25G + 8×40/100G · <b>4 Тбит/с</b> · MLAG · VxLAN/BGP-EVPN",
 "PPS не публикуется — в ТЗ цифру не ставить без письма iDATA",
 "-R: 6 конфигураций (24/48 × FTB/BTF × AC/DC) · MLAG/VRRP · реестровая модель МП РФ"]},
{fam:"IDS6150", role:"агрегация / компактное ядро 100G", specs:[
 "32× QSFP/QSFP28 (40/100G) · <b>4 Тбит/с</b> · 4761 Mpps",
 "2 слота БП hot-swap: IDP550M-01-FTB-AC / IDP800M-01-FTB-DC · 6 вентиляторных слотов"]},
{fam:"IDS8010", role:"spine · 100G/400G", specs:[
 "32×100G QSFP28 + 8×400G QSFP112 · MLAG/VRRP · 2× PSU hot-swap · 6 вентиляторов",
 "⚠️ ёмкость публикуется только у -R: <b>12,8 Тбит/с</b>; у обычного 8010 — нигде",
 "-R = реестровая модель МП РФ · для нацрежима брать -R"]},
{fam:"IDS8030", role:"модульное шасси ядра", specs:[
 "шасси 8030-2-8: 2× MGMT (M-CC, резервируемые) + 8× слотов линейных карт",
 "линейки: M-4E (4×400G / 8×200G / 16×100G), M-16Y (16×10/25G) · <b>25,6 Тбит/с</b> · 19 Bpps",
 "4 слота БП: IDP1300M-01 AC/DC 1300Вт (FTB/BTF) · 5 вентиляторных слотов"]},
{fam:"IDSI2500", role:"промышленный · DIN-рейка", specs:[
 "8 GE + 2×1G SFP · IP40 · <b>−40…+75°C</b> · два резервируемых DC-входа (8T: 12–55В; 8P: 48–57В)",
 "L2 + G.8032 ERPS · PoE 120Вт (8P) · маршрутизации нет, аплинк только 1G"]}
],
rt: [
{fam:"IDR2000 / 2000E", role:"филиал / мелкий офис", specs:[
 "5 GE · 4G-модем 2 SIM (2000E — два 4G-модема, резерв операторов) · 1GHz Dual Core / 512 МБ",
 "2000 — пассивная, без вентилятора; 2000E — с вентилятором · <20Вт · −20…+60°C",
 "питание — внешний адаптер 12В (в комплекте); десктоп 145×100×38"]},
{fam:"IDR2100", role:"филиал с legacy-каналами", specs:[
 "8 GE LAN + 4 GE + 4×SFP + 2×10G SFP+ WAN · 1GHz Dual Core / 2 ГБ",
 "2 слота расширения: IDR-M-4E1 / 4CE1 / 4S / 4T · <35Вт · 0…+45°C · 1U",
 "питание: встроенный AC 100–240В + разъём внешнего 12В БП"]},
{fam:"IDR3100", role:"региональный узел", specs:[
 "24 GE LAN + 4 GE + 2×SFP + 2×10G SFP+ WAN · 1GHz Dual Core / 2 ГБ / 8 ГБ",
 "4 слота расширения: IDR-M-4E1 / 4CE1 / 4S / 4T · <86Вт · 0…+45°C · 1U",
 "два встроенных БП AC 100–240В — резерв без hot-swap",
 "RIP/OSPFv2/v3/BGP4+/IS-ISv6 · полный MPLS (LDP, VPLS, TE, FRR, L3VPN, 6PE) · SR-MPLS/SRv6 + Network Slicing"]},
{fam:"IDR4100", role:"PE-класс / агрегация", specs:[
 "24 GE LAN + 8×10G SFP+ + 8×25G SFP28 WAN · 2.3GHz 8 ядер / 16 ГБ / 8 ГБ",
 "4 слота расширения · <86Вт · 0…+45°C · 1U",
 "2 слота БП hot-swap · RIP/OSPF/BGP/IS-ISv6 · полный MPLS + SR-MPLS/SRv6"]},
{fam:"IDR — общие грабли", role:"перед тендером", specs:[
 "throughput / FIB IPv4/IPv6 в даташетах <b>не публикуются</b> (даташеты 09.2025) — запросить performance-письмо у iDATA",
 "RIPv1/v2/RIPng — <b>подтверждены</b> даташетами; PPTP, OpenVPN — не заявлены · NetFlow версии — уточнять · ГОСТ-сборка — уточнять",
 "трансиверы: в спецификации часто 1×, ТЗ требует 2–3× — проверять комплектность"]}
],
wf: [
{fam:"iDAPI-1130i", role:"точка доступа Wi-Fi 7", specs:[
 "Wi-Fi 7 (802.11a/b/g/n/ac/ax/be) · 2×2:2 MIMO · три радио: 2,4 / 5 / 6 ГГц",
 "скорости: 2,4 ГГц — до 688 Мбит/с · 5 ГГц — до 2,88 Гбит/с · 6 ГГц — до 5,77 Гбит/с",
 "порты: 2.5/5Г с PoE+ (802.3at) · GE · USB 3.0 · консоль RJ45 · <b>слот 10G SFP+</b>",
 "питание только PoE+ ≤25Вт · встроенные всенаправленные антенны · 0…+45°C · потолочный монтаж"]},
{fam:"iDAC6800", role:"контроллеры беспроводной сети", specs:[
 "до 448 / 1664 / 6656 AP (база 64, лицензии шагами +32/+64/+128)",
 "12 GE + 8×SFP28 (448/1664); 24 GE + 8×SFP+ + 8×SFP28 (6656) · ≤67Вт · 2× PSU hot-swap",
 "NAC-сервера в линейке нет — аутентификация на коммутаторах (802.1X/MAB)"]}
]};
