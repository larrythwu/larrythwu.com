import React, { Component } from "react";
import "./MiniOS.css";
import Bootloader from "./photos/bootloader.png"
import IDT from "./photos/IDT.png"
import HEAP from "./photos/heap.png"
import PAGING from "./photos/paging.png"
import FAT from "./photos/FAT.png"

export class MiniOS extends Component {
  render() {
    return (
      <div className="DescriptionContainer" style={{"padding-bottom": "10rem"}}>
        <h3>
          <img style={{"width": "3rem"}}src="https://camo.githubusercontent.com/31cfcbf671dc6ffb3bb73273368098624064cd7b1b98a9f17df95e7a667baad2/68747470733a2f2f75706c6f61642e77696b696d656469612e6f72672f77696b6970656469612f636f6d6d6f6e732f7468756d622f642f64612f474e4f4d455f5465726d696e616c5f69636f6e5f323031392e7376672f3132303070782d474e4f4d455f5465726d696e616c5f69636f6e5f323031392e7376672e706e67" />{" "}
          Mini OS
        </h3>

        <p>This project is inspired by Prof. Yuan Ding’s <a className="link" href="https://www.eecg.utoronto.ca/~yuan/teaching/ece344/">ECE344 Operating System</a> at the University of Toronto. In this course, we implemented core kernel features for the <a className="link" href="http://www.os161.org/">OS161</a> project. Having learned the foundations of kernel hacking, I want to challenge myself to build a fully functional kernel from the ground up. 
          So I started digging online and found this <a className="link" href="https://www.udemy.com/course/developing-a-multithreaded-kernel-from-scratch/">amazing tutorial</a> by Daniel McCarthy. Following Daniel's tutorial and other documentation online, I was able to successfully implement and execute my kernel on a QEMU x86 emulator. The following sections describe the key features of my kernel and some resources that I found to be helpful.</p>
      
        <p>Feel free to clone my repo and run it yourself…</p>
        <img alt="" src="https://img.icons8.com/fluent/144/000000/github.png" />{" "}
        <a className="link" href="https://github.com/larrythwu/myOS" target="_blank">
          Mini OS
        </a>

        <div class="card_container">
          <div class="card border-danger mb-3" style={{"width": "75rem"}}>
            <div class="card-header" style={{"font-weight": "bold"}}><a className="link" href="https://github.com/larrythwu/myOS/blob/main/src/boot/boot.asm">Bootloader</a></div>
            <div class="card-body">
              <p class="card-text">A bootloader is a tiny software that helps the CPU to load the operating system. It is stored in the first sector of the hard drive. 
              The CPU automatically reads the data contained in this first sector and processes it to the memory when the machine is powered up.</p>
            </div>
            <img src={Bootloader} style={{"width": "35rem"}}/>
            <p class="card-body">
              Internally the bootloader’s Master Boot Record contains the following submodules:
              <ol>
                <li><strong>Define the BIOS Parameter Block:</strong> BPB specifies the parameter of the hard drive, including the filesystem used and the physical geometry of the disk.</li>
                <li><strong>Loading the kernel from disk using BIOS:</strong> to read data from disk, we need to specify where to start reading, how much to read, and where to store the data in memory. We can then send an interrupt signal (int 0x13) and the BIOS will do its work.</li>
                <li><strong>Setup Global Descriptor Table:</strong> GDT is a data structure used by x86 processors to define the characteristics of the various memory areas used during program execution. Our GDT is structured as follows: </li>
                <ul>
                  <li>A null segment address 0x00000000</li>
                  <li>4GB code segment descriptor </li>
                  <li>4GB data segment descriptor </li>
                </ul>
                <li><strong>Switch to 32 bit protected mode:</strong> in protected mode, the system software is allowed to use features like virtual memory and paging.</li>
                <li><strong>Kernel entry:</strong> jump to the main function of our kernel program</li>
              </ol>
              Resources:
              <ul>
                <li>https://www.apriorit.com/dev-blog/66-develop-boot-loader </li>
                <li>https://dev.to/frosnerd/writing-my-own-boot-loader-3mld </li>
                <li>https://www.udemy.com/course/developing-a-multithreaded-kernel-from-scratch/learn/lecture/23967076#overview </li>
              </ul>
            </p>
        </div>

        <div class="card border-warning mb-3" style={{"width": "75rem"}}>
          <div class="card-header" style={{"font-weight": "bold"}}><a className="link" href="https://github.com/larrythwu/myOS/tree/main/src">Kernel</a></div>
          <div class="card-body">
            <p class="card-text">
              In this section, we set up the core kernel features such as: 
              <ol>
                <li><a className="bold link" href="https://github.com/larrythwu/myOS/tree/main/src/idt">Interrupt Descriptor Table:</a> a data structure used by x86 to determine the correct handler routine for interrupts and exceptions. The IDT consists of 256 interrupt vectors, the first 32 (0–31 or 0x00–0x1F) are used for processor exceptions, such as division by 0.</li>
                <img style={{"width": "35rem"}} src={IDT}/>
                <li><a className="bold link" href="https://github.com/larrythwu/myOS/tree/main/src/memory/heap">Heap Memory Allocation:</a> for simplicity, we used an allocation table composed of an array of 1-byte values each representing a (4k) page allocation in the heap. This implementation is subjected to a lot of fragmentation and latency issues, but it’s easy to write. Each entry in the table has the following property: </li>
                <img style={{"width": "35rem"}} src={HEAP}></img>
                <ul>
                  <li>HAS_N: if the next entry is part of the allocation</li>
                  <li>IS_FIRST: set if this is the first entry of our allocation </li>
                  <li>ET: specify if the page is allocated or free</li>
                </ul>
                <li><a className="bold link" href="https://github.com/larrythwu/myOS/tree/main/src/memory/paging">Virtual Memory:</a>  Paging is a system that allows each process to see a full virtual address space, without actually requiring the full amount of physical memory to be available or present. Paging is achieved through the use of the Memory Management Unit (MMU). On the x86, the MMU maps memory through a series of tables, two to be exact. 
                They are the paging directory (PD), and the paging table (PT). 
                <img style={{"width": "25rem"}} src={PAGING}></img><br/>
                We enable paging by loading the CR3 register with the address of the page directory and to set the paging (PG) and protection (PE) bits of CR0. https://en.wikipedia.org/wiki/Control_register#CR0 
                </li>
                <li><a className="bold link" href="https://github.com/larrythwu/myOS/tree/main/src/filesystem">FAT16 file system:</a> file allocation table is a filesystem developed by Microsoft, FAT uses clusters to represent data and subdirectories. The entire disk is divided into clusters, the unit used by the file allocation, and the FAT describes which clusters are used by which files.</li>
                <img src={FAT} style={{"width": "35rem"}}/>
                
              </ol>
              Resources:
              <ul>
                <li>https://wiki.osdev.org/Paging#32-bit_Paging  </li>
                <li>https://wiki.osdev.org/FAT#FAT_16 </li>
              </ul>
            </p>
          </div>
        </div>

        <div class="card border-info mb-3" style={{"width": "75rem", "margin-bottom": "20rem"}}>
          <div class="card-header" style={{"font-weight": "bold"}}><a className="link bold" href="https://github.com/larrythwu/myOS/tree/main/programs">Userland</a></div>
          <div class="card-body">
            <p class="card-text">The userland is the unprivileged CPU state, all the regular programs run here and they communicate with the kernel via interrupts and the standard library. We also develop a shell program that can be used to launch other executables. But before entering the userland, we still have a few things left to do in the kernel:
              <ol>
                <li><a className="bold link" href="https://github.com/larrythwu/myOS/tree/main/src/task">Defining a process:</a> we use kernel processes to host a user application, each process stores the following information:
                  <ul>
                    <li>the registers needed to run the user program </li>
                    <li>the paging directory </li>
                    <li>the next and prev task, so that the kernel can switch between the tasks in a round-robin fashion to achieve multi-tasking </li>
                    In our implementation, all the processes share the same file descriptor table, so all the opened files are shared which differs from the traditional Linux kernel. 
                  </ul>
                </li>

                <li><a className="link bold" href="https://github.com/larrythwu/myOS/blob/main/src/task/task.asm">Getting to the userland from the kernel:</a> to go from the kernel into the userland, we need to: 
                  <ol type="a">
                    <li>Setup user code and data segments</li>
                    <li>Setup the Task Switch Segment: it is used by the processor to get back to the kernel land when we have a system interrupt. It stores the kernel data segment descriptor and the value of the stack pointer used by the kernel</li>
                    <li>Use the “iret” instruction to change the processor’s privilege state</li>
                  </ol>
                </li>
              </ol>
              Our user-level programs: 
              <ul>
                <li><a className="link bold" href="https://github.com/larrythwu/myOS/tree/main/programs/stdlib">Standard library implementation:</a> we implemented the following stdlib functions that require system calls (int 0x80) to the kernel:
                  <ul>
                    <li>printf: print strings to the terminal </li>
                    <li>getkey: return the latest keypress in the keyboard buffer</li>
                    <li>malloc: return the virtual address of a heap allocation</li>
                    <li>free: deallocate a heap allocation </li>
                  </ul>
                </li>

                <li><a className="link bold" href="https://github.com/larrythwu/myOS/tree/main/programs/shell">Shell program:</a> the shell program is the default user program that will be run by the kernel, it can display the list of files that we mounted to the disk and launch the binary files as a separate task. Whenever a user program finishes executing, the control returns to the shell program.</li>
              </ul>
            </p>
          </div>
        </div>
        </div>

        <p style={{"margin-top": "3rem"}}><strong>List of software tools:</strong>
          <ul>
            <li>Cross-compiler: a cross-compiler is a compiler that runs on platform A (the host), but generates executables for platform B (the target). In our case, the host platform is your current operating system and the target platform is the operating system you are about to make. In this project, the target is the generic i686-elf-gcc.</li>
            <li>Qemu: QEMU is a free and open-source emulator that performs hardware virtualization. It is capable of emulating a wide variety of systems including ARM, x86, and RISC-V, among others. </li>
            <li>GDB: a source-level debugger that can be used with the Qemu emulator</li>
         </ul>
        </p>
      </div>
    );
  }
}

export default MiniOS;
