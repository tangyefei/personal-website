/* eslint-disable */
!(function (e, t) {
  typeof exports == 'object' && typeof module != 'undefined' ? module.exports = t() : typeof define == 'function' && define.amd ? define(t) : (e = e || self).Heti = t()
}(this, () => {
  'use strict'
  let e = typeof globalThis != 'undefined' ? globalThis : typeof window != 'undefined' ? window : typeof global != 'undefined' ? global : typeof self != 'undefined' ? self : {}
  let t = (function (e, t) {
    return e(t = {
      exports: {},
    }, t.exports), t.exports
  }((t) => {
    let n, i
    n = e, i = function () {
      let e = document
      let t = {}.hasOwnProperty

      function n() {
        return i.apply(null, arguments) || r.apply(null, arguments)
      }

      function i(e, t, i, o, s) {
        if (t && !t.nodeType && arguments.length <= 2)
          return !1
        let a; let d = typeof i == 'function'
        d && (a = i, i = function (e, t) {
          return a(e.text, t.startIndex)
        })
        let c = r(t, {
          find: e,
          wrap: d ? null : i,
          replace: d ? i : `$${o || '&'}`,
          prepMatch(e, t) {
            if (!e[0])
              throw 'findAndReplaceDOMText cannot handle zero-length matches'
            if (o > 0) {
              let n = e[o]
              e.index += e[0].indexOf(n), e[0] = n
            }
            return e.endIndex = e.index + e[0].length, e.startIndex = e.index, e.index = t, e
          },
          filterElements: s,
        })
        return n.revert = function () {
          return c.revert()
        }, !0
      }

      function r(e, t) {
        return new o(e, t)
      }

      function o(e, i) {
        i.offset || (i.offset = 0)
        let r = i.preset && n.PRESETS[i.preset]
        if (i.portionMode = i.portionMode || 'retain', r) {
          for (let o in r) t.call(r, o) && !t.call(i, o) && (i[o] = r[o])
        }
        this.node = e, this.options = i, this.prepMatch = i.prepMatch || this.prepMatch, this.reverts = [], this.matches = this.search(), this.matches.length && this.processMatches()
      }
      return n.NON_PROSE_ELEMENTS = {
        br: 1,
        hr: 1,
        script: 1,
        style: 1,
        img: 1,
        video: 1,
        audio: 1,
        canvas: 1,
        svg: 1,
        map: 1,
        object: 1,
        input: 1,
        textarea: 1,
        select: 1,
        option: 1,
        optgroup: 1,
        button: 1,
      }, n.NON_CONTIGUOUS_PROSE_ELEMENTS = {
        address: 1,
        article: 1,
        aside: 1,
        blockquote: 1,
        dd: 1,
        div: 1,
        dl: 1,
        fieldset: 1,
        figcaption: 1,
        figure: 1,
        footer: 1,
        form: 1,
        h1: 1,
        h2: 1,
        h3: 1,
        h4: 1,
        h5: 1,
        h6: 1,
        header: 1,
        hgroup: 1,
        hr: 1,
        main: 1,
        nav: 1,
        noscript: 1,
        ol: 1,
        output: 1,
        p: 1,
        pre: 1,
        section: 1,
        ul: 1,
        br: 1,
        li: 1,
        summary: 1,
        dt: 1,
        details: 1,
        rp: 1,
        rt: 1,
        rtc: 1,
        script: 1,
        style: 1,
        img: 1,
        video: 1,
        audio: 1,
        canvas: 1,
        svg: 1,
        map: 1,
        object: 1,
        input: 1,
        textarea: 1,
        select: 1,
        option: 1,
        optgroup: 1,
        button: 1,
        table: 1,
        tbody: 1,
        thead: 1,
        th: 1,
        tr: 1,
        td: 1,
        caption: 1,
        col: 1,
        tfoot: 1,
        colgroup: 1,
      }, n.NON_INLINE_PROSE = function (e) {
        return t.call(n.NON_CONTIGUOUS_PROSE_ELEMENTS, e.nodeName.toLowerCase())
      }, n.PRESETS = {
        prose: {
          forceContext: n.NON_INLINE_PROSE,
          filterElements(e) {
            return !t.call(n.NON_PROSE_ELEMENTS, e.nodeName.toLowerCase())
          },
        },
      }, n.Finder = o, o.prototype = {
        search() {
          let e; let t = 0
          let n = 0
          let i = this.options.find
          let r = this.getAggregateText()
          let o = []
          let s = this
          return i = typeof i == 'string' ? new RegExp(String(i).replace(/([.*+?^=!:${}()|[\]/\\])/g, '\\$1'), 'g') : i,
          (function r(a) {
            for (let d = 0, c = a.length; d < c; ++d) {
              let p = a[d]
              if (typeof p == 'string') {
                if (i.global) {
                  for (; e = i.exec(p);) o.push(s.prepMatch(e, t++, n))
                }
                else {
                  (e = p.match(i)) && o.push(s.prepMatch(e, 0, n))
                }
                n += p.length
              }
              else {
                r(p)
              }
            }
          }(r)), o
        },
        prepMatch(e, t, n) {
          if (!e[0])
            throw new Error('findAndReplaceDOMText cannot handle zero-length matches')
          return e.endIndex = n + e.index + e[0].length, e.startIndex = n + e.index, e.index = t, e
        },
        getAggregateText() {
          let e = this.options.filterElements
          let t = this.options.forceContext
          return (function n(i) {
            if (i.nodeType === Node.TEXT_NODE)
              return [i.data]
            if (e && !e(i))
              return []
            let r = ['']
            let o = 0
            if (i = i.firstChild) {
              do {
                if (i.nodeType !== Node.TEXT_NODE) {
                  let s = n(i)
                  t && i.nodeType === Node.ELEMENT_NODE && (!0 === t || t(i)) ? (r[++o] = s, r[++o] = '') : (typeof s[0] == 'string' && (r[o] += s.shift()), s.length && (r[++o] = s, r[++o] = ''))
                }
                else {
                  r[o] += i.data
                }
              } while (i = i.nextSibling)
            }
            return r
          }(this.node))
        },
        processMatches() {
          let e; let t; let n; let i = this.matches
          let r = this.node
          let o = this.options.filterElements
          let s = []
          let a = r
          let d = i.shift()
          let c = 0
          let p = 0
          let h = [r]
          e: for (;;) {
            if (a.nodeType === Node.TEXT_NODE && (!t && a.length + c >= d.endIndex
              ? t = {
                node: a,
                index: p++,
                text: a.data.substring(d.startIndex - c + this.options.offset, d.endIndex - c),
                indexInMatch: c === 0 ? 0 : c - d.startIndex,
                indexInNode: d.startIndex - c + this.options.offset,
                endIndexInNode: d.endIndex - c,
                isEnd: !0,
              }
              : e && s.push({
                node: a,
                index: p++,
                text: a.data,
                indexInMatch: c - d.startIndex,
                indexInNode: 0,
              }), !e && a.length + c > d.startIndex && (e = {
              node: a,
              index: p++,
              indexInMatch: 0,
              indexInNode: d.startIndex - c + this.options.offset,
              endIndexInNode: d.endIndex - c,
              text: a.data.substring(d.startIndex - c + this.options.offset, d.endIndex - c),
            }), c += a.data.length), n = a.nodeType === Node.ELEMENT_NODE && o && !o(a), e && t) {
              if (a = this.replaceMatch(d, e, s, t), c -= t.node.data.length - t.endIndexInNode, e = null, t = null, s = [], p = 0, !(d = i.shift()))
                break
            }
            else if (!n && (a.firstChild || a.nextSibling)) {
              a.firstChild ? (h.push(a), a = a.firstChild) : a = a.nextSibling
              continue
            }
            for (;;) {
              if (a.nextSibling) {
                a = a.nextSibling
                break
              }
              if ((a = h.pop()) === r)
                break e
            }
          }
        },
        revert() {
          for (let e = this.reverts.length; e--;) this.reverts[e]()
          this.reverts = []
        },
        prepareReplacementString(e, t, n) {
          let i = this.options.portionMode
          return i === 'first' && t.indexInMatch > 0
            ? ''
            : (e = e.replace(/\$(\d+|[&`'])/g, (e, t) => {
                let i
                switch (t) {
                  case '&':
                    i = n[0]
                    break
                  case '`':
                    i = n.input.substring(0, n.startIndex)
                    break
                  case '\'':
                    i = n.input.substring(n.endIndex)
                    break
                  default:
                    i = n[+t] || ''
                }
                return i
              }), i === 'first' ? e : t.isEnd ? e.substring(t.indexInMatch) : e.substring(t.indexInMatch, t.indexInMatch + t.text.length))
        },
        getPortionReplacementNode(t, n) {
          let i = this.options.replace || '$&'
          let r = this.options.wrap
          let o = this.options.wrapClass
          if (r && r.nodeType) {
            let s = e.createElement('div')
            s.innerHTML = r.outerHTML || (new XMLSerializer()).serializeToString(r), r = s.firstChild
          }
          if (typeof i == 'function')
            return (i = i(t, n)) && i.nodeType ? i : e.createTextNode(String(i))
          let a = typeof r == 'string' ? e.createElement(r) : r
          return a && o && (a.className = o), (i = e.createTextNode(this.prepareReplacementString(i, t, n))).data && a ? (a.appendChild(i), a) : i
        },
        replaceMatch(t, n, i, r) {
          let o; let s; let a = n.node
          let d = r.node
          if (a === d) {
            let c = a
            n.indexInNode > 0 && (o = e.createTextNode(c.data.substring(0, n.indexInNode)), c.parentNode.insertBefore(o, c))
            let p = this.getPortionReplacementNode(r, t)
            return c.parentNode.insertBefore(p, c), r.endIndexInNode < c.length && (s = e.createTextNode(c.data.substring(r.endIndexInNode)), c.parentNode.insertBefore(s, c)), c.parentNode.removeChild(c), this.reverts.push(() => {
              o === p.previousSibling && o.parentNode.removeChild(o), s === p.nextSibling && s.parentNode.removeChild(s), p.parentNode.replaceChild(c, p)
            }), p
          }
          o = e.createTextNode(a.data.substring(0, n.indexInNode)), s = e.createTextNode(d.data.substring(r.endIndexInNode))
          for (var h = this.getPortionReplacementNode(n, t), f = [], l = 0, u = i.length; l < u; ++l) {
            let g = i[l]
            let x = this.getPortionReplacementNode(g, t)
            g.node.parentNode.replaceChild(x, g.node), this.reverts.push(function (e, t) {
              return function () {
                t.parentNode.replaceChild(e.node, t)
              }
            }(g, x)), f.push(x)
          }
          let N = this.getPortionReplacementNode(r, t)
          return a.parentNode.insertBefore(o, a), a.parentNode.insertBefore(h, a), a.parentNode.removeChild(a), d.parentNode.insertBefore(N, d), d.parentNode.insertBefore(s, d), d.parentNode.removeChild(d), this.reverts.push(() => {
            o.parentNode.removeChild(o), h.parentNode.replaceChild(a, h), s.parentNode.removeChild(s), N.parentNode.replaceChild(d, N)
          }), N
        },
      }, n
    }, t.exports ? t.exports = i() : n.findAndReplaceDOMText = i()
  }))
  const n = {}.hasOwnProperty
  const i = Object.assign({}, t.NON_CONTIGUOUS_PROSE_ELEMENTS, {
    ins: 1,
    del: 1,
    s: 1,
    a: 1,
  })
  const r = Object.assign({}, t.NON_PROSE_ELEMENTS, {
    'pre': 1,
    'code': 1,
    'sup': 1,
    'sub': 1,
    'heti-spacing': 1,
    'heti-close': 1,
  })
  const o = '⺀-⻿⼀-⿟぀-ゟ゠-ヺー-ヿ㄀-ㄯ㈀-㋿㐀-䶿一-鿿豈-﫿'
  const s = 'A-Za-z-ÿͰ-Ͽ0-9`~!@#\\$%\\^&\\*\\(\\)-_=\\+\\[\\]{}\\\\\\|;:\'",<.>\\/\\?'
  const a = `(?<=[${o}])( *[${s}]+(?: +[${s}]+)* *)(?=[${o}])`
  const d = `([${s}]+(?: +[${s}]+)* *)(?=[${o}])`
  const c = `(?<=[${o}])( *[${s}]+(?: +[${s}]+)*)`
  const p = `(?:[${o}])( *[${s}]+(?: +[${s}]+)* *)(?=[${o}])`
  const h = `(?:[${o}])( *[${s}]+(?: +[${s}]+)*)`
  return class {
    constructor(e) {
      let t = !0
      try {
        new RegExp('(?<=d)d', '').test('')
      }
      catch (e) {
        e.name, t = !1
      }
      this.rootSelector = e || '.heti', this.REG_FULL = new RegExp(t ? a : p, 'g'), this.REG_START = new RegExp(d, 'g'), this.REG_END = new RegExp(t ? c : h, 'g'), this.offsetWidth = t ? 0 : 1, this.funcForceContext = function (e) {
        return n.call(i, e.nodeName.toLowerCase())
      }, this.funcFilterElements = function (e) {
        return !(e.classList && e.classList.contains('heti-skip') || n.call(r, e.nodeName.toLowerCase()))
      }
    }

    spacingElements(e) {
      for (let t of e) this.spacingElement(t)
    }

    spacingElement(e) {
      const n = {
        forceContext: this.funcForceContext,
        filterElements: this.funcFilterElements,
      }
      const i = function (e, t, n) {
        const i = document.createElement(e)
        return i.className = t, i.textContent = n.trim(), i
      }
      t(e, Object.assign({}, n, {
        find: this.REG_FULL,
        replace: e => i('heti-spacing', 'heti-spacing-start heti-spacing-end', e.text),
        offset: this.offsetWidth,
      })), t(e, Object.assign({}, n, {
        find: this.REG_START,
        replace: e => i('heti-spacing', 'heti-spacing-start', e.text),
      })), t(e, Object.assign({}, n, {
        find: this.REG_END,
        replace: e => i('heti-spacing', 'heti-spacing-end', e.text),
        offset: this.offsetWidth,
      })), t(e, Object.assign({}, n, {
        find: new RegExp('([。．，、：；！‼？⁇])(?=[「『（《〈【〖〔［｛」』）》〉】〗〕］｝])|([「『（《〈【〖〔［｛])(?=[「『（《〈【〖〔［｛])|([」』）》〉】〗〕］｝])(?=[。．，、：；！‼？⁇「『（《〈【〖〔［｛」』）》〉】〗〕］｝])', 'g'),
        replace: e => i('heti-adjacent', 'heti-adjacent-half', e.text),
        offset: this.offsetWidth,
      })), t(e, Object.assign({}, n, {
        find: new RegExp('([·・‧])(?=[「『（《〈【〖〔［｛])|([」』）》〉】〗〕］｝])(?=[·・‧])', 'g'),
        replace: e => i('heti-adjacent', 'heti-adjacent-quarter', e.text),
        offset: this.offsetWidth,
      })), t(e, Object.assign({}, n, {
        find: new RegExp('([。．，、：；！‼？⁇])(?=["\'' + '])|(["' + '])(?=[「『（《〈【〖〔［｛])', 'g'),
        replace: e => i('heti-adjacent', 'heti-adjacent-quarter', e.text),
        offset: this.offsetWidth,
      }))
    }

    autoSpacing() {
      const e = () => {
        const e = document.querySelectorAll(this.rootSelector)
        for (let t of e) this.spacingElement(t)
      }
      document.readyState === 'complete' ? setTimeout(e) : document.addEventListener('DOMContentLoaded', e)
    }
  }
}))
