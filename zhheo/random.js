var posts=["2024/10/11/pwn-mips-ret/","2025/01/02/博客功能实现/","2024/09/15/御宛杯/","2024/08/14/计算机组成原理1/","2024/08/28/计算机组成原理2/","2024/08/23/AI/AI基础/","2024/10/01/AI/机器学习1/","2024/09/21/AI/机器学习环境搭建/","2024/08/23/Linux使用blog/Linux学习1/","2024/08/26/Linux使用blog/Linux磁盘清理/","2024/03/02/Linux使用blog/Ubuntu安装/","2024/04/13/Linux使用blog/linux花式技巧/","2024/02/05/前端系列blog/HTML基础/","2024/03/01/博客系列blog/博客功能探索/","2024/01/24/博客系列blog/博客优化/","2024/01/28/杂类blog/markdown语法/","2024/10/14/数学blog/数论基础/","2024/07/11/深入理解操作系统/CSAPP1/","2023/12/04/物理blog/数字电路/","2024/09/12/深入理解操作系统/CSAPP练习/","2023/12/07/物理blog/模拟电路/","2024/10/26/算法/算法动态规划/","2024/08/28/网络/计算机网络1/","2024/09/06/虚拟化/WSL2嵌套虚拟化/","2024/08/26/虚拟化/qemu使用/","2024/10/09/计算机底层blog/计算机组成原理/","2024/12/28/CTFblog/CRYPTO系列blog/LCG线性同余发生器/","2024/07/04/CTFblog/CRYPTO系列blog/AES加密/","2024/05/10/CTFblog/PWN系列blog/PWN-C语言函数分析/","2024/04/02/CTFblog/PWN系列blog/PWN技巧/","2024/03/18/CTFblog/PWN系列blog/PWN刷题/","2024/03/18/CTFblog/PWN系列blog/PWN题目部署/","2024/09/25/CTFblog/PWN系列blog/web-pwn之httpd/","2024/04/26/CTFblog/PWN系列blog/PWNdbg配置/","2024/10/19/电子数据取证/电子数据取证刷题1/","2024/07/02/CTFblog/REVERSE系列blog/逆向工具安装/","2024/06/18/CTFblog/PWN系列blog/关于PWN中的疑问/","2024/08/30/CTFblog/REVERSE系列blog/逆向基础题型/","2024/12/01/CTFblog/write up系列blog/2024福建省数安wp/","2024/03/09/CTFblog/write up系列blog/6th-心胜于物队-wp/","2024/09/25/CTFblog/write up系列blog/KPCTF-wp/","2024/06/29/CTFblog/write up系列blog/UIUCTF-wp/","2024/04/28/CTFblog/write up系列blog/XYCTF-write-up/","2024/07/06/CTFblog/write up系列blog/DownUnderCTF2024-wp/","2025/01/12/CTFblog/write up系列blog/ciscn2025/","2024/11/22/CTFblog/write up系列blog/2024极客大挑战wp/","2024/04/21/CTFblog/write up系列blog/帕鲁杯wp/","2024/09/15/CTFblog/write up系列blog/长城杯复现/","2024/10/03/CTFblog/write up系列blog/moeCTF-wp/","2024/06/12/CTFblog/write up系列blog/LitCTF-wp/","2024/06/24/CTFblog/write up系列blog/黑盾-wp/","2024/07/22/CTFblog/mobile/安卓逆向3/","2024/07/19/CTFblog/mobile/安卓逆向2/","2024/07/15/CTFblog/mobile/安卓逆向1/","2024/09/21/CTFblog/mobile/安卓逆向4/","2024/08/27/CTFblog/mobile/安卓逆向刷题/","2024/10/27/CTFblog/区块链/Web3介绍/","2024/12/30/数学blog/近世代数(抽象代数)/域论/","2024/12/16/数学blog/近世代数(抽象代数)/环论/","2024/11/26/数学blog/近世代数(抽象代数)/群论/","2024/03/28/数学blog/高等数学/高数下第九章/","2024/04/29/数学blog/高等数学/高数下第十一章/","2024/03/13/数学blog/高等数学/高数下第八章/","2025/01/12/编程语言系列blog/C++blog/std-unordered-map原理1/","2024/04/20/数学blog/高等数学/高数下第十章/","2024/09/29/编程语言系列blog/C语言blog/C语言位运算/","2024/09/13/编程语言系列blog/C语言blog/C语言指针/","2023/11/29/编程语言系列blog/C语言blog/C语言练习题/","2023/11/06/编程语言系列blog/C语言blog/指针草稿/","2023/11/05/编程语言系列blog/C语言blog/数组与指针/","2024/07/19/编程语言系列blog/JAVA/Java1/","2024/09/01/编程语言系列blog/Python系列blog/Python函数与模块/","2024/03/10/编程语言系列blog/Python系列blog/python基础语法/","2024/03/12/编程语言系列blog/Python系列blog/python基础语法3/","2024/03/11/编程语言系列blog/Python系列blog/python基础语法2/","2024/03/01/编程语言系列blog/Python系列blog/python安装/","2023/11/04/编程语言系列blog/Python系列blog/python数据类型1/","2023/11/28/编程语言系列blog/Python系列blog/python数据类型2/","2024/03/14/编程语言系列blog/Python系列blog/python数据类型3/","2024/10/09/编程语言系列blog/汇编语言blog/MIPS汇编/","2023/11/27/虚拟化/Docker系列blog/Docker1/","2024/04/18/编程语言系列blog/汇编语言blog/汇编语言/","2024/01/31/计算机底层blog/单片机系列blog/51单片机/","2023/11/27/虚拟化/Docker系列blog/Docker安装/","2024/05/14/计算机底层blog/单片机系列blog/STM32入门/","2024/11/02/编程语言系列blog/Rust/Rust学习1/","2024/11/19/编程语言系列blog/Rust/rust基础/","2025/01/12/CTFblog/CRYPTO系列blog/椭圆曲线加密系列/椭圆曲线加密/","2024/02/14/CTFblog/REVERSE系列blog/IDAblog/IDA-学习1/","2024/09/23/CTFblog/REVERSE系列blog/IDAblog/IDA-学习2/","2024/05/29/CTFblog/REVERSE系列blog/IDAblog/IDA插件/","2024/04/06/CTFblog/PWN系列blog/异架构系列/PWN异架构环境搭建/","2024/04/20/CTFblog/CRYPTO系列blog/RSA加密系列/CTF密码rsa加密/","2024/05/10/CTFblog/PWN系列blog/杂类/6PWN沙箱/","2024/07/08/CTFblog/PWN系列blog/杂类/PWN整数溢出/","2024/06/20/CTFblog/PWN系列blog/杂类/PWN伪随机数绕过/","2024/11/25/CTFblog/PWN系列blog/杂类/shellcode编写/","2024/10/27/CTFblog/区块链/ETH/智能合约/","2024/03/05/CTFblog/PWN系列blog/Linux_pwn/1.栈系列/1PWN入门/","2024/03/17/CTFblog/PWN系列blog/Linux_pwn/1.栈系列/2PWN基础/","2024/03/10/CTFblog/PWN系列blog/Linux_pwn/1.栈系列/3PWNtools使用/","2024/07/02/CTFblog/PWN系列blog/Linux_pwn/1.栈系列/4PWN-ret系列2/","2024/04/02/CTFblog/PWN系列blog/Linux_pwn/1.栈系列/5PWN-字符串格式化/","2024/06/02/CTFblog/PWN系列blog/Linux_pwn/2.堆系列/8PWN堆系列/","2024/05/31/CTFblog/PWN系列blog/Linux_pwn/2.堆系列/7PWN堆基础/","2024/03/22/CTFblog/PWN系列blog/Linux_pwn/1.栈系列/4PWN-ret系列1/","2024/09/04/CTFblog/PWN系列blog/Linux_pwn/2.堆系列/PWN堆UAF/","2024/09/11/CTFblog/PWN系列blog/Linux_pwn/2.堆系列/PWN堆double-free/","2025/01/15/CTFblog/PWN系列blog/Linux_pwn/2.堆系列/PWN堆house-of-einherjar/","2024/09/21/CTFblog/PWN系列blog/Linux_pwn/2.堆系列/PWN堆house-of-orange/","2025/01/14/CTFblog/PWN系列blog/Linux_pwn/2.堆系列/PWN堆house-of-spirit-2/","2025/01/13/CTFblog/PWN系列blog/Linux_pwn/2.堆系列/PWN堆house-of-sprirt/","2024/10/16/CTFblog/PWN系列blog/Linux_pwn/2.堆系列/PWN堆off-by系列/","2024/10/11/CTFblog/PWN系列blog/Linux_pwn/2.堆系列/PWN堆unlink/","2024/09/08/CTFblog/PWN系列blog/Linux_pwn/3.内核系列/内核pwn入门/","2024/10/15/CTFblog/PWN系列blog/Linux_pwn/2.堆系列/PWN堆unsorted-bin-attack1/","2024/08/13/CTFblog/PWN系列blog/Linux_pwn/3.内核系列/内核pwn环境搭建/","2025/01/14/CTFblog/PWN系列blog/Linux_pwn/2.堆系列/tcache-bin运行机制/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};