const changeLocation = () => { var e = document.getElementById("00N5f00000SB1X0").value; let t = document.getElementById("meetingTypePhone"), l = document.getElementById("meetingTypePerson"); "San Bernardino" == e ? (t.checked = !1, l.checked = !0, t.disabled = !0, document.getElementById("personTxt").style.color = "black", document.getElementById("phoneTxt").style.color = "gray") : "National" == e ? (t.checked = !0, l.checked = !1, l.disabled = !0, document.getElementById("personTxt").style.color = "gray", document.getElementById("phoneTxt").style.color = "black") : (t.disabled = !1, l.disabled = !1, l.checked = !0) };